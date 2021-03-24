import { user } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: user = {
    id: 0,
    name: '',
    office: ''
  }

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

  }

  creatUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMenssage('Usuário criado !')
      this.router.navigate(['/users'])

    })
  }

  cancel(): void {
    this.router.navigate(['/users'])

  }
}
