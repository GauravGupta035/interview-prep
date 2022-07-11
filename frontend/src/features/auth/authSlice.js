import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get candidate from local storage
const candidate = JSON.parse(localStorage.getItem("candidate"));

const initialState = {
	candidate: candidate ? candidate : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Register candidate
export const register = createAsyncThunk(
	"auth/register",
	async (candidate, thunkAPI) => {
		try {
			return await authService.register(candidate);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Login candidate
export const login = createAsyncThunk(
	"auth/login",
	async (candidate, thunkAPI) => {
		try {
			return await authService.login(candidate);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Logout candidate
export const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logout();
});

export const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.candidate = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.candidate = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.candidate = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.candidate = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.candidate = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
