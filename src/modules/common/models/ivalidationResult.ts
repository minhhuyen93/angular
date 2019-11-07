export interface IValidationResult {
    isValid: boolean;
    messageKey: string;
}
export class ValidationResult implements IValidationResult {
    public isValid: boolean;
    public messageKey: string;
    constructor(messageKey: string, isValid: boolean) {
        this.messageKey = messageKey;
        this.isValid = isValid;
    }
}