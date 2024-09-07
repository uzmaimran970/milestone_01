// Get the buttons and sections
var educationSection = document.getElementById("education");
var skillsSection = document.getElementById("skills");
var experienceSection = document.getElementById("experience");
var toggleEducationButton = document.getElementById("toggle-education");
var toggleSkillsButton = document.getElementById("toggle-skills");
var toggleExperienceButton = document.getElementById("toggle-experience");
// Toggle visibility functions
function toggleVisibility(section) {
    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
    }
    else {
        section.classList.add("hidden");
    }
}
// Add event listeners to buttons
toggleEducationButton.addEventListener("click", function () { return toggleVisibility(educationSection); });
toggleSkillsButton.addEventListener("click", function () { return toggleVisibility(skillsSection); });
toggleExperienceButton.addEventListener("click", function () { return toggleVisibility(experienceSection); });
