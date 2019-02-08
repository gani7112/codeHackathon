import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PreviousRouteService {

    private previousUrl: string;
    private currentUrl: string;
    private treeofUrls = [];
    private queryParams = [];
    private currentRouteQueryMap = {};
    private prevousRouteQueryMap ={}

    constructor(private router: Router) {
        this.currentUrl = this.router.url;
        this.currentRouteQueryMap = this.router.routerState.snapshot.root.queryParamMap

        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
                this.currentRouteQueryMap = this.router.routerState.snapshot.root.queryParamMap
            };
        });
    }

    public getPreviousUrl() {
        return this.previousUrl;
    }
    public gettreeofurls() {
        return this.treeofUrls;
    }
    public gettreeofqueryParams() {
        return this.queryParams;
    }
}