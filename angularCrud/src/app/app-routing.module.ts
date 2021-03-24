import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { UserCrudComponent } from './views/user-crud/user-crud.component'
import { UserCreateComponent } from './components/user/user-create/user-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "users",
  component: UserCrudComponent
},{
  path: 'users/create',
  component: UserCreateComponent
},
{
  path: "users/update/:id",
  component: UserUpdateComponent
},
{
  path: "users/delete/:id",
  component: UserDeleteComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
