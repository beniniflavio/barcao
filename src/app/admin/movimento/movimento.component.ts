import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.css'],
})
export class MovimentoComponent implements OnInit {
  success: any;
  mensagem: any;
  wrapper: any;

  constructor(private svcAdmin: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.svcAdmin.getMovimentoAberto().subscribe((response) => {
      this.wrapper = response;
      if (this.wrapper.msgSaida[0] == null) {
        this.router.navigate(['Movimento']);
      }
    });
  }
}
