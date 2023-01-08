import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedadade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla et neque iste laudantium quos fugiat, beatae asperiores ipsum nihil quidem soluta itaque numquam perferendis at id, error eveniet suscipit. ARas asdasd ad asd asdasdasd as jknqdjw qd  qwd d q  qwd qwd wq',
      autoria: '',
      modelo: 'modelo1',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
