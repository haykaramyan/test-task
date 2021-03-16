import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {HeaderComponent} from '../shared/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, HomeComponent, CartComponent, ProfileComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenubarModule,
    CalendarModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    ToastModule,
    ConfirmDialogModule,
    RippleModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class LayoutModule { }
