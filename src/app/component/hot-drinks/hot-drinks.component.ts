import { Component, OnInit } from '@angular/core';
import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-hot-drinks',
  templateUrl: './hot-drinks.component.html',
  styleUrls: ['./hot-drinks.component.scss']
})
export class HotDrinksComponent implements OnInit {
    
    constructor() { }

    form!: FormGroup;

    ngOnInit(): void {
    this.form = this.createForm();
    }

    createForm() {
        return new FormGroup({

            cappuccino: new FormControl(0),
            mocha: new FormControl(0),
            americano: new FormControl(0),
            frape: new FormControl(0),
            chocolate: new FormControl(0),
            milk: new FormControl(0),
            tea: new FormControl(0),
            
        });
    }
}
