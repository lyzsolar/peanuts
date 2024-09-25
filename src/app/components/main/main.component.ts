import { Component} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { InicioComponent } from '../../modules/inicio/inicio.component';




@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    FooterComponent,
    HeaderComponent,
    InicioComponent
  ],
  
})
export class MainComponent {
 
}
