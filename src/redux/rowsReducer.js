const initialState = {
  rows: [
    {
      id: 1,
      date: '13.07.2020',
      amount: '1000',
      comment: 'Лента'
    }
  ]
};

export const rowsReducer = (state = initialState, action) => {
  return initialState;
}
