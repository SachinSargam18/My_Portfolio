import React, { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const[notifyresult, setResult] = useState(false);
    const form = useRef();
    const notify = () => {
      toast.success("Email send Successfully.")
    }

    const sendEmail = (e) => {
  
      e.preventDefault();
  
      emailjs.sendForm('service_7td7atg', 'template_peraqbf', form.current, 'VAL7UdPPLiZY2NO_b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        notify();
    };

  return (
    <div id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.2rem] mb-5">
          Get in Touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471115149!2d73.78056558240766!3d18.52459859956777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691981445994!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4
          lg:px-8 py-8"
          >
            <form ref={form} className="w-full" action="" onSubmit={sendEmail}>
              <div className="mb-5">
                <input
                  name="fullName"
                  required
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  name="email"
                  required
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  name="subject"
                  required
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  name="message"
                  required
                  type="text"
                  rows={3}
                  placeholder="Write Your Message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
              hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
