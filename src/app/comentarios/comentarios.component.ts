import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';

interface Coment {
  id: number;
  nombre: string;
  texto: string;
  fecha: Date;
  colorClass: string;
}


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit, AfterViewInit, OnDestroy {

  comentariosComponent = true;

  ngOnInit() {
    console.log('Componente inicializado');
  }

  ngAfterViewInit() {
    console.log('Vista inicializada');
  }

  ngOnDestroy() {
    console.log('Componente destruido');
  }

  handleDeleteClick(comentario: Coment) {
    const index = this.comentarios.indexOf(comentario);
    if (index !== -1) {
      this.comentarios.splice(index, 1);
      alert('Se ha borrado el comentario exitosamente');
      console.log('Componente Eliminado')
    }
  }

  comentarios: Coment[] = [
    {
      id: 1,
      nombre: 'Juan',
      texto: '¡Excelente artículo!',
      fecha: new Date(),
      colorClass: '',
    },
    {
      id: 2,
      nombre: 'María',
      texto: 'Muchas gracias por su Amabilidad.',
      fecha: new Date(),
      colorClass: '',
    }
  ];

  nuevoComentario: any = {
    id: null,
    nombre: null,
    texto: null,
    fecha: null,
    colorClass: null
  };

  agregarComentario() {
    // Obtener el último id de la lista de comentarios
    const ultimoId = this.comentarios.length > 0 ? this.comentarios[this.comentarios.length - 1].id : 0;

    // Crear un nuevo comentario con un id y una fecha válidos
    const nuevoComentario: Coment = {
      id: ultimoId + 1,
      nombre: this.nuevoComentario.nombre,
      texto: this.nuevoComentario.texto,
      fecha: new Date(),
      colorClass: this.nuevoComentario.colorClass
    };

    // Agregar el nuevo comentario a la lista
    this.comentarios.push(nuevoComentario);

    // Reiniciar el objeto nuevoComentario
    this.nuevoComentario = {
      id: null,
      nombre: null,
      texto: null,
      fecha: null,
      colorClass: null
    };
  }

  cambiarColorComentarios(color: string) {
    // Iterar sobre cada comentario y cambiar su clase CSS
    this.comentarios.forEach(comentario => {
      comentario.colorClass = color;
    });
  }
}
