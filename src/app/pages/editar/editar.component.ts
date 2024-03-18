import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute } from '@angular/router';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit{
  btnAcao : string = 'Editar';
  btnTitulo : string = 'Editar Funcionário';
  Funcionario!: Funcionario;

  constructor(private FuncionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.FuncionarioService.GetFuncionario(id).subscribe((data)=>{
      this.Funcionario = data.dados;

    })
  }

  editarFuncionario(funcionario: Funcionario){
    console.log('aquiiiiii')
    this.FuncionarioService.EditFuncionario(funcionario).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/'])
    })
  }
}
