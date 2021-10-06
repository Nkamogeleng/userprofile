import React from 'react';
import SearchBar from './searchbar';
import './support.css';
import { IconContext } from "react-icons";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const SupportNav = () => {
  return (
    <div className="Nav">
      <div className="Header">
          <h1>How can we help you?</h1>
          
      </div>
      <SearchBar />
      <li></li>
      <div className="support_content">

        <div className="shooting" >
        <IconContext.Provider
          value={{ style:{marginLeft: '100px'} , size: '30px', color: 'white'  }}
          >
         <MdOutlineSettingsSuggest  />
         </IconContext.Provider>
          <p>
            Having any issues trouble shooting?
          </p>
          <a href="https://support.google.com/accounts/answer/7299973?hl=en">see instruction to help get back to your account</a>
        </div>
        
          <div className="Enable" >
          <IconContext.Provider
          value={{ style:{marginLeft: '100px'} , size: '30px', color: 'white'}}
          >
         <AiOutlineMessage  />
         </IconContext.Provider>
            <p>
              Our support team is happy to chat one on one.
            </p>
            <a href="https://mail.google.com/mail">Enable chat</a>
          </div>
          <div className="Contact" >
          <IconContext.Provider
          value={{ style:{marginLeft: '100px'} , size: '30px', color: 'white'}}
          >
         <AiOutlineNotification  />
         </IconContext.Provider>
            <p>
              Talk to our experts for great customer service support and professional services. <a href="https://mail.google.com/mail">Contact now</a>
            </p>
          </div>
          <div className="email" >
          <IconContext.Provider
          value={{ style:{marginLeft: '100px'} , size: '30px', color: 'white'}}
          >
         <AiOutlineMail  />
         </IconContext.Provider>
            <p>
              Any other inquiries we can assist with. We want to help. Leave us an <a href="https://mail.google.com/mail">email</a>
            </p>
          </div>
        </div>
      </div>    
        );
  };

        export default SupportNav;