import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wonky-tooltip',
  imports: [NgbModule],
  templateUrl: './wonky-tooltip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './wonky-tooltip.scss',
})
export class WonkyTooltip {}
