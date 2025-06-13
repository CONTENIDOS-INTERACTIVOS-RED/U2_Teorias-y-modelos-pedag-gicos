export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Teorías del aprendizaje',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría conductista',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Aplicación de la Teoría Conductista en la Educación',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Teoría cognitivista',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes de la teoría cognitivista',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Beneficios de la teoría cognitivista en la educación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Teoría constructivista',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes de la teoría constructivista',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Teoría conectivista',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La red es el aprendizaje en el conectivismo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Componentes de la teoría conectivista',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Moreno, P. (2024). La teoría conductista y su aplicación en la educación.',
      link: 'https://blog.centrodeelearning.com/teoria-conductista/',
    },
    {
      referencia:
        'Bobadilla Ramírez, D. (2010). El conductismo orígenes, trayectoria y significado. ResearchGate.',
      link:
        'https://www.researchgate.net/publication/266261125_EL_CONDUCTISMO_ORIGENES_TRAYECTORIA_Y_SIGNIFICADO',
    },
    {
      referencia:
        'Torres, A. (2024). Conductismo: historia, conceptos y autores principales.',
      link: 'https://psicologiaymente.com/psicologia/conductismo',
    },
    {
      referencia: 'Alexduve. (2023, abril). Las 10 ventajas del conductismo.',
      link:
        'https://www.alexduve.com/2023/04/las-10-ventajas-del-conductismo.html',
    },
    {
      referencia:
        'Francia, G. (2020, 12 noviembre). Teorías cognitivas: cuáles son, tipos y ejemplos. psicologia-online.com.',
      link:
        'https://www.psicologia-online.com/teorias-cognitivas-cuales-son-tipos-y-ejemplos-5321.html',
    },
    {
      referencia:
        'Orbegoso. (2024). Teoría cognitiva y sus representantes. tauniversity.org.',
      link:
        'https://tauniversity.org/sites/default/files/teoria_cognitiva_y_sus_representantes.pdf',
    },
    {
      referencia:
        'Sanchis, S. (2020, 18 noviembre). La teoría del desarrollo cognitivo de Piaget. psicologia-online.com.',
      link:
        'https://www.psicologia-online.com/la-teoria-del-desarrollo-cognitivo-de-piaget-4952.html',
    },
    {
      referencia:
        'Abate de Tadeo, N. (2024). La psicología cognitiva y sus aportes al proceso de aprendizaje. Universidad Nacional Autónoma de México.',
      link:
        'https://www.paginaspersonales.unam.mx/files/574/psicologia_cognitiva.pdf',
    },
    {
      referencia:
        'Psicorevista. (2023, 21 mayo). Modelo cognitivo de aprendizaje: la clave para potenciar el proceso educativo - psicorevista. Psicorevista.',
      link: 'https://psicorevista.com/aprendizaje/modelo-cognitivo/',
    },
    {
      referencia:
        'Benítez-Vargas, B. (2023). El constructivismo. Con-Ciencia Boletín Científico de la Escuela Preparatoria No. 3, 10(19), 65-66.',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/prepa3/article/download/10453/9998/',
    },
    {
      referencia:
        'Luisa, M. (2023, 15 julio). TEORIAS DEL APRENDIZAJE DE Piaget, Vigotsky, Ausubel y Bruner. Materiales Educativos.',
      link:
        'https://materialeseducativos.net/materiales-para-profesores/teorias-del-aprendizaje-de-piaget-vigotsky-ausubel-y-bruner-2/',
    },
    {
      referencia:
        'Gracia, J. (2024, 25 noviembre). Aprendizaje constructivista: Qué es, beneficios para la educación y cómo aplicarlo. Diferencia.',
      link: 'https://diferenciaentre.es/aprendizaje-constructivista/',
    },
    {
      referencia:
        'Gutiérrez Campos, L. (2012). Conectivismo como teoría de aprendizaje: conceptos, ideas, y posibles limitaciones. Revista Educación y Tecnología, N° 1.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4169414.pdf',
    },
    {
      referencia:
        'Siemens, G. (2004). Conectivismo: Una teoría de aprendizaje para la era digital.',
      link:
        'https://www.jorgeinnova.com/2024/10/conectivismo-teoria-de-aprendizaje-para-la-era-digital.html',
    },
    {
      referencia:
        'Virginia. (2023, octubre 14). El conectivismo en la educación. Educativos Para. . .',
      link: 'https://www.educativospara.com/el-conectivismo-en-la-educacion/',
    },
  ],
  glosario: [
    {
      termino: 'Atribución',
      significado:
        'proceso mediante el cual las personas asignan causas a los comportamientos propios y ajenos, según la teoría de Fritz Heider.',
    },
    {
      termino: 'Cognitivismo',
      significado:
        'enfoque del aprendizaje que estudia los procesos mentales como la memoria, la atención y la resolución de problemas.',
    },
    {
      termino: 'Conductismo',
      significado:
        'teoría psicológica que explica el aprendizaje basado en estímulos y respuestas, mediante condicionamiento clásico y operante.',
    },
    {
      termino: 'Conectivismo',
      significado:
        'modelo de aprendizaje que enfatiza la importancia de las redes y la tecnología para la adquisición de conocimientos.',
    },
    {
      termino: 'Constructivismo',
      significado:
        'teoría que sostiene que los estudiantes construyen activamente su conocimiento a partir de experiencias previas.',
    },
    {
      termino: 'Disonancia cognitiva',
      significado:
        'estado de tensión psicológica que ocurre cuando hay contradicción entre creencias o actitudes, según Leon Festinger.',
    },
    {
      termino: 'Gestos',
      significado:
        'movimientos corporales que transmiten información, incluidos los gestos referenciales, simbólicos y demostrativos.',
    },
    {
      termino: 'Metacognición',
      significado:
        'capacidad de reflexionar sobre el propio aprendizaje y ajustar estrategias para mejorar la comprensión.',
    },
    {
      termino: 'Psicomotricidad',
      significado:
        'disciplina que estudia la relación entre el movimiento del cuerpo y el desarrollo cognitivo y emocional.',
    },
    {
      termino: 'Refuerzo',
      significado:
        'estrategia del conductismo que incrementa la probabilidad de una conducta mediante estímulos positivos o negativos.',
    },
  ],
}
