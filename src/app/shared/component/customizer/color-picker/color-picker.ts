import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-color-picker',
  imports: [CommonModule, FormsModule],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.scss',
})
export class ColorPicker {
  public primary: string = '#43B9B2';
  public secondary: string = '#C280D2';
  public MIXLayout: string = 'default';

  public primary_color = localStorage.getItem('primary_color') || '#43B9B2';
  public secondary_color = localStorage.getItem('secondary_color') || '#C280D2';

  public layout = inject(LayoutService);
  constructor() {
    document.documentElement.style.setProperty(
      '--theme-deafult',
      localStorage.getItem('primary_color'),
    );
    document.documentElement.style.setProperty(
      '--theme-secondary',
      localStorage.getItem('secondary_color'),
    );
    var primary = localStorage.getItem('primary_color') || this.layout.config.color.secondary_color;
    var secondary =
      localStorage.getItem('secondary_color') || this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem('primary_color') || this.layout.config.color.primary_color;
    localStorage.getItem('secondary_color') || this.layout.config.color.secondary_color;
  }

  applyColor() {
    localStorage.setItem('primary_color', this.primary_color);
    localStorage.setItem('secondary_color', this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty('--theme-deafult', '#43B9B2');
    document.documentElement.style.setProperty('--theme-secondary', '#C280D2');
    (<HTMLInputElement>document.getElementById('ColorPicker1')).value = '#43B9B2';
    (<HTMLInputElement>document.getElementById('ColorPicker2')).value = '#C280D2';
    this.layout.config.color.primary_color = '#43B9B2';
    this.layout.config.color.secondary_color = '#C280D2';
    localStorage.setItem('primary_color', '#43B9B2');
    localStorage.setItem('secondary_color', '#C280D2');
    window.location.reload();
  }
}
