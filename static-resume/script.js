"use strict";
var _a, _b, _c;
const educationData = [
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
const skillsData = ["HTML", "CSS", "JavaScript", "TypeScript"];
const workExperienceData = [
    {
        position: "",
        company: "",
        years: "",
        description: "I have experience in front-end development, where I focus on building and designing the visible parts of websites and web applications. I work with HTML, CSS, and JavaScript to create clean and responsive layouts that work well on different devices.",
    },
];
function populateEducation() {
    var _a;
    const educationSection = (_a = document
        .getElementById("education-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card-grid");
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
    var _a;
    const skillsSection = (_a = document
        .getElementById("skills-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".skill-list");
    if (skillsSection) {
        skillsData.forEach((skill) => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsSection.appendChild(skillItem);
        });
    }
}
function populateWorkExperience() {
    var _a;
    const workExperienceSection = (_a = document
        .getElementById("work-experience-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card-grid");
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
function activateTab(tabId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => section.classList.remove("active"));
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add("active");
    }
}
(_a = document
    .getElementById("education-tab")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => activateTab("education-content"));
(_b = document
    .getElementById("skills-tab")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => activateTab("skills-content"));
(_c = document
    .getElementById("experience-tab")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => activateTab("work-experience-content"));
populateEducation();
populateSkills();
populateWorkExperience();
