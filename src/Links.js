import React from 'react';
import TypesOf from './TypesOf';
import './Links.css'
import {
  FaCaretDown,
  FaCaretRight,
} from 'react-icons/fa';
import RenderDetails from './RenderDetails';
const GameDesktop = [
  { id: Math.random(), name: "Compare All" },
  {
    id: Math.random(),
    name: "CHRONODS",
    text: `CHRONO
    Small Form Factor
11”(H) x 7”(W) x 15.5”(D)`,
    image: "https://cdn.originpc.com/img/menu/new-chronos.png",
    price: `Starting at: $2,604
or as low as $61.94/month `,
  },
  {
    id: Math.random(),
    name: "NEURON",
    text: `NEURON

Mid Tower

18”(H) x 9”(W) x 18”(D)`,
    image: `https://cdn.originpc.com/img/menu/neuron.png`,
    price: `Starting at: $2,390

or as low as $56.85/month`,
  },
  {
    id: Math.random(),
    name: "MILLENIUM",
    text: `MILLENNIUM

Full Tower

20.4”(H) x 9.65”(W) x 20.4”(D)

`,
    image: `https://cdn.originpc.com/img/menu/millennium-5000d.png`,
    price: `Starting at: $2,225

or as low as $52.92/month `,
  },
  {
    id: Math.random(),
    name: "GENESIS",
    text: `GENESIS

Super Tower

23.82”(H) x 9.75”(W) x 24.8”(D)`,
    image: `https://cdn.originpc.com/img/menu/genesis-7000-series.png`,
    price: `https://cdn.originpc.com/img/menu/genesis-7000-series.png`,
  },
];
const WorkDesktop = [
  { id: Math.random(), name: "Compare All" },
  {
    id: Math.random(),
    name: "S-CLASS",
    text: `S-CLASS

Small Form Factor

7”(H) x 11”(W) x 15.5”(D)`,
    image: `https://cdn.originpc.com/img/menu/s-class-menu.png`,
    price: `Starting at: $1,302

or as low as $30.97/month`,
  },
  {
    id: Math.random(),
    name: "S-CLASS Cam Link Pro",
    text: `S-CLASS Cam Link Pro

Small Form Factor

7”(H) x 11”(W) x 15.5”(D)`,
    image: `https://cdn.originpc.com/img/menu/s-class-cam-link-pro.png`,
    price: `Starting at: $1,471

or as low as $34.99/month`,
  },
  {
    id: Math.random(),
    name: "M-CLASS",
    text: `M-CLASS

Mid Tower

15.375”(H) x 6.75”(W) x 16.25”(D)`,
    image: `https://cdn.originpc.com/img/menu/m-class.png`,
    price: `Starting at: $1,251

or as low as $29.75/month `,
  },
  {
    id: Math.random(),
    name: "L-CLASSS",
    text: `L-CLASS

Full Tower, Super Tower & Rackmount

20.4”(H) x 9.65”(W) x 20.4”(D)`,
    image: `https://cdn.originpc.com/img/menu/l-class-5000-7000-series.png`,
    price: `Starting at: $2,310

or as low as $54.94/month`,
  },
  {
    id: Math.random(),
    name: "L-CLASS STUDIO",
    text: `L-CLASS STUDIO

Full Tower

16.65”(H) x 13.54”(W) x 19.89”(D)`,
    image: `https://cdn.originpc.com/img/menu/l-class-studio.png`,
    price: `Starting at: $4,114

or as low as $97.85/month`,
  },
];
const GamesLaptop = [
  {
    id: Math.random(),
    name: "Compare All",
  },
  {
    id: Math.random(),
    name: "EVO15-S (20-Series)",
    text: `EVO15-S (20-Series)

Thin & Light

.77”(H) x 14.07”(W) x 9.3”(D)`,
    image: `https://cdn.originpc.com/img/menu/evo15-s-special-offer.png`,
    price: `Starting at: $2,260

or as low as $53.75/month`,
  },
  {
    id: Math.random(),
    name: "EVO15-S(30-Series)",
    text: `EVO15-S (30-Series)

Thin & Light

.77”(H) x 14.07”(W) x 9.3”(D)

`,
    image: `https://cdn.originpc.com/img/menu/evo15-s-amoled.png`,
    price: `Starting at: $2,103

or as low as $50.02/month`,
  },
  {
    id: Math.random(),
    name: "EVO17-S (30-Series)",
    text: `EVO17-S (30-Series)

Thin & Light

0.78”(H) x 15.6”(W) x 10.5”(D)`,
    image: `https://cdn.originpc.com/img/menu/new-evo17-s.png`,
    price: `Starting at: $2,115

or as low as $50.30/month `,
  },
  {
    id: Math.random(),
    name: "EON17-X (20-Series)",
    text: `EON17-X (20-Series)

Desktop GPU & CPU

1.7”(H) x 15.7”(W) x 12.5”(D)`,
    image: `https://cdn.originpc.com/img/menu/new-eon17-x-special-offer.png`,
    price: `Starting at: $2,755

or as low as $65.53/month`,
  },
  {
    id: Math.random(),
    name: "EON17-X (30-Series)",
    text: `EON17-X (30-Series)

Desktop GPU & CPU

1.7”(H) x 15.7”(W) x 12.5”(D)`,
    image: `https://cdn.originpc.com/img/menu/new-eon17-x.png`,
    price: `Starting at: $2,945

or as low as $70.05/month`,
  },
];
const WorkLaptops = [
  { id: Math.random(), name: "Compare All" },
  {
    id: Math.random(),
    name: "NT-15i",
    text: `NT-15i

Thin & Light

.58”(H) x 13.9”(W) x 9”(D)`,
    image: `https://cdn.originpc.com/img/menu/nt-15i.png`,
    price: `Starting at: $1,487

or as low as $35.37/month`,
  },
  {
    id: Math.random(),
    name: "NT-15 (20-Series)",
    text: `NT-15 (20-Series)

Thin & Light

.77”(H) x 14.07”(W) x 9.3”(D)`,
    image: `https://cdn.originpc.com/img/menu/nt-15-special-offer.png`,
    price: `Starting at: $2,300

or as low as $54.70/month`,
  },
  {
    id: Math.random(),
    name: "NT-15 (30-Series)",
    text: `NT-15 (30-Series)

Thin & Light

.77”(H) x 14.07”(W) x 9.3”(D)`,
    image: `https://cdn.originpc.com/img/menu/nt-15.png`,
    price: `Starting at: $2,143

or as low as $50.97/month `,
  },
  {
    id: Math.random(),
    name: "NT-17 (30-Series)",
    text: `NT-17 (30-Series)

Thin & Light

0.78”(H) x 15.6”(W) x 10.5”(D)`,
    image: `https://cdn.originpc.com/img/menu/new-nt-17.png`,
    price: `Starting at: $2,155

or as low as $51.26/month`,
  },
  {
    id: Math.random(),
    name: "NS-17 (20-Series)",
    text: `NS-17 (20-Series)

Desktop GPU & CPU

1.7”(H) x 15.7”(W) x 12.5”(D)`,
    image: `https://cdn.originpc.com/img/menu/new-ns-17-special-offer.png`,
    price: `Starting at: $2,805

or as low as $66.72/month`,
  },
];
const Links = () => {
    return (
      <>
        <div className="links-group">
          <ul>
            <li className="desktop-link">
              <a href="#" className="head-class">
                Desktop
              </a>
              <FaCaretDown className="arrow-link" />
              <li className="under-link" style={{margin:"10px 0 0 -2rem"}}>
                <li
                  style={{
                    backgroundColor: "#343a40",
                    height: "2rem",
                    width:"15rem",
                    padding: "10px",
                    border: "0.3px solid #6c757d",
                  }}
                  className="gameDesk"
                >
                  <a style={{ backgroundColor: "#343a40" }} href="#">
                    Gaming Desktops
                  </a>
                  <FaCaretRight
                    className="arrow-link"
                    style={{
                      position: "absolute",
                      color: "white",
                      backgroundColor: "#343a40",
                    }}
                  />
                  <div
                    class="game-insider"
                    id="gameInside"
                    style={{
                      margin: " -2rem 0 0 11.5rem",
                      position: "absolute",
                      zIndex: "10",
                    }}
                  >
                    {GameDesktop.map((elem) => {
                      return <TypesOf element={elem} key={elem.id} />;
                    })}
                  </div>
                </li>
                <li
                  style={{
                    backgroundColor: "#343a40",
                    height: "2rem",
                    padding: "10px",
                    border: "0.3px solid #6c757d",
                  }}
                  className="workDesk"
                >
                  <a style={{ backgroundColor: "#343a40" }} href="#">
                    WorkStation Desktops
                  </a>
                  <FaCaretRight
                    className="arrow-link"
                    style={{
                      position: "absolute",
                     
                      backgroundColor: "#343a40",
                    }}
                  />
                  <div
                    className="workDesktop"
                    id="workInside"
                    style={{
                      margin: "-2rem 0 0 11.8rem",
                      zIndex: "10",
                      position: "absolute",
                    }}
                  >
                    {WorkDesktop.map((elem) => {
                      return <TypesOf key={elem.id} element={elem} />;
                    })}
                  </div>
                </li>
                <li
                  style={{
                    backgroundColor: "#343a40",
                    height: "2rem",
                    padding: "10px",
                    border: "0.3px solid #6c757d",
                  }}
                  className="li-wrapper"
                >
                  <a
                    href="#"
                    style={{ backgroundColor: "#343a3d" }}
                  >{`Government & Corporate`}</a>
                  <FaCaretRight
                    className="arrow-link"
                    style={{
                      position: "absolute",
                      margin: "2px 0 0 0",
                      backgroundColor: "#343a3d",
                    }}
                  />
                  <RenderDetails
                    Text={`Government & Corporate Business Development`}
                    src={`https://cdn.originpc.com/img/menu/business-2.png`}
                    money={`Learn About ORIGIN PC Professional Workstations 
                  and Contact the Dedicated ORIGIN PC Government and Corporate Sales Team.`}
                  />
                </li>
              </li>
            </li>
            <li className="laptop-wrapper">
              <a href="#" className="head-class2">
                Laptops
              </a>
              <FaCaretDown className="arrow-link" />
              <ul style={{position:"absolute",margin:"10px 0 0 -13rem"}} className="laptopInside">
                <li
                 className="game-wrapper"
                  style={{
                    backgroundColor: "#343a40",
                    height: "2rem",
                    padding: "10px",
                    border: "0.3px solid #6c757d",
                  }}
                >
                  <a href="#" style={{
                    backgroundColor: "#343a40"}}>Gaming&nbsp;Laptops</a>
                  <FaCaretRight
                  className="arrow-link"
                  style={{
                    backgroundColor: "#343a40",position:"absolute"}}
                  />
                <div className="gameInside">
                {GamesLaptop.map((elem) => {
                  return <TypesOf key={elem.id} element={elem}/>;
                })}
                </div>
                </li>
                <li
                  style={{
                    backgroundColor: "#343a40",
                    height: "2rem",
                    padding: "10px",
                    border: "0.3px solid #6c757d",
                  }}
                  className="workLaptop"
                >
                  <a href="#" style={{
                    backgroundColor: "#343a40"}}>Desktop&nbsp;Laptops</a>
                  <FaCaretRight
                    className="arrow-link"
                    style={{ position: "absolute",
                    backgroundColor: "#343a40"}}
                  />
                  <div className="workInside">
                  {WorkLaptops.map((elem) => {
                  return <TypesOf key={elem.id} element={elem} />;
                })}
                </div>
                </li>
                <li 
                   className="li-wrapper"
                  style={{
                    backgroundColor: "#343a40",
                    height: "2rem",
                    padding: "10px",
                    border: "0.3px solid #6c757d",
                  }}
                >
                  <a href="#" style={{
                    backgroundColor: "#343a40"}}>Government&nbsp;and&nbsp;Corporations</a>
                  <FaCaretRight
                    className="arrow-link"
                    style={{ position: "absolute",
                    backgroundColor: "#343a40"}}
                  />
                  <div style={{marginLeft:"3rem"}}>
                  <RenderDetails
                  Text={`Government & Corporate Business Development`}
                  src={`https://cdn.originpc.com/img/menu/business-2.png`}
                  money={`Learn About ORIGIN PC Professional Workstations and Contact the Dedicated ORIGIN PC Government and Corporate Sales Team.`}
                />
                </div>
                </li>
              </ul>
            </li>
            <li style={{marginLeft:"10rem"}}>
              <a href="#" className="head-class1">
                Accessories
              </a>
            </li>
            <li id="off-link">
              <a href="#" className="head-class" id="offer">
                Special&nbsp;Offers
              </a>
            </li>
            <li
              className="review-box"
              id="review-wrapper"
              style={{ backgroundColor: "#000",height:"1rem" }}
            >
              <a href="#" className="head-class4">
                Reviews
              </a>
              <FaCaretDown
                className="arrow-link"
                style={{ position: "absolute" }}
              />
              <ul className="review-insider">
                <li
                  className="review-box"
                  style={{
                    border: "0.02px solid #6c757d",
                    padding: "10px",
                  }}
                >
                  <a href="#" className="review-box">
                    News{" "}
                  </a>
                </li>
                <li
                  className="review-box"
                  style={{
                    border: "0.02px solid #6c757d",
                    padding: "10px",
                    width: "8rem",
                  }}
                >
                  <a href="#" className="review-box">
                    Testimonials
                  </a>
                </li>
              </ul>
            </li>
            <li className="more-wrapper">
              <a href="#" className="head-class5">
                More
              </a>
              <FaCaretDown
                className="arrow-link"
                style={{ position: "absolute" }}
              />
              <ul className="more-insider">
                <li
                  className="review-box"
                  style={{
                    border: "0.02px solid #6c757d",
                    padding: "10px",
                  }}
                >
                  <a href="#" className="review-box">
                    Custom&nbsp;design
                  </a>
                </li>
                <li
                  className="review-box"
                  style={{
                    border: "0.02px solid #6c757d",
                    padding: "10px",
                  }}
                >
                  <a href="#" className="review-box">
                    PCs&nbsp;for&nbsp;Customers
                  </a>
                </li>
                <li
                  className="review-box"
                  style={{
                    border: "0.02px solid #6c757d",
                    padding: "10px",
                  }}
                >
                  <a href="#" className="review-box">
                    Support
                  </a>
                </li>
                <li
                  className="review-box"
                  style={{
                    border: "0.02px solid #6c757d",
                    padding: "10px",
                  }}
                >
                  <a href="#" className="review-box">
                    Blog
                  </a>
                </li>
                <li
                  className="company-wrapper"
                  style={{
                    backgroundColor: "#343a40",
                    height: "3rem",
                    paddingTop: "10px",
                    border: "0.3px solid #6c757d",
                  }}
                >
                  <a
                    href="#"
                    style={{ backgroundColor: "#343a40", paddingLeft: "10px" }}
                  >
                    Company
                  </a>
                  <FaCaretRight
                    className="arrow-link"
                    style={{
                      color: "#fff",
                      backgroundColor: "#343a40",
                    }}
                  />
                  <ul
                    className="company-insider"
                    style={{ position: "absolute", margin: "-30px 0 0 130px" }}
                  >
                    <li
                      style={{
                        backgroundColor: "#343a40",
                        height: "3rem",
                        width: "6rem",
                        padding: "10px",
                        border: "0.2px solid #6c757d",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          backgroundColor: "#343a40",
                          marginLeft: "10px",
                        }}
                      >
                        About
                      </a>
                    </li>
                    <li
                      style={{
                        backgroundColor: "#343a40",
                        height: "3rem",
                        width: "6rem",
                        padding: "10px",
                        border: "0.2px solid #6c757d",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          backgroundColor: "#343a40",
                          marginLeft: "10px",
                        }}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="review-box"
                  id="community-wrapper"
                  style={{
                    border: "0.3px solid #6c757d",
                    padding: "10px",
                  }}
                >
                  <a href="#" className="review-box">
                    Community
                  </a>
                  <FaCaretRight
                    className="arrow-link"
                    style={{
                      color: "#fff",
                      backgroundColor: "#343a40",
                    }}
                  />
                  <ul
                    style={{ position: "absolute", margin: "-30px 0 0 120px" }}
                    className="community-insider"
                  >
                    <li
                      style={{
                        backgroundColor: "#343a40",
                        height: "3rem",
                        width: "6rem",
                        padding: "10px",
                        border: "0.2px solid #6c757d",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          backgroundColor: "#343a40",
                        }}
                      >
                        Affiliates
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
}

export default Links
