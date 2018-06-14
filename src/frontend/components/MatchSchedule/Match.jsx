import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Match = props => {
  return (
    <div className="matchSchedule-match">
      <div className="row">
        <div className="col-sm">
          <span className="matchSchedule-match-time">
            {moment(new Date(props.match.date)).format('HH:mm')}
          </span>
        </div>
        <div className="col-sm">
          <span className="matchSchedule-match-flag">
            {props.homeTeamEmoji}
          </span>
          <span className="matchSchedule-match-name">{props.homeTeam}</span>
          <br />
          <span className="matchSchedule-match-flag">
            {props.awayTeamEmoji}
          </span>
          <span className="matchSchedule-match-name">{props.awayTeam}</span>
        </div>
        <div className="col-sm">
          <button
            className="matchSchedule-addMatch btn"
            onClick={() => props.saveMatch(props.match.name)}
          >
            Legg til
          </button>
        </div>
      </div>
    </div>
  );
};

export default Match;

Match.propTypes = {
  match: PropTypes.object,
  homeTeam: PropTypes.string,
  homeTeamEmoji: PropTypes.string,
  awayTeam: PropTypes.string,
  awayTeamEmoji: PropTypes.string,
  saveMatch: PropTypes.func
};