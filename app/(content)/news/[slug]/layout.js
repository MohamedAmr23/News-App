import React from 'react'

const NewDetailsLayout = ({children , modal}) => {
  return (
    <>
         {modal}
        {children}
    </>
    
  )
}

export default NewDetailsLayout