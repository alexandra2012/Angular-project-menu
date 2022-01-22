import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
import { BackgroundImagesComponent } from './component/background-images-left/background-images.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    return new FormGroup({

    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    });
  } 
} 



