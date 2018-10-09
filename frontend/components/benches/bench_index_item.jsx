import React from 'react';

const BenchIndexItem = props => {
  let bench = props.bench;
  return (
    <div>
      <li> {bench.description}</li>
    </div>
  )
}

export default BenchIndexItem;
