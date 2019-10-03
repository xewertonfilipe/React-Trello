export function loadLists() {
  return [
    {
      title: 'Coisas para fazer',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Agendar as entrevistas',
          tag: 'RH',
          user: 'https://api.adorable.io/avatars/90/abott@adorable.png'
        }
      ]
    },
    {
      title: 'Em andamento',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Elaborar o desafio técnico',
          tag: ['Back-End', 'Front-End'],
          user: 'https://api.adorable.io/avatars/90/abott@adorable.png'
        }
      ]
    },
    {
      title: 'Atrasado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React',
          tag: 'Desenvolvimento',
          user: 'https://api.adorable.io/avatars/90/abott@adorable.png'
        }
      ]
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Página de Login',
          tag: 'Desenvolvimento',
          user: 'https://api.adorable.io/avatars/90/abott@adorable.png'
        },
        {
          id: 12,
          content: 'Ajustes footer home page',
          tag: 'Desenvolvimento',
          user: 'https://api.adorable.io/avatars/90/abott@adorable.png'
        }
      ]
    }
  ];
}
