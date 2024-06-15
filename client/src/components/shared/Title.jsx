import React from 'react'
import {Helmet} from "react-helmet-async"

function Title({title="Chat App" , discription="this is chat app called chattu"}) {
  return (
    
    <Helmet>
    <title>{title}</title>
    <meta name="description" content={discription} />
    </Helmet>
  )
}

export default Title