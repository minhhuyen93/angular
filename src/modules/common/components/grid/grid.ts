import { Component, Input, DoCheck, AfterViewInit } from "@angular/core";
import guidHelper from "../../helpers/guidHelper";
import { IGridOption, IGridColumn, IGridAction } from "./igridOption";
import { Promise } from "../../models/promise";
@Component({
    selector: "grid",
    template: `
        <table id="{{id}}" width="100%"></table>
    `
})
export class Grid implements DoCheck, AfterViewInit {
    @Input() options: IGridOption;
    public id: string;
    private grid: any;
    constructor() {
        this.id = guidHelper.create();
    }
    public ngDoCheck(): void {
        if (window.jQuery(String.format("#{0}", this.id)).length <= 0) { return; }
        if (!!this.grid) { return; }
        let actions: Array<IGridAction> = this.options.actions || [];
        actions.forEach((action: IGridAction) => {
            action.id = guidHelper.create();
        });
        this.grid = window.jQuery(String.format("#{0}", this.id)).DataTable({
            columns: this.renderColumns()
        });
    }
    private bindingActions(): void {
        let self = this;
        window.jQuery(".grid-item-action").on("click", function () {
            let actionId: string = window.jQuery(this).attr("item-id");
            let action: IGridAction = self.options.actions.firstOrDefault((item: IGridAction) => {
                return item.id == actionId;
            });
            let dataItem: any = self.grid.row(window.jQuery(this).parents("tr")).data();
            if (!action || !action.handler) { return; }
            action.handler(dataItem);
        });
    }
    public ngAfterViewInit(): void {
        let self = this;
        this.options.data.subscribe((def: Promise) => {
            self.renderDataTable(def.data || []);
        });
    }
    private renderDataTable(data: Array<any>): void {
        if (!this.grid || !this.grid.rows) { return; }
        this.grid.clear();
        this.grid.rows.add(data).draw(false);
        window.setTimeout(() => {
            this.bindingActions();
        }, 100);
    }
    private renderColumns(): Array<any> {
        let columns: Array<any> = [];
        if (!this.options.columns) { return; }
        this.options.columns.forEach((item: IGridColumn) => {
            columns.push({
                data: item.field,
                title: item.title
            });
        });
        let self = this;
        if (this.options.actions && this.options.actions.length > 0) {
            columns.push({
                data: "",
                title: "",
                render: (val: any, editor: any, dataItem: any) => {
                    let html: string = self.getGridActionAsHtml(self.options.actions, dataItem);
                    return html;
                }
            });
        }
        return columns;
    }
    private getGridActionAsHtml(actions: Array<IGridAction>, dataItem: any): string {
        let html: string = "";
        actions.forEach((action: IGridAction) => {
            html = String.format("{0}<button class='grid-item-action' item-id='{1}'>{2}</button>", html, action.id, action.text);
        });
        return html;
    }
}