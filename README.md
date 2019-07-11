[![npm version](https://img.shields.io/npm/v/ng8-breadcrumbs/cookie.svg)](https://www.npmjs.com/org/ng8-breadcrumbs) 
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/shengofer/ngx-breadcrumbs/blob/master/LICENSE)
# ng8-breadcrumb
This component generates a breadcrumb trail, as you navigate to child routes using the @angular/router. It interprets the browser URL of a navigate request, 
in the same way the component router does to match a path to a specific component, to build up a hierarchy of available parent/child routes for that destination.

So given a navigation request to a url '/comp1/comp2/comp3', a breadcrumb trail with 3 levels will be generated. Each level includes all the elements from the previous 
level along with the next child. Thus the above url request will result in the following 3 levels being generated: '/comp1', '/comp1/comp2', '/comp1/comp2/comp3'.

Theres a breadcrumbService that allows you to add  names for each of your app's available routes. This friendly name will show up in the breadcrumb trail 
for each matching level, otherwise it will show the last url fragment.

## Dependencies
Optionally uses bootstrap.css (v >3.x.x) for styling of some elements (although the component is fully functional without it and there is a flag to turn off the dependency).

## Install
Install the module via npm:

    npm install ng8-breadcrumbs --save

## Usage
Import the this module into your module using forRoot()

    import {NgxBreadcrumbsModule} from 'ng8-breadcrumbs';

	@NgModule({
        imports: [NgxBreadcrumbsModule]
    })
    export class AppModule {
        ...
    }

Alternatively you can import the this module into your module and manually provide its service

	import {NgxBreadcrumbsModule, NgxBreadcrumbsService} from 'ng8-breadcrumbs';

	@NgModule({
        imports: [NgxBreadcrumbsModule],
        providers: [NgxBreadcrumbsService]
    })
    export class AppModule {
        ...
    }
	
Inject the BreadcrumbService into your component to map your routes

    export class AppComponent {
        constructor(private breadcrumbService: NgxBreadcrumbsService) {
        }
    }

Place the breadcrumb selector in your component's html where you added your router-outlet:

	<ngx-breadcrumbs [allowBootstrap]="true"></ngx-breadcrumbs>
	<router-outlet></router-outlet>
	
## Directives
`useBootstrap: boolean` to apply the bootstrap breadcrumb style. Defaulted to true.

	<ngx-breadcrumbs [useBootstrap]="false"></ngx-breadcrumbs>
	
`prefix: string` to have a static prefix as the first breadcrumb which routes to the base root when clicked.

	<ngx-breadcrumbs prefix="App Title"></ngx-breadcrumbs>
    
## BreadcrumbService
Add friendly names for each of your app's routes (paths). Can also specify regular expressions to match routes and assign a friendly name.

    this.breadcrumbsService.store(
      [
        { label: 'user', url: `../../user`, params: [] },
        { label: `settings`,url: `../settings`, params: { tab: 'global' } },
       ]);

## Build

    npm install
    npm build

To build a standalone bundle:

    npm bundles

## Running

    npm start
