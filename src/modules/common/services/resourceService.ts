import { IResourceService } from "./iresourceService";
import { Promise, PromiseFactory } from "../models/promise";
import { LanguageCode, ConnectorType } from "../models/enums";
import { IConnector } from "../connector/iconnector";
import { ConnectorFactory } from "../connector/connectorFactory";
export class ResourceService implements IResourceService {
    private locales: any = {};
    private languageCode: LanguageCode = LanguageCode.EN;
    public getLocales(): any {
        return this.locales;
    }
    public loadLocales(locales: Array<string>): Promise {
        let def: Promise = PromiseFactory.create();
        locales = locales || [];
        let self = this;
        locales.forEach((item: string) => {
            def.resolveAll(self.getLocaleByName(item));
        });
        return def;
    }
    private getLocaleByName(name: string): Promise {
        let def: Promise = PromiseFactory.create();
        let url: string = String.format("resources/locales/{0}.{1}.json", name, this.languageCode);
        let iconnector: IConnector = ConnectorFactory.create(ConnectorType.Json);
        let self = this;
        iconnector.get(url).then((data: any) => {
            self.locales[name] = data;
            def.resolve();
        });
        return def;
    }
    public resolve(key: string): string {
        let subKeys = key.split(".");
        let result = this.locales;
        subKeys.forEach((sub: string) => {
            result = result[sub];
        });
        return result;
    }
}