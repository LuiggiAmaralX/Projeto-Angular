import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component( {
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css'
} )
export class BtnPrimaryComponent {
  @Input( "btn-text" ) btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  @Output( "submit" ) onSubmit = new EventEmitter();


  submit() {
    this.onSubmit.emit();
  }

}
