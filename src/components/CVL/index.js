import React from "react";
import "./style.css";
import {FaLocationArrow} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function CVL() {
  return (
    <div className="lift">
      <img className="img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHTQgGBolGxUVIzEhJikrNS4uGB8zODMsNygtLisBCgoKDg0OGhAQFy0dHyUtKystLS0tNy0tLS0wKy0tLS0tLSstKystLS0tLS0rLS0tNy0tLS03LS0rLis3LTcrK//AABEIAKwBJQMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQUEBgIDB//EADIQAQACAQIDBQUIAwEAAAAAAAABAhEDBQQSITFBUXHBIlJhgaEyQkNygpGx0RMz4cL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EAB0RAQEAAwADAQEAAAAAAAAAAAABAhExA0FREiH/2gAMAwEAAhEDEQA/AP6EA9LMAAAAAADAAAAAAAAAABgAAAAAAADAAAAAAYAAAAAAAIUARQBJAAFQAAAFBBX3o6Vr2itYzMg/N96eje84rWbeUZbPC7TSvXU9u3h92P7aNaxEYiIiPCIxDO+T4r8sLT2nVnt5a+c5n6OrT2av3r2n8sRH8tUR+67qMDcNDR0vZrN51OnfExEfFnt7cNtjUmb1nF+/PZbp9GJqac1ma2iYmO2JaYXcTY+BRbiAAAoIAAAAAAAAAAACooAigIACoAAAAAPrTrNpisdZmcR5vScFwtdKuI62nra3jP8ATJ2WkTq592szHn2ereZeS+lYqCM1KCArk4/g66tfC0fZt6T8HWgPKalJrM1mMTE4mHy0t904i9LR96Jiflj+2Y9Eu5tmqA6KgAAAKgCiAAAAAAACoAogAAAAAAACg0ti/wBlvyT/ADDbYuwx7d/yerbY59XjxFBDoipgFABj7/8Ahfr9GQ19/wDwv1/+WQ3w4i9AFOAAAAAAAAAAAAAACgAIoIAAAAAAKgNTYft3/LH8ttw7TpUjSreIxa0TzT3z1dzDK7q5wBEuqAAADH3/APC/X6Mh6HdtCttO1rdtInl69kzh55thxF6BgwtwAAVAAADIAAAAAAAAKAACAAAAQqACoA9Bs9s6MR7s2j659Xcw9l4jlv8A457L9Y+FohuQwymqucFES6oigAgOPdrY0L/Hlj6w861d74jMxpR932reeOkMpthP4iqgLcAAAUEAAAAAAAAAAVIUAAEFQADIEAAAA/Xh78t6W8LVmfLL1MPIt/auLi9IpM+3SMede6WfkntWLQEVkoBAVJVwbtxX+PTmsfavExHwjvl2TYxOK1OfUvb3rTMeXd9H5Kj0MwAAAFQAAAAAJAAAAAAUAAQFQMgAAKgAoAmXfstc63lW0+nq4GvsuhaLWvasxE1iImYxnMpy47GuoMFoKAjE33/ZT8nrLcYu+aduetuWeWKRE2x0zmVYdcvGUA3QAAKiggqAAAAAAAAAAAKgCiAAAAAAqAqD9dHh76k+xWbfHuj5gnD6fPelcZzaI+Wer1UM7bdunTtz3mJnExER1x82kxzu1yACHUFAH5cRTmpevvVmI88P1AeRmEa/HbXa1rXpieac8s9Jz34ZerpWpOL1ms/GHomUrPT4FHRBQEFQAFBAUECQAAAAAABUAAAAdnC7dqanXHLX3rekd7luhyOrhuA1dTsry1963SPl4tjhdu09Prjmt71uv7R3OxnfJ8VMWfw+1adetvbn49K/s761iIxEREeEdIURbb1QA4AAAAAAD5vSLRi0RMeExmH0AzeI2ilutJmk+HbVmcRwOrp9tcx71esf8elFzOxzTyI9FxO3aWp1xy28a9P3hk8Vtupp9Yjnr417Y84XM5U2OIXAtxFEABQSQAAAAADIAZMgAsRnpHWZ6R8Ud+y0idbr92s2jzzEerluoO7gNtrSItqRFr+HdX+5aKowt20UBwEUAAgAAAAAEBQQFBAVFAZ247fF4m1IiLx4dl/+sKYetef3ekV1rY74i0+bTDL0mxxCDVKiAAAAAP/Z"></img>
      <b>
        <h2 className="h2">Jonathan Bloomer</h2>
      </b>
      <h3 className="h3"> Senior Front End Developer</h3>
      <hr></hr>
<div>
      <p className="p"><FaLocationArrow className="icon1"/>Sydney, NSW, Aus</p>
      < GrMail className="icon1"/> <a className="m" href="mailto:jonbloomer@gmail.com"> jonbloomer@gmail.com</a> 
      <hr></hr>
      </div>

      <div>
<ul className="link">
    <li>
        <a href="https://twitter.com/jonbloomer">
            < BsTwitter className="icon2"/>
        </a>
    </li>
    <li>
        <a href="https://github.com/freaksauce">
            < BsGithub className="icon2"/>
        </a>
    </li>
</ul>
      </div>
      <hr></hr>


    </div>
  );
}
