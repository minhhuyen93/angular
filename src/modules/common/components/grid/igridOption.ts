import { Promise } from "../../models/promise";
export interface IGridOption {
    columns: Array<IGridColumn>;
    data: Promise;
}
export interface IGridColumn {
    field: string;
    title: string;
}