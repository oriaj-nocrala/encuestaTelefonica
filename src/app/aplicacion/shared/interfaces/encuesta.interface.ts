export interface RespuestaCruzada {
  _id:        string;
  respuestas: Respuesta[];
  analista:   Analista;
  padron:     Padron;
  hora_creacion: Date;
  __v:        number;
}

export interface RespuestaXAnalista {
  _id:      string;
  count:    number;
  analista: Analista;
}

export interface Analista {
  _id:            string;
  rut:            number;
  nombre:         string;
  pass:           string;
  apellido:       string;
  user:           string;
  correo:         string;
  telefono:       number;
  tipo:           string;
  fecha_creacion: Date;
  __v:            number;
}

export interface Padron {
  _id:                string;
  rut:                number;
  nombre:             string;
  apellido_paterno:   string;
  apellido_materno:   string;
  bodega:             string;
  sucursal:           string;
  cargo:              string;
  fecha_contratacion: Date;
  email:              string;
  telefono:           number;
  manipuladora:       number;
}

export interface Respuesta {
  pregunta:  string;
  respuesta: string;
}
