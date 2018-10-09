import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    // request benches from your API here
    this.props.fetchBenches()
  }

  render() {
    // ...
    let benches = this.props.benches.map(bench =>
      <BenchIndexItem bench={bench} key={bench.id} />
    )

    return (
      <div>
        <ul>
          {benches}
        </ul>
      </div>
    )
  }
};
