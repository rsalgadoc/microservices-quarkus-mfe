
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, LayoutRoutingModule, CommonModule],
})
export class LayoutModule {}
