import React from 'react'
import RenderDetails from './RenderDetails';
import { FaCaretRight } from "react-icons/fa";
const TypesOf = (props) => {
    return (
      <>
        {props.element.name == "Compare All" ? (
          <>
            <li
              style={{
                backgroundColor: "#343a40",
                border: "0.2px solid #6c757d",
                padding: "10px",
                height: "3rem",
                width: "12rem",
              }}
            >
              <a
                href="#"
                style={{
                  backgroundColor: "#343a40",
                }}
              >
                {props.element.name}
              </a>
            </li>
          </>
        ) : (
          <>
            <li
              style={{
                backgroundColor: "#343a40",
                border: "0.2px solid #6c757d",
                padding: "10px",
                height: "3rem",
                width: "12rem",
              }}
              className='li-wrapper'
            >
              <a
                href="#"
                style={{
                  backgroundColor: "#343a40",
                }}
              >
                {props.element.name}
              </a>
            <FaCaretRight className="arrow-link" style={{backgroundColor: "#343a40",color:"white"}}/>
            <div className='renderer-content'>
            <RenderDetails
              Text={props.element.text}
              src={props.element.image}
              money={props.element.price}
            />
           </div>
            </li>
          </>
        )}
      </>
    );
}

export default TypesOf
