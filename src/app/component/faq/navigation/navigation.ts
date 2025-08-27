import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { navigationData1 } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  public navigationData = navigationData1;
}
