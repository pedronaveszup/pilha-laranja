import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    
  }
  ngDoBootstrap() { 
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('orange-pipes', ce);
  }
}
