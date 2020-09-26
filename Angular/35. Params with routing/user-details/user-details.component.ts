import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id=""
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    console.warn(this.route.snapshot.params);
    this.id=this.route.snapshot.params.id
  }

}
