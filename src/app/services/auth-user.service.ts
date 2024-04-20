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
      job: "desenvolvedor java e angular",
      company: "AlexDev",
      address:"Rua Prudente P. Barbosa, 125, Ponte Chave",
      phone:"(32) 991315140",
      country: "Brazil",
      city:"Carandaí",
      about: "Desenvolvedor apaixonado e dedicado, com um forte desejo de aprender e crescer na área de desenvolvimento de software. Tenho experiência trabalhando em alguns projetos e estou ansioso para aplicar minhas habilidades e contribuir para soluções de software inovadoras e impactantes."

    };
  }

  getFirstAndLastName(): string {
    const names = this.userLogged.username.split('.');
    const firstName =  names[0].replace(/[@]/g, '');
    const lastName = names[1];
    return `${firstName} ${lastName}`;
  }

  getOccupation():string{
    return this.userLogged.job;
  }

  //create a method to get the user logged
  getUserLogged(): UserModel {
    return this.userLogged;
  }
}
