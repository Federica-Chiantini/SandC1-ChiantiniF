import { Component } from '@angular/core';
import { transaction } from '../../dati/transactions';
import { cardMenu } from '../../models/cardTransaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  transizioni : cardMenu[] = transaction;
}
