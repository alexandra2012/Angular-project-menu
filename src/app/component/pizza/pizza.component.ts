import { Component, OnInit } from '@angular/core';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})

export class PizzaComponent implements OnInit {
    
  constructor() { }

  form!: FormGroup;

  ngOnInit(): void {
  this.form = this.createForm();
  }

  createForm() {
      return new FormGroup({

        margherita: new FormControl(0),
        pepperoni: new FormControl(0),
        bbq: new FormControl(0),
        hawaiian: new FormControl(0),
        neapolitan: new FormControl(0),
        calzone: new FormControl(0),
        capricciosa: new FormControl(0),
        pizza_size: new FormControl('')
          
      });
  }
}





           