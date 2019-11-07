import { Directive, Input, AfterContentInit, ElementRef } from "@angular/core";
import { IoCNames } from "../models/enums";
import { IEventManager } from "../services/ieventManager";
import { IValidationResult } from "../models/ivalidationResult";
import { ValidationMessage } from "../models/enums";
import { BaseControl } from "../components/baseControl";
@Directive({
    selector: "[validations]"
})
export class Validations extends BaseControl implements AfterContentInit {
    @Input("validations") messages: Array<string> = [];
    private ui: ElementRef;
    constructor(ui: ElementRef) {
        super();
        this.ui = ui;
    }
    public ngAfterContentInit(): void {
        let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
        let self = this;
        this.messages.forEach((message: string) => {
            eventManager.subscribe(message, (validationResult: IValidationResult) => {
                self.onTrigger(validationResult);
            });
        });
    }
    private onTrigger(validationResult: IValidationResult): void {
        if (validationResult.isValid == true) {
            this.ui.nativeElement.classList.remove(ValidationMessage.InvalidState);
            this.ui.nativeElement.title = "";
        }
        else {
            this.ui.nativeElement.classList.add(ValidationMessage.InvalidState);
            this.ui.nativeElement.title = this.i18Helper.resolve(validationResult.messageKey);
        }
    }
}