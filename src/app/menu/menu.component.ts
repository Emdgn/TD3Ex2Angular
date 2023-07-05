import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router:Router, private ar:ActivatedRoute) {
    console.log("url : " + ar.snapshot)
  }

  infoLivre()
  {
    this.router.navigate(["infoLivre"]);
  }

  ajoutLivre() {
    this.router.navigate(["AjoutLivre"]);
  }
}
