import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { LayoutComponent } from './layout/layout.component';
import { HeaderModule } from './header/header.module';


@NgModule({
 declarations: [
   LayoutComponent,
 ],
 imports: [
   RouterModule,
   CommonModule,
   HeaderModule,
 ],
 exports: [
   RouterModule,
   CommonModule,
   HeaderModule,
 ],
})
export class SharedModule {}