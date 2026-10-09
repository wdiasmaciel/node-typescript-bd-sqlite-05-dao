export class Usuario {
  constructor(
    public id: number = 0,
    public nome: string = "",
    public nascimento: string | null = null
  ) {}
}
