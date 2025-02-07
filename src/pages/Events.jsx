import React, { useEffect } from "react";
import { useState } from "react";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import EventCard from "../components/core/EventCard";
import EventCreationForm from "../components/core/EventCreationForm";
import { getAllEvents } from "../service/operation/event";

const Events = () => {
  const [openEventCreationForm, setOpenEventCreationForm] = useState(false);
  const [events, setEvents] = useState([]);

  const fetchAllEvents = async () => {
    const result = await getAllEvents();
    if (result) {
      setEvents(result);
      console.log(result);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  // const events = [
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  //     eventName: "Tech Conference 2025",
  //     description:
  //       "An annual gathering of tech enthusiasts and industry leaders discussing the latest trends.",
  //     date: "2025-03-15",
  //     time: "10:00 AM - 4:00 PM",
  //     location: "San Francisco Convention Center",
  //     category: "Technology",
  //   },
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42",
  //     eventName: "Live Music Festival",
  //     description:
  //       "Experience an electrifying night with top musicians from around the world.",
  //     date: "2025-06-10",
  //     time: "6:00 PM - 11:30 PM",
  //     location: "Madison Square Garden, New York",
  //     category: "Music",
  //   },
  //   {
  //     eventImage: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
  //     eventName: "Modern Art Exhibition",
  //     description:
  //       "Showcasing stunning artworks from contemporary artists globally.",
  //     date: "2025-04-22",
  //     time: "11:00 AM - 7:00 PM",
  //     location: "Los Angeles Art Gallery",
  //     category: "Art",
  //   },
  //   {
  //     eventImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  //     eventName: "Gourmet Food Festival",
  //     description:
  //       "Indulge in a variety of world cuisines and gourmet experiences.",
  //     date: "2025-05-18",
  //     time: "12:00 PM - 10:00 PM",
  //     location: "Chicago Downtown",
  //     category: "Food",
  //   },
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1598257006626-6db0ca175fb2",
  //     eventName: "City Marathon 2025",
  //     description:
  //       "Join thousands of runners in this thrilling annual marathon event.",
  //     date: "2025-09-08",
  //     time: "5:30 AM - 2:00 PM",
  //     location: "Boston City Streets",
  //     category: "Sports",
  //   },
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  //     eventName: "Global Science Symposium",
  //     description:
  //       "A platform for scientists and researchers to share groundbreaking discoveries.",
  //     date: "2025-07-20",
  //     time: "9:00 AM - 5:00 PM",
  //     location: "Stanford University, California",
  //     category: "Science",
  //   },
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1516715094483-26c72f3a0416",
  //     eventName: "Fashion Week 2025",
  //     description:
  //       "A glamorous showcase of the latest trends in the fashion industry.",
  //     date: "2025-08-15",
  //     time: "7:00 PM - 11:00 PM",
  //     location: "Paris Fashion Arena",
  //     category: "Fashion",
  //   },
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  //     eventName: "Startup Networking Event",
  //     description:
  //       "Connect with like-minded entrepreneurs and investors in the startup world.",
  //     date: "2025-10-05",
  //     time: "6:00 PM - 9:00 PM",
  //     location: "Silicon Valley Hub",
  //     category: "Business",
  //   },
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
  //     eventName: "International Gaming Expo",
  //     description:
  //       "Discover the future of gaming, from VR experiences to eSports competitions.",
  //     date: "2025-11-12",
  //     time: "10:00 AM - 6:00 PM",
  //     location: "Las Vegas Convention Center",
  //     category: "Gaming",
  //   },
  //   {
  //     eventImage:
  //       "https://images.unsplash.com/photo-1514894780887-121968d00567",
  //     eventName: "Annual Book Fair",
  //     description:
  //       "A paradise for book lovers, featuring author signings and new releases.",
  //     date: "2025-12-02",
  //     time: "9:00 AM - 8:00 PM",
  //     location: "London Literature Hall",
  //     category: "Literature",
  //   },
  // ];

  const categories = [
    "All",
    "Technology",
    "Music",
    "Art",
    "Food",
    "Sports",
    "Science",
    "Fashion",
    "Business",
    "Gaming",
    "Literature",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredEvents = events.filter((event) => {
    const isCategoryMatch =
      selectedCategory === "All" || event.category === selectedCategory;
    const isDateMatch = !selectedDate || event.date >= selectedDate;
    return isCategoryMatch && isDateMatch;
  });

  return (
    <div>
      {/*navbar  */}
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 pt-10 flex flex-col items-center px-14">
        <div className="flex w-full flex-row justify-between items-center  ">
          <div className="text-2xl text-blue-700 font-bold">
            Event Dashboard
          </div>

          {/* filters */}
          <div className="flex flex-row w-[60%] justify-between items-center ">
            <p
              onClick={() => setOpenEventCreationForm(true)}
              className="text-xl underline translate-x-28 text-blue-700 cursor-pointer font-semibold"
            >
              Create Event
            </p>
            <div className="flex flex-wrap justify-center gap-6  w-[70%] bg-white p-1 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 w-[50%] ">
                <FaFilter className="text-gray-600 text-xl" />
                <select
                  className="p-3 w-full border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3 w-[40%]">
                <FaCalendarAlt className="text-gray-600 text-xl" />
                <input
                  type="date"
                  className="p-3 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* event cards */}
        <div className="flex flex-row flex-wrap gap-4 my-5">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <EventCard event={event} />)
          ) : (
            <p className="text-center text-gray-500 text-lg">No events found</p>
          )}
        </div>
      </div>

      {/*footer  */}
      <Footer />

      {openEventCreationForm && (
        <EventCreationForm
          setOpenEventCreationForm={setOpenEventCreationForm}
        />
      )}
    </div>
  );
};

export default Events;
