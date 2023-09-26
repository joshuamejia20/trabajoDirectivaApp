import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre = '';
  apellido = '';
  cargo = '';

  entradas:any[];

  constructor(){
    this.entradas = [
      {
        titulo: "Python, cada día más presente"
      },
      {
        titulo: "Java, presente más de 20 años"
      },
      {
        titulo: "JavaScript, cada día más funcional"
      }
    ];
  }

  registrar_usuario(){
    this.registrado = true;
    this.mensaje = 'Usuario registrado exitosamente';
  }
}
