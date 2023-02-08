import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacecraftComponent } from './spacecraft/spacecraft.component';
import { SpaceCraftService } from './spacecraft/spacecraft.service';

@NgModule({
  declarations: [
    AppComponent,
    SpacecraftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SpaceCraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
