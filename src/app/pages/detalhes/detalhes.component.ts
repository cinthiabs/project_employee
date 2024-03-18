import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from '../../models/funcionarios';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  Funcionario? : Funcionario;
  id!:number;

  constructor (private funcionarioService: FuncionarioService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.funcionarioService.GetFuncionario(id).subscribe((data) =>{
        const dados = data.dados;

        dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
        dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');

        this.Funcionario = data.dados;
      })
  }
  InativaFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data) =>{
     console.log(data.dados)
      this.router.navigate(['/'])
    })
  }

}
