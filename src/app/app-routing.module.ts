import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AuthGuard } from './guards/secure.guard';

export const routes: Routes = [
  {path: "etudiants", component : EtudiantComponent,canActivate:[AuthGuard], data : {roles:['ADMIN']}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
