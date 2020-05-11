import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptOverviewComponent } from './dept-overview/dept-overview.component';
import { DeptContactComponent } from './dept-contact/dept-contact.component';


const routes: Routes = [
  { path: "", redirectTo: '/departments', pathMatch: "full"},
  { path: 'departments', component: DeptListComponent},

  { 
    path: "departments/:id", 
    component: DeptDetailsComponent,
    children : [
      { path : "overview", component: DeptOverviewComponent},
      { path : "contact", component: DeptContactComponent}
    ]
  },

  { path: 'employees', component: EmpListComponent },

  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeptListComponent,
  DeptDetailsComponent,
            EmpListComponent, 
            PageNotFoundComponent,
          DeptOverviewComponent,
        DeptContactComponent]