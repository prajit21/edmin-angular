import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-tooltip',
  imports: [NgbModule],
  templateUrl: './image-tooltip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './image-tooltip.scss',
})
export class ImageTooltip {}
