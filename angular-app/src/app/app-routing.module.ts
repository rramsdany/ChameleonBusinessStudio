import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConfigurationComponent } from './admin-configuration/admin-configuration.component';
import {SplashPagePreviewComponent} from "./splash-page-preview/splash-page-preview.component";

const routes: Routes = [
  {path: 'admin-configuration', component: AdminConfigurationComponent},
  {path: 'splash-page-preview', component: SplashPagePreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
