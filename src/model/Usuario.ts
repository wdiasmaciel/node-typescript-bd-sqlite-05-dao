export class Usuario {
  public id: number;
  public nome: string;
  public nascimento: string | null;
  
  constructor() {
    this.id = 0;
    this.nome = "";
    this.nascimento = null;
  }
}
