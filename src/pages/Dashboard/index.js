import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="#FFF" size={36} />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight color="#FFF" size={36} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Matheus Kindrazki</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>EM aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Matheus Kindrazki</span>
        </Time>
      </ul>
    </Container>
  );
}
