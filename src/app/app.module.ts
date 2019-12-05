import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { PastTrainingsComponent } from './components/training/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { StopTrainingModalComponent } from './components/training/current-training/stop-training-modal/stop-training-modal.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule, AppRoutingModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    HeaderComponent,
    SidenavListComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    CurrentTrainingComponent,
    StopTrainingModalComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingModalComponent]
})
export class AppModule {}
