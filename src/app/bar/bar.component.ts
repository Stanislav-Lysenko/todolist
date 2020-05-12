import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { MatRadioChange } from '@angular/material/radio';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }
  getSearchString({target}){
    this.filterService.searchString = target.value;
  }
  onChange(mrChange: MatRadioChange) {
    if (mrChange.value === '1') {
      this.filterService.completed = true;
    }
    if (mrChange.value === '2') {
      this.filterService.completed = false;
    }
    if (mrChange.value === '3') {
      this.filterService.completed = 'all';
    }
 }

}
