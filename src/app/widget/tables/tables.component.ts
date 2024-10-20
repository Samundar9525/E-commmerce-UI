import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  @Input() tableColumns: any[] = [];
  @Input() tableData: any[] = [];
  @Output() rowActionEvent = new EventEmitter();

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(): void {
    this.displayedColumns = this.tableColumns.map(c => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
    setTimeout(() => {
      if (this.sort) this.dataSource.sort = this.sort;
      if (this.paginator) this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element: any) {
    let obj = {
      action:'edit',
      rowdata:element
    }
    this.rowActionEvent.emit(obj);
  }

  onDelete(element: any) {
    let obj = {
      action:'delete',
      rowdata:element
    }
    this.rowActionEvent.emit(obj);
  }
}
