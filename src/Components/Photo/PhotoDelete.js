import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {

  const { loading, request } = useFetch()

  const handleClick = async (event) => {
    const confirm = window.confirm('Are you sure you want to delete')
    console.log(confirm)
    const { url, options } = PHOTO_DELETE(id)
    const { response } = await request(url, options)
    if (response.ok) window.location.reload();
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.delete}>Deletar</button>
    </div>
  )
}

export default PhotoDelete