import { TestBed } from "@angular/core/testing";
import { CardComponent } from "./card.component";
import { environment } from "src/environments/environment";

describe('CardComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardComponent],
        }).compileComponents();
    });

    it('should have image', () => {
        const fixture = TestBed.createComponent(CardComponent);
        const app = fixture.componentInstance;
        app.data = {
            "adult": false,
            "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
            "genre_ids": [
                28,
                53,
                18
            ],
            "id": 866398,
            "original_language": "en",
            "original_title": "The Beekeeper",
            "overview": "One man's campaign for vengeance takes on national.",
            "popularity": 3775.726,
            "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
            "release_date": "2024-01-10",
            "title": "The Beekeeper",
            "video": false,
            "vote_average": 7.249,
            "vote_count": 884
        }
        app.image =  environment.API.photoURL + app.data.poster_path;
        fixture.detectChanges();
        expect(app).toBeTruthy();
    });
});
