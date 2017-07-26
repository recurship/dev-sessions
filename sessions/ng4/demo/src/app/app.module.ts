import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { AppRouting } from 'app/app.routing';
import { IfSimpleComponent } from './ng-if/if-simple/if-simple.component';
import { IfElseComponent } from './ng-if/if-else/if-else.component';
import { IfThenElseComponent } from './ng-if/if-then-else/if-then-else.component';
import { IfLetComponent } from './ng-if/if-let/if-let.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ForSimpleComponent } from './ng-for/for-simple/for-simple.component';
import { ForOfComponent } from './ng-for/for-of/for-of.component';
import { ForTrackByComponent } from './ng-for/for-track-by/for-track-by.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    IfSimpleComponent,
    IfElseComponent,
    IfThenElseComponent,
    IfLetComponent,
    NgForComponent,
    ForSimpleComponent,
    ForOfComponent,
    ForTrackByComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
