import { Component, OnInit } from '@angular/core';
import { NotficationService } from '../services/notfication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private notification: NotficationService) { }


  ngOnInit(): void {

    this.notification.showSuccess("Data shown successfully !!", "tutsmake.com")

  }

}
