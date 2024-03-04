import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { SessionUser } from "./session.model";
import { Session } from "./session.actions";

@State<SessionUser>({
  name: "session",
  defaults: {
    displayName: '',
    email: '',
    emailVerified: false,
    photoURL: '',
    uid: ''
  },
})

@Injectable()
export class SessionState {

  @Action(Session)
  getSession(ctx: StateContext<SessionUser>, action: Session) {
    ctx.patchState(action.session);
  }
}