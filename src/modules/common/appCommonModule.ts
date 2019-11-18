import { NgModule } from "@angular/core";
import { Page } from "./components/pages/page";
import { HttpModule } from "@angular/http";
import { PageCommand } from "./components/pages/pageCommand";
import { Buttons } from "./components/list/buttons";
import { CommonModule } from "@angular/common";
import { IconButton } from "./components/icons/iconButton";
import { PageContent } from "./components/pages/pageContent";
import { Grid } from "./components/grid/grid";
import { FormHorizontal } from "./components/forms/formHorizontal";
import { FormTextInput } from "./components/forms/formTextInput";
import { Validations } from "./directives/validations";
import { FormNumberInput } from "./components/forms/formNumberInput";
import { NumberInput } from "./directives/numberInput";
import { FormButtons } from "./components/forms/formButtons";
import { ButtonPrimary } from "./components/buttons/buttonPrimary";
import { BaseButton } from "./components/buttons/baseButton";
import { ButtonDefault } from "./components/buttons/buttonDefault";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        Page,
        PageCommand,
        PageContent,

        Buttons,
        IconButton,

        Grid,

        FormHorizontal,
        FormTextInput,
        FormNumberInput,
        FormButtons,


        Validations,
        NumberInput,

        ButtonPrimary,
        BaseButton,
        ButtonDefault
    ],
    exports: [
        Page,
        PageCommand,
        PageContent,

        Buttons,
        IconButton,

        Grid,

        FormHorizontal,
        FormTextInput,
        FormNumberInput,
        FormButtons,

        Validations,
        NumberInput,


        ButtonPrimary,
        BaseButton,
        ButtonDefault
    ]
})
export class AppCommonModule { }