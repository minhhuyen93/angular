import { IIoCRegistration, IoCNames, IoCLifecycle, ResourceService, AppSettingService } from "@app/common";
import { ProductService } from "../../modules/inventory/services/productService";
import { EventManager } from "@app/common";
let registrations: Array<IIoCRegistration> = [
    { name: IoCNames.IResourceService, lifecycle: IoCLifecycle.Singleton, instanceOf: ResourceService },
    { name: IoCNames.IProductService, lifecycle: IoCLifecycle.Singleton, instanceOf: ProductService },
    { name: IoCNames.IAppSettingService, lifecycle: IoCLifecycle.Singleton, instanceOf: AppSettingService },
    { name: IoCNames.IEventManager, lifecycle: IoCLifecycle.Singleton, instanceOf: EventManager },
];
export default registrations;