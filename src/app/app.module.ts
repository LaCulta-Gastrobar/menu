import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoBackComponent } from './extras/go-back/go-back.component';
import { MainComponent } from './pages/main/main.component';
import { BebidaEngComponent } from './pages/pagesEng/bebida-eng/bebida-eng.component';
import { MenuEngComponent } from './pages/pagesEng/menu-eng/menu-eng.component';
import { MenuComponent } from './pages/pagesEsp/menu/menu.component';
import { JuegoComponent } from './pages/pagesEsp/juego/juego.component';
import { PromoComponent } from './pages/pagesEsp/promo/promo.component';
import { PostreComponent } from './pages/pagesEsp/postre/postre.component';
import { CafeComponent } from './pages/pagesEsp/cafe/cafe.component';
import { BebidaComponent } from './pages/pagesEsp/bebida/bebida.component';
import { ComidaComponent } from './pages/pagesEsp/comida/comida.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ComidaEngComponent } from './pages/pagesEng/comida-eng/comida-eng.component';
import { CafeEngComponent } from './pages/pagesEng/cafe-eng/cafe-eng.component';
import { PostreEngComponent } from './pages/pagesEng/postre-eng/postre-eng.component';
import { PromoEngComponent } from './pages/pagesEng/promo-eng/promo-eng.component';
import { JuegoEngComponent } from './pages/pagesEng/juego-eng/juego-eng.component';
import { GoBackEngComponent } from './extras/go-back-eng/go-back-eng.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ComidaComponent,
    BebidaComponent,
    CafeComponent,
    PostreComponent,
    PromoComponent,
    JuegoComponent,
    GoBackComponent,
    MainComponent,
    ComidaEngComponent,
    MenuEngComponent,
    BebidaEngComponent,
    CafeEngComponent,
    PostreEngComponent,
    PromoEngComponent,
    JuegoEngComponent,
    GoBackEngComponent,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
