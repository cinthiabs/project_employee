import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionarioForm!: FormGroup;

  constructor (){}

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      nome: new FormControl('')

    });
  }
  submit(){

  }

}
