import { User } from "@/apis/user";
import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USER_SUCCESS, UPDATE_USER_SUCCESS } from "./actions";

interface UsersState {
  users: any[];
  userSelected: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  userSelected: null,
  loading: false,
  error: null,
};



const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    case FETCH_USERS_START:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, userSelected: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export default usersReducer;
