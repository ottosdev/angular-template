import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-input',
  imports: [InputTextModule, FloatLabel, ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() id!: string;
  @Input() mask: string = '';
  @Input() floatLabel: string = '';
  @Input() controlName: string = '';
  @Input() formGroup!: FormGroup;
  @Input() colSpan: string = 'col-span-1';
  isInvalid(): boolean {
    const control = this.formGroup?.get(this.controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}
