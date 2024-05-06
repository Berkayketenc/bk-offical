import React from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import PageComponentItem from "../item";
import ricky from "../../Assest/ricky.png";
import jsImg from "../../Assest/javascript.png";
import pythonImg from "../../Assest/python.png";
import reactImg from "../../Assest/react.png";
import reduxImg from "../../Assest/redux.png";
import sassImg from "../../Assest/sass.png";
import bootstrapImg from "../../Assest/bootstrap.png";
import htmlImg from "../../Assest/html.webp";
import twImgImg from "../../Assest/tw.png";
import zeplinImg from "../../Assest/zeplin.png";
import gitImg from "../../Assest/git.png";
import artiImg from "../../Assest/arti.png";
import wpImg from "../../Assest/wp.png";
import ContactForm from "../../pageComponents/form/index";
import figmaImg from "../../Assest/figma.png";
import cssImg from "../../Assest/css.png";
import agileImg from "../../Assest/agile.png";
import duzceUni from "../../Assest/duzce-uni.png";
import konyaUni from "../../Assest/konya-uni.png";
import erstreamImg from "../../Assest/erstream.jpeg";
import akinonImg from "../../Assest/akinon.png";
import corexponentImg from "../../Assest/core.png";
import tgtImg from "../../Assest/tgtImg.jpeg";
import samsungImg from "../../Assest/samsung.png";
import underarmourImg from "../../Assest/underarmour.png";
import lacosteImg from "../../Assest/lacoste.png";
import uspaImg from "../../Assest/uspa.png";
import cardinImg from "../../Assest/cardin.png";
import converseImg from "../../Assest/converse.png";
import gantImg from "../../Assest/gant.png";
import exxenImg from "../../Assest/exxen.png";
import vakkoImg from "../../Assest/vakko.png";
import nextImg from "../../Assest/next.png"

const experienceItems = [
  {
    img: corexponentImg,
    alt: "CoreExponent Logo",
    className: "corexponent",
    width: 180,
    height: 50,
    icon: icon.cifUs,
    years: "2024",
    text: "CoreExponent, based in Texas, USA, provides software, web, and mobile app solutions for businesses digital transformation needs. They also offer artificial intelligence, data analytics, and cloud services.",
  },
  {
    img: akinonImg,
    alt: "Akinon Logo",
    width: 180,
    height: 50,
    icon: icon.cifTr,
    years: "2022-2024",
    text: "Akinon is a software and digital solutions company specializing in e-commerce, digital marketing, and mobile app development. They offer services in CRM, payment integration, data analytics, and more.",
  },
  {
    img: erstreamImg,
    alt: "Erstream Logo",
    width: 180,
    height: 50,
    icon: icon.cifTr,
    years: "2021-2022",
    text: "Erstream provides a full suite of OTT solutions that work on any device to streamline your broadcasting experience. Whether you are looking for accelerated speed, security and user-friendliness or want quality content in an easy format - we have got it all.",
  },
];

const educationItems = [
  {
    img: konyaUni,
    name: "KONYA TECHNICAL UNIVERSITY",
    degree: "MASTER OF SCIENCE IN COMPUTER ENGINEERING",
  },
  {
    img: duzceUni,
    name: "DUZCE UNIVERSITY",
    degree: "MANAGEMENT INFORMATION SYSTEM LICENSE",
  },
  {
    img: tgtImg,
    name: "TECHNOLOGY AND ENTREPRENEURSHIP COMMUNITY",
    degree: "FOUNDING PRESIDENT",
  },
];

const frontendProjects = [
  exxenImg,
  samsungImg,
  underarmourImg,
  gantImg,
  converseImg,
  uspaImg,
  cardinImg,
  lacosteImg,
  vakkoImg,
  artiImg,
];

const technologies = [
  jsImg,
  pythonImg,
  reactImg,
  nextImg,
  reduxImg,
  cssImg,
  htmlImg,
  bootstrapImg,
  twImgImg,
  sassImg,
  figmaImg,
  zeplinImg,
  gitImg,
  agileImg,
  artiImg,
];

const ContainerComponent = () => {
  return (
    <div>
      <PageComponentItem
        imageUrl={ricky}
        backgroundColor=""
        observeNumber={0}
        button="true"
        text="Would you like to see what I can bring to the projects?"
      ></PageComponentItem>

      <PageComponentItem imageUrl="" backgroundColor="black" observeNumber={1}>
        <div className="experince-root" id="experince">
          <div className="experience-container">
            <div className="experience-title">
              <p>4+ YEARS OF EXPERIENCE IN FRONTEND DEVELOPMENT.</p>
            </div>
            <div className="experience-items">
              {experienceItems.map((item, index) => (
                <div className="experience-items-item" key={index}>
                  <div className="experience-items-item-img">
                    <img
                      src={item.img}
                      draggable="false"
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className={
                        item.className === "corexponent" ? "corexponent" : ""
                      }
                      style={{
                        objectFit: "",
                      }}
                    />
                  </div>
                  <div className="experience-items-item-info">
                    <CIcon
                      className="rotating-element"
                      icon={item.icon}
                      size="sm"
                    />
                    <p className="years">{item.years}</p>
                    <p>{item.text}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageComponentItem>

      <PageComponentItem imageUrl="" backgroundColor="black" observeNumber={2}>
        <div className="education-root">
          <div className="education-container">
            <div className="education-title">
              <p>
                MASTER EDUCATION AND UNDERGRADUATE EDUCATION AND COMMUNITIES.
              </p>
            </div>
            <div className="education-items">
              {educationItems.map((item, index) => (
                <div className="education-items-item" key={index}>
                  <div className="education-items-item-img">
                    <img src={item.img} width="80" height="80" alt="education_logo" draggable="false" />
                  </div>
                  <div className="education-items-item-texts">
                    <h2>{item.name}</h2>
                    <h3>{item.degree}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageComponentItem>

      <PageComponentItem imageUrl="" backgroundColor="black" observeNumber={3}>
        <div className="projects-root">
          <div className="projects-container">
            <div className="projects-items">
              <div className="projects-items-title">
                <p>SOME OF THE FRONTEND PROJECTS I'VE WORKED ON</p>
              </div>
              <div className="projects-items-item">
                {frontendProjects.map((img, index) => (
                  <div className="projects-items-item-card" key={index}>
                    <img
                      src={img}
                      alt=""
                      draggable="false"
                      className={index === 9 ? "customimg" : ""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageComponentItem>

      <PageComponentItem imageUrl="" backgroundColor="black" observeNumber={4}>
        <div className="tech-root" id="tech">
          <div className="tech-container">
            <div className="tech-items">
              <div className="tech-items-title">
                <p>
                  THE TECHNOLOGY I UTILIZE IN MY PROFESSIONAL PROJECTS IS MY
                  TECH.
                </p>
              </div>
              <div className="tech-items-item">
                {technologies.map((img, index) => (
                  <div className="tech-items-item-card" key={index}>
                    <img src={img} alt="" draggable="false"/>
                  </div>
                ))}
              </div>
              <p className="tech-desp">
                As a software engineer specializing in frontend development, my
                vision is to achieve the most effective outcomes for the current
                problem or project by utilizing solutions and technologies
                necessary for it. I do not adhere to any language or framework
                fanaticism.
              </p>
            </div>
          </div>
        </div>
      </PageComponentItem>

      <PageComponentItem imageUrl="" backgroundColor="white" observeNumber={5}>
        <div className="contact-root" id="contact">
          <div className="contact-container">
            <p className="contact-title">YOU CAN CONTACT ME!</p>
            <div className="contact-content">
              <ContactForm />
              <div className="contact-vertical">
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_EN"
                  data-size="large"
                  data-theme="light"
                  data-type="VERTICAL"
                  data-vanity="berkay-ketenci-a20473131"
                  data-version="v1"
                >
                  <a
                    className="badge-base__link LI-simple-link"
                    aria-label="Linkedin"
                    href="https://tr.linkedin.com/in/berkay-ketenci-a20473131?trk=profile-badge"
                  ></a>
                </div>

                <img
                  className="img-wp"
                  src={wpImg}
                  width="250"
                  height="300"
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </PageComponentItem>
    </div>
  );
};

export default ContainerComponent;
