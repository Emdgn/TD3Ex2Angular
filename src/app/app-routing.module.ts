import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoLivreComponent } from './info-livre/info-livre.component';
import { LivreComponent } from './livre/livre.component';
import { ModifierLivreComponent } from './modifier-livre/modifier-livre.component';

const routes: Routes = [
  {path:"infoLivre", component: InfoLivreComponent},
  {path:"AjoutLivre", component: LivreComponent},
  {path:"modifierLivre", component: ModifierLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
