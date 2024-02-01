import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MenuComponent} from "./pages/pagesEsp/menu/menu.component";
import {ComidaComponent} from "./pages/pagesEsp/comida/comida.component";
import {BebidaComponent} from "./pages/pagesEsp/bebida/bebida.component";
import {CafeComponent} from "./pages/pagesEsp/cafe/cafe.component";
import {PostreComponent} from "./pages/pagesEsp/postre/postre.component";
import {PromoComponent} from "./pages/pagesEsp/promo/promo.component";
import {JuegoComponent} from "./pages/pagesEsp/juego/juego.component";
import {MenuEngComponent} from "./pages/pagesEng/menu-eng/menu-eng.component";
import {ComidaEngComponent} from "./pages/pagesEng/comida-eng/comida-eng.component";
import {BebidaEngComponent} from "./pages/pagesEng/bebida-eng/bebida-eng.component";
import {CafeEngComponent} from "./pages/pagesEng/cafe-eng/cafe-eng.component";
import {PostreEngComponent} from "./pages/pagesEng/postre-eng/postre-eng.component";
import {PromoEngComponent} from "./pages/pagesEng/promo-eng/promo-eng.component";
import {JuegoEngComponent} from "./pages/pagesEng/juego-eng/juego-eng.component";

export const routes: Routes =
  [
    {
      path: '',
      component: MainComponent
    },
    {
      path: 'esp',
      component: MenuComponent,
      children:
        [
          {
            path: '',
            component: MenuComponent
          },
          {
            path: 'comida',
            component: ComidaComponent
          },
          {
            path: 'bebida',
            component: BebidaComponent
          },
          {
            path: 'cafe',
            component: CafeComponent
          },
          {
            path: 'postre',
            component: PostreComponent
          },
          {
            path: 'promo',
            component: PromoComponent
          },
          {
            path: 'juego',
            component: JuegoComponent
          }
        ]
    },
    {
      path: 'eng',
      component: MenuEngComponent,
      children:
        [
          {
            path: '',
            component: MenuEngComponent
          },
          {
            path: 'comidaEng',
            component: ComidaEngComponent
          },
          {
            path: 'bebidaEng',
            component: BebidaEngComponent
          },
          {
            path: 'cafeEng',
            component: CafeEngComponent
          },
          {
            path: 'postreEng',
            component: PostreEngComponent
          },
          {
            path: 'promoEng',
            component: PromoEngComponent
          },
          {
            path: 'juegoEng',
            component: JuegoEngComponent
          }
        ]
    }
  ]
