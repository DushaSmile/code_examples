// React & Redux
import React from 'react';
import { connect } from 'react-redux';

// Components
import SecurityForm from '../components/SecurityForm';

// Actions
import { getSettings } from '../actions/getSettingsActions';

// api url
import { api } from '../index';

class Settings extends React.Component {

  componentDidMount() {
    // request current settings
    this.props.getSettings(api);
  };

  async handleChange(values) {
    console.log(values);
  };

  render() {
    return (
      <div>
        <h1>Безопасность</h1>
        <SecurityForm loadingState={this.props.finishedLoading} />
      </div>
    );
  }

}

export default connect(
  // map Redux state to props
  state => ({
    finishedLoading: state.settings.finishedLoading
  }),
  // map Redux actions to props
  dispatch => {
    return {
      getSettings: url => {
        dispatch(getSettings(url))
      },

    }
  })(Settings);
