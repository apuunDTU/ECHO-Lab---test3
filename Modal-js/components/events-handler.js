// Function to create an event item
function createEventItem(event) {
    const li = document.createElement('li');
    li.className = 'event-item';
    
    const dateSpan = document.createElement('span');
    dateSpan.className = 'event-date';
    dateSpan.textContent = event.date;
    
    const titleLink = document.createElement('a');
    titleLink.className = 'event-title';
    titleLink.href = '#';
    titleLink.textContent = event.title;
    titleLink.onclick = (e) => {
        e.preventDefault();
        const modal = document.getElementById('eventModal');
        const image = document.getElementById('eventModalImage');
        if (modal && image) {
            image.src = event.image;
            modal.style.display = 'flex';
        }
    };
    
    li.appendChild(dateSpan);
    li.appendChild(titleLink);
    
    return li;
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

export function closeEventModal() {
    const modal = document.getElementById('eventModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

export { loadEvents, createEventItem, openEventModal }; 
