<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teoría conductista'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto descriptivo de la imagen')
      .col-12.col-xl-8
        p.mb-4 La <i>teoría conductista</i>, también conocida como <i>conductismo</i>, es una escuela psicológica centrada en el estudio del comportamiento observable y medible, así como en la influencia del entorno y las experiencias previas. Según Moreno (2024), esta corriente subraya que el aprendizaje ocurre mediante la asociación entre estímulos y respuestas, destacando el <b>condicionamiento clásico</b> y el <b>condicionamiento operante</b> como métodos clave.
        .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-4.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Según Bobadilla Ramírez (2010), el conductismo emergió en Estados Unidos como reacción a las dificultades que enfrentaban los psicólogos al intentar explicar procesos mentales y de conciencia, influenciados por el método experimental y el estudio de animales. Se cuestionó la relevancia de la introspección y se priorizó el análisis de la conducta observable, considerando innecesario apelar a explicaciones basadas en la conciencia.
    
    p.mb-4 Autores como Margaret Floy Washburn y John B. Watson mostraron interés en estudiar la mente animal, pero las limitaciones de abordar lo inobservable promovieron una tendencia hacia el análisis exclusivo de la conducta. Así, se consolidó una visión pragmática: los datos observables bastaban, y teorizar sobre lo mental se volvió irrelevante.<b>Los principios fundamentales son: </b>
    ImagenInfografica.color-secundario.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-5.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='41%' y='76%' numero='+')
        .h5.mb-2 Rechazo de la conciencia
        p Lo mental es visto como innecesario o irrelevante para explicar el comportamiento (Torres, 2024).
      .tarjeta.bg-white.p-4(x='50%' y='73.5%' numero='+')
        .h5.mb-2 Conducta observable
        p Lo psicológico se define por lo que se puede ver y medir, no por procesos internos.
      .tarjeta.bg-white.p-4(x='51%' y='30%' numero='+')
        .h5.mb-2 Condicionamiento
        p Se aprende mediante asociación (Pavlov) o refuerzo y castigo (Skinner).
      .tarjeta.bg-white.p-4(x='58.6%' y='69%' numero='+')
        .h5.mb-2 Ambiente como modelador
        p La conducta se moldea a través de estímulos del entorno, más que por predisposiciones genéticas.
      .tarjeta.bg-white.p-4(x='53%' y='50%' numero='+')
        .h5.mb-2 "Caja negra"
        p Para Watson, el ser humano es una caja negra: se estudian estímulos y respuestas, ignorando lo interno.
      .tarjeta.bg-white.p-4(x='43%' y='49.5%' numero='+')
        .h5.mb-2 Generalización del aprendizaje
        p Las leyes del aprendizaje son aplicables a todos los seres vivos, lo que justifica los experimentos con animales (Torres, 2024).

    .d-flex.bg-verde.bg-full-width.p-4.flex-column.flex-md-row(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0.text-white A mediados del siglo XX, surgieron variantes del conductismo que reconocieron la existencia de procesos internos, aunque sin considerarlos esenciales para la explicación del comportamiento. Según Torres (2024), aunque se acepta que hay procesos intermedios en el organismo, estos no necesitan ser analizados para entender las lógicas que rigen la conducta observable.

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Componentes del Conductismo
          p.mb-5(data-aos="fade-up") Se invita a leer el documento Componentes del Conductismo, donde se aborda el análisis de los principios fundamentales del conductismo, incluyendo el condicionamiento clásico, el operante, el refuerzo, el castigo y el modelado.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Componentes_del_Conductismo.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Componentes del Conductismo
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Aplicación de la Teoría Conductista en la Educación

    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto descriptivo de la imagen')
      .col-12.col-xl-7.d-flex
        .bg-morado-oscuro.p-4.d-flex.h-100(data-aos="fade-left")
          p.my-auto.text-white Según Moreno (2024), la teoría conductista proporciona un conjunto de estrategias y técnicas prácticas que los educadores pueden emplear para influir en el aprendizaje y en el comportamiento de los estudiantes. La clave para una aplicación adecuada radica en adaptar cuidadosamente estas estrategias a las necesidades individuales del alumnado y a las características específicas del contexto educativo, con el fin de promover el aprendizaje y fomentar comportamientos positivos. A continuación, se desarrollan las principales formas de aplicación.

    h2 Condicionamiento clásico: asociaciones para provocar respuestas específicas
    p.mb-4 Este tipo de condicionamiento se aplica al generar asociaciones entre estímulos que provocan naturalmente una respuesta positiva y estímulos neutros vinculados con el aprendizaje. Así, el estímulo neutro llega a generar por sí mismo esa respuesta favorable, contribuyendo a crear un ambiente de aprendizaje más acogedor y estimulante.

    .row.bg-fondo-1.bg-full-width.pt-4.mb-4
      div.px-5

        .row
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Asociar elogios con el logro académico
                p.text-small.px-4.text-center.pb-2 Cuando un estudiante alcanza un objetivo, el docente lo elogia (estímulo positivo). Con el tiempo, enfrentarse a una tarea (estímulo neutro) puede asociarse con la expectativa de recibir elogios, lo que aumenta la motivación.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Crear un ambiente de aula relajante
                p.text-small.px-4.text-center.pb-2 Usar música suave y un entorno tranquilo (estímulos positivos) al ingresar al aula puede reducir la ansiedad y predisponer al aprendizaje.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Utilizar señales visuales o auditivas
                p.text-small.px-4.text-center.pb-2 Asociar un sonido o señal con el inicio de una actividad atractiva puede generar entusiasmo ante su repetición.

    h2 Condicionamiento operante: recompensas y refuerzos para modelar la conducta
    p.mb-4 Esta estrategia es una de las expresiones más evidentes del conductismo en la educación. Se basa en el uso sistemático de refuerzos o castigos como respuesta a una conducta. El refuerzo busca aumentar la frecuencia de conductas deseadas, mientras que el castigo intenta reducir conductas no deseadas (aunque su uso requiere precaución por sus posibles consecuencias).

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-3(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-12.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-3.text-bold Otorgar puntos o premios
            span Los estudiantes reciben puntos por tareas, participación o comportamiento. Luego pueden intercambiarlos por privilegios.
        .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-3(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-13.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-3.text-bold Sistemas de economía de fichas
            span Se entregan fichas como símbolo de buenas conductas que se cambian por recompensas valoradas.
        .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-3(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-14.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-3.text-bold Privilegios en el aula
            span Cumplir con lo esperado permite acceder a actividades elegidas, trabajar con compañeros preferidos o disfrutar de tiempos adicionales.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto descriptivo de la imagen')

    h2 Refuerzo positivo: reconociendo y recompensando el comportamiento deseado
    p.mb-4 El refuerzo positivo fortalece la repetición de conductas adecuadas. La clave está en que sea significativo para el estudiante y se otorgue inmediatamente después de la conducta.

    .row.bg-azul-oscuro.p-4.py-xl-0.mb-4(data-aos='fade-up')
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto descriptivo de la imagen') 
      .col-12.col-xl-8.d-flex
        .my-auto
          div.d-flex.mb-3
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Elogio verbal específico:</b> usar comentarios concretos como "me gustó cómo explicaste tu razonamiento" mejora el impacto del refuerzo.
          div.d-flex.mb-3
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Recompensas tangibles:</b> premios, diplomas o permitir elegir una actividad pueden resultar especialmente útiles con niños pequeños.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Reconocimiento público:</b> destacar logros frente a la clase o comunicarlos a las familias puede motivar a continuar ese tipo de conducta.

    h2 Modelado: aprendiendo a través del ejemplo
    p.mb-4 Los docentes y compañeros pueden ser modelos a seguir. El aprendizaje por observación es más efectivo cuando el modelo es percibido como competente o cercano al estudiante.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center El profesor como modelo
                p.text-small.px-4.text-center.pb-2 Mostrar entusiasmo, respeto o estrategias de solución de problemas influye directamente en los estudiantes.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Compañeros como modelos
                p.text-small.px-4.text-center.pb-2 Usar buenos ejemplos de estudiantes en clase puede fomentar la repetición de esas conductas por parte del grupo.

    h2 Práctica guiada: aprendizaje activo con apoyo inmediato
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La práctica guiada permite aplicar nuevas habilidades con supervisión del docente. La retroalimentación inmediata ayuda a corregir errores y afianzar los logros.
        .bg-azul.p-4(data-aos='fade-up')
          div.d-flex.mb-3
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Resolución de problemas paso a paso:</b> el docente acompaña y orienta a los estudiantes durante el proceso.
          div.d-flex.mb-3
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Lectura en voz alta:</b> se ofrece corrección inmediata sobre la fluidez o pronunciación.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Simulaciones y juegos de roles:</b> los estudiantes ensayan comportamientos o habilidades específicas con apoyo docente.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto descriptivo de la imagen')

    h2 Refuerzo intermitente: manteniendo la motivación a largo plazo
    p.mb-4 A diferencia del refuerzo continuo, el refuerzo intermitente se ofrece de forma irregular, lo que lo hace útil para sostener la motivación y evitar que las conductas deseadas desaparezcan.

    .row.mb-4
      .col-10.col-md-6.col-lg-4.d-flex.mx-auto
        .d-flex.bg-amarillo-oscuro.px-3.py-2.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-2.text-bold Elogiar la participación activa ocasionalmente
            span Esto mantiene el interés por participar sin generar dependencia.
      .col-10.col-md-6.col-lg-4.d-flex.mx-auto
        .d-flex.bg-amarillo-oscuro.px-3.py-2.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-2.text-bold Recompensas sorpresa
            span Otorgar reconocimientos inesperados mantiene a los estudiantes atentos y motivados.
      .col-10.col-md-6.col-lg-4.d-flex.mx-auto
        .d-flex.bg-amarillo-oscuro.px-3.py-2.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-2.text-bold Sistemas de puntos variables
            span Variar la cantidad de puntos por la misma conducta crea expectativa y compromiso.

    h2 Moldeamiento: guiando gradualmente hacia el objetivo final
    p.mb-4 El moldeamiento se usa para enseñar comportamientos complejos que aún no aparecen. Se refuerzan progresivamente las aproximaciones a la conducta deseada.
    .row.bg-azul-oscuro.p-4.py-xl-0.mb-4(data-aos='fade-up')
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto descriptivo de la imagen') 
      .col-12.col-xl-8.d-flex
        .my-auto
          div.d-flex.mb-3
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Enseñar a escribir:</b> se comienza reforzando el uso del lápiz, luego los trazos, y finalmente la escritura de palabras completas.
          div.d-flex.mb-3
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Fomentar la participación:</b> incluso una mínima intervención del estudiante tímido es reforzada, incrementando progresivamente el nivel de participación requerido.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 <b>Aprender un nuevo deporte:</b> se refuerzan los intentos iniciales, y se incrementan las exigencias a medida que se mejora la ejecución.

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Beneficios del Conductismo
          p.mb-5(data-aos="fade-up") Se invita a leer el documento Beneficios del Conductismo, donde se exploran las ventajas de esta teoría en contextos educativos, como la claridad en la evaluación, la estructuración del aprendizaje y el uso de refuerzos.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_beneficios_del_conductismo.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Beneficios del Conductismo
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/33745?page=57") Gallardo Vázquez, P. & Camacho Herrera, J. M. (2016). Teorías del aprendizaje y práctica docente. Wanceulen Editorial.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=yfFjgPiRkWw") Sprouts Español. (2022). Condicionamiento clásico de Pavlov [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
