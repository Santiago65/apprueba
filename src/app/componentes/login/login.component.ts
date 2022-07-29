import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  }


  ngOnInit(): void {
  }
  constructor(private authService: AuthService, private router: Router) { }

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
    console.log("Adios "), alert("chau");
  }
}






