import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CertificacionComponent } from './componentes/certificacion/certificacion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { IniciarSecionComponent } from './componentes/iniciar-sesion/iniciar-secion.component';
import { InteresComponent } from './componentes/interes/interes.component';
import { AngularFireModule } from '@angular/fire/compat';
import { NoregComponent } from './componentes/noreg/noreg.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperiencieComponent } from './componentes/experiencie/experiencie.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { InterestsComponent } from './componentes/interests/interests.component';
import { AwardsComponent } from './componentes/awards/awards.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavegationComponent } from './componentes/navegation/navegation.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCVbw_YCF-Ebwa7jM1RU-NUi7tTzKjmhLo",
  authDomain: "portfoliostgo.firebaseapp.com",
  projectId: "portfoliostgo",
  storageBucket: "portfoliostgo.appspot.com",
  messagingSenderId: "619777226728",
  appId: "1:619777226728:web:6e7afda68090860678d65d"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    CertificacionComponent,
    NavbarComponent,
    ExperienciaComponent,
    FooterComponent,
    HabilidadComponent,
    IniciarSecionComponent,
    InteresComponent,
    NoregComponent,
    PorfolioComponent,
    LogoutComponent,
    AboutComponent,
    ExperiencieComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    LoginComponent,
    NavegationComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
