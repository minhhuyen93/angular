import { NgModule, Injector, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutes } from "./appRoutes";
import { Layout } from "./layout";
import { IoCNames, IResourceService } from "@app/common";
import { IAppSettingService } from "./modules/common/services/iappSettingService";
import appConfig from "./app/config/appConfig";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        CommonModule,
        AppRoutes,
    ],
    declarations: [Layout],
    entryComponents: [Layout]
})
export class AppModule {
    private appRef: ApplicationRef;
    constructor(injector: Injector, appRef: ApplicationRef) {
        window.ioc.setInjector(injector);
        this.appRef = appRef;
        let appSettingService :IAppSettingService = window.ioc.resolve(IoCNames.IAppSettingService);
        appSettingService.setConfig(appConfig);
    }
    public ngDoBootstrap(): void {
        let locales: Array<string> = ['inventory', 'common'];
        let resourceService: IResourceService = window.ioc.resolve(IoCNames.IResourceService);
        let self = this;
        resourceService.loadLocales(locales).then(() => {
            self.appRef.bootstrap(Layout);
        });
    }
}