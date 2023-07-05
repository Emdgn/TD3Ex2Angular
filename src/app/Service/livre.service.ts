import { Injectable } from '@angular/core';
import { Livre } from '../Model/livre';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  listeLivre:Livre[] = [];

  constructor(private http:HttpClient) { }

  getListeLivre():Livre[]
  {
    var l1:Livre = new Livre(1, "lala", "Jean", new Date());
    var l2:Livre = new Livre(2, "OHH", "Louis", new Date());
    var l3:Livre = new Livre(3, "AHH", "Marie", new Date());    
    this.listeLivre = [l1, l2, l3];

    return this.listeLivre;
  }

  ajoutLivre(livre:Livre):Observable<Livre>
  {
    return this.http.post<Livre>("http://localhost:8080/ajout", livre);
  }

  supprimerLivre(ISBNLivre:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/supprimer/" + ISBNLivre);
  }

  findALLLivres():Observable<Livre[]> {
    return this.http.get<Livre[]>("http://localhost:8080/getAllLivres");
  }

}
