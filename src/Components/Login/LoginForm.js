import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext'


const LoginForm = () => {

  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  console.log(error)

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (<Button disable>Carregando ....</Button>) : (<Button>Entrar</Button>)}

        {error && <p>Error</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm