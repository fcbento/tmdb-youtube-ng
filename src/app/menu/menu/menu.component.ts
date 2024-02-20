import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private service = inject(AuthService);

  ngOnInit(): void {
  }

  logout(): void {
    this.service.logout();
  }

}
