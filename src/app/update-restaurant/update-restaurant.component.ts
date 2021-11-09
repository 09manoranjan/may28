import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RestoService} from '../resto.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  constructor(private restoService:RestoService,
    private route:ActivatedRoute,
    private router:Router) { }
  updateRestoForm = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl('')
  })
  ngOnInit() {
    //console.log("this.route.snapshot.params.id------------------>",this.route.snapshot.params.id);
    this.restoService.getRestoDataToUpdate(this.route.snapshot.params.id).subscribe((result)=>{
      console.log("result from update component----------->",result);
      this.updateRestoForm = new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        mobile:new FormControl(result['mobile']),
        email:new FormControl(result['email'])
      })
    })
  }
  updateRestoData(){
    //console.log("data from updateRestoData----------->",this.updateRestoForm.value);
    Swal.fire({
      title : 'Are you sure you want to update this data ?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:"Yes",
      cancelButtonText:"No"
    }).then((result)=>{
      if(result.value){
        this.restoService.updateRestaurant(this.updateRestoForm.value,this.route.snapshot.params.id).subscribe((result)=>{
          console.log("updating data-------------->",result);
          Swal.fire('Success!','Your Data has been Updated.','success');
          this.router.navigate(['/listRestaurant'])
        })
      }
    })
    
  }

}
