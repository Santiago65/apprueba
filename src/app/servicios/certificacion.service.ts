import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificacion } from '../models/certificacion';

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {
  private apiServerUrl='https://back-app-santiago65.koyeb.app';


  constructor(private http:HttpClient) { }

  public getCertificacion():Observable<Certificacion[]>{
    return this.http.get<Certificacion[]>(`${this.apiServerUrl}/certificacion/all`);
  }
  public addCertificacion(certificacion: Certificacion):Observable<Certificacion>{
    return this.http.post<Certificacion>(`${this.apiServerUrl}/certificacion/add`,certificacion);
  }
  public updateCertificacion(certificacion: Certificacion):Observable<Certificacion>{
    return this.http.put<Certificacion>(`${this.apiServerUrl}/certificacion/update`,certificacion);
  }
  public deleteCertificacion(certificacionId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/certificacion/delete/${certificacionId}`);
  }

}

