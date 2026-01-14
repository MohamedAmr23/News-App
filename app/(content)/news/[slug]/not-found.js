import Link from 'next/link'
import React from 'react'

const NewsNotFoundPage = () => {
  return (
    <div id='error'>
        <h1>Not Found</h1>
        <p>Unfortunately, we could not find the requested article.</p>
        <Link  href='/news'>Back to New Page?</Link>
    </div>
  )
}

export default NewsNotFoundPage