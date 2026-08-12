import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HorizontalLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-default-lists',
  imports: [],
  templateUrl: './default-lists.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './default-lists.scss',
})
export class DefaultLists {
  public DefaultData = HorizontalLists;
}
