import { Component } from '@angular/core';
import { RoutesPath } from 'src/app/shared/constants/routes-path';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  RoutesPath = RoutesPath;
}
