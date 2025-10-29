import React from 'react'
import '../App.css'
import Addspace from '../admin/Addspace'
import Container from '../components/Container'
import landlordsHeader from '../utils/landlordsHeader.png'
import { FaUnlock } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { MdOutlineApartment } from "react-icons/md";
import { TbHours24 } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { RiPantoneFill } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import SpaceForm from '../admin/SpaceForm'
function Landlords() {
  return (
    <div>
      <Container>
        <div className="w-full h-36 ">
          <img
            src={landlordsHeader}
            alt=""
            className="absolute h-screen w-full"
          />
          <div className=" float-right pr-11 sticky">
            <Addspace />
          </div>
        </div>
      </Container>

{/* <SpaceForm/> */}
      <Container className="w-full py-22 px-18 h-[90%] ">
        <h1 className="text-3xl font-bold text-center">
          {" "}
          Better than property Management
        </h1>
        <p className="text-center">
          We work with 100+ companies to meet accommodation needs in London.
          Offer a dedicated booking manager that can help to find properties for
          your needs.
        </p>

        <div className="flex gap-2.5 features">
          <div className="glass ">
            <FaUnlock style={{ fontSize: "35px", margin: "0 auto" }} />
            <p>Guaranteed rent</p>
            <p>We do the searching for you</p>
          </div>
          <div className="glass  border-2 border-black">
            <IoMdPricetag style={{ fontSize: "35px", margin: "0 auto" }} />
            <p>No fees</p>
            <p>Preferred partner rates</p>
          </div>
          <div className="glass">
            <MdOutlineApartment
              style={{ fontSize: "35px", margin: "0 auto" }}
            />
            <p>No voids</p>
            <p>Preferred partner rates</p>
          </div>
          <div className="glass">
            <TbHours24 style={{ fontSize: "35px", margin: "0 auto" }} />
            <p>24/7 maintenance</p>
            <p>Extend on short notice</p>
          </div>
        </div>
      </Container>

      <Container className="flow w-full h-dvw bg-gray-500 text-white">
        <p className="text-3xl font-bold text-center">How it works</p>
        <div className="timeline ">
          <div className="events ">
            <div className="event life">
              <svg
                class="marker"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <circle cx="6" cy="6" r="6"></circle>
              </svg>

              <div className="content">
                <IoMdMail style={{ fontSize: "35px", margin: "0 auto" }} />
                <h3>Get In Touch</h3>
                <p>
                  Ut id cras malesuada dolor. Consectetur eget malesuada enim
                  massa viverra mauris
                </p>
              </div>

              <svg
                class="marker"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <circle cx="6" cy="6" r="6"></circle>
              </svg>
              <div className="content">
                <IoPeopleSharp style={{ fontSize: "35px", margin: "0 auto" }} />
                <h3>Let's Chat</h3>
                <p>
                  Euismod commodo feugiat purus egestas diam. Facilisi sed
                  senectus consequat risus. Porta purus nec dui odio vehicula.
                </p>
              </div>

              <svg
                class="marker"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <circle cx="6" cy="6" r="6"></circle>
              </svg>
              <div className="content">
                <IoEye style={{ fontSize: "35px", margin: "0 auto" }} />
                <h3>Property viewing</h3>
                <p>
                  Sit lectus parturient diam ac congue elementum praesent
                  blandit. Tristique ut ut venenatis tortor, id elementum.
                  Integer tristique viverra enim libero.
                </p>
              </div>

              <svg
                class="marker"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <circle cx="6" cy="6" r="6"></circle>
              </svg>
              <div className="content">
                <BiSolidBriefcaseAlt  style={{ fontSize: "35px", margin: "0 auto" }} />
                <h3>Moving in & Moving up!</h3>
                <p>
                  Sit lectus parturient diam ac congue elementum praesent
                  blandit. Tristique ut ut venenatis tortor, id elementum.
                  Integer tristique viverra enim libero.
                </p>
              </div>


              <svg
                class="marker"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <circle cx="6" cy="6" r="6"></circle>
              </svg>
              <div className="content">
                <RiPantoneFill style={{ fontSize: "35px", margin: "0 auto" }} />
                <h3>Time to decorate</h3>
                <p>
                  Adipiscing magna ut justo, et. Sem pellentesque eu risus euismod et. Sapien est tellus dapibus sed varius lorem tellus, turpis nisl. Elementum scelerisque elit in nibh aliquet phasellus.
                </p>
              </div>


              <svg
                class="marker"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <circle cx="6" cy="6" r="6"></circle>
              </svg>
              <div className="content">
                <BsSunFill style={{ fontSize: "35px", margin: "0 auto" }} />
                <h3>Sit back and relax</h3>
                <p>
                  Euismod commodo feugiat purus egestas diam. Facilisi sed senectus consequat risus. Porta purus nec dui odio vehicula.
                </p>
              </div>


            </div>
          </div>
        </div>
      </Container>
      
    </div>
  );
}

export default Landlords