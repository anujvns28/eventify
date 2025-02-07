import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slid1 from "../assets/event1.png";
import slid2 from "../assets/event2.jpg";
import slid3 from "../assets/event3.jpg";
import slid4 from "../assets/event4.jpg";
import ReactStars from "react-stars";
import { FaRegClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import EventCard from "../components/core/EventCard";
import EventCreationForm from "../components/core/EventCreationForm";
import useSocketConnection from "../hook/socket";

const Home = () => {
  const [openEventCreationForm, setOpenEventCreationForm] = useState(false);

  const organizers = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Jane Smith",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Michael",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      rating: 4.7,
    },
  ];

  const events = [
    {
      organizerImage:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uyl3kTD_iX6L9o9d5dFsqFTN3l7YJ8gpg&s",
      eventName: "Tech Conference 2025",
      description:
        "An annual gathering of tech enthusiasts and industry leaders discussing the latest trends.",
      date: "2025-03-15",
      time: "10:00 AM - 4:00 PM",
      location: "San Francisco Convention ",
    },
    {
      organizerImage:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uyl3kTD_iX6L9o9d5dFsqFTN3l7YJ8gpg&s",
      eventName: "Music Festival 2025",
      description:
        "A weekend filled with live music performances from top artists worldwide.",
      date: "2025-06-10",
      time: "2:00 PM - 11:00 PM",
      location: "Los Angeles Grand Park",
    },
    {
      organizerImage:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uyl3kTD_iX6L9o9d5dFsqFTN3l7YJ8gpg&s",
      eventName: "Startup Pitch Night",
      description:
        "Entrepreneurs showcase their startups to investors and industry experts worldwide.",
      date: "2025-04-05",
      time: "6:00 PM - 9:00 PM",
      location: "New York City Tech Hub",
    },
    {
      organizerImage:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uyl3kTD_iX6L9o9d5dFsqFTN3l7YJ8gpg&s",
      eventName: "Startup Pitch Night",
      description:
        "Entrepreneurs showcase their startups to investors and industry experts worldwide.",
      date: "2025-04-05",
      time: "6:00 PM - 9:00 PM",
      location: "New York City Tech Hub",
    },
    {
      organizerImage:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uyl3kTD_iX6L9o9d5dFsqFTN3l7YJ8gpg&s",
      eventName: "Startup Pitch Night",
      description:
        "Entrepreneurs showcase their startups to investors and industry experts worldwide.",
      date: "2025-04-05",
      time: "6:00 PM - 9:00 PM",
      location: "New York City Tech Hub",
    },
  ];

  const socket = useSocketConnection();

  return (
    <div className="bg-slate-300 -z-10">
      <Navbar />
      {/* Hero Section */}
      <div className="w-full max-w-[85rem] mx-auto mt-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img
              src={slid1}
              className="w-full h-[600px] object-cover rounded-lg"
              alt="Event 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slid2}
              className="w-full h-[600px] object-cover rounded-lg"
              alt="Event 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slid3}
              className="w-full h-[600px] object-cover rounded-lg"
              alt="Event 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slid4}
              className="w-full h-[600px] object-cover rounded-lg"
              alt="Event 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full p-20 text-black flex items-center justify-center">
        <div className="text-center px-6 md:px-12">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Manage Your Events Like a Pro
          </h1>

          {/* Hero Subtitle */}
          <p className="text-lg md:text-xl mb-8">
            Create, organize, and track your events effortlessly with our
            all-in-one platform. Whether you're hosting a small meeting or a
            large conference, we've got you covered.
          </p>

          {/* Call-to-Action Button */}
          <button className="bg-yellow-500 text-gray-800 text-lg font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-yellow-600 transition-all">
            Join Now
          </button>

          {/* Icon for additional style */}
          <div className="mt-6">
            <FaCalendarAlt className="text-6xl mx-auto animate-bounce" />
          </div>
        </div>
      </div>

      {/* Organize Event Section */}
      <div className="flex w-full justify-between px-20 text-3xl font-semibold py-4 -z-10">
        <p>Organize Event</p>
        <p>Upcoming top five Events</p>
      </div>

      <div className="relative mb-5 w-full flex flex-row gap-9 items-center justify-center mt-4  px-20">
        {/* Event Creation Card */}
        <div className="bg-white shadow-xl rounded-lg w-80 h-auto flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition-all">
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uyl3kTD_iX6L9o9d5dFsqFTN3l7YJ8gpg&s"
              alt="Event Banner"
              className="w-full px-4 pt-4 h-44 object-cover rounded-md mb-2"
            />
          </div>
          <div className="flex flex-col px-4 pt-1 pb-2">
            <h2 className="text-2xl font-bold">Organize Event</h2>
            <p className="text-gray-600 tracking-tight ">
              Plan, organize, and share your event with ease.
            </p>
            <div className="border-b py-1"></div>
          </div>

          <div className="px-4">
            <h2 className="text-xl font-bold pb-1">Best Organizers</h2>
            {/* Swiper for organizers */}
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={15}
              autoplay={{ delay: 3000 }}
              slidesPerView={3}
              pagination={{ clickable: true }}
              className=""
            >
              {organizers.map((organizer) => (
                <SwiperSlide key={organizer.id}>
                  <div className=" flex flex-col items-center justify-center">
                    <img
                      className="w-[70px] h-[70px] rounded-full"
                      src={organizer.image}
                      alt={organizer.name}
                    />
                    <p>{organizer.name}</p>
                    <ReactStars
                      count={5}
                      value={organizer.rating}
                      edit={false}
                      size={20}
                      color2={"#ffd700"}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="p-4">
            <button
              onClick={() => setOpenEventCreationForm(true)}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md w-full hover:bg-blue-600 transition-all"
            >
              Create Event
            </button>
          </div>
        </div>

        {/* Upcoming Events Section */}

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className=""
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {openEventCreationForm && (
        <EventCreationForm
          setOpenEventCreationForm={setOpenEventCreationForm}
        />
      )}

      <Footer />
    </div>
  );
};

export default Home;
