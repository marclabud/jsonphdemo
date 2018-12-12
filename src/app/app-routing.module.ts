import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserlistComponent} from './user/userlist/userlist.component';
import {TodoComponent} from './todo/todo.component';
import {UserselectionComponent} from './user/userselection/userselection.component';

const routes: Routes = [
    {path: 'user', component: UserlistComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'userselection', component: UserselectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
