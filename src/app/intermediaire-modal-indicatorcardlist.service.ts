// indicator-event.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Indicator } from './models/Indicator';

@Injectable({
  providedIn: 'root',
})
export class IntermediaireModalIndicatorCardlistService {
  private indicatorClickedSource = new Subject<Indicator>();

  indicatorClicked$ = this.indicatorClickedSource.asObservable();

  emitIndicatorClicked(indicator: Indicator) {
    this.indicatorClickedSource.next(indicator);
  }
}
