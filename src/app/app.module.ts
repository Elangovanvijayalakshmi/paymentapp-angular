import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { TableComponent } from '../components/table/table.component';
import { FeatureCardComponent } from '../components/feature-card/feature-card.component';
import { FeatureCard1Component } from '../components/feature-card-1/feature-card-1.component';
import { FeatureCard2Component } from '../components/feature-card-2/feature-card-2.component';
import { FeatureCard3Component } from '../components/feature-card-3/feature-card-3.component';
import { FeatureCard4Component } from '../components/feature-card-4/feature-card-4.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        TableComponent,
        FeatureCardComponent,
        FeatureCard1Component,
        FeatureCard2Component,
        FeatureCard3Component,
        FeatureCard4Component
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };