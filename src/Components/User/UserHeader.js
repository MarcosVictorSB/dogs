import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';


const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const { pathname } = useLocation();

  const titles = {
    '/conta/estatistica': 'Estatística',
    '/conta': 'Minha conta',
    '/conta/postar': 'Poste sua foto',
  }

  React.useEffect(() => {
    setTitle(titles[pathname])
  }, [pathname])



  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader