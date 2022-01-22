import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';

@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.component.html',
  styleUrls: ['./non-alcoholic.component.scss']
})
export class NonAlcoholicComponent implements OnInit {

    constructor() { }

    form!: FormGroup;

    ngOnInit(): void {
    this.form = this.createForm();
    }

    createForm() {
        return new FormGroup({

            cola: new FormControl(0),
            pepsi: new FormControl(0),
            fanta: new FormControl(0),
            sprite: new FormControl(0),
            orange_juice: new FormControl(0),
            apple_juice: new FormControl(0),
            anannas_juice: new FormControl(0)

            
        });
    }
}
