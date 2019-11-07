import { IEventManager } from "../services/ieventManager";
import { IoCNames, ValidationStatus } from "../models/enums";
import { ValidationResult } from "../models/ivalidationResult";
let decoratorHelper: any = {
    defineDecorator: defineDecorator
};
export default decoratorHelper;
function defineDecorator(target: any, propertyKey: string, message: string, isValid: (value: string) => boolean) {
    let _propertyKey: string = String.format("_{0}", propertyKey);
    function setFunc(value: any) {
        let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
        target[ValidationStatus.InvalidState] = target[ValidationStatus.InvalidState] || [];
        if (isValid(value) == false) {
            eventManager.publish(new ValidationResult(message, false));
            target[ValidationStatus.InvalidState].push(message);
        } else {
            eventManager.publish(new ValidationResult(message, true));
            target[ValidationStatus.InvalidState].removeItem(message);
        }
        target[_propertyKey] = value;
    }
    function getFunc() {
        return target[_propertyKey];
    }

    Object.defineProperty(target, propertyKey, {
        get: getFunc,
        set: setFunc
    });
}