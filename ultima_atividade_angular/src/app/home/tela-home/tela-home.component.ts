import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.css']
})
export class TelaHomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
  }

}
