import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  searchString = '';
  completed: any = 'all';
  constructor() { }
}
