import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {Products} from "./pages/products";
let routes: Routes = [
    {path: "", redirectTo: "products", pathMatch: "full"},
    {path: "products", component: Products}
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        Products
    ]
})
export class InventoryRoutes { }