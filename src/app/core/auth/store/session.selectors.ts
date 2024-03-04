import { Selector } from "@ngxs/store";
import { SessionState } from "./session.state";
import { SessionUser } from "./session.model";

export class SessionSelectors {

  @Selector([SessionState])
  static session(state: SessionUser) {
    return state;
  }

}