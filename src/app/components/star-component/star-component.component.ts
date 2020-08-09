import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnInit {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  //ngOnChangess- se koristi pri promena
  //na nekoi od @Input() atributite na 
  //komponentata
  ngOnChanges() : void{
    this.starWidth = this.rating * 75 / 5;
  }


  onClick() : void{
    // console.log('The rating ${this.rating} was clicked');
    this.ratingClicked.emit('clicked!');
  }

}
