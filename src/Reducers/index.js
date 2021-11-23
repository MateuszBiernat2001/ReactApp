const initialState = {
  monday:[
    {
      id: 1,
      content:
        'Zajęcia na siłowni 10:30 - 11:30',
    },
    {
      id: 2,
      content:
        'Spotkanie rekrutacyjne 13:30 - 15:00'
    }
  ],
  tuesday:[
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 3,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
  ],
  wednesday:[
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
  ],
  thursday:[
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
  ],
  friday:[
    {
      id: 1,
      content:
        '18-stka w Poznaniu',
    },
  ],
  saturday:[
    {
      id: 1,
      content:
        'Wyjazd do Zakopanego',
    },
    {
      id: 2,
      content:
        'Zakupy na Niedziele',
    },
  ],
  sunday:[
    {
      id: 1,
      content:
        'Mecz Legia Warszawa - Radomiak Radom 17:30',
    },
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM': 
    return{
      ...state,
      [action.payload.itemType]: [
        ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
      ],
    };
    default:
      return state;
  }
};


export default rootReducer;