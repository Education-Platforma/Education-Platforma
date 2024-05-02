import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterProtectGuard } from './guards/Admin/admin.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverwiewComponent } from './components/pages/overwiew/overwiew.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'overview', title: 'OverView', component: OverwiewComponent},
  { path: 'courses', title: 'OverView', component: OverwiewComponent},
  { path: 'schedule', title: 'OverView', component: OverwiewComponent},
  { path: 'messaging', title: 'OverView', component: OverwiewComponent},
  { path: 'leaderboard', title: 'OverView', component: OverwiewComponent},
  { path: 'course-detail', title: 'OverView', component: OverwiewComponent},
  { path: 'profile', title: 'OverView', component: OverwiewComponent},
  { path: 'quiz', title: 'OverView', component: OverwiewComponent},
  { path: '', title: 'OverView', component: OverwiewComponent},
  { path: '**', title: 'Not Found', component: NotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

