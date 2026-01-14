
import NewsList from '@/components/news-list'
import { DUMMY_NEWS } from '@/dummy-news'
import React from 'react'

const News = () => {
  return (
    <div>
        <h1>News Home Page</h1>
        <NewsList news={DUMMY_NEWS}/>
    </div>
  )
}

export default News