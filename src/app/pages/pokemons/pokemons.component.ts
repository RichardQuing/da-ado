import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon} from '../../utils/pokemon';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  //pokemons:Pokemon[]=(pokemonData as any).default;

  pokemons:Pokemon[]=[];
  paginas: number[]=[];
  pokemonsPorPagina: number=20;
  paginaActual: number = 0;
  numPokemons: number = 0;

  constructor(private router:Router, private pokemonsService:PokemonsService) { }

  ngOnInit(): void { 
    this.getPokemons(); 
  }

  getPokemons(pagina: number = 0):void{
    this.pokemons=[];
    this.paginaActual=pagina;
    this.pokemonsService.getPokemons(pagina*this.pokemonsPorPagina,this.pokemonsPorPagina)
    .subscribe((pokemonResponse)=>{
      this.numPokemons=pokemonResponse.count;
      this.paginas=Array(Math.ceil( this.numPokemons/this.pokemonsPorPagina))
      .fill(0).map((_,index)=>index + 1);
      for(const pokemonResult of pokemonResponse.results){
        this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon)=>{
          this.pokemons.push(pokemon);
        });
      }
    });
  }

  onClickPokemon(pokemon:Pokemon):void{
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}