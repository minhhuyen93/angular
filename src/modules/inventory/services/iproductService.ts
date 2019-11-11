import { Promise } from "@app/common";
import { AddOrEditProductModel } from "../pages/addOrEditProduct";
export interface IProductService {
    getProducts(): Promise;
    addProduct(item: AddOrEditProductModel): Promise;
    getProduct(productId: string): Promise;
    updateProduct(product: AddOrEditProductModel): Promise;
    deleteProduct(productId: string): Promise;
}