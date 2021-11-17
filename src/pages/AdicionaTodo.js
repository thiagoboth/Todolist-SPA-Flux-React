import React, { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/Provider'
import { TodoActions } from '../contexts/actions/todoAction'

const AdicionaTodo = () => {
    const context = useContext(GlobalContext)
    const dispatch = context.dispatch
    
    const [input, setInput] = useState('')

    const handleSubmit = () => {
        let payload = { title: input }
        TodoActions.adicionaItem(dispatch, payload)
    }

    return (
        <div className="row m-1 p-5 w-100">
            <div className="col col-11 mx-auto">
                <form className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div className="col">
                        <input
                            className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                            type="text"
                            placeholder="O que precisa ser feito?"
                            value={input}
                            onChange={e=>setInput(e.target.value)}
                        />
                    </div>
                    <div className="col-auto px-0 mx-0 mr-2">
                        <input
                            type="button"
                            className="btn btn-primary"
                            value="Add"
                            onClick={() => handleSubmit()}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdicionaTodo