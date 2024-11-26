import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Etudiant } from './../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule], // Import nécessaire pour *ngFor et *ngIf
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants!: Etudiant[];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.chargerEtudiants();
  }

  chargerEtudiants() {
    this.etudiantService.listeEtudiant().subscribe(etuds => {
      console.log(etuds);
      this.etudiants = etuds;
    });
  }
}
