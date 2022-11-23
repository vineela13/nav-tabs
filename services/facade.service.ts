import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, EnergyScoreList } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  energyScore: any;
  constructor(private client: Client, private http: HttpClient) { }
  public getUserEnergyScore(): Observable<EnergyScoreList> {
    return this.client.getEnergyScoreForUser()
  }

  // postEnergyScore(score: any): Observable<any> {
  //   return this.client.addEnergyScore(score);
  // }

   postEnergyScore(energyScore: any): Observable<any> {
      return this.http.post('https://energie-app-api.azurewebsites.net/api/User/AddEnergyScore',{ energyScore: 'Angular POST Request Example' })
    }

    userEnergyAverage(){
      return this.http.get('https://energie-app-api.azurewebsites.net/api/User/GetUserEnergyAverage');
    }

    userTrendScore(){
      return this.http.get("https://energie-app-api.azurewebsites.net/api/User/GetTrendScoreForUser");
    }

    departmentMontlyScore(){
      return this.http.get('https://energie-app-api.azurewebsites.net/api/User/GetDepartmentMonthlyScore')
    }

    departmentAverage(){
      return this.http.get("https://energie-app-api.azurewebsites.net/api/User/GetDepartmentAverageForUser");
    }
}
