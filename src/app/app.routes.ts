import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { StoreComponent } from './modules/store/store.component';
import { ProductComponent } from './modules/product/product.component';

export const routes: Routes = [
    {path:"", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: InicioComponent},
    { path: "store", component: StoreComponent},
    { path: "product", component: ProductComponent}
];
