import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from "@angular/core";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from "@angular/forms";
import { MustMatch } from "./must_watch";

@Component({
  selector: "register",
  templateUrl: "register.component.html",
  styleUrls: ["register.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  outputValues = {};

  //custom validation for email.
  private emailDomainValidator(control: FormControl) {
    let email = control.value;
    if (email && email.indexOf("@") != -1) {
      let [_, domain] = email.split("@");
      if (domain == "gmail.com") {
        return {
          emailDomain: {
            parsedDomain: domain,
          },
        };
      }
    }
    return null;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        email: [
          "",
          [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*"),
            this.emailDomainValidator,
          ],
        ],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        skills: this.formBuilder.array([], Validators.required),
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // display form values on success
    // console.log(
    //   "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    // );
  }

  addSkills() {
    const skilled = this.registerForm.controls.skills as FormArray;
    skilled.push(
      this.formBuilder.group({
        skill: "",
      })
    );
    console.log("registration form---", this.registerForm);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
