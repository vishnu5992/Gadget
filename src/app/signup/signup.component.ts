import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   signupForm:any;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' :new FormGroup({
       'firstname' : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z ]+")]),
       'lastname' : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z ]+")]),
       'email': new FormControl(null,[Validators.required,Validators.email]),
       'password' : new FormControl(null,[Validators.required,Validators.pattern("[a-z,A-Z,0-9,@$#&*]{7,15}")]),
       'phonenumber' : new FormControl(null,[Validators.required,Validators.pattern("[0-9]{10}")]),
       'address' : new FormControl(null,[])
      })
    })
  }
  onSubmit(){
     console.log(this.signupForm)
  }
}
