import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailsComponent } from './feature-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeaturesService } from '../../services/features.service';

describe('FeatureDetailsComponent', () => {
  let component: FeatureDetailsComponent;
  let fixture: ComponentFixture<FeatureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDetailsComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule
        ],
        providers: [
            FeaturesService,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
