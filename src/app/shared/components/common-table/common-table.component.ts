import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-table',
  imports: [CommonModule,NgbPaginationModule],
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.scss'
})
export class CommonTableComponent implements OnInit,OnChanges{

  @Input() headers:any = [];
  @Input() data:any = [];

  page = 1;
  totalPages=0;

  displayData:any = [];
 


  ngOnInit(): void {
   
  
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayData = this.paginate(this.data,this.page,10)
    this.totalPages = this.getTotalPages(this.data, 10)
  }
  paginate(data:any, page:any, pageSize:any) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  }
  
   getTotalPages(data:any, pageSize:any) {
    return Math.ceil(data.length / pageSize);
  }
  
   hasNextPage(data:any, page:any, pageSize:any) {
    return page < this.getTotalPages(data, pageSize);
  }
  
   hasPreviousPage(page:any) {
    return page > 1;
  }



}
