import { SessionUser } from "./session.model";

export class Session {
    static readonly type = "[Session] Get user logged";
    constructor(public session: SessionUser) { }
}