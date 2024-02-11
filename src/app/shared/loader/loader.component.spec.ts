import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoaderComponent } from "./loader.component";
import { LoaderService } from "../services/loader.service";
import { Subject, of } from "rxjs";

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;
    let fakeService: any;

    beforeEach(async () => {
        fakeService = {
            open: jest.fn(),
            close: jest.fn(),
            isLoading: new Subject<boolean>(),
            message: new Subject<string>()
        }
        await TestBed.configureTestingModule({
            declarations: [LoaderComponent],
            providers: [
                {
                    provide: LoaderService,
                    useValue: fakeService
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create app', () => {
        const fixture = TestBed.createComponent(LoaderComponent);
        const app = fixture.componentInstance;
        fixture.detectChanges();
        expect(app).toBeTruthy();
    });

    it('should display loader', () => {
        const expectResponse = '';
        jest.spyOn(fakeService, 'open').mockReturnValue(of(expectResponse));
        fixture.detectChanges();
        expect(component.loadingMessage).toBe(expectResponse);
    });
});
