import { Selector } from "@ngxs/store";
import { MovieState } from "./movies.state";

export class MoviesSelectors {
    
  @Selector([MovieState])
  static movies(state: MovieState) {
    return state;
  }
}