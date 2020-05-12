import { Component, OnInit} from '@angular/core';
import { TodosService } from '../services/todos.service';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  loading = true;
  searchString;

  constructor(
    private todosService: TodosService,
    private filterService: FilterService
    ) { }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe( () =>
    this.loading = false

    );
  }

  getTodos(){
    return this.todosService.todos;
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
  getLength(){
    return this.todosService.todos.length;
  }
  getSearchString(){
    return this.filterService.searchString;
  }

  getCompletedFlag(){
    return this.filterService.completed;
  }
}
