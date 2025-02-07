import React from 'react'
import { participateInEvent } from '../../service/operation/event'

const Modal = ({setShowModal,eventId}) => {
    const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;

    const participateInEventHandler = async() =>{
        const data = {
            eventId:eventId,
            token:token
        }
       await participateInEvent(data);
       setShowModal(false);
    }
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Register for Event</h2>
        <p className="text-gray-700 mb-6">Are you sure you want to register for this event?</p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={()=> setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={participateInEventHandler}
          >
            Register
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal
