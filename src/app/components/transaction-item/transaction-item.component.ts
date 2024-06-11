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

//PER MATTEO: ho partecipato al tutoraggio di mercoledi' 11/06 e, visto che avevo trovato online come soluzione ngClass, ho chiesto ad Antonio di mostrarmi un esempio su come usarla. Qui l'ho implementata in una maniera simile di come l'ho vista fare a lui. Nel codice di transaction-item.component.html ho inserito ngClass con operatore ternario, credo vada bene comunque. Aspetto a lezione per vedere come lo avresti fatto tu, grazie mille e a lunedi'.
getSfondo() { 
  return{
    'inv' : this.VociM?.type == 'invoice', //classe 'inv' assegnata alla condizione "this.VociM?.type == 'invoice'"
    'with' : this.VociM?.type == 'withdrawal' //classe 'with' assegnata alla condizione "this.VociM?.type == 'withdrawal'"
  }
    }
}
