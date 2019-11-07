import { IValidationResult } from "../models/ivalidationResult";

export interface IEventManager {
    subscribe(message: string, handler: (event?: any) => void): void;
    publish(validationResult: IValidationResult): void;
}