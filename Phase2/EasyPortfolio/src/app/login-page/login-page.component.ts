import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  })

  signupRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    user: new FormControl(),
    pass: new FormControl()
  })

  portRef = new FormGroup({
    cname: new FormControl(),
    phone: new FormControl()
  })

  msg: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  logged: Boolean = true;
  signed: Boolean = false;
  portfolio: Boolean = false;
  showing: Boolean = false;
  allContacts:Array<Contacts> = new Array();


  changePage() {
    if (this.logged == true) {
      this.logged = false;
      this.signed = true;
    }
    else {
      this.logged = true;
      this.signed = false;
    }
    this.msg = "";
  }

  checkUser() {
    let login = this.loginRef.value;
    if (sessionStorage.length > 0) {
      let tempJson = JSON.parse(sessionStorage.getItem(login.user) || '{}');
      if (tempJson.pass != null && tempJson.pass == login.pass) {
        this.logged = false;
        this.portfolio = true;
      }
      else {
        alert("Wrong username or password! Try again!")
      }
    }
  }

  addUser() {
    let signup = this.signupRef.value;
    let tempString = "{\"user\": \"" + signup.user.toString() + "\", \"pass\": \"" + signup.pass.toString() + "\", \"fname\": \"" + signup.fname.toString() + "\", \"lname\": \"" + signup.lname.toString() + "\"}";
    sessionStorage.setItem(String(signup.user), tempString);
    this.msg = "Successfully registered! " + signup.user.toString();
    this.signupRef.reset();
  }

  addContact() {
    let port = this.portRef.value;
    let tempContacts = new Contacts(String(port.cname), String(port.phone));
    this.allContacts.push(tempContacts);
    this.portRef.reset();
    alert("Successfully added new contact!")
  }

  logOut() {
    this.logged = true;
    this.signed = false;
    this.portfolio = false;
    this.showing = false;
  }

  showContacts() {
    if (this.showing == true) {
      this.showing = false;
    }
    else {
      this.showing = true;
    }
  }
}