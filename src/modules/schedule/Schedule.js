import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Schedule.css";
import { endPoint } from "../../config/EndPoint";

function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    day: "Monday", // Default day
    openingTime: "",
    closingTime: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    axios
      .get(`${endPoint}api/schedules`)
      .then((response) => {
        setSchedules(response.data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching schedules:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const handleAddSchedule = () => {
    setLoading(true); // Set loading to true when adding a new schedule
    axios
      .post(`${endPoint}api/schedules/add`, newSchedule)
      .then(() => {
        axios
          .get(`${endPoint}api/schedules`)
          .then((response) => {
            setSchedules(response.data);
            setLoading(false); // Set loading to false after adding a new schedule
          })
          .catch((error) => {
            console.error("Error fetching schedules:", error);
            setLoading(false); // Set loading to false in case of an error
          });
      })
      .catch((error) => {
        console.error("Error adding schedule:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  return (
    <div className="schedule-container">
      <h2 className="schedule-heading">Shop Schedules</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="schedule-list">
          {schedules.map((schedule) => (
            <li key={schedule._id} className="schedule-item">
              {schedule.day}: {schedule.openingTime} - {schedule.closingTime}
            </li>
          ))}
        </ul>
      )}
      <div className="add-schedule-container">
        <h3 className="add-schedule-heading">Add New Schedule</h3>
        <label className="schedule-label">Day:</label>
        <select
          value={newSchedule.day}
          onChange={(e) =>
            setNewSchedule({ ...newSchedule, day: e.target.value })
          }
          className="schedule-select"
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <br />
        <label className="schedule-label">Opening Time:</label>
        <input
          type="time"
          value={newSchedule.openingTime}
          onChange={(e) =>
            setNewSchedule({ ...newSchedule, openingTime: e.target.value })
          }
          className="schedule-input"
        />
        <br />
        <label className="schedule-label">Closing Time:</label>
        <input
          type="time"
          value={newSchedule.closingTime}
          onChange={(e) =>
            setNewSchedule({ ...newSchedule, closingTime: e.target.value })
          }
          className="schedule-input"
        />
        <br />
        <button
          onClick={handleAddSchedule}
          className="schedule-button"
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Adding..." : "Add Schedule"}
        </button>
      </div>
    </div>
  );
}

export default Schedule;
