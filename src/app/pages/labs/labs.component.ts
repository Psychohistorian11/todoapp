import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  tasks = [
    'Instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ];

  name = signal('cristian');

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.name.set(newValue);
  }
}
