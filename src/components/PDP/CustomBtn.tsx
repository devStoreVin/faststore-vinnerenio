import React from 'react'
import { Button, ButtonProps } from '@faststore/ui'
import { usePDP } from '@faststore/core';

const CustomBtn = (props: ButtonProps) => {

    const { onClick, icon } = props;
    console.log(props)

    return (
        <Button
            variant='secondary'
            onClick={onClick}
            icon={icon}
            iconPosition='right'
        >Comprar</Button>
    )
}

export default CustomBtn