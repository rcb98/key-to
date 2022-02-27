import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SubMenuComponent } from '../components/sub-menu/sub-menu.component';
import { LateralMenuComponent } from '../components/lateral-menu/lateral-menu.component';
import { UserDetailComponent } from '../components/user-detail/user-detail.component';
import { BottomActionsComponent } from '../components/bottom-actions/bottom-actions.component';

@NgModule({
  declarations: [
    UserDetailPageComponent,
    MenuComponent,
    SubMenuComponent,
    LateralMenuComponent,
    UserDetailComponent,
    BottomActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class PagesModule { }
