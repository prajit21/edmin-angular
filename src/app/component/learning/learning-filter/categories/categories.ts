import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoriesData } from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, NgbModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  public Categories = CategoriesData;
  public isCollapsed = false;
}
