import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table'
import { ITableData } from '@sunbird-cb/collection/src/public-api';
import * as _ from 'lodash'

@Component({
  selector: 'viewer-final-assessment-popup',
  templateUrl: './final-assessment-popup.component.html',
  styleUrls: ['./final-assessment-popup.component.scss']
})
export class FinalAssessmentPopupComponent implements OnInit {

  assessmentData: any
  dataSource = new MatTableDataSource([]);
  displayedColumns: Array<any> = [];

  tableData!: ITableData | undefined

  constructor(
    private dialogRef: MatDialogRef<FinalAssessmentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.assessmentData = data
    this.setTableDataSource(data.tableDetails.tableData)
  }

  ngOnInit() {
    this.setTableColumns(this.assessmentData.tableDetails.tableColumns)
  }

  setTableColumns(columns: any) {
    // this.displayedColumns = columns.map((tableColumn:any) => tableColumn.columnDef);
    this.displayedColumns = columns
    console.log(this.displayedColumns)
  }

  setTableDataSource(data : any) {
    // this.dataSource = new MatTableDataSource(data);
    this.dataSource.data = data
  }

  closePopup(response: any) {
    this.dialogRef.close(response);
  }

  get getFinalColumns() :string[] {
    const displayColumns = _.map(this.displayedColumns, c => c.key);
    return displayColumns
  }

}
