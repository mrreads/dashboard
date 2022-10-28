import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import IClient from '@/interfaces/IClient';

const initialState: IClient[] = [
  { id: nanoid(), firstName: "Иван", lastName: "Иванов", dateJoin: new Date(2022, 11, 28), monthCash: 328 },
  { id: nanoid(), firstName: "Александр", lastName: "Александрович", dateJoin: new Date(2022, 11, 27), monthCash: 428 },
  { id: nanoid(), firstName: "Влад", lastName: "Владиславович", dateJoin: new Date(2022, 11, 26), monthCash: 528 },
  { id: nanoid(), firstName: "Антон", lastName: "Антоненко", dateJoin: new Date(2022, 11, 25), monthCash: 628 },
];

const clientsSlice = createSlice({
  name: 'clients',
  initialState: initialState,
  reducers: {
    addClient(state, action: PayloadAction<IClient>) {
      state.push(action.payload);
    },
  },
});

export const { addClient } = clientsSlice.actions;
export default clientsSlice.reducer;