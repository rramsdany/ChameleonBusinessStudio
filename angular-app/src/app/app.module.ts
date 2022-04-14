import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { SplashComponent } from './splash/splash.component';
import { AdminConfigurationComponent } from './admin-configuration/admin-configuration.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { LayoutModule } from '@angular/cdk/layout';
import {MatTabsModule} from "@angular/material/tabs";
import { SplashPagePreviewComponent } from './splash-page-preview/splash-page-preview.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidenavAdminConfigComponent } from './sidenav-admin-config/sidenav-admin-config.component';
import { ContainerAdminConfigComponent } from './container-admin-config/container-admin-config.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SplashComponent,
    AdminConfigurationComponent,
    SplashComponent,
    SplashPagePreviewComponent,
    SidenavAdminConfigComponent,
    ContainerAdminConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'admin-configuration', component: AdminConfigurationComponent},
      {path: 'splash-page-preview', component: SplashPagePreviewComponent},
    ]),
    // * MATERIAL IMPORTS
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    LayoutModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
