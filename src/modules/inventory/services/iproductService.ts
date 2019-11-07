import { Promise } from "@app/common";
import { AddOrEditProductModel } from "../pages/addOrEditProduct";
export interface IProductService {
    getProducts(): Promise;
    addProduct(item: AddOrEditProductModel): Promise;
}