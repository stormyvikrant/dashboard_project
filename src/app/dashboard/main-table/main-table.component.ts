import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductsService} from '../../core/services/products.service';
import {HttpErrorResponse} from '@angular/common/http';
import {TableResponse, TransformedGridUser} from '../../core/models/table-model';
import {PopUpComponent} from '../pop-up/pop-up.component';
import {POPUP_TYPE} from '../../core/models/common.model';

@Component({
  selector: 'app-main-table',
  imports: [CommonModule,FormsModule,PopUpComponent],
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.scss'
})
export class MainTableComponent implements  OnInit {
  private  productService=inject(ProductsService)
  currentPage = 1;
  pageSize = 10;
  selectedAll = false;
  selectedUserIds: string[] = [];
  isPopupVisible:boolean = false;
  loading:boolean = false;
  selectedUserName:string|null = null;
  selectedId:string|null = null;
  popUpType: POPUP_TYPE= POPUP_TYPE.EDIT;
  tableData!:TableResponse

  ngOnInit() {
    this.getAllProducts()
  }


  getAllProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe(({
      next:(response:TableResponse)=>{
      console.log("check Product",response)
        setTimeout(() => {
          // Assume this is your actual data fetching logic
          this.tableData=response
          console.log("table data",this.tableData)
          this.loading = false;
        }, 2000);


      },error:(error:HttpErrorResponse)=>{
      console.warn(error);
    }
    }))
  }

  fetchTableData() {
    // Simulate API call delay

  }


  getInitials(name: string): string {
    if (!name) return '';
    const words = name.trim().split(' ');
    let initials = words[0][0] || '';
    if (words.length > 1) {
      initials += words[1][0];
    } else if (words[0].length > 1) {
      initials += words[0][1]; // take 2nd letter from same word if only 1 word
    }
    return initials.toUpperCase();
  }


  get paginationPages(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  totalPages() {
    return Math.ceil(this.tableData.grid_data.length / this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  handleUserDetailPopUp(userData:TransformedGridUser ) {
    this.popUpType=POPUP_TYPE.EDIT
this.selectedUserName=userData.name.first_name+userData.name.last_name ;
this.isPopupVisible=true
    console.log(this.selectedUserName);
  }

  handleDelete(user:TransformedGridUser){
    this.popUpType=POPUP_TYPE.DELETE
    this.selectedId=user.id;
    this.isPopupVisible=true
  }



  handleRowClick(user: TransformedGridUser): void {
    const index = this.selectedUserIds.indexOf(user.id);
    if (index > -1) {
      this.selectedUserIds.splice(index, 1); // Deselect
    } else {
      this.selectedUserIds.push(user.id); // Select
    }
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

  confirmPop(){
    if (!this.selectedId) return;

    this.tableData.grid_data = this.tableData.grid_data.filter(
      user => user.id !== this.selectedId
    );


    this.selectedId = '';
    this.isPopupVisible = false;  }

  toggleSelectAll(): void {
    if (this.selectedAll) {
      this.selectedUserIds = this.tableData.grid_data.map(user => user.id);
    } else {
      this.selectedUserIds = [];
    }
  }



}
