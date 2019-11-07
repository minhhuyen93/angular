export interface IIoCRegistration {
    name: string;
    lifecycle: IoCLifecycle;
    instance?: any;
    instanceOf: any;
}

export enum IoCLifecycle {
    Singleton = 1,
    Transient = 2
}
export enum IoCNames {
    IResourceService = "IResourceService",
    IProductService = "IProductService",
    IAppSettingService = "IAppSettingService"
}
export enum PromiseStatus {
    Subscribe = 1,
    Success = 2
}
export enum LanguageCode {
    EN = "en"
}
export enum ConnectorType {
    Json = "json"
}
export interface IButtonModel { }
export interface IConfigModel {
    domains: Array<IConfigDomain>;
}
export interface IConfigDomain {
    key: string;
    value: string;
}