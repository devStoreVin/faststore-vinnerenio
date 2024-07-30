import React from 'react'
import { BreadcrumbProps } from '@faststore/ui'
import Link from 'next/link'

interface MyLinkProps  {
    item: string
    name: string
}

const MyLink = (props: MyLinkProps) => 

    <Link href={props.item}>
        {props.name }
    </Link>


const CustomBread = (props: BreadcrumbProps) => {

    const { breadcrumbList } = props

    return (
        <> 
            {
                breadcrumbList.map( breadcrumb => 
                    <MyLink key={breadcrumb.position} {...breadcrumb} />
                )
            }
        </>
    )
}

export default CustomBread