import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from '../module/klasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {

  @Input()
  ime: String = "";

  @Input()
  vozac: Driver = {} as Driver;

  @Input()
  reden: Number = 0;

  @Output()
  cuci: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
      
  }

  klasi() {
    return {'poz':this.vozac.category == "ADVANCED", 
    'course-card': true};
  }
  getDecoration() {
    if(this.vozac.points>400) {
      return 'underline';
    }
    return 'none'
  }
  getColor() {
    if(this.vozac.team=="Red Bull") {
      return 'red';
    }
    return 'black';
  }
  klik() {
    var link=this.vozac.iconUrl;
    window.open(link, "_blank");
    console.log("Clicked");
    this.cuci.emit(this.vozac);
  }

}
