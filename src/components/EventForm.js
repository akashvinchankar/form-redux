import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formSubmitHandler } from '../features/eventSlice';

const EventForm = () => {
  const dispatch = useDispatch();
  const eventData = useSelector((state) => state.reducer);

  return (
    <div>
      <h1>Event Form</h1>
      <form
        className="event-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(formSubmitHandler({ key: 'submitForm', value: true }));
        }}
      >
        <label>Event Name:</label>
        <input
          type="text"
          value={eventData.name}
          onChange={(e) => {
            dispatch(formSubmitHandler({ key: 'name', value: e.target.value }));
          }}
          required
        />
        <label>Type:</label>
        <select
          name="eventType"
          id="eventType"
          value={eventData.type}
          onChange={(e) => {
            dispatch(formSubmitHandler({ key: 'type', value: e.target.value }));
          }}
          required
        >
          <option value="sports">Sports</option>
          <option value="music">Music</option>
          <option value="general">General</option>
          <option value="children">Children</option>
          <option value="school">School</option>
        </select>
        <label>Start Date:</label>
        <input
          type="date"
          value={eventData.start}
          onChange={(e) => {
            dispatch(
              formSubmitHandler({ key: 'start', value: e.target.value })
            );
          }}
          required
        />
        <label>End Date:</label>
        <input
          type="date"
          value={eventData.end}
          onChange={(e) => {
            dispatch(formSubmitHandler({ key: 'end', value: e.target.value }));
          }}
          required
        />
        <label>Description:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          value={eventData.description}
          onChange={(e) => {
            dispatch(
              formSubmitHandler({ key: 'description', value: e.target.value })
            );
          }}
          required
        ></textarea>
        <label>Handled By:</label>
        <input
          type="text"
          value={eventData.handeledBy}
          onChange={(e) => {
            dispatch(
              formSubmitHandler({ key: 'handeledBy', value: e.target.value })
            );
          }}
          required
        />
        <label>Organisation:</label>
        <input
          type="text"
          value={eventData.organisation}
          onChange={(e) => {
            dispatch(
              formSubmitHandler({ key: 'organisation', value: e.target.value })
            );
          }}
          required
        />
        <label>Total SubEvents:</label>
        <input
          type="number"
          value={eventData.subEvents}
          onChange={(e) => {
            dispatch(
              formSubmitHandler({ key: 'subEvents', value: e.target.value })
            );
          }}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
