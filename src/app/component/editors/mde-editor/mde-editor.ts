import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-mde-editor',
  imports: [CommonModule, AngularEditorModule, FormsModule],
  templateUrl: './mde-editor.html',
  styleUrl: './mde-editor.scss',
})
export class MdeEditor {
  public htmlContent = '';
}
