function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

function populateDateDropdown() {
    var dateDropdown = document.getElementById('dateDropdown');
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var lastDayOfMonth = getLastDayOfMonth(currentYear, currentMonth);
    dateDropdown.innerHTML = '<option value="">Select a date</option>';
    for (var date = 1; date <= lastDayOfMonth; date++) {
        var option = document.createElement('option');
        option.value = date;
        if (date === currentDay) {
            option.textContent = 'Today';
        } else {
            var monthName = getMonthName(currentMonth);
            option.textContent = date + ' ' + monthName;
        }
        dateDropdown.appendChild(option);
    }
}

populateDateDropdown();