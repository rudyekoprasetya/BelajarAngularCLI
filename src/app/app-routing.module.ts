import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalcComponent } from './pages/calc/calc.component';
import { BindComponent } from './pages/bind/bind.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { RestclientComponent } from './pages/restclient/restclient.component';

const routes: Routes = [
	{
		 //routing ke laman / component home
		 path: 'home', component: HomeComponent
	},
	{
		path: 'about', component: AboutComponent
	},
	{
		path: 'calc', component: CalcComponent
	},
	{
		path: 'bind', component: BindComponent
	},
	{
		path: 'todoapp', component: TodoappComponent
	},
	{
		path: 'restclient', component: RestclientComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
