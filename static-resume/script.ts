type Education = {
  diploma: string;
  institution: string;
  year: string;
};

type Skill = string;

type WorkExperience = {
  position: string;
  company: string;
  years: string;
  description: string;
};

const educationData: Education[] = [
  {
    diploma: "Front-end Developer",
    institution: "Techforcepakistan",
    year: "2024",
  },
  {
    diploma: "Bsc,MA",
    institution: "Shah abdul latif university",
    year: "",
  },
];

const skillsData: Skill[] = ["HTML", "CSS", "JavaScript", "TypeScript"];
const workExperienceData: WorkExperience[] = [
  {
    position: "",
    company: "",
    years: "",
    description: "I have experience in front-end development, where I focus on building and designing the visible parts of websites and web applications. I work with HTML, CSS, and JavaScript to create clean and responsive layouts that work well on different devices.",
  },
];

function populateEducation() {
  const educationSection = document
    .getElementById("education-content")
    ?.querySelector(".card-grid");
  if (educationSection) {
    educationData.forEach((edu) => {
      const educationCard = document.createElement("div");
      educationCard.classList.add("card");
      educationCard.classList.add("education-card");

      educationCard.innerHTML = `
                  <h3 class="card-title">${edu.diploma}</h3>
                  <p class="card-subtitle">${edu.institution}</p>
                  <p class="card-details">${edu.year}</p>
              `;

      educationSection.appendChild(educationCard);
    });
  }
}

function populateSkills() {
  const skillsSection = document
    .getElementById("skills-content")
    ?.querySelector(".skill-list");
  if (skillsSection) {
    skillsData.forEach((skill) => {
      const skillItem = document.createElement("li");
      skillItem.textContent = skill;
      skillsSection.appendChild(skillItem);
    });
  }
}

function populateWorkExperience() {
  const workExperienceSection = document
    .getElementById("work-experience-content")
    ?.querySelector(".card-grid");
  if (workExperienceSection) {
    workExperienceData.forEach((work) => {
      const workCard = document.createElement("div");
      workCard.classList.add("card");
      workCard.classList.add("work-experience-card");

      workCard.innerHTML = `
                  <h3 class="card-title">${work.position}</h3>
                  <p class="card-subtitle">${work.company}</p>
                  <p class="card-details">${work.years}</p>
                  <p class="card-details">${work.description}</p>
              `;

      workExperienceSection.appendChild(workCard);
    });
  }
}

function activateTab(tabId: string) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => section.classList.remove("active"));

  const activeSection = document.getElementById(tabId);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}

document
  .getElementById("education-tab")
  ?.addEventListener("click", () => activateTab("education-content"));
document
  .getElementById("skills-tab")
  ?.addEventListener("click", () => activateTab("skills-content"));
document
  .getElementById("experience-tab")
  ?.addEventListener("click", () => activateTab("work-experience-content"));

populateEducation();
populateSkills();
populateWorkExperience();
