import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component( {
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
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
