import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-writer-component',
  templateUrl: './writer-component.component.html',
  styleUrls: ['./writer-component.component.css']
})
export class WriterComponentComponent implements OnInit {

  

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
