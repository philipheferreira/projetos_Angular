import { FormsModule } from '@angular/forms';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [ AppComponent,  TarefasComponent ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
