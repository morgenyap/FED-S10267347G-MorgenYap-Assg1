document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  let currentIndex = 0;

  // Function to show a specific slide
  const showSlide = (index) => {
    // Ensure index wraps around
    currentIndex = (index + items.length) % items.length;

    // Update active class on items
    items.forEach((item, i) => {
      item.classList.toggle("active", i === currentIndex);
    });

    // Update active class on dots
    if (dots.length) {
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    // Slide carousel (if necessary for styles)
    const translateX = -currentIndex * 100; // Adjust slide based on index
    carousel.style.transform = `translateX(${translateX}%)`;
  };

  // Auto slide functionality
  const autoSlide = () => {
    setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
  };

  // Navigation Controls
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");

  if (prevButton) {
    prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
  }

  // Dots Controls
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Initialize first slide
  showSlide(0);

  // Start auto slide
  autoSlide();
});


document.addEventListener("DOMContentLoaded", function () {
  // Get the calendar container
  var calendarEl = document.getElementById("calendar");

  // Initialize FullCalendar
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Default view is Month View
    height: "auto", // Automatically adjust height
    events: [
      // Food Rescue Events
      { title: "Food Rescue #2", start: "2024-04-28", color: "#FFC107", url: "assets/posters/food-rescue2.png"},
      { title: "Food Rescue #3", start: "2024-05-26", color: "#FFC107", url: "assets/posters/food-rescue3.png"},
      { title: "Food Rescue #4", start: "2024-06-30", color: "#FFC107", url: "assets/posters/food-rescue4.png"},
      { title: "Food Rescue #5", start: "2024-07-28", color: "#FFC107", url: "assets/posters/food-rescue5.png"},
      { title: "Food Rescue #6", start: "2024-07-28", color: "#FFC107", url: "assets/posters/food-rescue6.png"},
      { title: "Food Rescue #7", start: "2024-09-29", color: "#FFC107", url: "assets/posters/food-rescue7.png"},
      { title: "Food Rescue #8", start: "2024-12-29", color: "#FFC107"},

      // Recruitment Events
      { title: "Start of GM & GL Recruitment", start: "2024-04-29", color: "#FF0000", url: "assets/posters/gmgl.png"},
      { title: "Sub-Committee Recruitment", start: "2024-06-25", color: "#4B0076", url: "assets/posters/sub-comm.png"},
      { title: "Main-Committee Recruitment", start: "2024-11-11", color: "#4B0076", url: "assets/posters/maincomm-recruitment.png"},
      { title: "Main-Committee Recruitment", start: "2024-11-12", color: "#4B0076", url: "assets/posters/maincomm-recruitment.png"},

      // Teaching Little Buds
      { title: "Teaching Little Buds #1", start: "2024-06-11", color: "#FF0000", url: "assets/posters/tlb.png"},
      { title: "Teaching Little Buds #2", start: "2024-06-12", color: "#FF0000", url: "assets/posters/tlb.png"},

      // Serving Up Smiles
      { title: "Serving Up Smiles #3", start: "2024-05-19", color: "#28A745", url: "assets/posters/sus3.png"},

      // Project 100=50 Events
      { title: "Project 100=50 #1 (Boon Lay)", start: "2024-05-12", color: "#007BFF", url: "assets/posters/proj100501.png"},
      { title: "Project 100=50 #2 (Tampines)", start: "2024-05-25", color: "#007BFF", url: "assets/posters/proj100502.png"},
      { title: "Project 100=50 #3 (Jurong Central)", start: "2024-06-09", color: "#007BFF", url: "assets/posters/proj100503.png"},
      { title: "Project 100=50 #4 (Jurong Central)", start: "2024-07-14", color: "#007BFF", url: "assets/posters/proj100504.png"},
      { title: "Project 100=50 #5 (Tampines)", start: "2024-07-27", color: "#007BFF", url: "assets/posters/proj100505.png"},
      { title: "Project 100=50 #6 (Tampines)", start: "2024-09-21", color: "#007BFF", url: "assets/posters/proj100506.png"},

      // Meals on Wheels Events
      { title: "Meals on Wheels #2", start: "2024-06-13", color: "#9966CC", url: "assets/posters/mow-2.png"},
      { title: "Meals on Wheels #3", start: "2024-06-13", color: "#9966CC", url: "assets/posters/mow-3.png"},
      { title: "Meals on Wheels #5", start: "2024-09-11", color: "#9966CC", url: "assets/posters/mow-5.png"},
      { title: "Meals on Wheels #5", start: "2024-10-10", color: "#9966CC", url: "assets/posters/mow-6.png"},
      { title: "Meals on Wheels #7", start: "2024-11-06", color: "#9966CC", url: "assets/posters/mow-7.png"},

      // Food Donation Drives         
      { title: "FFTH Food Donation Drive", start: "2024-07-08", color: "#28A745", url: "assets/posters/food-donation.png"},
      { title: "FFTH Food Donation Drive", start: "2024-07-09", color: "#28A745", url: "assets/posters/food-donation.png"},
      { title: "FFTH Food Donation Drive", start: "2024-07-10", color: "#28A745", url: "assets/posters/food-donation.png"},
      { title: "FFTH Food Donation Drive", start: "2024-07-11", color: "#28A745", url: "assets/posters/food-donation.png"},
      { title: "FFTH Sorting & Packing", start: "2024-10-02", color: "#9966CC", url: "assets/posters/ffth-sorting-packing.jpg"},

      // Additional Events
      { title: "Hip Hippo Hurray (FoodAID Welcome Party)", start: "2024-05-18", color: "#4B0076", url:"assets/posters/hip-hippo-hurray.png"},
      { title: "Hippo Transylvania", start: "2024-10-03", colors: "#4B0076", url:"assets/posters/hippo-transylvania.png" },
      { title: "HRHS Food Distribution #1", start: "2024-09-07", colors: "#4B0076", url:"assets/posters/hrhs-food-dist-1.png"},
      { title: "Turning Flaws into Fresh Finds", start: "2024-11-16", color: "#FFC5D3", url:"assets/posters/turning-flaws-into-fresh-finds1.png"},
      { title: "Merry Baking Xmas", start: "2024-11-21", color: "#FF0000", url:"assets/posters/merry-baking-xmas.jpg"},
      { title: "Main Committee Stepdown", start: "2025-01-03", color: "#FF0000"},
    ],

    
    eventContent: function (arg) {
      let eventTitle = arg.event.title;
      return {
        html: `<div class="fc-event-custom-content">${eventTitle}</div>`,
      };
    },
  });

 // Render the calendar
 calendar.render();

 // Adjust calendar cell size dynamically
 const adjustSquareCells = () => {
   const dayCells = document.querySelectorAll(".fc-daygrid-day-frame");
   const calendarTable = document.querySelector(".fc-scrollgrid-sync-table");

   if (calendarTable && dayCells.length > 0) {
     // Get the width of the first day cell (assuming equal widths)
     const cellWidth = calendarTable.offsetWidth / 7;

     // Apply square dimensions to each day cell
     dayCells.forEach((cell) => {
       cell.style.height = `${cellWidth}px`;
     });
   }
 };

 // Adjust squares on load and resize
 adjustSquareCells();
 window.addEventListener("resize", adjustSquareCells);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responsesList = document.getElementById("responsesList");

  // Load saved responses from localStorage
  function loadResponses() {
    const responses = JSON.parse(localStorage.getItem("responses")) || [];
    responsesList.innerHTML = ""; // Clear list before repopulating
    responses.forEach((response, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${response.firstname} ${response.lastname}</strong> (${response.email}):
        <p>${response.subject}</p>
        <button onclick="deleteResponse(${index})">Delete</button>
      `;
      responsesList.appendChild(listItem);
    });
  }

  // Save a new response to localStorage
  function saveResponse(response) {
    const responses = JSON.parse(localStorage.getItem("responses")) || [];
    responses.push(response);
    localStorage.setItem("responses", JSON.stringify(responses));
    loadResponses();
  }

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const firstname = document.getElementById("fname").value.trim();
    const lastname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();

    // Validate form fields
    if (!firstname || !lastname || !email || !subject) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a response object
    const response = { firstname, lastname, email, subject };

    // Save the response to localStorage
    saveResponse(response);

    // Clear the form
    form.reset();
  });

  // Delete a response
  window.deleteResponse = (index) => {
    const responses = JSON.parse(localStorage.getItem("responses")) || [];
    responses.splice(index, 1); // Remove the response at the given index
    localStorage.setItem("responses", JSON.stringify(responses));
    loadResponses();
  };

  // Load responses on page load
  loadResponses();
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
});
