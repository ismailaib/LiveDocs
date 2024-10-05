import { Editor } from '@/components/editor/Editor'
import Header from '@/components/header'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'>
          <p>Title Here</p>

        </div>
      </Header>
       <Editor />
    </div>
  )
}

export default Document