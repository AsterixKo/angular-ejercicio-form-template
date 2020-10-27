import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTemplateComponent } from './shared/components/form-template/form-template.component';

const routes: Routes = [
  { path: 'template', component: FormTemplateComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
