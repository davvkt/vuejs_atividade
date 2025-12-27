import { useState } from 'react';
import FormVagas from '../../components/FormVagas';
import Vaga from '../../components/Vaga';
import { VagasContainer } from './styles';

const vagas = [
    // ... seu array de objetos de vagas aqui ...
];

const ListaVagas = () => {
  const [filtro, setFiltro] = useState('');

  const vagasFiltradas = vagas.filter(
    x => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo) => setFiltro(termo)} />
      <VagasContainer>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasContainer>
    </div>
  )
}

export default ListaVagas;