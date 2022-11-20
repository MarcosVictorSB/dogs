import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ setModalPhoto }) => {

  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 1000, user: 0 })
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading loading={loading} />
  if (!data) return null;
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
    </ul>
  )
}

export default FeedPhotos