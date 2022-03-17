import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Material } from 'src/app/Models/Material.model';
import { MyDataServiceService } from 'src/app/Services/my-data-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddUrlComponent } from '../add-url/add-url.component';
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit,AfterViewInit {
  // displayedColumns: string[] = ['id', 'from', 'to', 'dateCreated','permanentLink'];
  displayedColumns : string[]=['id', 'from','to','dateCreated','permanentLink'];
  data =new MatTableDataSource<Material>();
  
  // paginator: MatPaginator | null;
  constructor( private myData : MyDataServiceService,private dialog : MatDialog) { }
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  ngOnInit(): void {
    this.displayData();
    
  }
  ngAfterViewInit(){
    // this.paginator.page
    // .subscribe();
  }

  public displayData():void{
    this.myData.getData().subscribe((response : Material[] )=> {
      this.data = new MatTableDataSource<Material>(response);
      this.data.paginator = this.paginator;
      console.log(this.data);
    }, error=>{console.log(error);})
  }

  onAdd():void{
    this.dialog.open(AddUrlComponent);
  }
}
