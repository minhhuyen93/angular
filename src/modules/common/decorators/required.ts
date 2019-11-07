import { ValidationStatus } from "../models/enums";
import decoratorHelper from "../helpers/decoratorHelper";
export function required(message: string) {

    return function (target: any, propertyKey: string) {
        target[ValidationStatus.InvalidState] = target[ValidationStatus.InvalidState] || [];
        target[ValidationStatus.InvalidState].push(message);
        return decoratorHelper.defineDecorator(target, propertyKey, message, isValid);
        function isValid(value: any): boolean {
            return !!value;
        }
    }
}