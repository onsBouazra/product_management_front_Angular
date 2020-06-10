import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import {SidebarComponent} from './home/sidebar/sidebar.component';
import {ContainerComponent} from './home/container/container.component';
import {CategorieComponent} from './categorie/categorie.component';
import {HttpClientModule} from '@angular/common/http';
import {AjoucategorieComponent} from './ajoucategorie/ajoucategorie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    CategorieComponent,
    AjoucategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
