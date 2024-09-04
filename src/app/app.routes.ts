import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Error404Component } from './pages/error404/error404.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { LoginComponent } from './pages/login/login.component';
import { TodosComponent } from './pages/todos/todos.component';
import { permissionsGuard } from './guards/permissions.guard';
import { warningsGuard } from './guards/warnings.guard';
import { canActivate ,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { NgzorroComponent } from './pages/ngzorro/ngzorro.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pokemons', component: PokemonsComponent,...canActivate(()=>redirectUnauthorizedTo(['/login']))},
    {path: 'pokemon/:id', component: PokemonComponent},
    {path: 'acercade', component: AcercadeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'posts', component: ListPostsComponent ,canDeactivate: [warningsGuard]},
    {path: 'todos', component: TodosComponent,canActivate: [permissionsGuard]},
    {path: 'ngzorro', component: NgzorroComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', component: Error404Component},
];