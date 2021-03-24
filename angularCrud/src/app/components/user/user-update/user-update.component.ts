import { user } from './../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: user

  constructor(private UserService: UserService, private Router: Router, private route: ActivatedRoute) {
    this.user = {};
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.UserService.readById(id || '{}').subscribe(user =>
      this.user = user
    );
  }

  updateUser(): void {
    this.UserService.update(this.user).subscribe(() => {
      this.UserService.showMenssage('Usuário atualizado com sucesso!')
      this.Router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.Router.navigate(['/users'])
  }

}
