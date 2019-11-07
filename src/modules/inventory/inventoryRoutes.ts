import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Products } from "./pages/products";
import { AddOrEditProduct } from "./pages/addOrEditProduct";
let routes: Routes = [
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "products", component: Products },
    { path: "products/addNew", component: AddOrEditProduct }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        Products,
        AddOrEditProduct
    ]
})
export class InventoryRoutes { }