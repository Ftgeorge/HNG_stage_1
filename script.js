document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const utcTime = new Date().toUTCString();
        document.getElementById('utc-time').textContent = utcTime;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[new Date().getUTCDay()];
        document.getElementById('current-day').textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 60000); // Update every minute
});
