import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Feature } from '../../models/feature.model';
import { FeaturesService } from '../../services/features.service';

@Component({
    selector: 'app-feature-list',
    templateUrl: './feature-list.component.html',
    styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {

    features: Feature[];

    constructor(private featuresService: FeaturesService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.getFeatures();
    }

    getFeatures(): void {
        this.featuresService.getFeatures()
            .subscribe(features => this.features = features);
    }

    goToFeatureDetails(feature: Feature): void {
        this.router.navigate(['features/' + feature.id]);
    }
}
