// Get the current year
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get the last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;