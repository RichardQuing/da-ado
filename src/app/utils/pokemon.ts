export interface PokemonSprites{
    front_default:string;
    front_shiny:string;
    front_female:string;
    front_shiny_female:string;
    back_default:string;
    back_shiny:string;
    back_female:string;
    back_shiny_female:string;
}

export interface PokemonTypes{
    slot:number;
    type:{
        name:string;
        url:string
    };
}

export interface Pokemon{
    id:number;
    name:string;
    weight:number;
    height:number;
    sprites:PokemonSprites;
    types:PokemonTypes[];
}

export interface PokemonResponse{
    count:number;
    next:string;
    previous:string;
    results:{
        name:string;
        url:string
    }[];
}