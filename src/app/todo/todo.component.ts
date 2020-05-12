import { Component, OnInit, Input} from '@angular/core';
import Todo from '../interfaces/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

@Input() todo: Todo;
@Input() i: number;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  deleteTodo(id: number): void{
    this.todosService.deleteTodo(id);
  }
  onChange(id: number): void{
    this.todosService.onToggle(id);
  }

}
