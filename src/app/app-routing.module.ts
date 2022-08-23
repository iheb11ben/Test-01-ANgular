import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { ErrorComponent } from './Accueil/error/error.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { DesComponent } from './Cours/des/des.component';
import { ProgComponent } from './Cours/prog/prog.component';

const routes: Routes = [
  {
    path: 'cour',
    loadChildren: () => import('./Cours/cour/cour.module').then(m => m.CourModule)
  },
  {
    path: 'contacte',
    loadChildren: () => import('./Contact/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'Accueil',
    loadChildren: () => import('./Accueil/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: '',
    loadChildren: () => import('./Accueil/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'res',
    loadChildren: () => import('./Ressources/ressources/ressources.module').then(m => m.RessourcesModule)
  },
  {path:'**',component:ErrorComponent},
  {path:'des',component:DesComponent},
  {path:'pro',component:ProgComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
