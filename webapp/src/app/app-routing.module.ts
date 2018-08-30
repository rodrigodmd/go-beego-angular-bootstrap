import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExampleFormComponent} from "./main/example-form/example-form.component";
import {ExampleListComponent} from "./main/example-list/example-list.component";
import {HelpComponent} from "./main/help/help.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: 'login', component: ExampleListComponent},
  {
    path: 'main', component: MainComponent, children: [
      {path: 'form', component: ExampleFormComponent},
      {path: 'list', component: ExampleListComponent},
      {path: 'help', component: HelpComponent},
    ]
  },

  {path: '', redirectTo: '/main/help', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
