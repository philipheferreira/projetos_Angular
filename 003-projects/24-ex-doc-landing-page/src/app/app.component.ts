import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { SobreSectionComponent } from "./sobre-section/sobre-section.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ServicosSectionComponent } from "./servicos-section/servicos-section.component";
import { DivNumbersComponent } from "./div-numbers/div-numbers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContactSectionComponent, SobreSectionComponent, HeroSectionComponent, ServicosSectionComponent, DivNumbersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doctor-care-angular';
}
