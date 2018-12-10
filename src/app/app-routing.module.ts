import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {TodoComponent} from './todo/todo.component';
import {UserselectionComponent} from './userselection/userselection.component';

const routes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'userselection', component: UserselectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
