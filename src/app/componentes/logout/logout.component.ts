import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user = {
    email: '',
    password: '',
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  Ingresar() {
    const { email, password } = this.user;
    this.authService.login(email, password).then(user => {
      console.log("Bienvenido ", user);
      if(!user) {
        alert("Datos incorrectos, si no tenes cuenta registrate!");
        return;
      };
      this.router.navigate(['/porfolio'])
    }).catch(err=>{
      console.log(err)
    })
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/iniciar-secion'])
    console.log("Adios "), alert("chau");
  }
}







