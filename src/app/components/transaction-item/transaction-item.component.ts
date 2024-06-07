import { Component, Input } from '@angular/core';
import { cardMenu } from '../../models/cardTransaction';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.css'
})
export class TransactionItemComponent {
    @Input()
    VociM?: cardMenu;
}
