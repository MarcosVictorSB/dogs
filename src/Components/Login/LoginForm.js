import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { TOKEN_POST, USER_GET } from '../../api'

const LoginForm = () => {

  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (!token) return false
    getUser(token)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.validate() && !password.validate()) return false;
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value
    })
    const response = await fetch(url, options);

    const json = await response.json()
    window.localStorage.setItem('token', json.token)
    getUser(json.token)

  }

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm