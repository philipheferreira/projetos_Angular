import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SobreComponent } from './component/sobre/sobre.component';

@NgModule({
  declarations: [PrincipalComponent, HomeComponent, SobreComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
