import { Component } from 'react';
// import { render } from 'react-dom';
import { VictoryPie } from 'victory';

class Graffic extends Component {
  render() {
    const { items } = this.props;
    return (
      <VictoryPie
        data={[
          {
            x: `${items.result} Correct`,
            y: Number.parseInt(items.result),
          },
          {
            x: `${100 - Number.parseInt(items.result)}% Incorrect`,
            y: 100 - Number.parseInt(items.result),
          },
        ]}
        animate={{
          duration: 1000,
        }}
        colorScale={['var(--accent-color)', 'var(--incorrect-bgc)']}
        height={250}
        style={{
          labels: {
            fontSize: 10,
            fontWeight: 'bold',
            fill: 'var(--black-color)',
          },
        }}
      />
    );
  }
}

export default Graffic;
