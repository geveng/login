import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; //Routing

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component'; 

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HomeComponent } from './home/home.component';
import { Db1Component } from './db1/db1.component';
import { Db2Component } from './db2/db2.component';
import { EventsRegComponent } from './events-reg/events-reg.component';
import { EventslistComponent } from './eventslist/eventslist.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule, //Routing
	ZXingScannerModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginFormComponent,
    Db1Component,
    Db2Component,
    EventsRegComponent,
    EventslistComponent,
    EventDetailsComponent,
    EventUpdateComponent,
    RegisterComponent,
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
