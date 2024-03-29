import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  funcionarios: Funcionario[] = [];
  funcionariosGeral:  Funcionario[] = [];
  colun = ['Situation', 'Fisrt name', 'Last name','Department', 'Work shift','Actions']

  constructor( private funciorioService: FuncionarioService ,public dialog: MatDialog){}

  //primeira execução apos carregar o home
  ngOnInit(): void {
    this.funciorioService.GetFuncionarios().subscribe(data => {
        const dados = data.dados;
        dados.map((item) =>{
          item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
          item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
        })
        this.funcionarios = data.dados;
        this.funcionariosGeral = data.dados;
    });
  }
  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }
  openDialog(id: number){
    this.dialog.open(ExcluirComponent, {
      width: '350px',
      height:'350px',
      data: {
        id: id
      }
    });
  }
}
