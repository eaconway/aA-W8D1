import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export default (props) => {
  return (
    <div>
      <BenchMap />
      <BenchIndex benches={Object.values(state.benches)}/>
    </div>
  )
}
