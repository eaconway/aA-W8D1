import {connect} from 'react-redux';
import SearchIndex from './search_index';

const mapStateToProps = state => ({
  benches: Object.values(state.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
