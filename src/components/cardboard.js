import React, { useState } from 'react'

const Cardboard = (props) => {
    const [editable, setEditable] = useState(false)
    const item = props.item

    const handleOnChange = props.handleOnChange
    const handleSave = props.handleSave
    const handleDelete = props.handleDelete

    return (
        <div className="card p-1 m-1" style={{width: "16.09rem"}}>
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className={editable === false ? "card-title" : "card-title d-none"}>
                    {item.title}
                </h5>
                <p className={editable === false ? "card-text" : "card-text d-none"}>
                    {item.description}
                </p>
                <input 
                    className={editable === true ? "form-control form-control-lg border-1 add-todo-input bg-transparent rounded h-25" : "form-control form-control-lg border-1 add-todo-input bg-transparent rounded h-25 d-none"}
                    type="text"
                    value={item.title}
                    onChange={(e) => handleOnChange({ title: e.target.value, id: item.id, description: item.description })}
                />
                <input
                    className={editable === true ? "form-control form-control-lg border-1 add-todo-input bg-transparent rounded h-25" : "form-control form-control-lg border-1 add-todo-input bg-transparent rounded h-25 d-none"}
                    type="text"
                    value={!!item.description ? item.description : ''}
                    onChange={(e) => handleOnChange({ title: item.title, id: item.id, description: e.target.value })}
                />
                <h6 className={editable === false ? "card-subtitle mb-2 text-muted" : "card-subtitle mb-2 text-muted d-none"}>
                    { 
                        !!item.updated_at 
                            ? <p>Atualizado em: {item.updated_at}</p>
                            : <p>Criado em: {item.created_at}</p>
                    }
                </h6>
                
                <div className="d-flex justify-content-end">
                    <button 
                        className={editable === false ? "btn btn-outline-primary m-1" : "btn btn-outline-primary m-1 d-none"}
                        onClick={() => setEditable(!editable)} 
                    >
                        edit
                    </button>
                    <button 
                        className={editable === false ? "btn btn-outline-danger m-1" : "btn btn-outline-danger m-1 d-none"}
                        onClick={() => handleDelete({ id: item.id })} 
                    >
                        delete
                    </button>

                    <button 
                        className={editable === true ? "btn btn-outline-primary m-1" : "btn btn-outline-primary m-1 d-none"}
                        onClick={() => {
                            setEditable(!editable)
                            handleSave({ id: item.id, title: item.title, description: item.description })
                        }} 
                    >
                        save
                    </button>
                    <button 
                        className={editable === true ? "btn btn-outline-danger m-1" : "btn btn-outline-danger m-1 d-none"}
                        onClick={() => setEditable(!editable)} 
                    >
                        back
                    </button>
                </div>
            </div>
        </div>
    )
}

export { Cardboard }