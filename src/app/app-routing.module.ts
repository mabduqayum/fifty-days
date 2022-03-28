import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpandingCardsComponent} from "../pages/expanding-cards/expanding-cards.component";
import {Page404Component} from "../pages/page404/page404.component";
import {MainComponent} from "../pages/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', redirectTo: ''},
  {path: 'expanding-cards', component: ExpandingCardsComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
