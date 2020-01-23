const element = (
    <div className="wrapper-1">
        <div className="wrapper-2">
            <h2>Shruti Khandekar</h2>
            <img id="img" src='./images/self.png' alt=""/>
        
            <h2>About Me</h2>
            <p id="aboutMe">
                Hello, my name is Shruti Khandekar. I have worked in the area of Quality Assurance 
                Automation for 10+ years. I have always been fascinated with the world of web development. 
                Hence to take actual steps toward becoming a web developer I joined the Advanced web development
                course at SDSU. <br/><br/>
                I graduated as a Bachelors of Engineering from India and moved to the US in 2002. I worked 
                at companies like John Deere, Sun Microsystems and Oracle before taking a sabbatical to look 
                after my kids. Now with my kids being at an independent age, I decided to pursue my dream and 
                go back into my career.  
            </p>
            <a className="btn-link" href="https://github.com/shrutikhandekar1">view my github repo</a>
        </div>
    </div>
);
                

ReactDOM.render(element,document.getElementById('contents'));