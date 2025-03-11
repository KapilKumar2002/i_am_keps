import React from "react";
import contactInfo from "../../../data/contactInfo";
import Title from "../../atoms/Title";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="p-8 max-md:px-3 mb-14 pt-20 flex max-lg:flex-col max-w-5xl mx-auto gap-8 duration-500"
    >
      <div className="flex-1 flex flex-col max-md:items-center gap-4 max-lg:max-w-2xl mx-auto">
        <Title title={"Contact"} />
        <div
          className="flex flex-col w-full gap-4 max-lg:mt-8"
          data-aos="fade-left"
        >
          <div className="flex flex-wrap max-md:flex-col   gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-orange-500 hover:bg-gradient-to-r from-orange-500 shadow-[rgba(0,0,0,1)_4px_4px_0px_1px] hover:scale-105 duration-700 hover:shadow-none to-orange-300 px-4 py-2 rounded-lg"
              >
                <info.icon size={22} />
                <span className="text-sm">{info.value}</span>
              </div>
            ))}
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
              className="w-full p-2 rounded bg-gray-700 "
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
              className="w-full p-2 rounded bg-gray-700 "
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
              className="w-full p-2 rounded bg-gray-700 "
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
              className="w-full p-2 rounded bg-gray-700 "
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-orange-500 hover:bg-orange-700  font-bold py-2 px-4 rounded transition duration-300"
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
