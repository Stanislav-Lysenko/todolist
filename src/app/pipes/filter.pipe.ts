import { Pipe, PipeTransform } from '@angular/core';
import Todo from '../interfaces/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], search: string, includeDone: any): Todo[] {
    if (includeDone === 'all'){
      if (!search.trim()) {
        return todos;
      }
      return todos.filter(todo => {
        return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
    } else {
      if (!search.trim()) {
        return todos.filter(todo => {
          return todo.completed === includeDone;
        });
      }
      return todos.filter(todo => {
        return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 && todo.completed === includeDone;
      });
    }

  }

}
