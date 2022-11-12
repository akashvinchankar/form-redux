import React from 'react';
import { useSelector } from 'react-redux';

const EventDisplay = () => {
  const eventData = useSelector((state) => state.reducer);

  return (
    <div className='display-data'>
      {eventData.submitForm ? (
        <ul>
          <li>Name: {eventData.name}</li>
          <li>Event Type: {eventData.type}</li>
          <li>Event Start Date:{eventData.start}</li>
          <li>Event End Date:{eventData.end}</li>
          <li>Event Description: {eventData.description}</li>
          <li>Event Handler: {eventData.handeledBy}</li>
          <li>Event Handling Organiztion: {eventData.organisation}</li>
          <li>Number of SubEvents: {eventData.subEvents}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default EventDisplay;
