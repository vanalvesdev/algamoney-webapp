import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent {

  @Input() pessoas: any[];
  @Input() linhas: any;
  @Input() total: any;
  @Output() feedbackLazyLoad = new EventEmitter();

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.feedbackLazyLoad.emit({pagina});
  }
}