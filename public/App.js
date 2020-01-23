"use strict";

var element = React.createElement("div", {
  className: "wrapper-1"
}, React.createElement("div", {
  className: "wrapper-2"
}, React.createElement("h2", null, "Shruti Khandekar"), React.createElement("img", {
  id: "img",
  src: "./images/self.png",
  alt: ""
}), React.createElement("h2", null, "About Me"), React.createElement("p", {
  id: "aboutMe"
}, "Hello, my name is Shruti Khandekar. I have worked in the area of Quality Assurance Automation for 10+ years. I have always been fascinated with the world of web development. Hence to take actual steps toward becoming a web developer I joined the Advanced web development course at SDSU. ", React.createElement("br", null), React.createElement("br", null), "I graduated as a Bachelors of Engineering from India and moved to the US in 2002. I worked at companies like John Deere, Sun Microsystems and Oracle before taking a sabbatical to look after my kids. Now with my kids being at an independent age, I decided to pursue my dream and go back into my career."), React.createElement("a", {
  className: "btn-link",
  href: "https://github.com/shrutikhandekar1"
}, "view my github repo")));
ReactDOM.render(element, document.getElementById('contents'));