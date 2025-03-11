const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temples
        // Existing temple objects...
        {
          templeName: "Salt Lake Utah",
          location: "Salt Lake City, Utah, United States",
          dedicated: "1893, May, 21",
          area: 100000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
          altText: "Salt Lake Utah Temple"
        },
        {
          templeName: "Oslo Norway",
          location: "Oslo, Norway",
          dedicated: "2000, September, 15",
          area: 30000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oslo-norway-temple/oslo-norway-temple-36303-main.jpg",
          altText: "Oslo Norway Temple"
        },
        {
          templeName: "Hong Kong China",
          location: "Hong Kong, China",
          dedicated: "2005, August, 27",
          area: 25000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg",
          altText: "Hong Kong China Temple"
        }
      ];
      //...
      const gallery = document.getElementById('gallery');
      const filterButtons = document.querySelectorAll('.filter');
      
      function displayTemples(filteredTemples) {
          gallery.innerHTML = ""; // Clear previous entries
          filteredTemples.forEach(temple => {
              const templeCard = document.createElement('div');
              templeCard.classList.add('temple-card');
              
              templeCard.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              `;
          
              gallery.appendChild(templeCard);
          });
      }
      
      displayTemples(temples);
      
      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              let filter = button.getAttribute('data-filter');
              let filteredTemples = [];
      
              switch (filter) {
                  case "old":
                      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(", ")[0]) < 1900);
                      break;
                  case "new":
                      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(", ")[0]) > 2000);
                      break;
                  case "large":
                      filteredTemples = temples.filter(t => t.area > 90000);
                      break;
                  case "small":
                      filteredTemples = temples.filter(t => t.area < 10000);
                      break;
                  default:
                      filteredTemples = temples;
              }
      
              displayTemples(filteredTemples);
          });
      });
      
      // Footer Updates
      const currentYear = new Date().getFullYear();
      document.getElementById('currentyear').textContent = currentYear;
      document.getElementById('lastModified').textContent = document.lastModified;
      