import React, { Component } from 'react';

import FiltroAvancado from '../FiltroAvancado';

import { Container } from './style';

class Filtro extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <Container>
        <input type="text" placeholder="Pesquisar" />
        <button type="button" onClick={this.toggleComponent}>
          Filtro Avançado
        </button>
        {this.state.show && <FiltroAvancado />}
      </Container>
    );
  }
}

export default Filtro;
