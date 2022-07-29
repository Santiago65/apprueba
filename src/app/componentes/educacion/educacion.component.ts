import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educations:Educacion []=[];
  public editeducation:Educacion | undefined;
  public deleteEducation:Educacion |undefined;


  constructor(private educationService:EducacionService) { }

  ngOnInit(): void {
    this.getEducations();

  }
  public getEducations():void{
    this.educationService.getEducacion().subscribe({
      next:(Response:Educacion[])=>{
        this.educations=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String,education ?: Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode ==='add'){
     button.setAttribute('data-target','#addEducationModal');
    }else if(mode ==='delete'){
      this.deleteEducation=education;
     button.setAttribute('data-target','#deleteEducationModal');
    }else if(mode =='edit'){
      this.editeducation=education;
     button.setAttribute('data-target','#editEducationModal');
    }
    container?.appendChild(button);
    button.click();
}
public onAddEducation(addForm:NgForm){
document.getElementById('add-education-form')?.click();
this.educationService.addEducacion(addForm.value).subscribe({
  next:(response:Educacion) =>{
    console.log(response);
    this.getEducations();
    addForm.reset();
  },
  error:(error:HttpErrorResponse)=>{
    alert(error.message);
    addForm.reset();
  }
})
}
public onUpdateEducation(education:Educacion){
  this.editeducation=education;
  document.getElementById('add-education-form')?.click();
  this.educationService.updateEducacion(education).subscribe({
    next:(response:Educacion) =>{
      console.log(response);
      this.getEducations();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);

    }
  })
  }
  public onDeleteEducation(idEdu:number):void{
  this.educationService.deleteEducacion(idEdu).subscribe({
      next:(response:void) =>{
        console.log(response);
        this.getEducations();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);

      }
    })
    }
}
