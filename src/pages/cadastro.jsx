import React from 'react'
import Title from '../components/Title'
import { Dados } from '../components/Dados'

export const Cadastro = () => {
  return (
    <div className='container text-center'>
        <Title title={"Cadastro de Assinante"} text="" />
        <Dados/>
    </div>
  )
}
