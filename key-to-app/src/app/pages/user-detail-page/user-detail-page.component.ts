import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  public subMenuItems:String[] = ["Access Points", "Cardholders", "Keys", "Monitoring", "Hotel", "Tools", "System"];

  constructor() { }

  ngOnInit(): void {
  }

}
