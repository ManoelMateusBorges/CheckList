import { Component } from '@angular/core';
import { TarefaComponent } from '../tarefa/tarefa.component';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [
    TarefaComponent
  ],
  templateUrl: './lista-tarefas.component.html'
})
export class ListaTarefasComponent {

}
