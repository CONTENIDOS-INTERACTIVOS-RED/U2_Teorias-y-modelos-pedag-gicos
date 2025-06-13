<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Teoría constructivista'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-5.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto descriptivo de la imagen')
        .col-12.col-xl-7.d-flex
          .bg-morado.p-4.d-flex.h-100(data-aos='fade-up')
            p.my-auto Según Benítez-Vargas (2023), el <i>constructivismo</i> es una corriente pedagógica desarrollada por Jean Piaget y Lev Vygotski, basada en la teoría del conocimiento constructivista. Esta sostiene que el aprendizaje requiere proporcionar al alumno herramientas o <i>andamiajes</i> que le permitan construir sus propios métodos de resolución de problemas. El proceso de enseñanza se concibe como <b>dinámico, participativo e interactivo</b>, donde el conocimiento se construye auténticamente por el aprendiz, denominado <i>sujeto cognoscente</i>.

      p.mb-4 <b>Tabla 1.</b> Aportes clave de Piaget y Vygotski

      .tabla-a
        table
          thead
            tr
              th.text-white.text-center.bg-morado-oscuro Jean Piaget
              th.text-white.text-center.bg-morado-oscuro Lev Vygotski
          tbody
            tr
              td.bg-morado Se centra en la interacción del sujeto con el entorno físico.
              td.bg-morado Destaca el papel del entorno social en la reconstrucción del conocimiento.
            tr
              td.bg-morado Propone que el conocimiento se desarrolla en etapas mediante la asimilación y acomodación.
              td.bg-morado Introduce el concepto de zona de <i>desarrollo próximo</i> y la importancia del lenguaje.
            tr
              td.bg-morado Subraya la autonomía del aprendiz en la construcción de su conocimiento.
              td.bg-morado Enfatiza la mediación social como soporte del aprendizaje.

      .d-flex.bg-azul-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0 Benítez-Vargas (2023), citando a Chunk (2012), señala que aunque el constructivismo se basa en principios opuestos al conductismo, también se vale de sus aportes, como los mecanismos conductuales que permiten programar la enseñanza del conocimiento.

      h2 Malentendidos frecuentes
      p.mb-4 Existe la idea errónea de que el constructivismo significa dejar al alumno aprender sin guía docente. Sin embargo, el constructivismo <b>requiere una interacción continua entre docente y estudiante</b>, permitiendo una construcción dialéctica del conocimiento. Así, la enseñanza no se limita a transmitir información, sino que facilita una <b>síntesis productiva</b> orientada al aprendizaje significativo. Los p<b>rincipios fundamentales del constructivismo son: </b>

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Responsabilidad del alumno
                p El estudiante actúa como constructor activo del conocimiento, interpretando la nueva información con base en sus experiencias y creencias previas. Incluso actividades como leer o escuchar requieren una participación mental activa. Si no se involucra, el aprendizaje no se produce, sin importar el esfuerzo del docente (Benítez-Vargas, 2023).
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Actividades constructivas
                p La enseñanza funciona como una mediación que impulsa la elaboración interna del conocimiento. El alumno interpreta, escucha con atención, participa en discusiones y resuelve problemas. El facilitador debe diseñar actividades significativas y desafiantes, ofreciendo andamiajes que favorezcan el progreso en el aprendizaje (Benítez-Vargas, 2023).
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Construcción de significados
                p El aprendizaje tiene como meta que el estudiante cree significados personales y pertinentes, que pueden ser inicialmente incompletos o erróneos, pero se perfeccionan mediante la reflexión, el diálogo y la interacción. El error se considera una oportunidad para mejorar la comprensión. La evaluación se enfoca en comprender el proceso del alumno y ofrecer retroalimentación pertinente (Benítez-Vargas, 2023).
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen') 
      
      h2 Papel del facilitador y contenido preexistente
      
      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-up")
          p.mb-0.text-white El conocimiento que construye el estudiante no es completamente nuevo; está basado en contenidos ya establecidos, producto de una construcción social. Por ejemplo, aprende la lengua escrita, las operaciones aritméticas o las normas sociales. El facilitador no solo debe promover una actividad mental rica, sino también <b>guiar la construcción del alumno hacia los saberes culturales</b> que representan estos contenidos (EcuRed, 2018, p.2).

      h2 Concepción del conocimiento y su impacto educativo
      
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 El constructivismo sostiene que <b>el conocimiento no se transmite, sino que se construye</b>. Esto implica que ningún conocimiento debe considerarse inválido, pues es parte de una construcción personal. La heterogeneidad es intrínseca al proceso de aprendizaje (Benítez-Vargas, 2023).
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-42.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Esta teoría ha transformado el discurso educativo, integrándose al acervo pedagógico universal como una de las propuestas más auténticas del enfoque constructivista. Contrapone el modelo tradicional centrado en el docente, proponiendo que el <b>alumno es el principal responsable de su aprendizaje</b>, y que el aprendizaje significativo es el objetivo fundamental (Benítez-Vargas, 2023).
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto descriptivo de la imagen')

      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 Componentes de la teoría constructivista

      p.mb-4 El <i>constructivismo</i> es un enfoque teórico que sostiene que el conocimiento no se recibe pasivamente, sino que se construye activamente por el aprendiz. Según Luisa (2023), las perspectivas de <b>Lev Vygotsky</b>, <b>Jean Piaget</b> y <b>David Ausubel</b> permiten comprender las distintas dimensiones que conforman este paradigma educativo.

      p.mb-4 <b>Tabla 2.</b> Tabla comparativa: contribuciones de Vygotsky, Piaget y Ausubel
      
      .tabla-a.mb-4
        table
          thead
            tr
              th.text-white.text-center.bg-morado-oscuro Dimensión
              th.text-white.text-center.bg-morado-oscuro Lev Vygotsky
              th.text-white.text-center.bg-morado-oscuro Jean Piaget
              th.text-white.text-center.bg-morado-oscuro David Ausubel
          tbody
            tr
              td.bg-morado.text-bold Aprendizaje activo
              td.bg-morado Considera al alumno un sujeto activo, pero destaca que su actividad está mediada socialmente. La <i>Zona de Desarrollo Próximo</i> (ZDP) es el espacio donde el aprendiz puede avanzar con ayuda de otros.
              td.bg-morado Enfatiza el papel de la actividad individual en el desarrollo cognitivo. El aprendizaje surge del <i>desequilibrio cognitivo</i>, superado mediante la <i>asimilación</i> y acomodación.
              td.bg-morado El aprendizaje significativo implica una <i>actividad mental</i> donde el estudiante conecta activamente la nueva información con conocimientos previos relevantes.
            tr
              td.bg-morado.text-bold Interacción social  
              td.bg-morado Es el motor principal del desarrollo. El conocimiento primero se construye en el plano <i>interpsicológico</i> (entre personas), y luego se interioriza como intrapsicológico. El lenguaje es clave en este proceso.
              td.bg-morado Reconoce la importancia de la interacción social, pero no como eje principal. La interacción ayuda en la <i>toma de perspectiva</i> y el desarrollo moral, pero el foco es el desarrollo individual.
              td.bg-morado La interacción social no es central. El énfasis está en los <i>procesos internos</i> de la estructura cognitiva. El diálogo puede facilitar el aprendizaje, pero no es esencial. 
            tr
              td.bg-morado.text-bold Contextualización
              td.bg-morado El aprendizaje siempre ocurre en un contexto social y cultural específico. Las <i>herramientas culturales</i> como el lenguaje moldean el pensamiento.
              td.bg-morado El desarrollo cognitivo se da principalmente en la interacción con el entorno físico. El contexto social y cultural no es un eje teórico central en su propuesta.
              td.bg-morado Valora que el contenido tenga <i>significatividad psicológica</i> para el aprendiz. La conexión con el “mundo real” mejora la motivación y facilita la comprensión.
            tr
              td.bg-morado.text-bold Construcción del conocimiento
              td.bg-morado Se construye por <i>mediación social</i>. El conocimiento es internalizado gracias a la interacción con otros, especialmente en la ZDP, donde el docente u otros más competentes proporcionan herramientas cognitivas.
              td.bg-morado Se desarrolla mediante la <i>organización de esquemas</i> que se modifican con la experiencia. Los procesos de asimilación y acomodación generan nuevos niveles de equilibrio cognitivo.
              td.bg-morado Se construye al establecer <i>conexiones sustantivas</i> entre los nuevos contenidos y la estructura cognitiva existente. Los organizadores previos facilitan esta asimilación.
            tr
              td.bg-morado.text-bold Papel del docente
              td.bg-morado El docente actúa como <i>guía y facilitador</i>. Proporciona andamiaje ajustado al nivel del estudiante, modelando, colaborando y retirando gradualmente el apoyo conforme el alumno gana autonomía.
              td.bg-morado El maestro diseña <i>ambientes ricos</i> en experiencias de exploración. No instruye directamente, sino que estimula el descubrimiento, el ensayo y error, y la construcción autónoma del conocimiento.
              td.bg-morado El docente organiza la información de manera <i>lógica y secuencial</i>, utilizando organizadores previos. Su rol es asegurarse de que existan <i>puentes cognitivos</i> con lo que el estudiante ya sabe.

      .row.bg-azul-oscuro.p-4.py-xl-0.mb-4.mx-0(data-aos='fade-up')
        .col-12.col-xl-8.d-flex
          .my-auto
            span Aunque difieren en énfasis y fundamentos, <b>Vygotsky, Piaget y Ausubel coinciden en concebir al estudiante como agente activo en la construcción del conocimiento</b>. Sus perspectivas, lejos de ser excluyentes, se complementan y ofrecen una base sólida para aplicar estrategias educativas orientadas al desarrollo integral del aprendizaje.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-44.png', alt='Texto descriptivo de la imagen') 

      .row.bg-azul.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Beneficios del constructivismo en la educación
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Beneficios del constructivismo en la educación, donde se discuten los efectos positivos de aplicar el enfoque constructivista en el aula, tales como el fomento del pensamiento crítico, la autonomía y el trabajo colaborativo.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_constructivismo_en_la_educacion.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Beneficios del constructivismo en la educación
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/47644?page=2") Feixas Viaplana, G. & Villegas Besora, M. (2000). Constructivismo y psicoterapia. Editorial Desclée de Brouwer.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=fHdQWmbhfdE") Sprouts Español. (2021). La Teoría del Desarrollo Cognitivo a Través de las Relaciones Sociales de Vygotsky [Vídeo]
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
      
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Pedagogía y Modelos Pedagógicos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la pedagogía?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ciencia que estudia las matemáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ciencia que estudia la educación y los procesos de enseñanza-aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La disciplina que estudia el cuerpo humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La técnica que analiza la literatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un componente de los modelos pedagógicos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Metabolismo.', esCorrecta: false },
            { id: 'b', texto: 'Propósitos Educativos.', esCorrecta: true },
            { id: 'c', texto: 'Fotosíntesis.', esCorrecta: false },
            { id: 'd', texto: 'Geografía.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'La pedagogía puede ser entendida como:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo una ciencia.', esCorrecta: false },
            { id: 'b', texto: 'Ciencia, arte o disciplina.', esCorrecta: true },
            { id: 'c', texto: 'Solo una disciplina.', esCorrecta: false },
            { id: 'd', texto: 'Solo una técnica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué caracteriza al modelo constructivista?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aprendizaje pasivo del estudiante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La repetición y memorización de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El protagonismo activo del estudiante en la construcción de conocimientos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La supervisión estricta del docente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué diferencia al método de la metodología?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La metodología organiza los métodos, estrategias y recursos, mientras que el método es un conjunto específico de pasos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No hay diferencia, son conceptos sinónimos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El método es más abstracto que la metodología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La metodología está limitada a las prácticas del docente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
