document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height: 900,
      events: [
        { 
            title: 'Project 100=50 #2', 
            start: '2024-12-01', 
            color: '#007BFF' // Blue
        },
        { 
            title: 'Meals on Wheels #10', 
            start: '2024-12-05',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Food From The Heart Food Donation Drive', 
            start: '2024-12-10',
            color: '#28A745' // Green
        },
        { 
            title: 'Food Rescue #9', 
            start: '2024-12-14',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Food Rescue #10', 
            start: '2024-12-21',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Food Rescue #11', 
            start: '2024-12-28',
            color: '#FFC107' // Yellow
        }
      ]
    });
    calendar.render();
  });
  