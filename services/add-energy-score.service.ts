import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEnergyScoreService {
  url : string = "https://energie-app-api.azurewebsites.net/api/User/AddEnergyScore";
  constructor(private http : HttpClient) { }

  postEnergyScore (energyScore : any){
    return this.http.post(this.url, energyScore);
  }
}
