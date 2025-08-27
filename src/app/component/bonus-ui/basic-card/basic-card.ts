import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CommonSecondaryCard } from './common-secondary-card/common-secondary-card';
import { DarkColorCard } from './dark-color-card/dark-color-card';
import { TopCommonCard } from './top-common-card/top-common-card';

@Component({
  selector: 'app-basic-card',
  imports: [CommonModule, CommonSecondaryCard, DarkColorCard, TopCommonCard],
  templateUrl: './basic-card.html',
  styleUrl: './basic-card.scss',
})
export class BasicCard {}
