import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-excel';
  date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  fileName= 'Excel -'+this.date+'.xlsx';
  
  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
       XLSX.writeFile(wb, this.fileName);
			
    }
}
