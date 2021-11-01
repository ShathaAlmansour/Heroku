import React from "react";
import "./style.css";
import {BsFillPersonFill} from 'react-icons/bs'
import {MdOutlineMapsHomeWork} from 'react-icons/md'
import {DiJavascript} from 'react-icons/di'
import {FaGraduationCap} from 'react-icons/fa'

export default function CVR() {
  return (
    <div className="Right">
      <div>
        <h1 className="h1"> <BsFillPersonFill className="icon"/>About</h1>
        <hr></hr>
        <p>
          Over the past 20 years I have continuously challenged myself with new
          languages, frameworks and methodologies. My core languages have always
          been html, css & javascript but I have also worked as a full stack php
          developer building both bespoke CMS solutions and small business
          applications. My current role at IAG is Senior Front End Developer (or
          Senior Software Engineer as IAG prefer to label us) and have been
          developing with React and Redux for the past 4 years.
        </p>
      </div>

      <div>
        <h1 className="h1"><MdOutlineMapsHomeWork className="icon"/>WORK EXPERIENCE</h1>
        <hr></hr>
        <b>
          <p>Senior Front End Developer, IAG</p>
        </b>
        <p className="grey">08/2016 - Present</p>
        <p>
          I am currently working as a senior front end developer on IAG's Chroma
          Design System team, however as there are only two developers on the
          team we have also been required to setup CI/CD workflows in Circle
          CI/Github Actions as well as hosting environments in AWS. I have had
          experience setting up deployments to S3 via the AWS CLI from Github
          Actions and setting up CloudFront, Route 53 and simple Lambda
          functions. I have also been responsible for creating and maintaining
          components both in our Core product which is html/scss and our React
          npm package which is consumed by the app development teams and setting
          up testing and documentation across the design system. I have had
          experience working on multiple applications at IAG that have been
          built or are being built using React/Redux running on top of a Node
          Express Server and interfacing with an API backend architecture to
          access the various IAG systems. We are always striving to increase the
          quality of our projects with good test coverage and code reviews.
        </p>
        <b>
          <p> Senior Front End Developer, Pacific Magazines</p>
        </b>
        <p className="grey">03/2016 - 08/2016</p>
        <p>
          During my time at Pacific Magazines I worked on a couple of large
          React applications using React/Redux to integrate with a .NET MVC
          Application.
        </p>
        <b>
          <p> UI Developer, IAG </p>
        </b>
        <p className="grey">11/2014 - 03/2016</p>
        <p>
          Working as a UI developer as part of IAG Labs developing
          html/css/javascript solutions to integrate with the backend systems
          for the online quoting applications.
        </p>
        <b>
          <p>Front End Developer, Reactive</p>
        </b>
        <p className="grey"> 09/2014 - 11/2014 </p>
        <p>
          At Reactive I was responsible for working with a .NET team to deliver
          templates using javascript/sass/grunt and handlebars. I also had
          exposure to TFS for source control.
        </p>
        <b>
          <p>Front End Developer, City of Sydney Council</p>
        </b>
        <p className="grey"> 05/2014 - 08/2014 </p>
        <p>
          For City of Sydney I was a Front End Developer working with Wordpress
          on multiple key websites such as Sydneynewyearseve.com.au. All code
          was developed using LESS and Bootstrap for a consistent responsive
          interface.
        </p>
        <b>
          <p>Freelance Web Developer, Self Employed</p>
        </b>
        <p className="grey"> 03/2010 - 05/2014 </p>
        <p>
          As a freelance web developer I mainly concentrated on building bespoke
          CMS solutions for agencies using Wordpress. As a full stack developer
          my responsibilities included setting up hosting, domains, databases
          and delivering an easy to use custom Wordpress theme with Advanced
          Custom Fields and toward the latter end of my freelance venture,
          responsive layouts.
        </p>
        <b>
          <p>Senior Web Developer, Soap Creative</p>
        </b>
        <p className="grey">07/2006 - 03/2010</p>
        <p>
          At SOAP I was required to carry out full stack duties across a broad
          range of projects including php/MySQL with front end technologies
          ranging from html/css to Flash.
        </p>
        <b>
          <p>Web Developer, M&C Saatchi</p>
        </b>
        <p className="grey">05/2006 - 08/2006</p>
        <p>Flash development with xml & amfphp for php/mysql integration.</p>
        <b>
          <p>Web Developer, Wunderman/GPY&R </p>
        </b>
        <p className="grey"> 07/2005 - 05/2006</p>
        <p>
          Flash developer using xml & amfphp, html/css with php/mysql backend
          integration and CMS development.
        </p>
        <b>
          <p>Web Developer, Federal Publishing Company</p>
        </b>
        <p className="grey">07/2004 - 03/2005</p>
        <p>
          Lead web developer on homehound.com.au, html/css/javascript
          development with php & SQL server integration.
        </p>
      </div>

      <div>
        <h1 className="h1"><DiJavascript className="icon"/> SKILLS </h1>
        <hr></hr>
      </div>

      <div>
        <h1 className="h1"><FaGraduationCap className="icon"/> EDUCATION </h1>
        <hr></hr>
        <b>
          <p>Bachelor (hons) Music</p>
        </b>
        <b>
          <p>Birmingham Conservatoire</p>
        </b>
        <p>Birmingham Conservatoire</p>
      </div>
    </div>
  );
}
