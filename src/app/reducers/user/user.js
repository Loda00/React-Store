import { USER } from '../../actions/user/user'

const defaultUser =  [];

export function user(state = defaultUser, action) {
    switch (action.type) {
        case USER:
            return action.payload
        default:
            return state
    }
}