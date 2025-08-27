import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { articlesAndVideos } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-latest-artical-videos',
  imports: [CommonModule],
  templateUrl: './latest-artical-videos.html',
  styleUrl: './latest-artical-videos.scss',
})
export class LatestArticalVideos {
  readonly data = input<articlesAndVideos[]>();
}
