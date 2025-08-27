import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { UsersCards } from '../../user/users-cards/users-cards';

@Component({
  selector: 'app-friends',
  imports: [CommonModule, UsersCards],
  templateUrl: './friends.html',
  styleUrl: './friends.scss',
})
export class Friends {}
