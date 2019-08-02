import React from 'react';
import Detail from './Detail';

class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        title: "Laboratorio"
    }
    this.revert = this.revert.bind(this);
  };
  revert() {
    this.setState({ title: "Aplicaciones de Vanguardia"})
  }
  render() {
    return (
        <div>
          <h1>{this.state.title}</h1>
          <button onClick = {this.revert}>Revert</button>
          <div>
            <Detail detailTitle={this.state.title} detailValue='2' />
          </div>
        </div>
    );
  }
}

export default Home;
