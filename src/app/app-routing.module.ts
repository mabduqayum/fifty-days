import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {Page404Component} from "./pages/page404/page404.component";
import {ExpandingCardsComponent} from "./projects/expanding-cards/expanding-cards.component";
import {ProgressStepsComponent} from "./projects/progress-steps/progress-steps.component";
import {RotatingNavigationComponent} from "./projects/rotating-navigation/rotating-navigation.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', redirectTo: ''},
  {path: 'expanding-cards', component: ExpandingCardsComponent},
  {path: 'progress-steps', component: ProgressStepsComponent},
  {path: 'rotating-navigation-animation', component: RotatingNavigationComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
