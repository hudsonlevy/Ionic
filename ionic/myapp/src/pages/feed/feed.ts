import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider  
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Charles Franca",
    data:"November 5, 1955",
    descricao:"Estou criando um app incrível...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment:"11h ago"
  }

public nome_usuario:string = "Charles Franca do Código";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

public somaDoisNumeros(num1:number, num2:number): void{
  alert(num1 + num2);
}

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        console.log(data);        
      }, error => {
        console.log(error);
      }
    )
  }

}