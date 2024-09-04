import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive  } from '@angular/router';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { PokemonsService } from '../../services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
pokemon?:Pokemon;

constructor(private route:ActivatedRoute, private pokemonsService:PokemonsService){ }

ngOnInit(): void {
this.route.paramMap.subscribe(
    (params)=>{
      const id =Number( params.get("id"));
      this.pokemonsService.getPokemon(id).subscribe(
        (pokemon)=>{
        this.pokemon=pokemon;
      }
      )
    }
  );
}
}
