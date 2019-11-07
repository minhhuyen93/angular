import { IProductService } from "./iproductService";
import { ConnectorFactory } from "src/modules/common/connector/connectorFactory";
import { ConnectorType, Promise, IConnector, BaseService } from "@app/common";
import { ProductConts } from "../models/enums";
import { AddOrEditProductModel } from "../pages/addOrEditProduct";
export class ProductService extends BaseService implements IProductService {
    constructor() {
        super(ProductConts.ApiKey);
    }
    public getProducts(): Promise {
        let url: string = "/inventory/products";
        let connector: IConnector = ConnectorFactory.create(ConnectorType.Json);
        return connector.get(this.resolveUrl(url));
    }
    public addProduct(item: AddOrEditProductModel): Promise {
        let url: string = "/inventory/products";
        let connector: IConnector = ConnectorFactory.create(ConnectorType.Json);
        return connector.post(this.resolveUrl(url), item);
    }
}