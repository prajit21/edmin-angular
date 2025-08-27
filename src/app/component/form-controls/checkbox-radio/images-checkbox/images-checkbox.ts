import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { imageChekbox } from '../../../../shared/data/form-controls/checkbox-radio';

@Component({
  selector: 'app-images-checkbox',
  imports: [CommonModule, FormsModule],
  templateUrl: './images-checkbox.html',
  styleUrl: './images-checkbox.scss',
})
export class ImagesCheckbox {
  public imgcheckboxData = imageChekbox;
}
