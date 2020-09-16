import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { ViewComponent } from './containers/view/view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', counterReducer),
  ],
  exports: [
    ViewComponent
  ]
})
export class CounterModule { }
