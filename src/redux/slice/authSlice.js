import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("loggedInUser") 
    ? JSON.parse(localStorage.getItem("loggedInUser")) 
    : null,
  isAuthenticated: !!localStorage.getItem("loggedInUser"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      // Fetch all users
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.email === email);

      if (existingUser && existingUser.password === password) {
        state.user = existingUser;
        state.isAuthenticated = true;
        localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      } else {
        alert("Invalid credentials");
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
