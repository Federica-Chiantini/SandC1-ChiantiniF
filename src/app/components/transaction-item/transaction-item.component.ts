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

//PER MATTEO: non sono sicura che sia il metodo migliore ma funziona, ho deciso di lasciarlo per chiederti eventualmente una spiegazione a lezione
getSfondo() { 
  if(this.VociM?.type === 'invoice'){
          return 'inv' 
        }
        if(this.VociM?.type === 'withdrawal'){
          return 'with' 
        }else{
          return //terzo caso in cui valore non e' uguali a quelli sovrastanti
        }
    }
}
