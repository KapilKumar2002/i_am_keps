import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="p-8 text-white flex max-lg:flex-col max-w-5xl mx-auto gap-8 duration-500"
    >
      <div className="flex-1 flex flex-col gap-4 max-lg:max-w-2xl mx-auto">
        <div className="flex gap-2 items-center lg:justify-start justify-center  mt-16">
          <div className="h-10 w-2 bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
        <div className="flex flex-col gap-4 max-lg:mt-8">
          <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
            <div className="flex items-center gap-2 bg-orange-500 p-2 rounded-lg">
              <FaEnvelope size={24} />
              <span className="">kapil.fake@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-500 p-2 rounded-lg">
              <FaPhone size={24} />
              <span className="">+123 456 7890</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-orange-500 p-2 rounded-lg w-full">
            <FaMapMarkerAlt size={24} />
            <span className="">Faridabad, Haryana, 121005</span>
          </div>
        </div>
      </div>
      <div className="flex-1 max-lg:w-96 max-sm:w-full mx-auto">
        <form className="duration-500 hover:scale-105 w-full mx-auto ring-2 hover:ring-orange-500 ring-gray-400/10 p-6 rounded-lg shadow-xl shadow-orange-500">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 rounded bg-gray-700 text-white"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 rounded bg-gray-700 text-white"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full p-2 rounded bg-gray-700 text-white"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 rounded bg-gray-700 text-white"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
