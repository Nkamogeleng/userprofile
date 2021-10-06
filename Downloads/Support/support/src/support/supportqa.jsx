import './support.css';
import { IconContext } from "react-icons";
import { AiOutlineIdcard } from "react-icons/ai";
import { AiTwotoneShopping } from "react-icons/ai";
import { MdOutlinePhoneIphone } from "react-icons/md";


const SupportQA = () => {
    return (
        <div className="QA">
            <div className="Header2">
          <h1>FAQs</h1>
          
      </div>
      <p style= {{fontWeight: "bold"}}>
            Have more questions?
          </p>

      {''}

      <div className="content">

      <IconContext.Provider
          value={{ size: '70px', color: "skyblue"  }}
          >
         <AiOutlineIdcard  />
         </IconContext.Provider>
        <div className="x1" >
          <h4> Account Related</h4>
          
          <li>
            I am unable to resert my password. What do I do now?
          </li>
          <li>
            How can I change my login email id?
          </li>
          <a href="https://support.google.com/accounts/answer/7299973?hl=en">Learn more on accounts</a>
        </div>
        <IconContext.Provider
          value={{ size: '70px', color: "skyblue"  }}
          >
         <AiTwotoneShopping  />
         </IconContext.Provider>
          <div className="x2" >
          <h4> About our services</h4>
          
          <li>
            Is ITIAA an investment company
          </li>
          <li>
            After how many years can I start making profit?
          </li>
            <a href="https://mail.google.com/mail">Learn more on the services</a>
          </div>

          <IconContext.Provider
          value={{ size: '70px', color: "skyblue"  }}
          >
         <MdOutlinePhoneIphone  />
         </IconContext.Provider>
          <div className="x3" >
          <h4>Mobile platforms</h4>
          
          <li>
            Does your apps support both Android and iOS?
          </li>
          <li>
            Will I get the same service from an app as the website?
          </li> 
          <a href="https://mail.google.com/mail">Learn more on mobile platform</a>
            
          </div>
        </div>
        </div>
    )
}
export default SupportQA;