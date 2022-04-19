import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PdfPageComponent } from './pdf-page/pdf-page.component';

const routes: Routes = [
  {

      path: '',
      component: HomeComponent,
      pathMatch: 'full'

  },
  {

    path: 'curriculo/:id',
    component: PdfPageComponent,
    pathMatch: 'full'

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
