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
    public getProduct(productId: string): Promise {
        let url: string = String.format("/inventory/products/{0}", productId);
        let connector: IConnector = ConnectorFactory.create(ConnectorType.Json);
        return connector.get(this.resolveUrl(url));
    }
    public updateProduct(product: AddOrEditProductModel): Promise {
        let url: string = String.format("/inventory/products/{0}", product.id);
        let connector: IConnector = ConnectorFactory.create(ConnectorType.Json);
        return connector.post(this.resolveUrl(url), product);
    }
    public deleteProduct(productId: string): Promise {
        let url: string = String.format("/inventory/products/{0}", productId);
        let connector: IConnector = ConnectorFactory.create(ConnectorType.Json);
        return connector.delete(this.resolveUrl(url));
    }
}