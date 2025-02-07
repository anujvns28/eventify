import React, { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { fetchUserEvents } from '../service/operation/user';
import EventCreationForm from '../components/core/EventCreationForm';
import { deleteEvent } from '../service/operation/event';

const Profile = () => {
    const [createdEvents,setCreatedEvents] = useState([]);
    const [participatedEvents,setParticipatedEvents] = useState([]);
    const [shwoEventCrationFrom,setShowEventCreationFrom] = useState(false);
    const [editFomrData,setEditFormData] = useState();

    const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;
    const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const fetchUserData = async() =>{
      const result = await fetchUserEvents(token);

      if(result){
        console.log(result);
        setCreatedEvents(result.eventsCreated)
        setParticipatedEvents(result.eventsParticipated)
      }
  }

  useEffect(()=>{
    fetchUserData();
  },[shwoEventCrationFrom])

  const handleEditEvent = (event) =>{
     setShowEventCreationFrom(true);
     setEditFormData(event);
  }

  const handleDeleteEvent = async(event) =>{

    const data = {
        token:token,
        eventId : event._id
    }

    await deleteEvent(data);
    fetchUserData();
  }


  return (
    <div>
        <Navbar/>
       <div className="min-h-screen bg-gray-900 p-10 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 shadow-2xl rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">User Profile</h2>
        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-gray-700">Name: <span className="font-normal">{user.name}</span></p>
          <p className="text-lg font-semibold text-gray-700">Email: <span className="font-normal">{user.email}</span></p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Events You Created</h3>
        {createdEvents.map((event) => (
          <details key={event._id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="text-lg font-medium text-gray-700 cursor-pointer">{event.title}</summary>
            <img src={event.image} alt="Event" className="w-full h-40 object-cover my-4 rounded" />
            <p className="text-gray-600 mb-2">{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className={`font-bold mt-2 ${event.participants.length === 0 ? 'text-red-500' : 'text-green-500'}`}>
              {event.participants.length === 0 ? "No participants yet" : `${event.participants.length} participants`}
            </p>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleEditEvent(event)}>Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteEvent(event)}>Delete</button>
            </div>
          </details>
        ))}

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Events You Participated In</h3>
        {participatedEvents.map((event) => (
          <details key={event._id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="text-lg font-medium text-gray-700 cursor-pointer">{event.title}</summary>
            <img src={event.image} alt="Event" className="w-full h-40 object-cover my-4 rounded" />
            <p className="text-gray-600 mb-2">{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </details>
        ))}
      </div>
    </div>
       
        <Footer/>

        {/* evenet creation form */}
        {shwoEventCrationFrom && <EventCreationForm setOpenEventCreationForm={setShowEventCreationFrom} 
        isEdit={true} 
        eventData={editFomrData}
        />}
    </div>
  )
}

export default Profile
