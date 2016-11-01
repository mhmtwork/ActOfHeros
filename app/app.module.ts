import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/*app.module.ts defines the application's root module. 
In it we identify the external modules we'll use in our application and declare the components that belong to this module,
 such as our HeroFormComponent.

Because template-driven forms are in their own module, 
we need to add the FormsModule to the array of imports for our application module before we can use forms.
*/
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    HeroFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
