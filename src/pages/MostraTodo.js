import React, { useContext, useEffect } from 'react'
import { Cardboard } from '../components/cardboard'
import { GlobalContext } from '../contexts/Provider'
import { TodoActions } from '../contexts/actions/todoAction'

const MostraTodo = () => {
    const context = useContext(GlobalContext)
    const dispatch = context.dispatch
    const state = context.state

    useEffect(() => TodoActions.mostraItens(dispatch, {}), [dispatch])

    const handleOnChange = payload => TodoActions.editaItem(dispatch, payload)
    const handleSave = payload => TodoActions.saveItem(dispatch, payload)
    const handleDelete = payload => TodoActions.deletaItem(dispatch, payload)

    return (
        <div className="p-4">
            <div className="d-flex flex-wrap justify-content-sm-center w-100 mb-5 p-0">
                { state.todas_tarefas.map((item) => (
                    <Cardboard 
                        key={item.id}
                        item={item}
                        handleOnChange={handleOnChange}
                        handleSave={handleSave}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default MostraTodo