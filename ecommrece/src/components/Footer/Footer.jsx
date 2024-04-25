import React from "react";
import gplayLogo from "../../assets/imges/gplayLogo.png";
import appstorLogo from "../../assets/imges/appstorLogo.png";
import mastercard from "../../assets/imges/mastercard.png";
import visa from "../../assets/imges/visa.png";
import paypal from "../../assets/imges/paypal.png";
import gpay from "../../assets/imges/gpay.png";
import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
} from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto  sm:p-7 md:p-20 lg:p-20">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8  md:p-0">
        <div className="flex flex-col">
          <h1 className="font-bold mb-4">Contact</h1>
          <div className="mb-4">
            <span className="font-bold">Address:</span> 562 ipsum dolor, sit
            amet <br /> consectetur adipisicing.
          </div>
          <div className="mb-4">
            <span className="font-bold">Phone:</span> 1234567890
          </div>
          <div className="mb-4">
            <span className="font-bold">Hours:</span> 24/7
          </div>
          <div className="flex mb-4">
            <RiFacebookLine />
            <RiTwitterXLine />
            <RiInstagramLine />
            <FaPinterestP />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-4">About</h1>
          <div className="mb-4">About Us</div>
          <div className="mb-4">Delivery Information</div>
          <div className="mb-4">Privacy Policy</div>
          <div className="mb-4">Terms & Conditions</div>
          <div className="mb-4">Contact US</div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-4">My Account</h1>
          <div className="mb-4">Sign In</div>
          <div className="mb-4">View Cart</div>
          <div className="mb-4">My Wishlist</div>
          <div className="mb-4">Track My Order</div>
          <div className="mb-4">Help</div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-4">Install App</h1>
          <div className="mb-4">From App Store or Google Play</div>
          <div className="flex mb-4">
            <img src={gplayLogo} alt="" className="w-20 md:w-24 mr-2" />
            <img src={appstorLogo} alt="" className="w-20 md:w-24" />
          </div>
          <div className="mb-4">Secured Payment Gateway</div>
          <div className="flex">
            <img src={mastercard} alt="" className="w-10 md:w-14 mr-2" />
            <img src={visa} alt="" className="w-10 md:w-14 mr-2" />
            <img src={paypal} alt="" className="w-10 md:w-14 mr-2" />
            <img src={gpay} alt="" className="w-10 md:w-14" />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-8 ">
        © 2024 Click Here for Developer's Github
      </h1>
    </div>
  );
};

export default Footer;
