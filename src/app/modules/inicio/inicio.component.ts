import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
  
})
export class InicioComponent {

}
