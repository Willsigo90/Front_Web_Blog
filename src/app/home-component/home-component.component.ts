import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  post: any;
  comments: any;
  postComment: any;
  user: any;
  rol: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
    this.authService.GetUserRol().subscribe((RolResult: string) => {

      console.log("xf")
      this.user = JSON.parse(RolResult);
      console.log(this.user)
      this.rol = this.user.idRolNavigation.nameRol

    });
  }

  getCommentsByPost(option: any){
    console.log(option)
    this.authService.getCommentsById(option.idPost).subscribe((postResult: string) => {
      // this.post = token;
      this.comments = JSON.parse(postResult);
      this.postComment = option;
      console.log(this.postComment);
      console.log(this.comments);
      console.log("xx");
      // console.log(obj);
    });
  }

  getPublishedPost(){
    this.authService.getPublishedPost().subscribe((postResult: string) => {
      // this.post = token;
      this.post = JSON.parse(postResult);
      console.log(this.post);
      console.log("xx");
      // console.log(obj);
    });
  }


  getDetalle(x: any){
    console.log(x);
  }
  
}
