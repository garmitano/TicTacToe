import { console } from "../Utils/console.js";
import { Turn } from "../Models/Turn.js";
import { CombinationView } from "./CombinationView.js";

export class TurnView {
   #turn;
   #combinationView;
   #boarView;

   constructor(boardView) {
      this.#boarView = boardView;
      this.#turn = new Turn();
      this.#combinationView = new CombinationView();
   }

   askModeGame() {
      let numPlayers;
      console.writeln(
         "(0)- Demo\n(1)- Human vs Machine\n(2)- Human vs Human\n"
      );
      numPlayers = console.readString("Elija modo de juego: ");
      return numPlayers;
   }

   interact(numPlayers) {
      if (numPlayers == 0) {
         console.writeln("Demo");
      } else if (numPlayers == 1) {
         console.writeln("Human vs Machine");
      } else {
         console.writeln("Human vs Human");
      }
   }
}
