import { Component, Input } from '@angular/core';
import { cardMenu } from '../../models/cardTransaction';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.css'
})
export class TransactionItemComponent {
    @Input()
    VociM ?: cardMenu;

getSfondo() { 
  return{
    'inv' : this.VociM?.type == 'invoice', //classe 'inv' assegnata alla condizione "this.VociM?.type == 'invoice'"
    'with' : this.VociM?.type == 'withdrawal' //classe 'with' assegnata alla condizione "this.VociM?.type == 'withdrawal'"
  }
    }
}
