const initialState = {
  monday:[
    
  ],
  tuesday:[
 
  ],
  wednesday:[

  ],
  thursday:[

  ],
  friday:[

  ],
  saturday:[

  ],
  sunday:[

  ]
};



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
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
