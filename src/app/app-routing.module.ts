import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ShellComponent } from './home/shell.component';

import { PageNotFoundComponent } from './home/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
     },
      
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }