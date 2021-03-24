import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { user } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: user

  constructor(private UserService: UserService,
     private Router: Router,
     private Route: ActivatedRoute) { this.user = {};}

  ngOnInit(): void {
    const id = this.Route.snapshot.paramMap.get('id')
    this.UserService.readById(id || '{}').subscribe(user => {
      this.user = user
    })
  }

  deleteUser(): void {
    this.UserService.delete(this.user.id!).subscribe(() => {
      this.UserService.showMenssage('Usuário excluido com sucesso')
      this.Router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.Router.navigate(['/users'])
  }

}
