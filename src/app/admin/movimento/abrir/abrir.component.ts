import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movimento } from 'src/app/model/Movimento';
import { AdminService } from 'src/app/services/admin.service';
import { AbrirService } from './abrir.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-abrir',
  templateUrl: './abrir.component.html',
  styleUrls: ['./abrir.component.css'],
})
export class AbrirComponent implements OnInit {
  success: any;

  formMovimento!: FormGroup;


  wrapper: any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private admService: AdminService,
    private service: AbrirService
  ) {}

  ngOnInit(): void {
    this.success = false;
    this.admService.getMovimentoAberto().subscribe((response) => {
      this.wrapper = response;
      let mov = new Movimento();
      mov.suprimento =
        this.wrapper.msgSaida[0] == null ? 0.0 : this.wrapper.msgSaida[0];
      this.createForm(mov);
    });
  }

  createForm(m: Movimento) {
    this.formMovimento = new FormGroup({
      suprimento: new FormControl(),

    });

    this.formMovimento.setValue({
      suprimento: m.suprimento,
    });
  }

  onSubmit() {
    this.service.setMovimento(this.formMovimento).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        this.success = true;
      },
    });
  }
}
