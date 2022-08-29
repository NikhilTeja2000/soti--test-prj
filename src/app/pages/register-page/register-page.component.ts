import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userModel= new user();
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    this.auth.register(this.userModel).subscribe((response)=>{
      console.log(response)
    })
  }
}
