import { Injectable, inject } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Movies, MoviesResult } from "./movies.model";
import { GetMovies } from "./movies.actions";
import { MovieService } from "../services/movie.service";

@State<Movies[]>({
    name: "movies",
    defaults: [],
})

@Injectable()
export class MovieState {

    private service = inject(MovieService);

    @Action(GetMovies)
    getMovies(ctx: StateContext<Movies[]>) {
        this.service.getPopular().subscribe({
            next: (movies: MoviesResult) => ctx.setState(movies.results)
        });
    }
}