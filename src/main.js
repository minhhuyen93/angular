System.register(["@angular/platform-browser-dynamic", "./appModule", "@app/common", "./app/config/ioc"], function (exports_1, context_1) {
    "use strict";
    var platform_browser_dynamic_1, appModule_1, common_1, ioc_1, iocContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (appModule_1_1) {
                appModule_1 = appModule_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ioc_1_1) {
                ioc_1 = ioc_1_1;
            }
        ],
        execute: function () {
            iocContainer = common_1.IoCFactory.create();
            iocContainer.import(ioc_1.default);
            window.ioc = iocContainer;
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(appModule_1.AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map