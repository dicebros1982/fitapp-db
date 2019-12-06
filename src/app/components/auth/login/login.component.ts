import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  inputForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.inputForm = new FormGroup({
      email: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.inputForm.value.email,
      password: this.inputForm.value.password
    });
  }
}
