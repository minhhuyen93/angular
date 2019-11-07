import { Component, Output, EventEmitter, Input } from "@angular/core";
import { BaseButton } from "./baseButton";

@Component({
    selector: "button-primary",
    template: `
        <base-button [cls]="'btn-primary'" [text]="text" (onClicked)="onClicked.emit($event)"></base-button>
    `
})
export class ButtonPrimary extends BaseButton {
}