import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private apiServerUrl='https://back-app-santiago65.koyeb.app';


  constructor(private http:HttpClient) { }

  public getHabilidad():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.apiServerUrl}/habilidad/all`);
  }
  public addHabilidad(habilidad: Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(`${this.apiServerUrl}/habilidad/add`,habilidad);
  }
  public updateHabilidad(habilidad: Habilidad):Observable<Habilidad>{
    return this.http.put<Habilidad>(`${this.apiServerUrl}/habilidad/update`,habilidad);
  }
  public deleteHabilidad(habilidadId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/habilidad/delete/${habilidadId}`);
  }

}

