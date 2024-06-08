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

getSfondo() { //creato metodo per controllare se quando viene generato il VociM?.type corrisponde a un valore a cui assegno poi la classe corrispondente
        if(this.VociM?.type === 'invoice'){
          return 'inv' //classe .inv dentro style.css
        }
        if(this.VociM?.type === 'withdrawal'){
          return 'with' //classe .with dentro style.css
        }else{
          return //terzo caso in cui valore non e' uguali a quelli sovrastanti
        }
    }
}
