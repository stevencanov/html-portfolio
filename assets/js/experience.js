AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/299576047_373247738329809_15818920686788337_n.png?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ru-ko-wrqxoAX_HUwxb&_nc_ht=scontent-lga3-1.xx&oh=00_AfDmedGee6AWPZJHG5rH6EvYTJxN0zfWG4WRwerphdVgvw&oe=65B7DE8A",
    place: "Cloudsoft",
    time: "(May, 2021 - jun 2022)",
    desp: "<li> Cloudsoft, I honed my skills as a web developer, specializing in crafting responsive and user-friendly websites. As part of a dynamic development team, I had the opportunity to lead and contribute to a wide array of projects that utilized a diverse tech stack.</li> <li>My role involved extensive work with React, where I built interactive UI components for single-page applications, enhancing user experience and performance. I applied my HTML and CSS expertise to ensure semantic, accessible, and SEO-friendly markup across all projects.</li> <li> Working with Laravel, I developed robust backend solutions that powered our web applications, integrating with APIs and handling data securely and efficiently. I also managed several WordPress sites, creating custom themes and plugins to meet the unique needs of our clients.</li> <li>One of my significant achievements at Cloudsoft was [Learn about the human interfaces]. My experience at Cloudsoft has not only sharpened my technical abilities but also my skills in problem-solving, project management, and teamwork.</li>",
  },
  {
    title: "Full-Stack Developer",
    cardImage: "https://www.risaraldacomforthealth.com/wp-content/uploads/2018/10/Comfamiliar.jpg",
    place: "Comfamiliar RISARALDA",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Developed front-end web interfaces using modern JavaScript frameworks like React and Vue.js, ensuring cross-browser compatibility and responsive design.</li>  <li>Implemented back-end services with Node.js and Express, focusing on creating RESTful APIs and integrating third-party services.</li><li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li><li>Managed databases using both SQL and NoSQL technologies, including MySQL and MongoDB, optimizing queries and designing schemas for performance and scalability.</li><li>Collaborated with the design team to transform UI/UX wireframes into functional user interfaces, prioritizing user experience and accessibility.</li><li>Employed version control systems, notably Git, to maintain a well-documented and organized codebase for collaborative projects.</li><li>Leveraged Laravel to build robust server-side applications, incorporating authentication, authorization, and complex business logic.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Univercity Summer Of Code 2020",
    cardImage: "https://www.ucp.edu.co/portal//wp-content/uploads/2023/06/logo-vigi-black.png",
    description:
      "Responsible for handling the projects University Website .",
  },

  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
  