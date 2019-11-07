import { Promise } from "@app/common";
export interface IProductService {
    getProducts(): Promise;
}