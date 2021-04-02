import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
clientes: Cliente[] = [
  {id:1,nombre:'Pablo' , apellido:'Martín',mail:'Palgo@gmail.com', createAt:'11-02-2021'},
    {id:2,nombre:'Roberto' , apellido:'Díaz',mail:'Ralgo@gmail.com', createAt:'11-02-2021'},
      {id:3,nombre:'Tomas' , apellido:'García',mail:'Talgo@gmail.com', createAt:'11-02-2021'}
] ;
  constructor() { }

  ngOnInit(): void {
  }

}
