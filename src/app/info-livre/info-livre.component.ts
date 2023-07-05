import { Component } from '@angular/core';
import { Livre } from '../Model/livre';
import { LivreService } from '../Service/livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-livre',
  templateUrl: './info-livre.component.html',
  styleUrls: ['./info-livre.component.css']
})
export class InfoLivreComponent {

  listeL!:Observable<Livre[]>;

  constructor(private ls:LivreService, private ar:ActivatedRoute, private router:Router) {
    console.log("url : " + ar.snapshot.url)
  }

  ngOnInit(): void {
    this.listeL = this.ls.findALLLivres();
  }

  delete(isbnlivre:number)
  {
    this.ls.supprimerLivre(isbnlivre).subscribe();
    this.router.navigateByUrl("infoLivre");
  }

  update(isbnlivre:number)
  {
    this.router.navigateByUrl("modifierLivre/" + isbnlivre);
  }
}
