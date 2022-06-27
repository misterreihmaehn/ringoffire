import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }

newGame() {
  //startGame
  let game = new Game();
  this.firestore
  .collection('games')
  .add(game.toJson())
  .then((GameInfo: any) => {
    console.log(GameInfo.id);
       this.router.navigateByUrl('/game/' + GameInfo.id);
  });


  
}



}
