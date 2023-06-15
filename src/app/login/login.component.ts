import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

interface User{
  uname :String;
  pwd: String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: String = '';
  password: String = '';
  flag:boolean = false;
  users : Array<any> = [];
  constructor(private router : Router,private http: HttpClient){}

  ngOnInit(){
    console.log('Hi I m from Login');
    this.http.get<User[]>("../../assets/users.json").subscribe(data => {
      console.log("DATA --- ",data);
      this.users = data;
    })
  }

  login():void{
    console.log('Hiiiiii '+this.username +' '+ this.password);
    this.users.forEach( user => {
      console.log(user);
      if(this.username === user.uname && this.password === user.pwd){
        this.flag = true;
      }
    })
    if(this.flag){
      this.router.navigate(['/homepage']);
    }
    else{
      this.router.navigate(['/pagenotfound']);
    }
  }
}
