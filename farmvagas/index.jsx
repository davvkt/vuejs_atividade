import { useState } from 'react';
import { Form, Input, BtnPesquisar } from './styles';

const FormVagas = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState('');

  const aoEnviar = (e) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  }

  return (
    <Form onSubmit={aoEnviar}>
      <Input 
        placeholder="Front-end, fullstack, node, design" 
        onChange={e => setTermo(e.target.value)} 
        type="text" 
      />
      <BtnPesquisar type="submit">
        Pesquisar
      </BtnPesquisar>
    </Form>
  )
}

export default FormVagas;