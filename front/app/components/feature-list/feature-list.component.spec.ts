import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { FeatureListComponent } from './feature-list.component';
import { FeaturesService } from '../../services/features.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

class MockFeaturesService extends FeaturesService {
}

describe('FeatureListComponent', () => {
    let component: FeatureListComponent;
    let fixture: ComponentFixture<FeatureListComponent>;
    let testBedService: FeaturesService;
    let componentService: FeaturesService;
    let httpMock: HttpTestingController;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            declarations: [
                FeatureListComponent
            ],
            providers: [
                FeaturesService,
            ]
        });

        TestBed.overrideComponent(
            FeatureListComponent,
            { set: { providers: [{ provide: FeaturesService, useClass: MockFeaturesService }] } }
        );

        fixture = TestBed.createComponent(FeatureListComponent);
        component = fixture.componentInstance;
        testBedService = TestBed.get(FeaturesService);
        httpMock = TestBed.get(HttpTestingController);
        componentService = fixture.debugElement.injector.get(FeaturesService);
    }));

    afterEach(() => {
        httpMock.verify();
    });

    it('Service injected via component should be and instance of MockFeaturesService', () => {
        expect(componentService instanceof MockFeaturesService).toBeTruthy();
    });
});
