import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';
import {CategorieComponent} from './categorie/categorie.component';
import {AjoucategorieComponent} from './ajoucategorie/ajoucategorie.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    {path: '', component: ContainerComponent},
    {path: 'categorie', component: CategorieComponent},
    {path: 'ajoutcategorie', component: AjoucategorieComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
