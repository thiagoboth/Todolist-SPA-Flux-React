export const TODO_ACTIONS = {
    GET_ITEMS: 'GET_ITEMS',
    LOAD_ITEM: 'LOAD_ITEM',
    CHANGE_ITEM: 'CHANGE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    SAVE_ITEM: 'SAVE_ITEM',
}

function todoReducer(state, action) {
    switch(action.type) {
        case TODO_ACTIONS.GET_ITEMS:
            return {
                ...state,
                todas_tarefas: action.payload.todas_tarefas
            }

        case TODO_ACTIONS.LOAD_ITEM:
            return {
                ...state,
                todas_tarefas: [...state.todas_tarefas, action.payload]
            }

        case TODO_ACTIONS.CHANGE_ITEM:
            return {
                ...state,
                todas_tarefas: state.todas_tarefas.map((res) => {
                    if(res.id === action.payload.id) {
                        return { ...res, title: action.payload.title, description: action.payload.description }
                    }

                    return res
                })
            }

        case TODO_ACTIONS.SAVE_ITEM:
            return {
                ...state,
                todas_tarefas: state.todas_tarefas.map((res) => {
                    if(res.id === action.payload.id) {
                        return { ...res, updated_at: action.payload.updated_at }
                    }

                    return res
                })
            }

        case TODO_ACTIONS.DELETE_ITEM:
            return {
                ...state,
                todas_tarefas: state.todas_tarefas.filter((res) => res.id !== action.payload.id)
            }

        default: return console.log('ACTION.TYPE INEXISTENTE')
    }
}

export default todoReducer