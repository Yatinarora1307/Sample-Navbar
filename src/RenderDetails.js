import React from 'react'
const RenderDetails = (props) => {
     return (
       <div
         className="render-text"
         style={{
           backgroundColor: "#343a40",
           margin: "-30px 0 0 180px",
           width: "24rem",
           position: "absolute",
           border: "0.2px solid #6c757d",
         }}
       >
         <div className="innerText" style={{ backgroundColor: "#343a40" }}>
           {props.Text}
         </div>
         <img
           className="render-image"
           style={{ backgroundColor: "#343a40" }}
           src={props.src}
         />
         <div className="price-details" style={{ backgroundColor: "#343a40" }}>
           {props.money}
         </div>
       </div>
     );
}

export default RenderDetails
