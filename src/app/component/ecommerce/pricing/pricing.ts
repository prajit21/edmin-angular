import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BecomeMember } from './become-member/become-member';
import { SimplePricingCard } from './simple-pricing-card/simple-pricing-card';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, BecomeMember, SimplePricingCard],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {}
