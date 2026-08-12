import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as data from '../../../shared/data/buttons/buttons';

@Component({
  selector: 'app-buttons-size',
  imports: [NgClass],
  templateUrl: './buttons-size.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './buttons-size.scss',
})
export class ButtonsSize {
  public openTab: string = 'Default';
  public ButtonData = data.buttonSizeData;

  public tabbed(val: string) {
    this.openTab = val;
  }
}
