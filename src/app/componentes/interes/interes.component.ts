import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Interes } from 'src/app/models/interes';
import { InteresService } from 'src/app/servicios/interes.service';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css']
})
export class InteresComponent implements OnInit {
  public intereses:Interes []=[];
  public editInteres:Interes | undefined;
  public deleteInteres:Interes |undefined;

  constructor(private interesService:InteresService) { }

  ngOnInit(): void {
    this.getIntereses();

  }
  public getIntereses():void{
    this.interesService.getInteres().subscribe({
      next:(Response:Interes[])=>{
        this.intereses=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String,interes ?: Interes):void{
    const container=document.getElementById('main-container');
     const button=document.createElement('button');
    button.style.display='none';
     button.setAttribute('data-toggle','modal');
     if(mode ==='add'){
      button.setAttribute('data-target','#addInteresModal');
     }else if(mode ==='delete'){
       this.deleteInteres=interes;
      button.setAttribute('data-target','#deleteInteresModal');
     }else if(mode =='edit'){
       this.editInteres=interes;
      button.setAttribute('data-target','#editInteresModal');
     }
     container?.appendChild(button);
     button.click();
 }
 public onAddInteres(addForm:NgForm){
 document.getElementById('add-interes-form')?.click();
 this.interesService.addInteres(addForm.value).subscribe({
   next:(response:Interes) =>{
     console.log(response);
     this.getIntereses();
     addForm.reset();
   },
   error:(error:HttpErrorResponse)=>{
     alert(error.message);
     addForm.reset();
   }
 })
 }
 public onUpdateInteres(interes:Interes){
   this.editInteres=interes;
   document.getElementById('add-interes-form')?.click();
   this.interesService.updateInteres(interes).subscribe({
     next:(response:Interes) =>{
       console.log(response);
       this.getIntereses();
     },
     error:(error:HttpErrorResponse)=>{
       alert(error.message);

     }
   })
   }
   public onDeleteInteres(idInteres:number):void{
   this.interesService.deleteInteres(idInteres).subscribe({
       next:(response:void) =>{
         console.log(idInteres);
         this.getIntereses();
       },
       error:(error:HttpErrorResponse)=>{
         alert(error.message);

       }
     })
     }



}




























