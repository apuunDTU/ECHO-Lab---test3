import { openModal } from './modal.js';

// Function to create a lab note card
export function createLabNoteCard(note) {
    const cardSection = document.createElement('section');
    cardSection.className = 'card';
    cardSection.setAttribute('data-id', note.id);

    const card = document.createElement('div');
    card.className = 'research-card';
    cardSection.appendChild(card);

    // Create card header with image
    const header = document.createElement('div');
    header.className = 'card-header';
    const img = document.createElement('img');
    img.src = note.image;
    img.alt = note.title;
    header.appendChild(img);

    // Create date label
    const dateLabel = document.createElement('div');
    dateLabel.className = 'card-date';
    dateLabel.textContent = note.date;
    header.appendChild(dateLabel);

    // Create card content
    const content = document.createElement('div');
    content.className = 'card-content';

    // Left column
    const leftColumn = document.createElement('div');
    leftColumn.className = 'card-left';

    const title = document.createElement('h2');
    title.className = 'project-title';
    if (note.title.split(' ').length > 4) {
        title.classList.add('long-title');
    }
    title.textContent = note.title;

    const preview = document.createElement('p');
    preview.className = 'card-preview';
    preview.textContent = note.preview;

    leftColumn.appendChild(title);
    leftColumn.appendChild(preview);

    // Right column
    const rightColumn = document.createElement('div');
    rightColumn.className = 'card-right';

    // Research Topics
    if (note.researchTopics && note.researchTopics.length > 0) {
        const topicsSection = createSection(
            note.sectionTitles?.topics || 'Research Topics',
            note.researchTopics.join(', ')
        );
        rightColumn.appendChild(topicsSection);
    }

    // Objectives
    if (note.objectives) {
        const objectivesSection = createSection('Objectives', note.objectives);
        rightColumn.appendChild(objectivesSection);
    }

    // Methodology
    if (note.methodology) {
        const methodologySection = createSection('Methodology', note.methodology);
        rightColumn.appendChild(methodologySection);
    }

    // Lessons
    if (note.lessons && note.lessons.length > 0) {
        const lessonsSection = createSection(
            note.sectionTitles?.lessons || 'Key Learnings',
            note.lessons,
            true
        );
        rightColumn.appendChild(lessonsSection);
    }

    // Collaborators
    if (note.collaborators && note.collaborators.length > 0) {
        const collaboratorsSection = createSection(
            note.sectionTitles?.collaborators || 'Team Members',
            note.collaborators,
            true
        );
        rightColumn.appendChild(collaboratorsSection);
    }

    content.appendChild(leftColumn);
    content.appendChild(rightColumn);

    card.appendChild(header);
    card.appendChild(content);

    // Add links section if there are links
    if (note.projectLink || note.publicationLink) {
        const links = document.createElement('div');
        links.className = 'card-links';

        if (note.projectLink) {
            const projectLink = document.createElement('a');
            projectLink.href = note.projectLink;
            projectLink.textContent = note.projectLinkText || 'View Project';
            projectLink.target = '_blank';
            links.appendChild(projectLink);
        }

        if (note.publicationLink) {
            const publicationLink = document.createElement('a');
            publicationLink.href = note.publicationLink;
            publicationLink.textContent = note.publicationLinkText || 'Read Publication';
            publicationLink.target = '_blank';
            links.appendChild(publicationLink);
        }

        cardSection.appendChild(links);
    }

    cardSection.addEventListener('click', () => {
        openModal(cardSection);
    });

    return cardSection;
}

// Helper function to create a section with title and content
function createSection(title, content, isList = false) {
    const section = document.createElement('div');
    section.className = 'section';

    const titleElement = document.createElement('h3');
    titleElement.className = 'topic-title';
    titleElement.textContent = title;

    const contentElement = document.createElement('div');
    contentElement.className = 'topic-content';

    if (isList && Array.isArray(content)) {
        const list = document.createElement('ul');
        list.className = 'lessons-list';
        content.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        contentElement.appendChild(list);
    } else {
        contentElement.textContent = content;
    }

    section.appendChild(titleElement);
    section.appendChild(contentElement);

    return section;
} 
