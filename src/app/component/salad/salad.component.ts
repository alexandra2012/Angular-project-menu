import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CounterInputComponent } from 'src/app/component/counter-input/counter-input.component';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {

  constructor() { }

    form!: FormGroup;

    ngOnInit(): void {
    this.form = this.createForm();
    }

    createForm() {
        return new FormGroup({

            caesar: new FormControl(0),
            cobb: new FormControl(0),
            caprese: new FormControl(0),
            larb: new FormControl(0),
            nicoise: new FormControl(0),
            tabbouli: new FormControl(0),
            waldorf: new FormControl(0),
            salad_size: new FormControl('')
        });
    }
}
