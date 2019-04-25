import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./usuario.service";
import {UsuarioModel} from "./usuario.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<UsuarioModel[]>

  constructor(private service: UsuarioService) {
  }

  ngOnInit() {
    this.usuarios = this.service.usuarios()
  }

}
