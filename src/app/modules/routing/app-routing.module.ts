import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "../../components/auth/signup/signup.component";
import { LoginComponent } from "../../components/auth/login/login.component";
import { TrainingComponent } from "../../components/training/training.component";
import { WelcomeComponent } from "../../pages/welcome/welcome.component";

import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "training",
    component: TrainingComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
