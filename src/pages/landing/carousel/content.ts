import perfil from 'src/assets/images/landing/Carousel/Perfil.jpeg'

export interface Testimony {
  name: string
  last_name?: string
  message: string
  index: number
  image: string
}

const testimonies: Testimony[] = [
  {
    name: 'Caique',
    last_name: 'Pinho',
    message: 'Quando busquei a assessoria da Eliana, já estava a algum tempo buscando outras oportunidades para sair do meu antigo trabalho. Após todo o processo de conversas e alterações realizadas tanto no meu CV quanto no meu perfil do LinkedIn, comecei a receber convites para entrevistas dos recrutadores diretamente pelo Linkedin. Em resumo, consegui a vaga que almejava em pouco menos de 3 semanas, e ainda hoje recebo mensagens para novas entrevistas. Obrigado Eliana por ter me ajudado a melhorar a maneira com que exponho minhas habilidades e experiências profissionais, isso fez total diferença.',
    index: 1,
    image: perfil,
  },
  {
    name: 'Marcela',
    last_name: 'Toledo',
    message: 'O trabalho com a Eliana foi bastante importante para mim por dois motivos. Um para conseguir organizar e melhorar o meu currículo. Estava há mais de um ano buscando oportunidades, enviando inscrição para as vagas, porém não era chamada para próximas fases. Com a Eliana consegui estruturar melhor o currículo, entender qual o formato ideal para cada oprtunidade, assim como rechea-lo com as informações que eram de fato relevantes para os recrutadores. O segundo motivo foi o de melhorar a minha auto-estima e me fazer perceber todas as minhas conquistas aolongo da minha jornada de trabalho, o que foi fundamental para estar pronta para os processos seletivos. Depois do nosso trabalho juntas participei de diversos processos e consegui fazer o movimento de carreira que estava buscando.',
    index: 2,
    image: perfil,
  },
  {
    name: 'Vanessa',
    last_name: 'Rodrigues',
    message: 'Nossa quem diria, após o retorno da minha licença maternidade fui demitida, depois de 10 anos, fiquei totalmente perdida e desestabilizada porque não sabia nem como fazer um currículum e a Eliana nesse momento foi quem me ajudou a fazer um curriculum que mostrava tudo o que eu tinha de diferencial e os resultados que obtive em meu trabalho utilizou palavras chaves fundamentais para que tornasse meu curriculum ainda mais interessante. Foi fundamental para que eu conseguisse me recolocar. E o melhor de tudo me recoloquei rapidamente assim que eu o coloquei no LinkedIn. Amei o resultado.',
    index: 3,
    image: perfil,
  },
  {
    name: 'Guilherme',
    last_name: 'Dutra',
    message: 'O trabalho da Eliana sem dúvidas foi um divisor de águas no que eu entendia sobre preparação para processos seletivos. Ela não se limita apenas ao processo em si, através de um trabalho dedicado e bem fundamentado, ela ensina como podemos lapidar nossa imagem e discurso afim de mostrar todo o potencial que podemos entregar.',
    index: 4,
    image: perfil,
  },
  {
    name: 'Amanda',
    last_name: 'Pacheco',
    message: 'Após 9 anos trabalhando na mesma organização, em meio a pandemia em 2021, fui dreact/react-in-jsx-scopeemitida. A princípio fiquei sem chão, não sabia o que fazer e nem por onde começar. A Eliana Pita, além de ter me apoiado, ressignificou tudo aquilo que eu acahva negativo, como por exemplo, nçao conseguir me recolocar em meio uma pandemia mundial. A Eliana, me orientou do início ao fim da minha recolocação, com atualização do LinkedIn, currículo atrativo e dicas de outro para entrevistas e dinâmicas. Com sua ajuda, a minha recolocação foi em menos de 1 mês após a minha demissão, hoje estou extremamente realizada e eternamente grata.',
    index: 5,
    image: perfil,
  },
  {
    name: 'Catherine',
    message: 'Eu adorei o trabalho!! Foi ótimo, porque nunca soube como deveria organizar meu currículo e muito menos o linkedin. Como disse, nunca entendi o linkedIn direito. E as suas dicas foram boas para entender melhor como melhorar minha imagem lá. Gostei muito dos materiais também!',
    index: 6,
    image: perfil,
  }
]

export default testimonies
