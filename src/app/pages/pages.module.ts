import { NgModule } from '@angular/core';

// Components
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule} from 'ng2-charts';

// Routes
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: []
})

export class PagesModule { }
