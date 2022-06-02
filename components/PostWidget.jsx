import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import moment from 'moment'

import { getRecentPosts, getSimilarPosts } from '../services'
import { features } from 'process'

const PostWidget = ({ categories, slug }) => {
 const [relatedPost, setRelatedPost] = useState([])

 useEffect(() => {
    if(slug) {
        getSimilarPosts(categories, slug)
            .then((result) => setRelatedPost(result))
    } else {
        getRecentPosts()
            .then((result) => setRelatedPost(result))
    }
 }, [slug])
 

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>
            {slug ? 'Related Posts' : "Recent Posts"}
        </h3>
        {relatedPost.map((post) => (
        <Link href={`/post/${post.slug}`} key={post} className='text-md'>
            <div key={post.title} className='flex items-center w-full pb-2 mb-4 hover:bg-gray-100 bg-origin-padding p-4 bg-rounded cursor-pointer transition duration-500'>
                <div className='w-16 flex-none'>
                    <img 
                        src={post.featuredImage.url} 
                        alt={post.title}
                        height='60px'
                        width='60px'
                        className='align-middle rounded-full'
                    />
                </div>
                <div className='flex-grow ml-4'>
                    <p className='text-gray-500 font-xs'>
                        {moment(post.createdAt).format('DD MMM, YYYY')}  
                    </p>
                        <h4 className=''>
                            {post.title}
                        </h4>
                </div>
            </div>
        </Link>
        ))}
    </div>
  )
}

export default PostWidget