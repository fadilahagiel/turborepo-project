import { User } from "@/apis/user";
import { fetchUser, fetchUsers, updateUser } from "@/apis/userApi";
import { Dispatch } from "@reduxjs/toolkit";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
});

export const fetchUsersSuccess = (users: any[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsersAction = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_USERS_START });

  try {
    const users = await fetchUsers();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error: any) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

export const fetchUserAction = (userId: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_USERS_START });
  try {
    const user = await fetchUser(userId);
    dispatch({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error: any) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

export const updateUserAction = (userData: User) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_USERS_START });
  try {
    await updateUser(userData);
    dispatch({ type: UPDATE_USER_SUCCESS });
  } catch (error: any) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};