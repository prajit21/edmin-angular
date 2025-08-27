import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../feathericon/feathericon';

@Component({
  selector: 'app-messages',
  imports: [CommonModule, RouterModule, Feathericon],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {
  public messages: boolean = false;

  message() {
    this.messages = !this.messages;
  }

  clickOutside(): void {
    this.messages = false;
  }
}
