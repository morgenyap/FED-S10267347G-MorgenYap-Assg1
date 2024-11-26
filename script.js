document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height: 900,
      events: [
        { 
            title: 'Food Rescue #2', 
            start: '2024-04-28',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Start of GM & GL Recruitment, Hip Hippo Hurry Recruitment', 
            start: '2024-04-29',
            color: '#FF0000' // Red
        },
        { 
            title: 'Project 100=50 #1 (Boon Lay)', 
            start: '2024-05-12', 
            color: '#007BFF' // Blue
        },
        { 
            title: 'Hip Hippo Hurray (FoodAID Welcome Party 2024)', 
            start: '2024-05-18', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Project 100=50 #2 (Tampines)', 
            start: '2024-05-25', 
            color: '#007BFF' // Blue
        },
        { 
            title: 'Serving Up Smiles #3', 
            start: '2024-05-19',
            color: '#52A447' // Matcha Green
        },
        { 
            title: 'Food Rescue #3', 
            start: '2024-05-26',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Sub-Committee Recruitment', 
            start: '2024-06-25', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Sub-Committee Recruitment', 
            start: '2024-06-26', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Project 100=50 #3 (Jurong Central)', 
            start: '2024-06-09', 
            color: '#007BFF' // Blue
        },
        { 
            title: 'Teaching Little Buds #1', 
            start: '2024-06-11',
            color: '#FFA500'// Red Orange
        },
        { 
            title: 'Teaching Little Buds #2', 
            start: '2024-06-11',
            color: '#FFA500'// Red Orange
        },
        { 
            title: 'Meals on Wheels #2', 
            start: '2024-06-13',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Food From The Heart Food Donation Drive', 
            start: '2024-07-08',
            color: '#28A745' // Green
        },
        { 
            title: 'Food From The Heart Food Donation Drive', 
            start: '2024-07-09',
            color: '#28A745' // Green
        },        
        { 
            title: 'Food From The Heart Food Donation Drive', 
            start: '2024-07-10',
            color: '#28A745' // Green
        },
        { 
            title: 'Food From The Heart Food Donation Drive', 
            start: '2024-07-11',
            color: '#28A745' // Green
        },
        { 
            title: 'Meals on Wheels #3', 
            start: '2024-07-17',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Project 100=50 #4 (Jurong Central)', 
            start: '2024-07-14', 
            color: '#007BFF' // Blue
        },
        { 
            title: 'Project 100=50 #5 (Tampines)', 
            start: '2024-07-27', 
            color: '#007BFF' // Blue
        },
        { 
            title: 'Food Rescue #6', 
            start: '2024-07-28',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Meals on Wheels #4', 
            start: '2024-09-12',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Hao Ren Hao Shi Food Distribution #1', 
            start: '2024-09-07',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Food From the Heart Sorting & Packing', 
            start: '2024-10-02',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Meals on Wheels #5', 
            start: '2024-09-25',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Project 100=50 #6 (Tampines)', 
            start: '2024-09-21', 
            color: '#007BFF' // Blue
        },
        { 
            title: 'Food Rescue #7', 
            start: '2024-09-29',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Hippo Transylvania Survival Camp', 
            start: '2024-10-03',
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Meals on Wheels #6', 
            start: '2024-10-10',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Food Rescue #8', 
            start: '2024-10-27',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-11', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-12', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-13', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-14', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-15', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-18', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-19', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Main-Committee Recruitment', 
            start: '2024-11-20', 
            color: '#4B0076' // Indigo
        },
        { 
            title: 'Meals on Wheels #7', 
            start: '2024-11-06',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Turning Flaws into Fresh Finds', 
            start: '2024-11-16',
            color: '#FFC5D3'// Pastal Pink
        },
        { 
            title: 'Merry Baking Xmas', 
            start: '2024-11-21',
            color: '#FF0000'// Red
        },
        { 
            title: 'Food Rescue #9', 
            start: '2024-11-24',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Meals on Wheels #8', 
            start: '2024-12-18',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Meals on Wheels #9', 
            start: '2024-12-19',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Meals on Wheels #10', 
            start: '2024-12-25',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Meals on Wheels #11', 
            start: '2024-12-26',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Food Rescue #10', 
            start: '2024-12-29',
            color: '#FFC107' // Yellow
        },
        { 
            title: 'Meals on Wheels #12', 
            start: '2025-01-15',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Meals on Wheels #13', 
            start: '2025-01-16',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Meals on Wheels #14', 
            start: '2025-01-22',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Meals on Wheels #15', 
            start: '2025-01-23',
            color: '#9966CC'// Purple
        },
        { 
            title: 'Food Rescue #11', 
            start: '2025-01-26',
            color: '#FFC107' // Yellow
        },
      ]
    });
    calendar.render();
  });
  