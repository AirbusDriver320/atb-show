import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thirdsection',
  templateUrl: './thirdsection.component.html',
  styleUrls: ['./thirdsection.component.css']
})
export class ThirdsectionComponent implements OnInit {
  @Input() pageData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
