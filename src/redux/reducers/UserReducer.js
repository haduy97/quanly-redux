
import { GET_USER, OPEN_ADD, CLOSE_ADD, ADD_USER, UPDATE_USER, DELETE_USER, OPEN_DEL, CLOSE_DEL, SELECT_DEL, OPEN_UPDATE, CLOSE_UPDATE, INPUT_TXT, SELECT_UPDATE, INPUT_SEARCH } from '../constant/action-types';


const manageState = {
    users: [
        {
            username: "thanhnguyen",
            password: "thanh123",
            role: "Manager",
            email: "thanh12@gmail.com"
        },
        {
            username: "buoitran113",
            password: "buoi12",
            role: "Member",
            email: "buoi12@gmail.com"
        },
        {
            username: "lahan22",
            password: "la123",
            role: "Member",
            email: "la12@gmail.com"
        }
    ],
    currencies: [
        {
            value: "Member"
        },
        {
            value: "Manager"
        }
    ],
    inputText: "",
    inputSearch: "",
    openAdd: false,
    openDel: false,
    openUp: false,
    selectedDel: null,
    selectedUp: null
}

const UserReducer = (state = manageState, action) => {
    // let payload = { action }
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                users: action.payload
            };
        case INPUT_TXT:
            return {
                ...state, inputText: action.payload
            }
        case INPUT_SEARCH:
            return {
                ...state, inputSearch: action.payload
            }
        // Create
        case OPEN_ADD:
            return {
                ...state,
                openAdd: action.payload
            };

        case CLOSE_ADD:
            return {
                ...state,
                openAdd: action.payload
            };
        case ADD_USER:
            const users = [...state.users, action.payload];
            return {
                ...state, users
            };
        // Delete
        case OPEN_DEL:
            return {
                ...state,
                openDel: action.payload
            }
        case CLOSE_DEL:
            return {
                ...state,
                openDel: action.payload
            }
        case SELECT_DEL:
            return {
                ...state,
                selectedDel: action.payload
            }
        case DELETE_USER: {
            const users = state.users.filter((_user, index) => index !== action.payload);
            return {
                ...state, users
            }
        }

        // Update
        case OPEN_UPDATE: {
            return {
                ...state,
                openUp: action.payload
            }
        }
        case CLOSE_UPDATE: {
            return {
                ...state,
                openUp: action.payload
            }
        }
        case SELECT_UPDATE: {
            return {
                ...state,
                selectedUp: action.payload
            }
        }
        case UPDATE_USER: {
            const input = state.inputText;
            const users = state.users.map(_user => {
                if (_user.username === input.username) {
                    return { ...input };
                }
                return _user;
            });
            return {
                ...state, users
            }
        }

        default:
            return state;
    }
};

export default UserReducer;

