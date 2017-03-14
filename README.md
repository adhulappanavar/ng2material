# Ng2material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

This project is based on 
https://coursetro.com/posts/code/29/Working-with-Angular-2-Material
https://www.youtube.com/watch?v=gOSdZJ7gpOc
original github - https://github.com/designcourse/angular-material-demo

Working with Angular 2 Material
BY GARY SIMON - JAN 12, 2017

Visit the github repo: Angular Material Example for this project (assets are in /src/assets/images).
Angular Material offers developers a very quick method of getting up and running with great-looking, versatile layouts and components that work across the web, mobile and desktop. If you're unfamiliar with what "Material Design" is, I suggest check out the official Google Material Design Guidelines page for more information.

But in short, "Angular Material" is material design, made specifically for Angular apps. So in this angular material tutorial, I'm going to show you step-by-step of how to make a simple layout with some built-in functionality using Angular Material.

Our app layout will rely heavily on Angular Material-specific components to define a toolbar, menu, tabs, icons and even some form elements. While this won't be a fully functioning app, it should get you familiar with how to use Angular Material, as well as capture events from user interaction with Angular Material components.

Before proceeding, it would be a good idea to watch (or read) our free angular fundamentals course if you haven't touched Angular.


 
Prefer watching a video instead?

Watch our video here at the coursetro youtube channel:


Starting the Angular Project

First, you need to ensure you have the following pre-requisites installed.

Nodejs & npm
At the console/command prompt, type "node -v" and "npm -v". If either go unrecognized, head on over to nodejs.org to download and install Nodejs with the node package manger.
Angular-cli
At the console/command prompt, type "ng -v" If it's unrecognized, type: npm install -g angular-cli
Once these are installed and ready to go, run the following commands:

ng new projectname
cd projectname
npm new will take some time, then cd into the directory.

Once complete, install Angular Material:

npm install --save @angular/material
This will install Angular Material and save it to our package.json as a dependency.

Importing Angular Material to scr/app/app.module.ts

Next, open up your preferred code editor and navigate to the /src/app/app.module.ts file. 

At the top in the imports, add:

import { MaterialModule } from '@angular/material';
And in the @NgModule decorator, we add it as an import:

  imports: [
    ...
    MaterialModule.forRoot(), // <--Add this
    ...
Including HammerJS

Certain components in Angular Material (slide-toggle and slider) require HammerJS in order to work correctly. At the console, we first use npm to install it and save it as a dev dependency:

npm install --save hammerjs 
npm install --save-dev @types/hammerjs
..and then we import HammerJS to app.module.ts at the top:

import 'hammerjs';
..and add HammerJS to the types section of the tsconfig.json file:

{
  "compilerOptions": {
    "types": [
      "hammerjs"
    ]
  }
}
Including Material Design Icons & Roboto Font

This isn't a mandatory step, but if you want to utilize the material design icon font in your layout, you need to load the font in index.html somewhere between the <head> tags: (We'll cover material icons, so be sure to add it if you're following along).

Material design also uses the Roboto font family, which we'll include too.

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
Run ng serve

At the console, run ng serve inside of the project folder so that you can view the results of angular material as you follow along:

ng serve
Create a data.json file

This, of course, is not a mandatory step when working with Angular Material, but just for the purpose of emulating a real-world environment, we'll create a data.json file for declaring a list of thumbnails and descriptions. Later on, we will iterate through this using *ngFor and place them within angular material cards.

Create a file named data.json with the following contents and place it inside of the /src/ folder:

{
  "screenshots": [
      {
        "img": "assets/images/space1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      },
      {
        "img": "assets/images/space2.jpg",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "liked": "0"
      },
      {
        "img": "assets/images/space3.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      }
  ]
}
Importing a Material Design Theme

Angular Material offers several pre-built themes from which you can declare in the styles.css via the import tag.

The available themes are:

indigo-pink
deeppurple-amber
purple-green
pink-bluegrey
 
We'll use deeppurple-amber.  Open up /src/styles.css and add the following line to the top:

@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
Creating the Angular Material Toolbar

Now let's get started with Angular Material! We're going to hop into app.component.html to define a material toolbar through md-toolbar.

<md-toolbar color="primary">
    <span>GameViewer</span>
</md-toolbar>


Note: Simply for demonstrating the layout for this tutorial, I have added padding: 2em 23em; and a light gray background color on the body selector in styles.css. You don't have to do this.

As you can see, it's fairly simple! Let's add a menu next.

Adding a Material Menu

Now let's add a menu that's right aligned. Expanding on the previous HTML:

<md-toolbar color="primary">
    <span>GameViewer</span>
    <span class="spacer"></span>
    <button md-icon-button [mdMenuTriggerFor]="menu">
      <md-icon>more_vert</md-icon>
    </button>
</md-toolbar>


.spacer fills the gap between the title and the menu (this is based on a flex grid layout). 

Visit /src/styles.css and add in:

.spacer {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
And then we have an HTML button element, with property binding to menu. We also use md-icon with the name of an icon for 3 vertical circles, which designates a menu.

Right now, if you click on it, you will see it has default hover CSS properties and also on click, but no menu actually shows up.  So let's add to the HTML to create a few material menu items.

<md-toolbar color="primary">
    <span>GameViewer</span>
    <span class="spacer"></span>
    <button md-icon-button [mdMenuTriggerFor]="menu">
      <md-icon>more_vert</md-icon>
    </button>
    <md-menu #menu="mdMenu">
      <button md-menu-item>
        <md-icon>fingerprint</md-icon>
        <span>Login</span>
      </button>
      <button md-menu-item disabled>
        <md-icon>announcement</md-icon>
        <span>Issues</span>
      </button>
      <button md-menu-item>
        <md-icon>notifications_off</md-icon>
        <span>Disable alerts</span>
      </button>
    </md-menu>
</md-toolbar>


The menu items are contained within md-menu. Each menu item is designated within a button element, and we've decided to add an icon representing each item. If you want to see a full list of material icons, click here.

We aren't going to make anything happen when users click these icons. But if you wanted to, you would simply use click event binding to call a method.

Creating Angular Material Tabs

Just underneath our toolbar (md-toolbar), let's create a tabbed navigation.

<md-tab-group>
  <md-tab label="Gallery">

  </md-tab>
  <md-tab label="Settings">
    
  </md-tab>
</md-tab-group>


To designate a tab group, we use md-tab-group, and inside we use md-tab to designate the tabs.

Try clicking them to observe the animation that takes place! This is from Angular Material.

Displaying the Gallery

In the "Gallery" tab, we want to display a list of thumbnails with accompanying descriptions, and a couple buttons. We'll be using Http to fetch the results from our data.json file and iterate through them with *ngFor in the template.

First, navigate to /src/app/app.component.ts and import Http:

import {Http} from '@angular/http';  // <- This goes just below { Component } 
Next, we need to define a property spaceScreens to hold our array, along with http dependency injection in the constructor. Inside of the constructor, we will bind our array property to the results of the data.json:

export class AppComponent {
  spaceScreens: Array<any>;


  constructor(private http:Http) {
    
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);

  }
}
And inside of our app.component.html, to iterate through the results we add:

<md-tab-group>
  <md-tab label="Gallery">
    <md-card *ngFor="let spaceScreen of spaceScreens; let i = index">
      <img md-card-image src="{{ spaceScreen.img }}">
      <md-card-content>
        <p>{{ spaceScreen.description }}</p>
      </md-card-content>
      <md-card-actions>
        <button md-button (click)="likeMe(i)">
            <i class="material-icons md-18" [class.red-color]="spaceScreen.liked == '1'">favorite</i> LIKE
        </button>
        <button md-button (click)="deleteMe(i)">
            <i class="material-icons md-18">delete</i> DELETE 
        </button>
      </md-card-actions>
    </md-card>
  </md-tab>
  <md-tab label="Settings">

  </md-tab>
</md-tab-group>


First we have md-card to designate a material card component. Then we use *ngFor to iterate through the spaceScreens property. We add let i = index to access the index value of each array item, this will allow us to use a delete and like button.

Then we use md-card-image and interpolation for displaying the screenshot. And md-card-content to display a description.

md-card-actions allows us to define buttons for handling user actions. I've added a like button with an accompanying "favorite" icon, as well as a delete button. 

Our like button uses click event binding to call a custom method likeMe, in which we pass i as an argument. Our icon also uses class binding to toggle on and off a custom css class red-color to change the icon from black to red and vice-versa.

The delete button also calls a custom method deleteMe.

Let's declare our methods in app.component.ts: (you can add these after the constructor() { })

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }
Then add the .red-color class to styles.css:

.red-color {
    color:red;
}
Now, visit the browser and click on a LIKE button.  Also, try deleting an item.



Creating the Settings Content

Now let's create the content for the settings tab. We'll create a title, paragraph, and a couple of angular form components. 

Add the following HTML inside of <md-tab label="Settings>:

    <div id="page-padding">
      <h1>Settings</h1>
      <p>Here you can control the various settings associated with your app. There's no need to hit a save button, as the values are updated automatically.</p>
      <label>Number of Thumbnails</label>
      <md-slider
          showTicks="true" max="100" min="0" step="1" thumbLabel="true" value="18">
      </md-slider>
      <md-slide-toggle>Some setting</md-slide-toggle>
    </div>
Angular Material offers form components, and we're using md-slider and md-slide-toggle here are just basic examples of what a form may look like. While we aren't doing anything with these form elements, you can tie these to methods in the component to retrieve their values.

Additionally, add the following CSS rulesets to styles.css:

.md-slider-horizontal {
    width:100%;
}

label {
    font-weight:bold;
    margin:1.5em 0;
    display:block;
}

#page-padding {
    padding: 0 1.5em 1.5em 1.5em;
}


Customizing Angular Material

You can customize your Angular Material theme by creating a .scss file and and defining the commonly used colors.

Create a custom_theme.scss file inside of the /src/ folder with the following contents:

@import '~@angular/material/core/theming/all-theme';
@include md-core();

// Customizations go here, for instance:
$app-primary: md-palette($md-indigo);
$app-accent:  md-palette($md-pink, A200, A100, A400);
$app-warn:    md-palette($md-red);

// Create the theme object (a Sass map containing all of the palettes).
$app-theme: md-light-theme($app-primary, $app-accent, $app-warn);


@include angular-material-theme($app-theme);
Next, we need to add custom_theme.scss to our angular-cli.json:

      "styles": [
        "styles.css",
        "custom_theme.scss"  // <--
      ],
In the console, re-run ng serve (ctrl-c to escape) and your custom theme settings should now be reflect the image below:



Final Thoughts

Angular Material offers a lot more components you can integrate. But hopefully, this angular material tutorial gave you a solid understanding from which you can use with future projects.




## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
