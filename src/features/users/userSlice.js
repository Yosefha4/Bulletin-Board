import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Avi Levi" },
  { id: "1", name: "Yosef Cohen" },
  { id: "2", name: "Lior Peretz" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
