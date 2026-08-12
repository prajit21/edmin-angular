import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoriesData } from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-categories',
  imports: [NgbModule],
  templateUrl: './categories.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './categories.scss',
})
export class Categories {
  public Categories = CategoriesData;
  public isCollapsed = false;
}
