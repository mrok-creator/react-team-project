import { Component } from 'react';
// import { render } from 'react-dom';
import { VictoryPie } from 'victory';

class Graffic extends Component {
  render() {
    const { items } = this.props;
    return (
      <VictoryPie
        data={[
          { x: `${items.result} Correct`, y: Number.parseInt(items.result) },
          {
            x: `${100 - Number.parseInt(items.result)}% Incorrect`,
            y: 100 - Number.parseInt(items.result),
          },
        ]}
        animate={{
          duration: 2000,
        }}
        colorScale={['var(--accent-color)', '#D7D7D7']}
        height={200}
        // width={156}
      />
    );
  }
}

export default Graffic;
