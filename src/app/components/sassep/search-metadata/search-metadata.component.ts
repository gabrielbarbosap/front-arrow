import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AllServicesService } from 'src/app/services/all-services.service';
import { TableAllComponent } from '../table-all/table-all.component';



@Component({
  selector: 'app-search-metadata',
  templateUrl: './search-metadata.component.html',
  styleUrls: ['./search-metadata.component.css']
})
export class SearchMetadataComponent implements OnInit {
  displayedColumns: string[] = ['cargo1', 'cargo2', 'name', 'nasc', 'cidade'];
  dataSource: MatTableDataSource<any>;
  view = 'false'
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  passo

  level = new FormControl('')
  prov = new FormControl('')
  levelFilter = ''
  providenceFilter = ''
  backlog;
  progress = false
  constructor(
    private allService: AllServicesService,
    private dialog: MatDialog,

  ) { }


  ngOnInit(): void {

  }

  clearFilter(value) {
    if (value === "level") {
      this.progress = true
      this.level.setValue('')
      this.viewFunction()
      this.levelFilter = ''
    } else {
      this.progress = true
      this.prov.setValue('')
      this.viewFunction()
      this.providenceFilter = ''
    }
  }

  viewFunction() {

    if (this.level.value && this.prov.value) {
      this.progress = true
      this.dataSource = this.backlog.filter(res => res.LEVEL_INT === this.level.value && res.PROVIDENCE === this.prov.value)
      this.levelFilter = this.level.value
      this.providenceFilter = this.prov.value
      this.progress = false
    } else if (this.level.value && this.prov.value === '') {
      this.progress = true
      this.dataSource = this.backlog.filter(res => res.LEVEL_INT === this.level.value)
      this.levelFilter = this.level.value
      this.progress = false
    } else if (this.level.value === '' && this.prov.value) {
      this.progress = true
      this.dataSource = this.backlog.filter(res => res.PROVIDENCE === this.prov.value)
      this.providenceFilter = this.prov.value
      this.progress = false
    } else {
      this.progress = true
      this.dataSource = this.backlog
      this.progress = false
    }

  }

  ngAfterViewInit() {
    this.buildTable()
    // Assign t
  }

  buildTable() {
    this.allService.getall().subscribe(res => {
      console.log(res)
      this.view = "true"
      this.dataSource = new MatTableDataSource(res.user);
      this.backlog = res.user
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openModal(row) {
    let item;
    let dialogRef;
    this.allService.getId(row._id).subscribe(res => {
      item = res
      console.log(item)
      dialogRef = this.dialog.open(TableAllComponent, {
        width: '700px',
        data: { data: item.data }
      });
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




