import { Component } from "@angular/core";
import { BaseControl, IoCNames } from "@app/common";
import { required, minLength, maxLength, greaterThan } from "@app/common";
import { ProductValidationRules } from "../models/enums";
import { IProductService } from "../services/iproductService";
import { BaseModel } from "@app/common";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    template: `
        <page [title]="i18n.inventory.addOrEdit.title">
            <page-content>
                <form-horizontal>
                    <form-text-input [title]="i18n.inventory.addOrEdit.name"
                    [validations]="[
                        'inventory.addOrEdit.nameWasRequired',
                        'inventory.addOrEdit.nameWasUnderMinLength',
                        'inventory.addOrEdit.nameWasExceedMaxLength'
                    ]"
                    [(model)]="model.name"
                    ></form-text-input>

                    <form-number-input [title]="i18n.inventory.addOrEdit.quantity"
                    [validations]="[
                        'inventory.addOrEdit.quantityWasRequired',
                        'inventory.addOrEdit.quantityWasGreaterThanZero'
                    ]"
                    [(model)]="model.quantity"
                    ></form-number-input>

                    <form-number-input [title]="i18n.inventory.addOrEdit.price"
                    [validations]="[
                        'inventory.addOrEdit.priceWasRequired',
                        'inventory.addOrEdit.priceWasGreaterThanZero'
                    ]"
                    [(model)]="model.price"
                    ></form-number-input>

                    <form-text-input [title]="i18n.inventory.addOrEdit.description"
                    [(model)]="model.description"
                    ></form-text-input>

                    <form-buttons>
                        <button-primary (onClicked)="onSaveClicked($event)" [text]="i18n.common.save"></button-primary>
                        <button-default (onClicked)="onCancelClicked($event)" [text]="i18n.common.cancel"></button-default>
                    </form-buttons>

                </form-horizontal>
            </page-content>
        </page>
    `
})
export class AddOrEditProduct extends BaseControl {
    public model: AddOrEditProductModel;
    private router: Router;
    private route: ActivatedRoute;
    private editProductId: string;
    constructor(router: Router, route: ActivatedRoute) {
        super();
        this.router = router;
        this.route = route;
        this.model = new AddOrEditProductModel();
        this.editProductId = route.snapshot.params["id"];
        if (this.editProductId != null) {
            let productService: IProductService = window.ioc.resolve(IoCNames.IProductService);
            let self = this;
            productService.getProduct(this.editProductId).then((product: any) => {
                self.model.import(product);
            });
        } else {
            this.model.reload();
        }
    }
    public onSaveClicked(): void {
        if (!this.model.isValid()) { return; }
        let productService: IProductService = window.ioc.resolve(IoCNames.IProductService);
        let self = this;
        if (!!this.editProductId) {
            productService.updateProduct(this.model).then(() => {
                self.router.navigate(["/inventory/products"]);
            });
            return;
        }
        productService.addProduct(this.model).then(() => {
            self.router.navigate(["/inventory/products"]);
        });
    }
    public onCancelClicked(): void {
        this.router.navigate(["/inventory/products"]);
    }
}
export class AddOrEditProductModel extends BaseModel {
    public id: number;
    @required("inventory.addOrEdit.nameWasRequired")
    @minLength("inventory.addOrEdit.nameWasUnderMinLength", ProductValidationRules.MinLength)
    @maxLength("inventory.addOrEdit.nameWasExceedMaxLength", ProductValidationRules.MaxLength)
    public name: string;
    @required("inventory.addOrEdit.quantityWasRequired")
    @greaterThan("inventory.addOrEdit.quantityWasGreaterThanZero", ProductValidationRules.GreaterThanZero)
    public quantity: number;
    @required("inventory.addOrEdit.priceWasRequired")
    @greaterThan("inventory.addOrEdit.priceWasGreaterThanZero", ProductValidationRules.GreaterThanZero)
    public price: number;
    public description: string;
    public import(product: any): void {
        this.id = product.id;
        this.name = product.name;
        this.quantity = product.quantity;
        this.price = product.price;
        this.description = product.description;
    }
    public reload(): void {
        this.name = '';
        this.quantity = 0;
        this.price = 0;
        this.description = '';
    }
}