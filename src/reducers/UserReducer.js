import { USER_LOGIN_SUCESS, USER_LOGOUT } from '../actions'

const INITIAL_STATE = null

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCESS:
            return action.user

        case USER_LOGOUT:
            return null

        default:
            return state
    }
}

export default UserReducer