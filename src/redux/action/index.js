import { GET_USER, OPEN_ADD, CLOSE_ADD, OPEN_DEL, CLOSE_DEL,SELECT_DEL, ADD_USER, DELETE_USER, OPEN_UPDATE, CLOSE_UPDATE, UPDATE_USER,INPUT_TXT, SELECT_UPDATE,INPUT_SEARCH } from '../constant/action-types'

export const getUser = (payload) => (dispatch) => {
    dispatch({
        type: GET_USER,
        payload,
        meta: {
            resource: "user"
        }
    });
}
export const inputTxt = (payload) => (dispatch) => {
    dispatch({
        type: INPUT_TXT,
        payload,
        meta: {
            resource: "user"
        }
    })
}
export const inputSearching = (payload) => (dispatch) => {
    dispatch({
        type: INPUT_SEARCH,
        payload,
        meta: {
            resource: "user"
        }
    })
}
/// Create
export const openDialog = (payload) => (dispatch) => {
    // console.log(payload,"payload");
    dispatch({
        type: OPEN_ADD,
        payload,
        meta: {
            resource: "user"
        }
    });
}
export const closeDialog = (payload) => (dispatch) => {
    dispatch({
        type: CLOSE_ADD,
        payload,
        meta: {
            resource: "user"
        }
    });
}

export const addDialog = (payload) => (dispatch) => {
    dispatch({
        type: ADD_USER,
        payload,
        meta: {
            resource: "user"
        }
    });
}

/// Delete
export const openDelDialog = (payload) => (dispatch) => {
    dispatch({
        type: OPEN_DEL,
        payload,
        meta: {
            resource: "user"
        }
    });
}

export const closeDelDialog = (payload) => (dispatch) => {
    dispatch({
        type: CLOSE_DEL,
        payload,
        meta: {
            resource: "user"
        }
    });
}

export const deleteUser = (payload) => (dispatch) => {
    dispatch({
        type: DELETE_USER,
        payload,
        meta: {
            resource: "user"
        }
    });
}

export const selectedDeleteUser = (payload) => (dispatch) => {
    dispatch({
        type: SELECT_DEL,
        payload,
        meta: {
            resource: "user"
        }
    })
}
// Update
export const openUpdateDialog = (payload) => (dispatch) => {
    dispatch({
        type: OPEN_UPDATE,
        payload,
        meta: {
            resource: "user"
        }
    })
}
export const closeUpdateDialog = (payload) => (dispatch) => {
    dispatch({
        type: CLOSE_UPDATE,
        payload,
        meta: {
            resource: "user"
        }
    })
}

export const selectedUpdateUser = (payload) => (dispatch) => {
    dispatch({
        type: SELECT_UPDATE,
        payload,
        meta: {
            resource: "user"
        }
    })
}
export const updateUser = (payload) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload,
        meta: {
            resource: "user"
        }
    })
}

