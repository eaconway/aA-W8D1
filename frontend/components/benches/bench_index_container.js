import {connect} from 'react-redux';
import BenchIndex from './bench_index';

const mapStateToProps = state => ({
  benches = Object.values(state.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
