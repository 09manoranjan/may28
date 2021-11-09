import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
import Swal from 'sweetalert2'
//import Swal from 'node_modules/sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  AddRestoForm = new FormGroup({
    name:new FormControl('',Validators.required),
    address:new FormControl(''),
    mobile:new FormControl(''),
    email: new FormControl('',[Validators.email])
  })
  constructor(private restoService:RestoService) { }
  DataAdd = false;
  ngOnInit() {
    // this.restoService.addRestaurant().subscribe((result)=>{
    //   console.log("result------------>",result);
      
    // })
  }
  addNewResto(){
    console.log("inside addNewResto method------------->",this.AddRestoForm.value);
    this.restoService.addRestaurant(this.AddRestoForm.value).subscribe((result)=>{
      console.log("adding new resto method------------->",result);
      this.AddRestoForm.reset();
      Swal.fire('Success', 'Data Added Successfully !!');
    })
  }

}
