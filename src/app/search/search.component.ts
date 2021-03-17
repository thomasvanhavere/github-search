import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchModel } from '../models/searchmodel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() getName = new EventEmitter<SearchModel>();
  searchRepo = new SearchModel('');

  SearchForData(data:any){
    this.getName.emit(data.value.find)
    console.log(data.value.find)
    data.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
