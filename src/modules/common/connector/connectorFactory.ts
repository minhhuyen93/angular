import { IConnector } from "./iconnector";
import { ConnectorType } from "../models/enums";
import { Promise, PromiseFactory } from "../models/promise";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
export class ConnectorFactory {
    public static create(type: ConnectorType): IConnector {
        switch (type) {
            case ConnectorType.Json:
            default:
                return new JsonConnector();
        }
    }
}
class JsonConnector implements IConnector {
    public get(url: string): Promise {
        let def: Promise = PromiseFactory.create();
        let http: Http = window.ioc.resolve(Http);
        let self = this;
        http.get(url).map((response: any) => {
            return response.json();
        }).subscribe((data: any) => {
            self.processResponse(def, data);
        });
        return def;
    }
    private processResponse(def: Promise, response: any): void {
        def.resolve(response);
    }
}