import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsuarioComponent} from "./usuario/usuario.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usuarios', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
