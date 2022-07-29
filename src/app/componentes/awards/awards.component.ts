import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Certificacion } from 'src/app/models/certificacion';
import { CertificacionService } from 'src/app/servicios/certificacion.service';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  public certificaciones:Certificacion []=[];
  public editCertificacion:Certificacion | undefined;
  public deleteCertificacion:Certificacion |undefined;
  constructor(private certificacionService:CertificacionService) { }

  ngOnInit(): void {
    this.getCertificaciones();
  }
  public getCertificaciones():void{
    this.certificacionService.getCertificacion().subscribe({
      next:(Response:Certificacion[])=>{
        this.certificaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String,certificacion ?: Certificacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode ==='add'){
     button.setAttribute('data-target','#addCertificacionModal');
    }else if(mode ==='delete'){
      this.deleteCertificacion=certificacion;
     button.setAttribute('data-target','#deleteCertificacionModal');
    }else if(mode =='edit'){
      this.editCertificacion=certificacion;
     button.setAttribute('data-target','#editCertificacionModal');
    }
    container?.appendChild(button);
    button.click();
}
public onAddCertificacion(addForm:NgForm){
document.getElementById('add-certificacion-form')?.click();
this.certificacionService.addCertificacion(addForm.value).subscribe({
  next:(response:Certificacion) =>{
    console.log(response);
    this.getCertificaciones();
    addForm.reset();
  },
  error:(error:HttpErrorResponse)=>{
    alert(error.message);
    addForm.reset();
  }
})
}
public onUpdateCertificacion(certificacion:Certificacion){
  this.editCertificacion=certificacion;
  document.getElementById('add-certificacion-form')?.click();
  this.certificacionService.updateCertificacion(certificacion).subscribe({
    next:(response:Certificacion) =>{
      console.log(response);
      this.getCertificaciones();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);

    }
  })
  }
  public onDeleteCertificacion(idCerti:number):void{
  this.certificacionService.deleteCertificacion(idCerti).subscribe({
      next:(response:void) =>{
        console.log(idCerti);
        this.getCertificaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);

      }
    })
    }



}










