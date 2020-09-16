import { Component, OnInit } from '@angular/core';
import * as actions from '../../state/counter.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.pipe(select('counter'));
  }

  ngOnInit(): void {
  }

  clickMe(): void {
    this.store.dispatch(actions.increment());
  }

}
