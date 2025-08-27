import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { StockMarkets } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-stock-market',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './stock-market.html',
  styleUrl: './stock-market.scss',
})
export class StockMarket {
  public stockMarkeData = StockMarkets;
}
