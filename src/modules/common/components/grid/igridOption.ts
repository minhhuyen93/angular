import { Promise } from "../../models/promise";
export interface IGridOption {
    columns: Array<IGridColumn>;
    data: Promise;
    actions: Array<IGridAction>;
}
export interface IGridColumn {
    field: string;
    title: string;
}
export interface IGridAction {
    //isValid?: (dataItem: any) => boolean;
    id?: string;
    text: string;
    handler: (item: any) => void;
}