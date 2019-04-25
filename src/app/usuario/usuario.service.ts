import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioModel} from "./usuario.model";
import {BACKEND_API} from "../../app.api";
import {Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  usuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${BACKEND_API}/usuarios`)
  }
}
