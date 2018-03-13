import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AnadirComponent } from './anadir/anadir.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'mostrar',
    component: MostrarComponent,
    data: { title: 'Home' }
  },
  {
    path: 'anadir',
    component: AnadirComponent,
    data: { title: 'Blog' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    DetallesComponent,
    AnadirComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
