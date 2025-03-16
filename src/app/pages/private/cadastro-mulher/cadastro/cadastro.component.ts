import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';
import { InputMaskComponent } from '../../../../shared/input-mask/input-mask.component';
import { InputDateComponent } from '../../../../shared/input-date/input-date.component';
import { InputComponent } from '../../../../shared/input/input.component';

@Component({
  selector: 'app-cadastro',
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
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  activeStep: number = 1;

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      data: [null, Validators.required],
      nome: ['', Validators.required],
    });
  }

  handleSalvar() {
    if (this.formGroup.invalid) return this.formGroup.markAllAsTouched();
    console.log(this.formGroup.value);
  }



  goToNextStep() {
  
    if (this.activeStep < 3) {
      this.activeStep++;
    }
  }

  goToPreviousStep() {
    if (this.activeStep > 1) {
      this.activeStep--;
    }
  }
}
