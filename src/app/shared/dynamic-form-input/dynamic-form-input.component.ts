import { Component,  Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/model/FormField';


@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent {

  @Input() input!: FormField<string>;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.input.key].valid; }

  getChange(event:any) {
    var price = parseFloat(document.getElementById(event.target.id+"price")!.innerText) ;

    document.getElementById(event.target.id+"amount")!.innerText = event.target.value + ' * ';
    document.getElementById(event.target.id+"subtotal")!.innerText =(event.target.value*price).toFixed(2) ;

  }
}
