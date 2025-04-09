// Function to create an event item
function createEventItem(event) {
    const item = document.createElement('li');
    item.className = 'event-item';
    item.onclick = () => openEventModal(event.image);

    const date = document.createElement('div');
    date.className = 'event-date';
    date.textContent = event.date;

    const title = document.createElement('div');
    title.className = 'event-title';
    title.textContent = event.title;

    item.appendChild(date);
    item.appendChild(title);

    return item;
}

// Function to load upcoming events
function loadEvents(eventsData) {
    const eventsList = document.querySelector('.event-list');
    if (!eventsList) {
        console.error('Event list container not found');
        return;
    }

    eventsList.innerHTML = '';
    eventsData.forEach(event => {
        const eventItem = createEventItem(event);
        eventsList.appendChild(eventItem);
    });
}

// Function to open event modal
function openEventModal(imagePath) {
    const modal = document.getElementById('eventModal');
    const modalImg = document.getElementById('eventModalImage');
    if (modal && modalImg) {
        modalImg.src = imagePath;
        modal.style.display = 'block';
    }
}

export { loadEvents, createEventItem, openEventModal }; 