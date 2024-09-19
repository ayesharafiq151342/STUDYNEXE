import React from 'react';


const ContactSection = () => {
    
const offices = [
    {
      location: "MRC DHA HeadOffice",
      address: "1st Floor, 18-Z, Commercial Areas, Phase III, D.H.A, Lahore, Pakistan 54810",
      phone: "+92 321-4849999",
      email: "info@mrcconsultants.org",
    },
    {
      location: "MRC Faisal Town",
      address: "19-D, Faisal Town, Lahore, Pakistan 54700",
      phone: "+92 300-0602988",
      email: "hannan.mubashar@mrcconsultants.org",
    },
    {
      location: "MRC Gulberg",
      address: "First floor Centro 81- A, MM Alam Rd, Block B2, Gulberg III, Lahore",
      phone: "+92 320-4801111",
      email: "hasnain@mrcconsultants.org",
    },
    {
      location: "MRC Faisalabad",
      address: "Sethi Plaza, P-703 ,B1-Corner, Batala Colony, Main Satayana Road, Faisalabad",
      phone: "+92 309-8883516",
      email: "yousaf.saleem@mrcconsultants.org",
    },
    {
      location: "MRC Multan",
      address: "23/3 Officers Colony Bosan Road Multan",
      phone: "+92 301 6989999",
      email: "shahzaib.baloch@mrcconsultants.org",
    },
    {
      location: "MRC Islamabad",
      address: "Office #1 Floor#1 Block 6B F-6 Markaz, Islamabad, Pakistan",
      phone: "+92 307-3309999",
      email: "raja.adeel@mrcconsultants.org",
    },
    {
      location: "MRC Dubai",
      address: "Office # 3111, Single Business Tower, Business Bay, Dubai, UAE, PO BOX: 36677",
      phone: "+971 56 224 9311",
      email: "info@mrcconsultants.org",
    },
    {
      location: "MRC Bahawalpur",
      address: "1st Floor Jhandeer Plaza Model Road Near 4 Season Restaurant Model Town A Bahawalpur",
      phone: "+92-302-5029895",
      email: "info@mrcconsultants.org",
    },
    {
      location: "MRC Rahim Yar Khan",
      address: "Abbassia Town Rahim Yar Khan Postal Code 64200",
      phone: "+92-301-5341408",
      email: "info@mrcconsultants.org",
    },
    {
      location: "MRC Karachi",
      address: "Plot 13-C, Office No.201, 2nd Floor, Main Khayaban e Badar, DHA Phase V, Karachi, 75500",
      phone: "+92 300 0304543",
      email: "rahila@mrcconsultants.org",
    }
  ];
  return (
    <div className="bg-purple-700 text-white py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-8">Our Offices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {offices.map((office, index) => (
          <div key={index} className="p-6 bg-purple-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{office.location}</h2>
            <p className="mb-1"><strong>Address: </strong>{office.address}</p>
            <p className="mb-1"><strong>Phone: </strong>{office.phone}</p>
            <p className="mb-1"><strong>Email: </strong>{office.email}</p>
          </div>
        ))}
      </div>

      {/* Social Media Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Follow us on social media</h3>
        <div className="flex justify-center space-x-5">
          <a href="#" className="text-white">
            {/* Insert FontAwesome or any social media icon here */}
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        </div>
        <p className="mt-4">Leave your Feedback</p>
      </div>
    </div>
  );
};

export default ContactSection;
