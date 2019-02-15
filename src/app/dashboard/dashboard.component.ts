import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public query: string;

  constructor(private activeRoute: ActivatedRoute) {
    this.query = null;
  }

  ngOnInit() {
    this.activeRoute.url.subscribe(
      () => (this.query = this.activeRoute.snapshot.params['query'])
    );
  }
}
