import { Component, OnInit, inject } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SessionUser } from 'src/app/core/auth/store/session.model';
import { SessionSelectors } from 'src/app/core/auth/store/session.selectors';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  @Select(SessionSelectors.session)
  session$: Observable<SessionUser>;

  private service = inject(AuthService);
  
  ngOnInit(): void {
  }

  logout(): void {
    this.service.logout();
  }

}
