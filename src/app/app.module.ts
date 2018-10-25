import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberToTextPipe } from './number-to-text.pipe';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule,MatFormFieldModule,MatSelectModule,MatSlideToggleModule} from '@angular/material';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
  declarations: [
    AppComponent,
    NumberToTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,MatSelectModule,
    MatSlideToggleModule,
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
