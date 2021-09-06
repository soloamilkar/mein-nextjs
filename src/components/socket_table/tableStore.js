import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'

const useTableStore = create(devtools((set, get) => ({
    instance_uuid: null,
    tableNumber: null,
    restaurant: null,
    users: {},
    totalAmount: 0,
    initTable: (payload) => {
        set(state => ({
            ...state,
            instance_uuid: payload.instance_uuid,
            tableNumber: payload.tableNumber,
        }))
    },
    addUser: (newUser) => {
        set(state => ({
            ...state,
            users: {
                ...state.users,
                [newUser.id]: newUser
            }
        }))
    },
    setAddDish: (id, dish) => {
        set(state => {
            const newList = users.map(user => {
                if (user.id === id) {
                    user.dishes.push(dish)
                }
            })
            return {
                ...state,
                users: newList
            }
        })
    }
})))

export default useTableStore