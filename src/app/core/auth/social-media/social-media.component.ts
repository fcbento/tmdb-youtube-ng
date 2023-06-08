import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SocialMedia } from '../../enums/auth.enum';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit(): void {
  }

  public authSocial(socialMedia: string): void {
    switch (socialMedia) {
      case SocialMedia.GOOGLE:
        this.service.socialMediaAuth(SocialMedia.GOOGLE);
        break;
      case SocialMedia.FACEBOOK:
        this.service.socialMediaAuth(SocialMedia.FACEBOOK);
        break;
      case SocialMedia.TWITTER:
        this.service.socialMediaAuth(SocialMedia.TWITTER);
        break;
      case SocialMedia.GITHUB:
        this.service.socialMediaAuth(SocialMedia.GITHUB);
        break;
    }
  }

}