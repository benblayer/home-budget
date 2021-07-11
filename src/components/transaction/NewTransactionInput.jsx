import { Card, Input, Button } from '@material-ui/core'
import React, { useState } from 'react'

const NewTransactionInput = ({ onSave }) => {
    const [data, setData] = useState({
        amount: 0,
        date: Date.now(),
        description: "New Transaction",
        name: "?"
    })
    const onInputChange = (e) => {
        setData({ ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Card>
            <h1>{data.description} ({data.name})</h1>
            { Object.entries(data).map(([name, value]) => 
                <div key={`transaction-${}-${name}`}> 
                    <span>{name}:</span>
                    <Input name={name} value={value} onChange={onInputChange}></Input>
                </div>
            )}
            <Button onClick={() => onSave(data)}>Save</Button>
        </Card>
    )
}

export default NewTransactionInput
