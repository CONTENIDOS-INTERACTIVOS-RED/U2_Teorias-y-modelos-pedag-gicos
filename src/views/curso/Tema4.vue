<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Teoría conectivista'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      
      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-morado-oscuro.p-4(data-aos="fade-up")
          p.mb-0.text-white El <i>conectivismo</i>, según Gutiérrez Campos (2012), citando a Siemens (2004), es una teoría del aprendizaje diseñada para responder a las exigencias de la <b>era digital</b>. Esta teoría surge en un entorno social donde el conocimiento y el valor económico se generan a través de <b>redes de inteligencia humana</b>, transformando radicalmente los modos tradicionales de aprender y enseñar.
        .d-none.d-xl-block.col-4.px-0
          img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
      
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto descriptivo de la imagen')
        .col-12.col-xl-8
          p.mb-4 En este contexto, la revolución de las tecnologías de la información ha impactado la forma en que se hacen negocios, se prestan servicios, se concibe el tiempo laboral y, sobre todo, los procesos educativos. El fenómeno de la globalización, descrito por Finger (2005), ha traído consigo una <b>integración económica, una homogeneización cultural y una uniformización tecnológica</b>, lo que ha influido profundamente en las instituciones educativas.
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-48.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Estas instituciones están pasando de ser espacios de formación tradicional a convertirse en actores del mercado global, donde el conocimiento se ofrece como un producto y los estudiantes comienzan a ser vistos como consumidores. Este nuevo paradigma exige una <b>preparación constante y adaptativa</b>, dando lugar al concepto de <i>aprendizaje a lo largo de la vida</i> (Gutiérrez Campos, 2012).

      h2 El conectivismo y su contexto

      .row.mb-4
        .col-12.col-xl-7.d-flex
          .bg-azul.p-4.d-flex.h-100(data-aos='fade-up')
            p.my-auto A medida que la educación en línea crece y las tecnologías digitales se incorporan en entornos formales, no formales e informales, se ha hecho evidente que las herramientas tecnológicas no solo amplían el acceso, sino que también <b>reconfiguran las dinámicas del aprendizaje</b>. Merrian et al. (2006), citados por Gutiérrez Campos (2012), enfatizan que la tecnología es parte integral de la economía global y ha provocado transformaciones en la fuerza laboral y la sociedad del conocimiento.
        .col-5.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
          
      h2 Fundamentos del conectivismo
      p.mb-4 A continuación, se presenta un video que introduce los fundamentos del conectivismo. Este material ofrece una visión general sobre cómo se construye el aprendizaje en redes digitales, destacando la importancia de las conexiones, la diversidad de fuentes y la toma de decisiones en entornos cambiantes.

      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              <iframe width="1905" height="732" src="https://www.youtube.com/embed/pcPA76UeuQ8" title="Fundamentos del conectivismo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      h2 Conectivismo frente a teorías tradicionales del aprendizaje

      .row.mb-4
        .col-3.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
        .col-12.col-xl-9
          .bg-azul-oscuro.p-4.mb-4(data-aos='fade-up')
            span El conectivismo no solo propone nuevas formas de entender cómo aprendemos, sino que también <b>contrasta profundamente con las teorías tradicionales</b> como el <i>conductismo</i>, el <i>cognitivismo</i> y el <i>constructivismo</i>. Estas teorías fueron desarrolladas en contextos donde el conocimiento crecía lentamente, el aprendizaje ocurría principalmente en espacios formales y la tecnología no tenía un papel significativo. En cambio, el conectivismo responde a un entorno digital, interconectado y en constante cambio, donde <b>las redes, la velocidad de acceso a la información y la colaboración global</b> son claves.
          span A continuación se presenta una tabla comparativa que muestra las principales diferencias entre el conectivismo y las teorías de aprendizaje tradicionales:

      p.mb-4 <b>Tabla 3.</b> Conectivismo vs. Teorías tradicionales del aprendizaje

      .tabla-a.mb-4
        table
          thead
            tr
              th(width="25%").bg-morado-oscuro.text-white.text-center Aspecto
              th.bg-morado-oscuro.text-white.text-center Conectivismo
              th(width="37%").bg-morado-oscuro.text-white.text-center Teorías tradicionales (Conductismo, Cognitivismo, Constructivismo) 
          tbody
            tr
              td.bg-morado.text-bold Contexto histórico
              td.bg-morado Surge en la era digital, marcada por la conectividad y la tecnología.
              td.bg-morado Desarrolladas en contextos industriales o pre-digitales.
            tr
              td.bg-morado.text-bold Rol de la tecnología
              td.bg-morado Central. La tecnología es medio, entorno y extensión del pensamiento humano.
              td.bg-morado Marginal o inexistente en sus planteamientos originales.
            tr
              td.bg-morado.text-bold Naturaleza del conocimiento
              td.bg-morado Dinámico, fluido, distribuido y en constante expansión.
              td.bg-morado Estable, acumulativo, estructurado y controlado.
            tr
              td.bg-morado.text-bold Lugar del aprendizaje
              td.bg-morado Redes, comunidades virtuales, entornos formales, no formales e informales.
              td.bg-morado Principalmente instituciones educativas formales (escuela, universidad).
            tr
              td.bg-morado.text-bold Concepción del aprendizaje
              td.bg-morado Conectado, continuo, no lineal, autoorganizado y adaptativo.
              td.bg-morado Progresivo, basado en etapas (Piaget) o estímulo-respuesta (Skinner).
            tr
              td.bg-morado.text-bold Participación organizacional
              td.bg-morado Las organizaciones también son entidades que aprenden y gestionan conocimiento.
              td.bg-morado Enfocadas en el individuo como único agente de aprendizaje.
            tr
              td.bg-morado.text-bold Teoría del caos y redes
              td.bg-morado Acepta el caos como parte del proceso; enfatiza redes y conexiones.
              td.bg-morado No consideran el caos ni las redes como elementos del aprendizaje.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Un concepto clave en el conectivismo es la <b>autoorganización</b>, entendida como la formación espontánea de estructuras complejas a partir de condiciones iniciales aleatorias. Así, el aprendizaje requiere que tanto los individuos como las organizaciones desarrollen <b>sistemas abiertos</b> capaces de <b>adaptarse, reorganizarse y clasificar sus interacciones</b> con el entorno cambiante (Gutiérrez Campos, 2012).
          .d-flex.bg-azul.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-51.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Este enfoque resalta que el conocimiento <b>ya no se encuentra únicamente en las personas, sino también en las redes</b>, en las tecnologías, en las comunidades de práctica, y en los flujos de información. Por ello, se considera que el conectivismo <b>complementa y trasciende</b> a las teorías del aprendizaje anteriores, al integrar elementos tecnológicos y organizacionales propios del siglo XXI.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      #t_4_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.1
          h2 La red es el aprendizaje en el conectivismo

      p.mb-4 En el <i>conectivismo</i>, el aprendizaje se concibe como un proceso que ocurre <b>dentro de redes dinámicas de nodos conectados</b>. Según Siemens, citado por Gutiérrez Campos (2012), estas conexiones entre identidades constituyen redes en las que <b>cualquier cambio en un nodo afecta al conjunto</b>, influyendo en todos los individuos que las componen. De este modo, <i>la red no es solo el contexto del aprendizaje, sino su estructura fundamental</i>.

      .row.mb-4
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-morado.p-4.d-flex(data-aos='fade-up')
          span Andersson y Dron, también citados por Gutiérrez Campos (2012), sostienen que la forma de una red es <b>emergente, no planificada</b>, y responde a presiones tanto internas como externas. Barabási (2002) y Siemens (2004) afirman que los nodos buscan activamente conectarse, ya que de estas conexiones depende su supervivencia en un mundo interconectado.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-amarillo.p-4.d-flex(data-aos='fade-up')
          span Así, <b>cada nodo representa un punto de conocimiento</b>, y al integrarse más nodos a una red, se incrementa la riqueza de la experiencia de aprendizaje. Esta perspectiva se aleja de las teorías tradicionales, que ven el aprendizaje como un fenómeno <b>interno al individuo</b>. En cambio, el conectivismo entiende que el conocimiento se <b>distribuye, fluye y se transforma</b> a través de las redes.

      .d-flex.bg-verde.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-54.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white Un aspecto distintivo de esta teoría es que <b>las redes pueden alojar múltiples perspectivas, incluso contradictorias</b>, lo que permite al aprendiz <b>tomar decisiones más informadas</b> y desarrollar un pensamiento más crítico. Según Siemens (2006), el aprendizaje ocurre en <b>entornos nebulosos</b>, con variables cambiantes que escapan al control individual.

      #t_4_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.2
          h2 Componentes de la teoría conectivista

      p.mb-4 George Siemens, en su formulación del conectivismo (2004), identifica varios <b>componentes esenciales</b> que lo distinguen de teorías previas. A continuación, se presentan para una comprensión visual y comparativa:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Aprendizaje basado en redes")
              p El conocimiento ya no reside únicamente en la mente del individuo, sino que se <b>distribuye en redes</b> formadas por personas, tecnologías, recursos digitales y entornos de aprendizaje. Aprender implica <b>navegar, construir y mantener</b> estas redes.
            .div(titulo="Diversidad de fuentes")
              p La comprensión se enriquece mediante la exposición a <b>múltiples perspectivas e interpretaciones</b>. Evaluar la credibilidad y relevancia de las fuentes es esencial. Esto fomenta un pensamiento <b>crítico, autónomo y reflexivo</b>.
            .div(titulo="Tecnología como infraestructura")
              p Las herramientas digitales son la <b>base estructural</b> del aprendizaje en red. Plataformas, foros, bases de datos y redes sociales no solo facilitan el acceso, sino también la <b>producción, intercambio y adaptación del conocimiento.</b>
            .div(titulo="Autoaprendizaje y autonomía")
              p El aprendiz es <b>responsable de su propio proceso de aprendizaje</b>. Identifica necesidades, busca recursos, evalúa su validez y construye sus propias redes de conocimiento. La autonomía se vuelve una competencia esencial en un entorno digital en evolución constante.
            .div(titulo="Adaptabilidad al cambio")
              p En un mundo caracterizado por la sobrecarga y la volatilidad de la información, el aprendiz debe ser capaz de <b>ajustar sus redes, adoptar nuevas tecnologías y mantenerse actualizado</b>. El aprendizaje es visto como un <b>proceso continuo de adaptación</b>, no como un fin estático.

      p.mb-4 El <i>conectivismo</i> plantea una <b>nueva forma de concebir el aprendizaje</b>, adaptada a la era digital. A través del reconocimiento del conocimiento distribuido, la centralidad de las redes, la diversidad de fuentes, el papel clave de la tecnología y la autonomía del aprendiz, Siemens propone un marco que responde a las demandas del siglo XXI. Este enfoque no solo transforma las prácticas educativas, sino que redefine qué significa aprender en un mundo interconectado.

      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Beneficios del conectivismo en la educación
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Beneficios del conectivismo en la educación, donde se presenta cómo esta teoría responde a los desafíos del aprendizaje en la era digital, promoviendo la colaboración global, el aprendizaje continuo y el desarrollo de habilidades digitales.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_conectivismo_en_la_educacion.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Beneficios del conectivismo en la educación
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/232097?page=1") De Arco Paternina, L. K. Santana Galindo, P. V. & Gómez, Y. V. (2022). Habilidades blandas para el profesional del siglo XXI (Soft skills). Corporación Universitaria Minuto de Dios.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=szC4EobynvA") Revista CIENCIA ergo-sum. (2021). Conectivismo y neuroeducación: transdisciplinas para la formación en la era digital [Vídeo]
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Unidad 2',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principio clave del conductismo en el aprendizaje?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La construcción del conocimiento a través de experiencias previas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El papel de la tecnología en el proceso de aprendizaje',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El aprendizaje basado en estímulos y respuestas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La influencia de la interacción social en la adquisición del conocimiento',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes opciones representa un concepto central en el cognitivismo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Refuerzo positivo y negativo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aprendizaje basado en redes digitales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesos mentales como la memoria y la atención',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Construcción del conocimiento a través de la interacción social',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Según el constructivismo, ¿cómo adquiere conocimiento un estudiante?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'A través de la repetición y el condicionamiento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mediante la construcción activa de conocimientos a partir de experiencias previas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Basándose en la conectividad con recursos tecnológicos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicando refuerzos y castigos en el aprendizaje',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué característica distingue al conectivismo de otras teorías del aprendizaje?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La importancia de las redes y la tecnología en la adquisición de información',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La modificación de la conducta a través de estímulo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El enfoque en la memoria y la atención en el proceso de aprendizaje',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La dependencia de la repetición para consolidar conocimientos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es el papel del docente en el enfoque constructivista?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar el aprendizaje mediante estímulos y respuestas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser el principal transmisor de información',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actuar como facilitador del aprendizaje, guiando a los estudiantes en su construcción del conocimiento',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Aplicar refuerzos y castigos para moldear el comportamiento',
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
