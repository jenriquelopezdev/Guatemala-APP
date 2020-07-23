import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    navigation = {};

    constructor(private router: Router) {
        this.navigation = this.router.getCurrentNavigation().extras.state;
        console.log(this.navigation)
    }

    ngOnInit() {
    }

}
