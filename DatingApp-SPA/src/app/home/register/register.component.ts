import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

    // tslint:disable-next-line: typedef
    register() {
      this.authService.register(this.model).subscribe(() => {
        console.log('Registration Successful');
      }, error => {
        console.log('Error');
      });
    }

    // tslint:disable-next-line: typedef
    cancel(){
      this.cancelRegister.emit(false);
      console.log('Cancelled');
    }
}
