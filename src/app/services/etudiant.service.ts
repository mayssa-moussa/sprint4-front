import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8080/etudiants/api/all';


  etudiants! : Etudiant[];
  //categories : Categorie[];


  constructor(private http : HttpClient) {

  }

  listeEtudiant(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiURL);
    }



}
