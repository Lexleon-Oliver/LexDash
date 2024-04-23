import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-input-phone-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './input-phone-form.component.html',
  styleUrl: './input-phone-form.component.scss'
})
export class InputPhoneFormComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl|any;
  @Input() id!: string;
  @Input() errorMessages: { [key: string]: string } = {};

  selectedMask:string= '(00) 0000-0000';
  private isCelular: boolean =false;
  constructor(
  ) { }

  ngOnInit() {
    console.log("Controi: ", this.control.value.length);
    if( this.control.value.length ===14){
      this.isCelular = true;
      this.selectedMask = '(00) 00000-0000'
    }

  }

  getClass(): { [key: string]: boolean } {
    const hasError = this.control?.invalid && this.control?.touched;
    return { 'error': hasError };

  }

  getErrorKeys(errorObject: { [key: string]: any }): string[] {
    return Object.keys(errorObject || {});
  }

  toggleMask() {

    const telefoneValue = this.control.value;
    const digitCount = telefoneValue.replace(/[^0-9]/g, '').length;

    if (digitCount === 10 && !this.isCelular) {
      this.selectedMask = '(00) 0000-0000';
      this.isCelular = !this.isCelular ;
    } else if (digitCount === 10 && this.isCelular) {
      this.selectedMask = '(00) 00000-0000';
      this.isCelular = !this.isCelular ;

    }
  }

}
