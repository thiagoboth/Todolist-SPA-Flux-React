import api from "../../services/api";
import { TODO_ACTIONS } from "../reducer";

let TodoActions = {
    adicionaItem: async function(dispatch, payload) {
        let Payload
        let title  = payload.title
        let description = ''

        const response = await api.post('/api/task', { title: title, description: description })

        Payload = {
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            created_at: response.data.created_at,
            updated_at: response.data.updated_at,
        }

        dispatch({ type: TODO_ACTIONS.LOAD_ITEM, payload: Payload})
    },

    editaItem: async function(dispatch, payload) {
        let Payload ={
            id: payload.id,
            title: !!payload.title ? payload.title : '',
            description: !!payload.description ? payload.description : '',
        }

        dispatch({ type: TODO_ACTIONS.CHANGE_ITEM, payload: Payload})
    },

    saveItem: async function(dispatch, payload) {
        let Payload
        const response = await api.put(`/api/task/${payload.id}`, { title: payload.title, description: payload.description })

        Payload = { 
            id: response.data.id,
            updated_at: response.data.updated_at 
        }

        dispatch({ type: TODO_ACTIONS.SAVE_ITEM, payload: Payload})
    },

    mostraItens: async function(dispatch, payload) {
        let Payload

        const response = await api.get('/api/tasks')
        Payload = { todas_tarefas: response.data }

        dispatch({ type: TODO_ACTIONS.GET_ITEMS, payload: Payload})
    },

    mostraItem: async function(dispatch, payload) {
        //const response = await api.get('/api/task/1')
        //console.log('RESPONSE MOSTRAITEM: ', response.data)
    },

    deletaItem: async function(dispatch, payload) {
        let Payload
        const response = await api.delete(`/api/task/${payload.id}`)

        Payload = { id: response.data.id }

        dispatch({ type: TODO_ACTIONS.DELETE_ITEM, payload: Payload})
    },
}

export { TodoActions }