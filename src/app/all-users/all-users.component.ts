import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  uname : String;
  pwd : String;
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  users: Array<any> = [];
  constructor (private http : HttpClient){}

  ngOnInit(){
    this.http.get<User[]>("../../assets/users.json").subscribe( data => {
      this.users = data;
    })
  }

}
