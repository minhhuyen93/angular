import { IoCNames, IConfigDomain } from "../models/enums";
import { IAppSettingService } from "./iappSettingService";
export class BaseService {
    private domainUrl: string;
    constructor(domainKey: string) {
        let appSettingService: IAppSettingService = window.ioc.resolve(IoCNames.IAppSettingService);
        this.domainUrl = appSettingService.getConfig().domains.firstOrDefault((item: IConfigDomain) => {
            return item.key == domainKey;
        }).value;
    }
    public resolveUrl(url: string): string {
        return this.domainUrl + url;
    }
}