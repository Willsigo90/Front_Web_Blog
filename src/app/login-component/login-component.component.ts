import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  title = 'BlogUI';
  user = new User();
  to : any
  post: any;

  listaTipoDocumento: any;

  constructor(private authService: AuthService, private router: Router) {}

  login(user: User) {
    this.authService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
    });
    
    console.log(localStorage.getItem('authToken'))
    if(localStorage.getItem('authToken')){
      this.to = localStorage.getItem('authToken');
      this.router.navigate(['/home'])

      // let x = this.authService.getCommentsById(13);

      // this.authService.getCommentsById(13).subscribe((token: string) => {
      //   this.post = token;
      //   console.log(this.post);
      // });


      // console.log(x);
    }
  }

  getme() {
    this.authService.getMe().subscribe((name: string) => {
      console.log(name);
    });
  }


  
}