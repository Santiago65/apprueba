import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public habilidades:Habilidad []=[];
  public editHabilidad:Habilidad | undefined;
  public deleteHabilidad:Habilidad |undefined;

  constructor(private habilidadService:HabilidadService) { }

  ngOnInit(): void {
    this.getHabilidades();
  }
  public getHabilidades():void{
    this.habilidadService.getHabilidad().subscribe({
      next:(Response:Habilidad[])=>{
        this.habilidades=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String,habilidad ?: Habilidad):void{
    const container=document.getElementById('main-container');
     const button=document.createElement('button');
    button.style.display='none';
     button.setAttribute('data-toggle','modal');
     if(mode ==='add'){
      button.setAttribute('data-target','#addHabilidadModal');
     }else if(mode ==='delete'){
       this.deleteHabilidad=habilidad;
      button.setAttribute('data-target','#deleteHabilidadModal');
     }else if(mode =='edit'){
       this.editHabilidad=habilidad;
      button.setAttribute('data-target','#editHabilidadModal');
     }
     container?.appendChild(button);
     button.click();
 }
 public onAddHabilidad(addForm:NgForm){
 document.getElementById('add-habilidad-form')?.click();
 this.habilidadService.addHabilidad(addForm.value).subscribe({
   next:(response:Habilidad) =>{
     console.log(response);
     this.getHabilidades();
     addForm.reset();
   },
   error:(error:HttpErrorResponse)=>{
     alert(error.message);
     addForm.reset();
   }
 })
 }
 public onUpdateHabilidad(habilidad:Habilidad){
   this.editHabilidad=habilidad;
   document.getElementById('add-habilidad-form')?.click();
   this.habilidadService.updateHabilidad(habilidad).subscribe({
     next:(response:Habilidad) =>{
       console.log(response);
       this.getHabilidades();
     },
     error:(error:HttpErrorResponse)=>{
       alert(error.message);

     }
   })
   }
   public onDeleteHabilidad(idHabilidad:number):void{
   this.habilidadService.deleteHabilidad(idHabilidad).subscribe({
       next:(response:void) =>{
         console.log(idHabilidad);
         this.getHabilidades();
       },
       error:(error:HttpErrorResponse)=>{
         alert(error.message);

       }
     })
     }


}









