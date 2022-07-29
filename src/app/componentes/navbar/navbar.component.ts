import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public usuarios:Usuario []=[];
  public usuario : Usuario | undefined;
  public editUsuario:Usuario | undefined;
  public Usuario:Usuario | undefined;
  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
    this.getUser();
  }
  public getUser():void{
    this.headerService.getUser().subscribe({
       next: (response: Usuario) =>{
        this.usuario=response;
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }


    })
  }
  public onOpenModal(mode:String,usuario ?:Usuario ):void{
    const container=document.getElementById('main-container');
     const button=document.createElement('button');
    button.style.display='none';
     button.setAttribute('data-toggle','modal');
     if(mode ==='add'){
      button.setAttribute('data-target','modal');
     }
     else if(mode =='edit'){
       this.editUsuario=usuario;
      button.setAttribute('data-target','#editModal');
     }
     container?.appendChild(button);
     button.click();
 }

 public onUpdateUsuario(usuario:Usuario){
   this.editUsuario=usuario;
   document.getElementById('add-usuario-form')?.click();
   this.headerService.updateUsuario(usuario).subscribe({
     next:(response:Usuario) =>{
       console.log(response);
       this.getUser();
     },
     error:(error:HttpErrorResponse)=>{
       alert(error.message);

     }
   })
   }

}





