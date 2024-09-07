// Get the content divs
const educationContent = document.getElementById("education-content");
const skillsContent = document.getElementById("skills-content");
const experienceContent = document.getElementById("experience-content");
const toggleEducationButton = document.getElementById("toggle-education");
const toggleSkillsButton = document.getElementById("toggle-skills");
const toggleExperienceButton = document.getElementById("toggle-experience");

// Toggle visibility functions
function toggleVisibility(section: HTMLElement | null) {
    if (section && section.classList.contains("hidden")) {
      section.classList.remove("hidden");
    } else if (section) {
      section.classList.add("hidden");
    }
  }
  
  // Add event listeners to buttons
  if (toggleEducationButton) {
    toggleEducationButton.addEventListener("click", () => toggleVisibility(educationContent));
  }
  if (toggleSkillsButton) {
    toggleSkillsButton.addEventListener("click", () => toggleVisibility(skillsContent));
  }
  if (toggleExperienceButton) {
    toggleExperienceButton.addEventListener("click", () => toggleVisibility(experienceContent));
    
  }
  // Get the content div and button for the Projects section
const projectsContent = document.getElementById("projects-content") as HTMLElement | null;
const toggleProjectsButton = document.getElementById("toggle-projects") as HTMLButtonElement | null;

