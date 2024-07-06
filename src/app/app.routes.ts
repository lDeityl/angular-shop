import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BasketComponent } from './components/basket/basket.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: BaseComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'busket', component: BasketComponent },


    { path: "**", redirectTo: '', component: BaseComponent },
];