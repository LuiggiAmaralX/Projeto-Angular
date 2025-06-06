import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component( {
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, NgOptimizedImage, BtnPrimaryComponent ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
} )
export class HomeComponent {

}
