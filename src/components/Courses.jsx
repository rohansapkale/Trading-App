import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const courses = [
  {
    title: "Basic to Advance Future and Options Master Class",
    description: "Learn the Market from scratch to expert in the Equity Segment.",
    duration: "6 Months + 6 Months Live Market Sessions",
    fee: "3499/-"
  },
  {
    title: "Beginner to Advance Equity Course",
    description: "Learn the Market from scratch to expert in the Equity Segment.",
    duration: "45 Days +  15 days practical/ live market classes",
    fee: "3499/-"
  },
  
  {
    title: "Beginner to Advance Options Course",
    description: "Learn the Market from scratch to expert in the Options Segment.",
    duration: "6 months + Life Time Group Discussion Sessions",
    fee: "8499/-"
  },
  {
    title: "Live Market Education",
    description: "Learn the Easy and Effective way of Options Trading and Equity Trading. Daily Practical class in Live Market",
    time: "09:00 am to 03:30 pm",
    note: "Time barrier is not an Excuse. Either you are a student, a job person, a business person, or a professional, you can do 'Live Market Education'. You can find the Key for Financial Difficulties within 2 months, if you give just an hour between 09:00 am to 03:30 pm.",
    fee: "1499/- per month"
  },
  {
    title: "Personal Training",
    description: "Learn the Market Depth from Personal Training in both Live and Offline Market and become an Expert.",
    duration: "3 months + Life Time Doubt Sessions + Life Time Group Discussion Session",
    fee: "17499/- one time"
  },
];

const CourseCard = ({ title, description, time, note, duration, fee, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between w-full transform transition-transform duration-300 z-5 "
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      {time && <p className="text-gray-700 mb-2"><span className="font-semibold">Time:</span> {time}</p>}
      {note && <p className="text-gray-700 mb-2"><span className="font-semibold">Note:</span> {note}</p>}
      {duration && <p className="text-gray-700 mb-2"><span className="font-semibold">Duration:</span> {duration}</p>}
      <p className="text-gray-700 font-semibold mt-4">Fee: {fee}</p>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <>
      <div className="relative z-10 -mt-32 sm:-mt-48 md:mt-0">
        <div className="py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
