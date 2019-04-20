export const USER = 'USER'

export function user(value) {
    return {
        type: USER,
        payload: value
    }
}