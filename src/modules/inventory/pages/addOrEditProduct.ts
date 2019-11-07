import { Component } from "@angular/core";
import { BaseControl, IoCNames } from "@app/common";
import { required, minLength, maxLength, greaterThan } from "@app/common";
import { ProductValidationRules } from "../models/enums";
import { IProductService } from "../services/iproductService";
import { BaseModel } from "@app/common";
import { Router } from "@angular/router";
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
                        'inventory.addOrEdit.quantityWasGreaterThanZero',
                    ]"
                    [(model)]="model.quantity"
                    ></form-number-input>

                    <form-number-input [title]="i18n.inventory.addOrEdit.price"
                    [validations]="[
                        'inventory.addOrEdit.priceWasRequired',
                        'inventory.addOrEdit.priceWasGreaterThanZero',
                    ]"
                    [(model)]="model.price"
                    ></form-number-input>

                    <form-text-input [title]="i18n.inventory.addOrEdit.description"
                    [(model)]="model.description"
                    ></form-text-input>

                    <form-buttons>
                        <button-primary (onClicked)="onSaveClicked($event)" [text]="i18n.common.save"></button-primary>
                        <button-default (onClicked)="onCancleClicked($event)" [text]="i18n.common.cancle"></button-default>
                    </form-buttons>

                </form-horizontal>
            </page-content>
        </page>
    `
})
export class AddOrEditProduct extends BaseControl {
    public model: AddOrEditProductModel;
    private router: Router;
    constructor(router: Router) {
        super();
        this.router = router;
        this.model = new AddOrEditProductModel();
    }
    public onSaveClicked(): void {
        if (!this.model.isValid()) { return; }
        let productService: IProductService = window.ioc.resolve(IoCNames.IProductService);
        let self = this;
        productService.addProduct(this.model).then(() => {
            self.router.navigate(["/inventory/products"]);
        });
    }
}
export class AddOrEditProductModel extends BaseModel {
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
}