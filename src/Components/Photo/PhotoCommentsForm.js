import React from 'react'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../../Helper/Error'
import styles from './PhotoCommentsForm.module.css'


const PhotoCommentsForm = ({ id, setComments }) => {

  const [comment, setComment] = React.useState('')
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment })

    if (comment.length) {
      const { response, json } = await request(url, options)
      if (response.ok) {
        setComment('')
        setComments((comments) => [...comments, json])
      }
    }
  }

  console.log({ comment })

  return (
    <form onClick={handleSubmit} className={styles.forms}>
      <textarea
        id="comment"
        name="comment"
        value={comment}
        placeholder="Comente ..."
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm