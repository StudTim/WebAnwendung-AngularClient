import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-global-menu',
  templateUrl: './global-menu.component.html',
  styleUrls: ['./global-menu.component.scss']
})
export class GlobalMenuComponent implements OnInit {

  @Output() public close: EventEmitter<void> = new EventEmitter();
  public searchText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public onInputKeyUp(): void {

  }

  public onCloseClicked(): void {
    this.close.next();
  }

  public onInputClicked(event: Event): void {
    event.stopPropagation();
  }
}
