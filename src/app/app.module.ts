import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { GamesComponent } from './home/games/games.component';
import { MinecraftComponent } from './home/minecraft/minecraft.component';
import { PremiumComponent } from './home/premium/premium.component';
import { DonateComponent } from './home/donate/donate.component';
import { AccountComponent } from './account/account.component';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Gift, Box, Info } from 'angular-feather/icons';
import { DcProfileComponent } from './home/main/dc-profile/dc-profile.component';

const icons = {
  Camera,
  Heart,
  Github,
  Gift,
  Box,
  Info
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    GamesComponent,
    MinecraftComponent,
    PremiumComponent,
    DonateComponent,
    AccountComponent,
    DcProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FeatherModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
