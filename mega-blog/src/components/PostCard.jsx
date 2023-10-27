/* eslint-disable react/prop-types */
import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({$id, tittle, featuredImage}) => {
  return (
    <div>
      <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={tittle} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{tittle}</h2>
      </div>
      </Link>
    </div>
  )
}

export default PostCard
