import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-common-register-form',
  imports: [RouterModule],
  templateUrl: './common-register-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-register-form.scss',
})
export class CommonRegisterForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
