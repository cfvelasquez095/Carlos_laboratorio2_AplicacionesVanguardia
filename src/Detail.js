import React from 'react';
import PropTypes from 'prop-types';

class Detail extends React.Component{
  render() {
      return <h2>{this.props.detailTitle}, {this.props.detailValue}</h2>
  }
}

Detail.propTypes = {
    detailTitle: PropTypes.string,
    detailValue: PropTypes.number
}

Detail.defaultProps = {
    detailTitle: "Default",
    detailValue: "0"
}

export default Detail;