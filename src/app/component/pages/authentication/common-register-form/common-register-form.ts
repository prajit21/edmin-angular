import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-common-register-form',
  imports: [CommonModule, RouterModule],
  templateUrl: './common-register-form.html',
  styleUrl: './common-register-form.scss',
})
export class CommonRegisterForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
