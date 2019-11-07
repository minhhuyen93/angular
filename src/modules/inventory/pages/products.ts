import { Component } from "@angular/core";
import { BaseControl, IButtonModel, IoCNames } from "@app/common";
import { IGridOption } from "src/modules/common/components/grid/igridOption";
import { PromiseFactory } from "src/modules/common/models/promise";
import { IProductService } from "../services/iproductService";
import { Router } from "@angular/router";
@Component({
    template: `
        <page [title]="i18n.inventory.products.title">
            <page-command>
                <buttons [items]="model.buttons"></buttons>
            </page-command>
            <page-content>
                <grid [options]="model.options"></grid>
            </page-content>
        </page>
    `
})
export class Products extends BaseControl {
    public model: ProductsModel;
    private router: Router;
    constructor(router: Router) {
        super();
        this.router = router;
        this.model = new ProductsModel(this.i18n);
        let service: IProductService = window.ioc.resolve(IoCNames.IProductService);
        let self = this;
        service.getProducts().then((response: Array<ProductsModel>) => {
            self.model.options.data.resolve(response);
        });
        this.model.addButton(this.i18n.inventory.products.addNew, "fa-plus", () => {
            self.onAddNewProductClicked();
        });
    }
    public onAddNewProductClicked(): void {
        this.router.navigate(["/inventory/products/addNew"]);
    }
}
class ProductsModel {
    public buttons: Array<IButtonModel> = [];
    public options: IGridOption;
    private i18n: any;
    constructor(i18n: any) {
        this.i18n = i18n;
        this.options = {
            data: PromiseFactory.create(),
            columns: [
                { title: this.i18n.inventory.products.name, field: "name" },
                { title: this.i18n.inventory.products.quantity, field: "quantity" },
                { title: this.i18n.inventory.products.price, field: "price" },
                { title: this.i18n.inventory.products.description, field: "description" },
            ]
        };
    }
    public addButton(title: string, cls: string, handler: (event?: any) => void): void {
        this.buttons.push({
            text: title,
            cls: cls,
            onClicked: handler
        });
    }
}