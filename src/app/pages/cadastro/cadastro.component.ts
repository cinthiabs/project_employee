import { Component } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Create"
  btnTitulo = "Create Employee"
  constructor(private FuncionarioService: FuncionarioService, private router: Router){

  }
  createFuncionario(funcionario: Funcionario){
     this.FuncionarioService.CreateFuncionario(funcionario).subscribe((data) =>{
       this.router.navigate(['/']);
     });
  }
}
