import React from "react";

const ShowPages = ({ setShowDropDown }) => {
  return (
    <div
      className=" text-white p-8  z-50 absolute -left-[4px] top-[60px] w-[700px] h-[500px]  shadow-xl bg-[#0B0F19] rounded-md flex  "
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div className=" w-full h-full">
        <div className=" mb-6">
          <h2 className="font-bold mb-4">About</h2>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            About v.1
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            About v.2
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            {" "}
            About v.3
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-4">Blog</h2>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            List View with Sidebar
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Grid View with Sidebar
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            List View no Sidebar
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Grid View no Sidebar
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Simple Feed
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Single Post
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Podcast
          </p>
        </div>
      </div>

      <div className=" w-full h-full">
        <div className=" mb-4">
          <h2 className="font-bold mb-4">Portfolio</h2>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Grid View
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            List View
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Slider View
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Courses
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Single Project
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Single Course
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-4">Services</h2>

          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Services v.1
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Services v.2
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Service Details v.1
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Service Details v.2
          </p>
        </div>
      </div>

      <div className=" w-full h-full">
        <div className=" mb-4">
          <h2 className="font-bold mb-4">Pricing</h2>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Pricing Page
          </p>
        </div>

        <div className=" mb-4">
          <h2 className="font-bold mb-4">Contacts</h2>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Contacts v.1
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Contacts v.2
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            Contacts v.3
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-4">Specialty</h2>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            404 Error v.1
          </p>
          <p
            className=" mb-3 font-light  cursor-pointer  "
            onClick={() => setShowDropDown(false)}
          >
            404 Error v.2
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowPages;
