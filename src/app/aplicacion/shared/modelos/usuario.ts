export class Issue {
  id!: number;
  title!: string;
  state!: string;
  url!: string;
  created_at!: string;
  updated_at!: string;
}

export class Usuario{
  _id!: string;
  rut!: number;
  user!: string;
  pass!: string;
  nombre!: string;
  apellido!: string;
  correo!: string;
  telefono!: number;
  // fecha_creacion: Date;
}
