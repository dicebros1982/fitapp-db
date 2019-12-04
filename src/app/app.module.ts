import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './modules/core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule, AppRoutingModule],
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
