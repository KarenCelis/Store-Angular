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
templateUrl: './product.component.html'
})
export class ProductComponent{

@Input() product: Product;
@Output() productClicked: EventEmitter<any> = new EventEmitter();

today = new Date();
addCart(){

    console.log('añadir al carrito');
}
}
