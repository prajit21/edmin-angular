import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notification',
  imports: [RouterModule],
  templateUrl: './notification.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './notification.scss',
})
export class Notification {
  public notifications: boolean = false;

  notification() {
    this.notifications = !this.notifications;
  }

  clickOutside(): void {
    this.notifications = false;
  }
}
