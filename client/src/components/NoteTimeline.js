import React, { Component } from 'react';
import moment from 'moment';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import PropTypes from 'prop-types';

class NoteTimeline extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
  };

  render() {
    const notes = this.props.notes || [];
    return (
      <Timeline>
        {
          notes.map(note =>
            <TimelineEvent title={note.title}
              createdAt={moment(note.created).format('LLL')}
              icon={<i className="material-icons md-18">note</i>}
              key={note._id}
            >
              {note.message}
            </TimelineEvent>
          )
        }
      </Timeline>
    );
  }
}

export default NoteTimeline;
