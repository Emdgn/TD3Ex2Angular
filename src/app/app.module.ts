import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { LivreService } from './Service/livre.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoLivreComponent } from './info-livre/info-livre.component';
import { MenuComponent } from './menu/menu.component';
import { ModifierLivreComponent } from './modifier-livre/modifier-livre.component';



@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    InfoLivreComponent,
    MenuComponent,
    ModifierLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
