import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaskComponent } from '../../../shared/input-mask/input-mask.component';
import { InputDateComponent } from '../../../shared/input-date/input-date.component';
import { InputComponent } from "../../../shared/input/input.component";
@Component({
  selector: 'app-dashboard',
  imports: [
    StepperModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    InputMaskComponent,
    InputDateComponent,
    InputComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  
}
