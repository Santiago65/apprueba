import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interes } from '../models/interes';

@Injectable({
  providedIn: 'root'
})
export class InteresService {
  private apiServerUrl='https://back-app-santiago65.koyeb.app';


  constructor(private http:HttpClient) { }

  public getInteres():Observable<Interes[]>{
    return this.http.get<Interes[]>(`${this.apiServerUrl}/interes/all`);
  }
  public addInteres(interes: Interes):Observable<Interes>{
    return this.http.post<Interes>(`${this.apiServerUrl}/interes/add`,interes);
  }
  public updateInteres(interes: Interes):Observable<Interes>{
    return this.http.put<Interes>(`${this.apiServerUrl}/interes/update`,interes);
  }
  public deleteInteres(interesId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/interes/delete/${interesId}`);
  }

}


