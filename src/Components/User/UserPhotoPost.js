import React from 'react'
import styles from './UserPhotoPost.module.css'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../../Helper/Error'
import { PHOTO_POST } from '../../api'
import { useNavigate } from 'react-router-dom'

const UserPhotoPost = () => {

  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = React.useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)

  }
  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }


  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="Nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input label="Nome" type="file" name="img" id="img" onChange={handleImgChange} className={styles.file} />
        {loading ? (<Button disabled>Enviando ...</Button>) : (<Button>Enviar</Button>)}
        <Error error={error} />
      </form>
      {img.preview &&
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}>
        </div>}
    </section >
  )
}

export default UserPhotoPost