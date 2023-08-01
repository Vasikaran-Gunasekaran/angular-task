import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { NgScrollbar } from 'ngx-scrollbar';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginInterceptor } from './login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgScrollbar,
    HttpClientModule
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
  }
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
