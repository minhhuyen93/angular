import { IIoCBuilder } from "./iiocBuilder";
import { IIoCRegistration, IoCLifecycle } from "../../models/enums";
import {IoCSingletonBuilder} from "./iocsingletonBuilder";
import {IoCTransientBuilder} from "./ioctransientBuilder";
export class IoCBuilderFactory {
    public static create(registration: IIoCRegistration): IIoCBuilder {
        switch (registration.lifecycle) {
            case IoCLifecycle.Singleton:
                return new IoCSingletonBuilder(registration);

            case IoCLifecycle.Transient:
                return new IoCTransientBuilder(registration);
        }
    }
}