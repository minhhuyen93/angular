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
    IAppSettingService = "IAppSettingService",
    IEventManager = "IEventManager"
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
export interface IButtonModel {
    text: string;
    cls: string;
    onClicked: (event?: any) => void;
}
export interface IConfigModel {
    domains: Array<IConfigDomain>;
}
export interface IConfigDomain {
    key: string;
    value: string;
}
export enum ValidationMessage {
    InvalidState = "invalid-state"
}
export enum ValidationStatus {
    InvalidState = "invalid"
}