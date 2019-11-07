import { NgModule } from "@angular/core";
import { Page } from "./components/pages/page";
import { HttpModule } from "@angular/http";
import { PageCommand } from "./components/pages/pageCommand";
import { Buttons } from "./components/list/buttons";
import { CommonModule } from "@angular/common";
import { IconButton } from "./components/icons/iconButton";
import { PageContent } from "./components/pages/pageContent";
import { Grid } from "./components/grid/grid";
@NgModule({
    imports: [
        HttpModule,
        CommonModule
    ],
    declarations: [
        Page,
        PageCommand,
        PageContent,

        Buttons,
        IconButton,

        Grid
    ],
    exports: [
        Page,
        PageCommand,
        PageContent,

        Buttons,
        IconButton,

        Grid
    ]
})
export class AppCommonModule { }