import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
@Component({
  selector: 'app-input-date',
  imports: [DatePickerModule, ReactiveFormsModule, FloatLabel, CommonModule],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.css',
})
export class InputDateComponent {
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;
  @Input() floatLabel!: string;
  @Input() id!: string;
  @Input() colSpan: string = 'col-span-1';

  isInvalid(): boolean {
    const control = this.formGroup?.get(this.controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}
