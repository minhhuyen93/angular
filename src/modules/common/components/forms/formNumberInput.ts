import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "form-number-input",
    template: `
    <div class="form-group">
        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">{{title}}</label>
        <div class="col-md-6 col-sm-6 col-xs-12">
            <input type="text" numberInput name="first-name" class="form-control col-md-7 col-xs-12" [(ngModel)]="model" (change)="onModelChanged($event)">
        </div>
    </div>
    `
})
export class FormNumberInput {
    @Input() title: string;
    @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    public onModelChanged(): void {
        this.modelChange.emit(this.model);
    }
}