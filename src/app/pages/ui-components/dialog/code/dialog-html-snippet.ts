export const DIALOG_ANIMATION_HTML_SNIPPET = `  <div class="row">
                <div class="col-sm-6">
                  <button mat-flat-button color="primary" (click)="openDialog('0ms', '0ms')" class="w-100">
                    Open Dialog without animation
                  </button>
                </div>
                <div class="col-sm-6">
                  <button mat-flat-button color="accent" class="m-l-8" (click)="openDialog('3000ms', '1500ms')"
                    class="w-100">
                    Open Dialog slowly
                  </button>
                </div>
              </div>

              <!-- dialog view -->
              <h5 mat-dialog-title class="">Delete file</h5>
              <div mat-dialog-content class="f-s-14 lh-16">
                Would you like to delete cat.jpeg?
              </div>
              <div mat-dialog-actions class="p-24 p-t-0">
                <button mat-flat-button class="bg-error text-white" mat-dialog-close>
                  No
                </button>
                <button mat-flat-button mat-dialog-close cdkFocusInitial>Ok</button>
              </div>
`;

export const DIALOG_SCROLLABLE_HTML_SNIPPET = `  <button mat-flat-button color="primary" (click)="openHeaderDialog()" class="w-100">
                Open Scrollable Dialog
              </button>

               <!-- dialog view -->
               <h2 mat-dialog-title>Install Angular</h2>
              <mat-dialog-content class="mat-typography">
                <h3 class="f-s-16 f-w-600 m-t-16">Develop across all platforms</h3>
                <p class="f-s-14 lh-24">
                  Learn one way to build applications with Angular and reuse your code and
                  abilities to build apps for any deployment target. For web, mobile web,
                  native mobile and native desktop.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Speed &amp; Performance</h3>
                <p class="f-s-14 lh-24">
                  Achieve the maximum speed possible on the Web Platform today, and take it
                  further, via Web Workers and server-side rendering. Angular puts you in
                  control over scalability. Meet huge data requirements by building data
                  models on RxJS, Immutable.js or another push-model.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Incredible tooling</h3>
                <p class="f-s-14 lh-24">
                  Build features quickly with simple, declarative templates. Extend the
                  template language with your own components and use a wide array of existing
                  components. Get immediate Angular-specific help and feedback with nearly
                  every IDE and editor. All this comes together so you can focus on building
                  amazing apps rather than trying to make the code work.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Loved by millions</h3>
                <p class="f-s-14 lh-24">
                  From prototype through global deployment, Angular delivers the productivity
                  and scalable infrastructure that supports Google's largest applications.
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">What is Angular?</h3>

                <p class="f-s-14 lh-24">
                  Angular is a platform that makes it easy to build applications with the web.
                  Angular combines declarative templates, dependency injection, end to end
                  tooling, and integrated best practices to solve development challenges.
                  Angular empowers developers to build applications that live on the web,
                  mobile, or the desktop
                </p>

                <h3 class="f-s-16 f-w-600 m-t-16">Architecture overview</h3>

                <p class="f-s-14 lh-24">
                  Angular is a platform and framework for building client applications in HTML
                  and TypeScript. Angular is itself written in TypeScript. It implements core
                  and optional functionality as a set of TypeScript libraries that you import
                  into your apps.
                </p>

                <p class="f-s-14 lh-24">
                  The basic building blocks of an Angular application are NgModules, which
                  provide a compilation context for components. NgModules collect related code
                  into functional sets; an Angular app is defined by a set of NgModules. An
                  app always has at least a root module that enables bootstrapping, and
                  typically has many more feature modules.
                </p>

                <p class="f-s-14 lh-24">
                  Components define views, which are sets of screen elements that Angular can
                  choose among and modify according to your program logic and data. Every app
                  has at least a root component.
                </p>

                <p class="f-s-14 lh-24">
                  Components use services, which provide specific functionality not directly
                  related to views. Service providers can be injected into components as
                  dependencies, making your code modular, reusable, and efficient.
                </p>

                <p class="f-s-14 lh-24">
                  Both components and services are simply classes, with decorators that mark
                  their type and provide metadata that tells Angular how to use them.
                </p>

                <p class="f-s-14 lh-24">
                  The metadata for a component class associates it with a template that
                  defines a view. A template combines ordinary HTML with Angular directives
                  and binding markup that allow Angular to modify the HTML before rendering it
                  for display.
                </p>

                <p class="f-s-14 lh-24">
                  The metadata for a service class provides the information Angular needs to
                  make it available to components through Dependency Injection (DI).
                </p>

                <p class="f-s-14 lh-24">
                  An app's components typically define many views, arranged hierarchically.
                  Angular provides the Router service to help you define navigation paths
                  among views. The router provides sophisticated in-browser navigational
                  capabilities.
                </p>
              </mat-dialog-content>
              <mat-dialog-actions align="end">
                <button mat-flat-button class="bg-error text-white" mat-dialog-close>Cancel</button>
                <button mat-flat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
              </mat-dialog-actions>


`;


export const DIALOG_INJECTING_HTML_SNIPPET = `  <button mat-flat-button color="accent" (click)="openInjectDialog()" class="w-100">
                Open dialog
              </button>

              <!-- dialog view -->
              <h1 mat-dialog-title>Favorite Animal</h1>
              <div mat-dialog-content>
                My favorite animal is:
                <ul>
                  <li>
                    @if(data.animal === 'panda') {
                    <span>&#10003;</span>
                    } Panda
                  </li>
                  <li>
                    @if(data.animal === 'unicorn') {
                    <span>&#10003;</span>
                    } Unicorn
                  </li>
                  <li>
                    @if(data.animal === 'lion') {
                    <span>&#10003;</span>
                    } Lion
                  </li>
                </ul>
              </div>

`;

export const DIALOG_MENU_HTML_SNIPPET = `  <button mat-flat-button class="w-100" color="primary" [matMenuTriggerFor]="menu" #menuTrigger>
                Menu
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="openMenuDialog()">
                  Open dialog
                </button>
              </mat-menu>

`;

export const DIALOG_OVERVIEW_HTML_SNIPPET = `  <mat-form-field appearance="outline" class="w-100">
                <mat-label>What's your name?</mat-label>
                <input matInput [(ngModel)]="name" />
              </mat-form-field>
              <button mat-flat-button class="bg-primary w-100" (click)="openDialogEx()">Pick one</button>
              @if (animal()) {
              <span class="m-t-12 d-block">
                You chose: <span class="f-w-600">{{ animal() }}</span>
              </span>
              }

`;