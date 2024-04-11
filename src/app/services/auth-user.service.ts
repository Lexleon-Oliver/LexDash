import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private userLogged!: UserModel;

  constructor() {
    this.setUser();
  }

  setUser() {
    this.userLogged = {
      id:0,
      fullName:"alex leonardo de abreu oliveira",
      email:"lexleonmg@gmail.com",
      username:"@alex.oliveira",
      occupation: "desenvolvedor java e angular",
    };
  }

  getFirstAndLastName(): string {
    const names = this.userLogged.username.split('.');
    const firstName =  names[0].replace(/[@]/g, '');
    const lastName = names[1];
    return `${firstName} ${lastName}`;
  }

  getOccupation():string{
    return this.userLogged.occupation;
  }
}
