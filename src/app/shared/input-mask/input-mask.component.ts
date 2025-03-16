import { Component, Input } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import {FloatLabelModule } from 'primeng/floatlabel'
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input-mask',
  imports: [InputMaskModule, FloatLabelModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-mask.component.html',
  styleUrl: './input-mask.component.css'
})
export class InputMaskComponent {
  @Input() id!: string;
  @Input() mask: string = '';
  @Input() floatLabel: string = '';
  @Input() controlName: string = '';
  @Input() formGroup!: FormGroup;
  isInvalid(): boolean {
    const control = this.formGroup?.get(this.controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}
