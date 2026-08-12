import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Finances } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-finance',
  imports: [NgApexchartsModule],
  templateUrl: './finance.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './finance.scss',
})
export class Finance {
  public financesData = Finances;
}
