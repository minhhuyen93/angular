import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: "[numberInput]"
})
export class NumberInput {
    private preValue: string = '';
    private ui: ElementRef;
    private specialKey: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];
    private signedKey: string = '-';
    private intergerRegex = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        this.preValue = this.ui.nativeElement.value;
    }
    @HostListener("keyup", ["$event"])
    onKeyUp(event: KeyboardEvent) {
        if (this.specialKey.indexOf(event.key) !== -1) { return; }
        let current: string = this.ui.nativeElement.value as string;
        if (this.signedKey == event.key && current.lastIndexOf(this.signedKey) === 0) {
            return;
        }
        if (this.preValue && !String(this.preValue).match(this.intergerRegex)) {
            this.ui.nativeElement.value = '';
            return;
        }
        if (current && !String(current).match(this.intergerRegex)) {
            this.ui.nativeElement.value = this.preValue;
        }
    }
}