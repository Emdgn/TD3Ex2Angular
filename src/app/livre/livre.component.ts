import { Component, OnInit } from '@angular/core';
import { LivreService } from '../Service/livre.service';
import { Livre } from '../Model/livre';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  listeLivre:Livre[] = [];

  livreForm!:FormGroup;

  constructor(private ls:LivreService, private formBuilder:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.listeLivre = this.ls.getListeLivre();

    this.livreForm = this.formBuilder.group(
      {
        titre:[null],
        auteur:[null],
        datePublication:[null]
      }
    )
  }


  ajoutLivre()
  {

    this.ls.ajoutLivre(this.livreForm.value).subscribe();
  }

}
