import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class SplitViewService {

  public canRenderLeft: boolean = true;
  public canRenderRight: boolean = true;

  private userHasChoosenRight: boolean = false;

  constructor(private flex: MediaObserver) { }

  public beginObservation(): void {
    this.calculateRenderStats();
    this.flex.asObservable().subscribe(this.calculateRenderStats.bind(this));
  }

  public showRight(): void {
    this.userHasChoosenRight = true;
    this.calculateRenderStats();
  }

  public showLeft(): void {
    this.userHasChoosenRight = false;
    this.calculateRenderStats();
  }

  private calculateRenderStats(): void {
    _.defer(() => {
      if (this.flex.isActive("gt-sm")) {
        this.canRenderLeft = true;
        this.canRenderRight = true;
      } else {
        if (this.userHasChoosenRight) {
          this.canRenderLeft = false;
          this.canRenderRight = true;
        } else {
          this.canRenderLeft = true;
          this.canRenderRight = false;
        }

      }
    });

  }

}
