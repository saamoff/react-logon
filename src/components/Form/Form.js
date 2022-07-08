import React from 'react'
import { LoginForm, UserInput } from './Form.styled'
import lock from '../../assets/lock.png'
import user from '../../assets/user.png'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const nav = useNavigate()
  const [valid, setValid] = React.useState(true)
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  function handleChange({target}) {
    const { id, value } = target;
    setForm({...form, [id]: value});
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(form.username === 'admin' && form.password === 'admin'){
      setValid(true)
      login()
    }else{
      setValid(false)
    }
  }

  function login() {
    if(valid){
      nav('/home')
      document.title = 'Home'
    }
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h2>Login</h2>
      <UserInput error={!valid}>
        <input type="text" id='username' value={form.username} placeholder="Usuário" onChange={handleChange} required/>
        <img src={user} alt="User"/>
      </UserInput>
      <UserInput error={!valid}>
        <input type="password" id='password' value={form.password} placeholder="Senha" onChange={handleChange} required/>
        <img src={lock} alt="User"/>
      </UserInput>
      {!valid && <p>Ops, usuário ou senha inválidos. <br/>Tente novamente!</p>}
      <input className="submitInput"type="submit" value="Continuar" />
    </LoginForm>
  )
}

export default Form