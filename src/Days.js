import React, { Component } from 'react';
import './Days.css';
import { connect } from 'react-redux';
import { updateDay } from './ducks/reducer';

class Days extends Component {
  render() {
    const numOfDays = 30;
    const days = Array.from(new Array(numOfDays), (val, index) => index + 1);

    return (
      <div className="days">
        {days.map(x => {
          return (
            <div
              key={x}
              className={x === this.props.dayOfTheMonth ? 'day selected' : 'day'}
              onClick={() => this.props.updateDay(x)}
            >{x}</div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = storeState => {
  return {
    dayOfTheMonth: storeState.day,
  }
}

const mapDispatchToProps = {
  updateDay,
}

export default connect(mapStateToProps, mapDispatchToProps)(Days)