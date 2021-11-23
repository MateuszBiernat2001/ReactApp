export const removeNote = (cardType, id) => {
  return {
    type: 'REMOVE_NOTE',
    payload: {
      cardType,
      id,
    },
  };
};
