import { Component } from '@angular/core';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { PokemonResponse } from '../../utils/pokemon';

function randomInt(max: number) {
return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
pokemons:Pokemon[]=[];
indicePokemonSemana:number=randomInt(20);


  constructor( private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
this.getPokemons();  
}

  getPokemons():void{
    this.pokemonsService.getPokemons().subscribe((pokemonResponse)=>{
      for(const pokemonResult of pokemonResponse.results){
        this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon)=>{
          this.pokemons.push(pokemon);
        });
      }
    });
}}