import { Component, OnInit } from '@angular/core';
import { RestoService } from "../resto.service";
import {Router} from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  restoList:any = [];
  constructor(private restoService:RestoService,private router:Router) { }

  ngOnInit() {
    this.restoService.getRestaurantList().subscribe((result)=>{
      this.restoList = result;
    })
  }
  deleteResto(restoData){
    console.log("restaurant data-------------->",restoData);
    Swal.fire({
      title: 'Are you sure you want to delete this data ?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.restoService.deleteRestaurant(restoData.id).subscribe((result)=>{
          console.log("result after deleting data------------>",result);
          Swal.fire('Success!','Your Data has been Uddated.','success');
          location.reload();
        })
      }
    }) 
  }
  updateResto(restoData){
    console.log("restaurant data from update-------------->",restoData);
    this.router.navigate(['/updateRestaurant/'+restoData.id]);
  }

}
