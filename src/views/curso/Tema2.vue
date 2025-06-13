<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Teoría cognitivista'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-up")
          p.mb-0.text-white En los últimos años, la psicología científica ha experimentado una notable evolución. Según Orbegoso (2024), se ha dejado atrás el predominio de la psicología conductista para dar paso a un nuevo enfoque centrado en el <i>procesamiento de información</i>, el cual se basa en una analogía entre el funcionamiento de la mente humana y las computadoras digitales. Este cambio ha impactado diversas áreas de la psicología educativa, incluyendo la memoria, la atención, la inteligencia, así como aspectos de la interacción social y emocional.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 A pesar de esta tendencia, aún persiste una fuerte influencia del conductismo en los textos de Psicología del Aprendizaje, especialmente en contextos experimentales con animales. No obstante, se están realizando esfuerzos significativos para transformar esta perspectiva mediante la implementación de nuevos programas cognitivos. El creciente interés en la psicología cognitiva ha impulsado la creación de diversas teorías y enfoques por parte de sus representantes. (Orbegoso, 2024)
          .d-flex.bg-morado.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-24.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 De acuerdo con Francia (2020), el cognitivismo surgió en la década de 1960 gracias a las investigaciones de U. Neisser, quien formuló la primera teoría en Psicología Cognitiva en 1967. Este enfoque evolucionó con los aportes de destacados investigadores como A. Collins, G.A. Miller, D. Norman, G. Mandler, D.E. Rumelhart y J.S. Bruner. Se consolidó con obras como <i>La ciencia de la mente</i> de H. Gardner (1985) y <i>La sociedad de la mente</i> de M. Minsky (1986), donde se reconoce la influencia de disciplinas como la filosofía, la antropología, la neuropsicología, la informática y la <i>cibernética</i>.

        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-25.png', alt='Texto descriptivo de la imagen')

      .row.mb-4
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-26.png', alt='Texto descriptivo de la imagen')
        .col-12.col-xl-9
          p.mb-4 El cognitivismo no constituye una escuela psicológica formal, sino una orientación que se interrelaciona con diversas corrientes, marcando una clara oposición al conductismo. Desde esta perspectiva, el aprendizaje es un proceso que responde a la necesidad de construir y organizar la realidad, a través de la interacción constante entre el individuo y su entorno. Se analiza a partir de los cambios que ocurren en las estructuras cognitivas y en la personalidad. (Francia, 2020)
          .bg-amarillo.p-4(data-aos='fade-up')
            span Aunque tanto el conductismo como la psicología cognitiva coinciden en que el estudio del aprendizaje debe ser objetivo y basado en evidencia experimental, difieren en su enfoque. Las teorías conductistas abordan el aprendizaje como un fenómeno <i>molecular</i>, enfocado en las conexiones estímulo-respuesta. En contraste, las teorías cognitivas lo conciben como un fenómeno <i>molar</i>, centrado en las transformaciones de las estructuras cognitivas y la personalidad del sujeto. (Francia, 2020).

      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Aportes de diferentes autores al Cognitivismo
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Aportes de diferentes autores al Cognitivismo, donde se analizan las contribuciones de figuras como Bruner, Piaget, y teóricos del procesamiento de la información.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_aportes-autores-cognitivismo.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Aportes de diferentes autores al Cognitivismo
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen') 

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Componentes de la teoría cognitivista

      p.mb-4 Según Abate de Tadeo (2024), la teoría cognitivista se distingue del conductismo al centrar su atención en los procesos mentales internos que subyacen al aprendizaje. Considera al aprendiz como un procesador activo de información que selecciona, organiza, almacena y recupera conocimiento para construir su comprensión del mundo. Esta perspectiva propone un modelo de aprendizaje como proceso activo, intencional y constructivo. A continuación se describen sus principales componentes:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Procesamiento de la Información")
              p Es el núcleo del enfoque cognitivista. Se basa en la analogía mente-computadora: la información es recibida (por los sentidos), codificada (transformada), almacenada y recuperada. Este procesamiento no es pasivo, sino activo, implicando la selección de información relevante, su organización e integración con el conocimiento previo. El diseño de la instrucción debe considerar cómo presentar la información y cómo activar conocimientos existentes.
            .div(titulo="Memoria")
              p.mb-3 Sistema complejo con múltiples etapas: 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                p.mb-0 <i>Memoria Sensorial:</i> Registro inicial y breve de estímulos sensoriales; se desvanece rápidamente sin atención.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                p.mb-0 <i>Memoria a Corto Plazo (MCP) o Memoria de Trabajo:</i> Capacidad limitada; mantiene y manipula la información activa.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                p.mb-0 <i>Memoria a Largo Plazo (MLP):</i> Almacén duradero e ilimitado; contiene conocimientos organizados en redes semánticas y esquemas.

            .div(titulo="Atención")
              p Proceso clave que permite filtrar y focalizar la información relevante, dejando de lado estímulos distractores. Es un recurso limitado influido por la novedad, intensidad, relevancia y metas. Su gestión adecuada es fundamental para facilitar el paso de la información desde la memoria sensorial hacia la MCP. El rol del docente es crucial para captar y mantener la atención mediante contenidos significativos y estrategias motivadoras.
            .div(titulo="Metacognición")
              p Implica la capacidad del aprendiz para ser consciente de sus procesos mentales, planificar su aprendizaje, monitorear su comprensión y evaluar sus estrategias. Es clave para la autorregulación y el aprendizaje autónomo. El fomento de la metacognición permite a los estudiantes adaptar sus enfoques y superar obstáculos de forma estratégica y eficiente.
            .div(titulo="Estructuras Cognitivas (Esquemas)")
              p Son marcos mentales organizados que permiten interpretar, organizar e integrar nueva información. Se desarrollan con la experiencia y el aprendizaje. Cuando la información nueva no encaja, los esquemas se ajustan o se crean nuevos. Activar esquemas previos facilita la comprensión y el recuerdo. Los docentes pueden promover el aprendizaje guiando este proceso de construcción y reestructuración de esquemas.
      
      .d-flex.bg-verde.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-29.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white La teoría cognitivista concibe el aprendizaje como un proceso <i>activo y constructivo</i> que se desarrolla en la mente del aprendiz. Comprender y aplicar estos componentes clave permite a los educadores diseñar estrategias pedagógicas eficaces que optimicen la adquisición, almacenamiento y recuperación del conocimiento, promoviendo un aprendizaje más profundo, significativo y autónomo.

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Beneficios de la teoría cognitivista en la educación

      p.mb-4 La aplicación efectiva de la teoría cognitivista en contextos educativos aporta múltiples ventajas que trascienden la simple adquisición de conocimientos. Según Psicorevista (2023), este enfoque favorece el desarrollo integral del estudiante al centrarse en los procesos mentales que intervienen en el aprendizaje. A continuación se presentan sus principales beneficios:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Promueve el Aprendizaje Significativo
                p Estimula la conexión entre nuevos conceptos y conocimientos previos mediante la activación de <i>esquemas mentales</i>. El uso de analogías, organizadores previos y preguntas guía facilita una comprensión profunda y duradera del contenido, integrándolo a la estructura cognitiva del estudiante.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Fomenta la Autonomía
                p Al desarrollar la <i>metacognición</i>, los estudiantes aprenden a planificar, monitorear y evaluar su propio aprendizaje. Esto les permite identificar fortalezas y debilidades, adaptar estrategias y regular su esfuerzo, promoviendo así un aprendizaje autónomo y sostenido a lo largo de la vida.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Mejora la Retención de Información
                p Organizar la información en estructuras significativas —como mapas conceptuales y esquemas— favorece su almacenamiento en la <i>memoria a largo plazo</i>. Este orden mental facilita la codificación y recuperación eficiente del conocimiento, optimizando el rendimiento académico.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Desarrolla el Pensamiento Crítico
                p Fomenta habilidades cognitivas superiores como el análisis, la comparación, la síntesis y la evaluación. A diferencia del enfoque memorístico, la teoría cognitivista impulsa a los estudiantes a reflexionar activamente, formar opiniones propias y aplicar sus conocimientos a nuevos contextos.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Facilita la Resolución de Problemas
                p Enseña estrategias cognitivas como el razonamiento analógico, el análisis medios-fines o la descomposición de problemas. Estas herramientas permiten identificar y abordar desafíos de manera eficaz y flexible, tanto en el ámbito académico como en la vida cotidiana.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen') 

      .d-flex.bg-morado-oscuro.p-4.flex-column.flex-md-row.mb-5(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white La teoría cognitivista transforma la enseñanza en una experiencia centrada en el estudiante como <i>constructor activo de conocimiento</i>. Al enfocarse en los procesos internos del pensamiento, promueve un aprendizaje más significativo, autónomo, duradero y transferible. Este enfoque no se limita a la transmisión de información, sino que forma aprendices críticos y capaces de aplicar lo aprendido en situaciones reales.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/15519?page=5") Martín, E. (2003). Aportaciones de Piaget a la teoría y prácticas educativas. Colegio Oficial de la Psicología de Madrid.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=yYFhPO5pArc") Sprouts Español. (2020). La teoría del desarrollo cognitivo de Piaget [Vídeo]
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
