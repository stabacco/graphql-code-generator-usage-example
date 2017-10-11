import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ApolloModule } from 'apollo-angular';
import { provideClient } from './apollo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
