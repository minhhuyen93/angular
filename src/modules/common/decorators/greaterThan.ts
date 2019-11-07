import decoratorHelper from "../helpers/decoratorHelper"

export function greaterThan(messageKey: string, greaterNumber: number) {
    return function (target: any, propertyKey: string) {
        return decoratorHelper.defineDecorator(target, propertyKey, messageKey, isValid);
        function isValid(value: string): boolean {
            return !!value && parseInt(value) > greaterNumber;
        }
    }
}