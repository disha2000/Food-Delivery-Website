import { useEffect } from "react";
import Sample from "./Sample";
const ContactUs = () => {
  useEffect(() => {
    console.log("Contact us")
  }, []) 
  return (
    <div className="contact__container">
      <p>Disha Doshi - 7387180823</p>
      <Sample/>
    </div>
  );
};

export default ContactUs;
