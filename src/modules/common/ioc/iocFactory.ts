import { IIoCRegistration } from "../models/enums";
import { IIoCBuilder } from "./builder/iiocBuilder";
import { IoCBuilderFactory } from "./builder/iocBuilderFactory";
import { Injector } from "@angular/core";
export class IoCFactory {
    public static create(): IIoCContainer {
        return new IoCContainer();
    }
}
class IoCContainer implements IIoCContainer {
    private registrations: Array<IIoCRegistration> = [];
    private injector: Injector;
    public import(registrations: Array<IIoCRegistration>): void {
        this.registrations = registrations;
    }
    public resolve(name: string): any {
        if (typeof name != "string") {
            return this.getAngularType(name);
        }

        let registration: IIoCRegistration = this.registrations.firstOrDefault((item: IIoCRegistration) => {
            return item.name == name;
        });
        if (!registration) {
            throw ("invealid registration");
        }
        let iocBuilder: IIoCBuilder = IoCBuilderFactory.create(registration);
        return iocBuilder.build();
    }
    public setInjector(injector: Injector): void {
        this.injector = injector;
    }
    private getAngularType(type: any): any {
        return this.injector.get(type);
    }
}