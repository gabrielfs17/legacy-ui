import { Component, OnInit } from '@angular/core';

interface Naturalidades{
  name: string;
  code: string;
}

interface Gestores{
name: string
}

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrl: './register-owner.component.css'
})

export class RegisterOwnerComponent implements OnInit {

  activeIndex: number = 0;
  rounded: boolean

  naturalidades: Naturalidades[] | undefined;
  selectedNaturalidade: Naturalidades[] | undefined;

  gestores: Gestores[] | undefined;
  selectedGestor: Gestores[] | undefined;

  ngOnInit(): void {
    this.naturalidades = [
      {name:'Brasileiro', code:'BR'},
      {name:'Frances', code:'FR'},
      {name:'Japonês', code:'JP'}
    ]
    this.gestores = [
      {name:'(Nenhum)'}
    ]
  }
}
