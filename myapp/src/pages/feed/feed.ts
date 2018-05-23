import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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

  public lista_filmes = new Array<any>();
  public page = 1;

public nome_usuario:string = "Charles Franca do Código";
public loader;
public refresher;
public isRefrehsing: boolean = false;
public infiniteScroll;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Filmes...",
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefrehsing = true;

    this.carregarFilmes();  
  }

public somaDoisNumeros(num1:number, num2:number): void{
  alert(num1 + num2);
}

  ionViewDidEnter() {
    this.carregarFilmes();  
  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false) {
    this.abreCarregando();
    //this.somaDoisNumeros(10, 99);
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        if(newpage) {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          this.infiniteScroll.complete();
        }else {
          this.lista_filmes = objeto_retorno.results;
        }
     
        this.fechaCarregando();
        if (this.isRefrehsing){
          this.refresher.complete();
          this.isRefrehsing = false;
        }
      }, error => {
        console.log(error);
        this.fechaCarregando();
        if (this.isRefrehsing){
          this.refresher.complete();
          this.isRefrehsing = false;
        }
      }
    )
  }

}