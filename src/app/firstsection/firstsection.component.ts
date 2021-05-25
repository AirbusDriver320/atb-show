import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-firstsection',
  templateUrl: './firstsection.component.html',
  styleUrls: ['./firstsection.component.css']
})
export class FirstsectionComponent implements OnInit {
  @Input() pageData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
