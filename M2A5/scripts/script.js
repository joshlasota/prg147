document.addEventListener("DOMContentLoaded", function() {
    const holidaysContainer = document.getElementById('holidays-container');
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    
    const holidays = [
      ["New Year's Day", "Martin Luther King Jr. Day"],
      ["Valentine's Day", "Presidents' Day"],
      ["Casimir Pulaski Day", "St. Patrick's Day"],
      ["Earth Day", "Easter"],
      ["Mother's Day", "Memorial Day"],
      ["Father's Day", "Juneteenth"],
      ["Independence Day", "Pioneer Day"],
      ["Oyster Day", "Lighthouse Day"],
      ["Labor Day", "Constitution Day"],
      ["Columbus", "Halloween"],
      ["Veterans Day", "Thanksgiving"],
      ["Christmas Day", "New Year's Eve"]
    ];
  
    for (let i = 0; i < months.length; i++) {
      const monthContainer = document.createElement('div');
      monthContainer.classList.add('month');
      
      const monthHeader = document.createElement('h2');
      monthHeader.textContent = months[i];
      monthContainer.appendChild(monthHeader);
  
      const holidaysList = document.createElement('ul');
      for (let j = 0; j < holidays[i].length; j++) {
        const holidayItem = document.createElement('li');
        holidayItem.textContent = holidays[i][j];
        holidaysList.appendChild(holidayItem);
      }
      monthContainer.appendChild(holidaysList);
  
      holidaysContainer.appendChild(monthContainer);
    }
  });
   