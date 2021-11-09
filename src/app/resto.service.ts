import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http:HttpClient) { }
  getRestaurantList(){
    return this.http.get("http://localhost:3000/restaurant");
  }
  addRestaurant(restoData){
    return this.http.post("http://localhost:3000/restaurant",restoData)
  }
  deleteRestaurant(restoID){
    return this.http.delete("http://localhost:3000/restaurant/"+restoID)
  }
  getRestoDataToUpdate(restoID){
    return this.http.get("http://localhost:3000/restaurant/"+restoID)
  }
  updateRestaurant(restoData,id){
    return this.http.put("http://localhost:3000/restaurant/"+id,restoData);
  }
}
