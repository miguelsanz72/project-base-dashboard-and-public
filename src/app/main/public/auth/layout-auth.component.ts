import { Component, OnInit } from '@angular/core';
import { systemAnimations } from '@theme/animations';

@Component({
  selector: 'app-layout-auth',
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.scss'],
  animations: systemAnimations,
})
export class LayoutAuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
