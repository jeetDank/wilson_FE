import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-common-mat-table',
  imports: [MatTableModule, MatPaginatorModule,CommonModule],
  templateUrl: './common-mat-table.component.html',
  styleUrl: './common-mat-table.component.scss',
})
export class CommonMatTableComponent {

  @Input() data:any = [];
  @Input() displayedColumns = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;

  }
}


