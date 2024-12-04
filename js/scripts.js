document.addEventListener("DOMContentLoaded", function () {
    // Use the correct class name as defined in your HTML (".event")
    const timelineEvents = document.querySelectorAll(".event");

    timelineEvents.forEach((event) => {
        event.addEventListener("click", () => {
            // Highlight the clicked event
            timelineEvents.forEach((e) => e.classList.remove("active"));
            event.classList.add("active");

            // Display additional details (optional)
            alert(event.querySelector("h3").textContent); // Alert will show the title of the event
        });
    });
});
