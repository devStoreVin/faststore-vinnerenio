import React from 'react'
import { BuyButton } from '@faststore/ui'

export const CustomBuyButton = () => {
    return (
        <BuyButton
            variant='primary'
            onClick={() => {
                alert("my custom button")
            }}
        >Mi nuevo boton</BuyButton>
    )
}
