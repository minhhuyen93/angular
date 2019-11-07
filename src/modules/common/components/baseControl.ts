import { IResourceService } from "../services/iresourceService";
import { IoCNames } from "../models/enums";
export class BaseControl {
    public i18n: any = {};
    public i18Helper: any;
    constructor() {
        let resourceService: IResourceService = window.ioc.resolve(IoCNames.IResourceService);
        this.i18n = resourceService.getLocales();
        this.i18Helper = resourceService;
    }
}