import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponent {
  public estadoDesabilitado = true

  public mudarEstadoDesabilitado(valor: boolean){
    if(valor === true) {
      this.estadoDesabilitado = false
    }else if(valor === false) {
      this.estadoDesabilitado = true
    }
    return 'NaN'
  }

  public alerta(){
    alert('Esse botão foi apertado')
  }
}
