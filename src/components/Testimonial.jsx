import React from 'react';
import './Testimonial.css'; // Import the CSS file for animation

const testimonials = [
  {
    text: "Amazing!!! I was skeptical, I find the concept innovative. We earn cashback just by making our purchases without doing anything more ...",
    name: "Logan",
    logo: "google-play",
    stars: 5,
  },
  {
    text: "This application is really great and allows us to win cash back on our daily purchases",
    name: "Stutzi",
    logo: "google-play",
    stars: 5,
  },
  {
    text: "Top app that is useful and easy to use it's cool to earn cash back to treat yourself 😉 👍 💪",
    name: "Elijah",
    logo: "facebook",
    stars: 5,
  },
  {
    text: "Very functional app without ads, very secure 🔐.",
    name: "Elijah",
    logo: "facebook",
    stars: 5,
  },
  // Add more testimonials here
  {
    text: "I love how easy it is to earn rewards. The interface is user-friendly!",
    name: "Sophia",
    logo: "google-play",
    stars: 4,
  },
  {
    text: "Great app for saving money on everyday purchases. Highly recommend!",
    name: "Jackson",
    logo: "facebook",
    stars: 5,
  },
  {
    text: "The cashback system is amazing and makes shopping even more enjoyable.",
    name: "Mia",
    logo: "google-play",
    stars: 5,
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.088 3.348a1 1 0 00.95.69h3.516c.969 0 1.372 1.24.588 1.81l-2.85 2.073a1 1 0 00-.364 1.118l1.088 3.348c.3.921-.755 1.688-1.54 1.118l-2.85-2.073a1 1 0 00-1.176 0l-2.85 2.073c-.784.57-1.839-.197-1.54-1.118l1.088-3.348a1 1 0 00-.364-1.118L2.97 8.775c-.784-.57-.381-1.81.588-1.81h3.516a1 1 0 00.95-.69l1.088-3.348z" />
  </svg>
);

const Testimonial = () => (
  <div className="testimonial-container">
    <div className="animate-marquee">
      {testimonials.concat(testimonials).map((testimonial, index) => (
        <div key={index} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md">
          <article>
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <footer className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0">
                  {testimonial.logo === "google-play" ? (
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 16 18">
                      <title>Google Play</title>
                      <path
                        d="M11.8,11.4l3.6-2.1c0.4-0.2,0.4-0.6,0-0.8c-0.4-0.2-3.6-2.1-3.6-2.1L9.3,9L11.8,11.4z"
                        opacity=".4"
                      />
                      <path
                        d="M0.2,18l9.1-9L0.3,0C0.1,0.1,0,0.2,0,0.5v17.1C0,17.8,0.1,17.9,0.2,18z"
                      />
                      <path
                        d="M9.3,9l-9.1,9c0.1,0,0.2,0,0.4-0.1l0.1,0c0.4-0.2,2.7-1.6,4.7-2.7l2.7-1.6l3.8-2.2L9.3,9z"
                        opacity=".6"
                      />
                      <path
                        d="M9.3,9L0.3,0c0.1,0,0.2,0,0.4,0.1l0.1,0c0.4-0.2,2.6,1.5,4.6,2.6l2.7,1.6l3.8,2.2L9.3,9z"
                        opacity=".4"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 16 16">
                      <title>Facebook</title>
                      <path d="M8 0C3.58125 0 0 3.60307 0 8.04873C0 12.0668 2.925 15.3963 6.75 16V10.3753H4.71875V8.04873H6.75V6.2755C6.75 4.2586 7.94375 3.14404 9.77188 3.14404C10.6469 3.14404 11.5625 3.30124 11.5625 3.30124V5.28198H10.5531C9.55938 5.28198 9.25 5.90293 9.25 6.5396V8.04873H11.4688L11.1141 10.3753H9.25V16C13.075 15.3963 16 12.0668 16 8.04873C16 3.60307 12.4187 0 8 0Z" />
                    </svg>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
              </div>
              <ul className="flex space-x-1">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <li key={i}>
                    <StarIcon />
                  </li>
                ))}
              </ul>
            </footer>
          </article>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonial;
