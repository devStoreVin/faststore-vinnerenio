import React from 'react'
import { Badge } from '@faststore/ui'
import { usePDP } from '@faststore/core'

const CustomTitle = () => {

    const ctx = usePDP()

    return (
        <Badge variant='success'  >{ ctx.data.product.seo.title }</Badge>
    )
}

export default CustomTitle