import {  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy} from '@angular/core';
import {Product} from '../../../product.model';
@Component({

selector: 'app-product',
templateUrl: './product.component.html',
styleUrls: ['./product.component.scss']
})
export class ProductComponent{

@Input() product: Product;
@Output() productClicked: EventEmitter<any> = new EventEmitter();

today = new Date();


constructor() {
  console.log('1. constructor');
}

ngOnInit() {
  console.log('3. ngOnInit');
}

ngOnDestroy() {
  console.log('5. ngOnDestroy');
}
addCart(){


    console.log('añadir al carrito');
}
}
