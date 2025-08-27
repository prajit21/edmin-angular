import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HorizontalLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-default-lists',
  imports: [CommonModule],
  templateUrl: './default-lists.html',
  styleUrl: './default-lists.scss',
})
export class DefaultLists {
  public DefaultData = HorizontalLists;
}
