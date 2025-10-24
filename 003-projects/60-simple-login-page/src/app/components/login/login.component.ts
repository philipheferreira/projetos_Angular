import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // adicionado FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule], // importado forms module
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  currentUser = 'No user is logined'
  userName: string = ''
  password: any;
  message = ''
  msgs = false
  isHidden = true

  loginData = [
    {
      'username': 'aneesha',
      'password': '12345'
    },
    {
      'username': 'aneeshatomy',
      'password': 'ann@123'
    },
    {
      'username': 'anu',
      'password': '123'
    },
    {
      'username': 'tomy',
      'password': 'tomy12'
    },
    {
      'username': 'athira',
      'password': '12athira'
    },
  ]
  checkLogin() {
    if (this.userName && this.password) {
      let name = this.userName
      let pswd = this.password
      // console.log(name,pswd)
      console.log(this.loginData)
      const result = this.loginData.find(result => result.username == name && result.password == pswd)
      console.log(result)
      if (result) {
        this.isHidden = false
        this.msgs = true
        this.message = 'successfull'
        this.currentUser = this.userName

        setTimeout(() => {
          this.isHidden = true

        }, 1000)
      }

      else {
        this.isHidden = false
        this.msgs = false
        this.message = 'something wrong'
        setTimeout(() => {
          this.isHidden = true
        }, 5000)
      }
      this.userName = ''
      this.password = ''
    }
  }
}
