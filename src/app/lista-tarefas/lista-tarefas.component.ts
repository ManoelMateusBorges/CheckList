import { Component, OnInit } from '@angular/core';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [
    TarefaComponent,
    ReactiveFormsModule
  ],
  templateUrl: './lista-tarefas.component.html'
})
export class ListaTarefasComponent implements OnInit{

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      tarefa: new FormControl(null),
    })
  }

  onSubmit() {
    console.log(this.formulario)
  }
}
