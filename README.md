# Echo Lab Website

A modern research project showcase website for Echo Lab, featuring interactive lab notes cards and upcoming events.

## Project Structure

```
Echo Lab Website/
├── Assets/                  # Static assets (images, logos)
├── Events/                  # Events data (managed by admin)
│   └── events.json         # List of upcoming events
├── Projects/               # ⭐ YOUR CONTENT GOES HERE ⭐
│   ├── project-list.json   # List of all projects
│   └── *.js               # Individual project files
├── Modal-js/               # JavaScript modules (managed by admin)
│   ├── components/         # Reusable UI components
│   │   ├── card-creator.js
│   │   ├── events-handler.js
│   │   └── modal.js
│   └── loader.js          # Main application logic
├── Style-css/             # CSS styles (managed by admin)
│   └── styles.css
└── index.html             # Main HTML file (managed by admin)
```

## Features

- Interactive lab notes cards with detailed information
- Modal view for expanded card content
- Upcoming events section
- Responsive design
- Modern UI with custom fonts (Neo Sans and Andale Mono)

## Setup

1. Clone the repository
2. Open `index.html` in a web browser
3. No additional setup required as all dependencies are included

## Adding New Content

### ⭐ Adding a New Lab Note (Project) ⭐

This is the main way to add content to the website. Follow these simple steps:

1. **Create a New Project File**
   - Go to the `Projects` folder
   - Create a new file named after your project (use simple words with hyphens, like `my-new-project.js`)
   - Copy and paste this template into your new file:

   ```javascript
   const noteData = {
     id: 5, // Use the next number after the last project
     title: "YOUR PROJECT TITLE",
     date: "DD.MM.YYYY", // Use this date format
     image: "Assets/your-image.png", // Put your image in the Assets folder
     preview: "A brief description of your project...",
     researchTopics: [
       "Topic 1",
       "Topic 2",
       "Topic 3"
     ],
     objectives: "What you want to achieve with this project",
     methodology: "How you plan to do it",
     lessons: [
       "What you learned 1",
       "What you learned 2",
       "What you learned 3"
     ],
     collaborators: [
       "Person 1",
       "Person 2",
       "Person 3"
     ],
     projectLink: "https://your-project-link.com",
     projectLinkText: "View Project",
     publicationLink: "https://your-publication-link.com",
     publicationLinkText: "Read Publication",
     sectionTitles: {
       topics: "Research Areas",
       lessons: "Key Learnings",
       collaborators: "Team Members"
     }
   };
   ```

2. **Add Your Project Image**
   - Put your project image in the `Assets` folder
   - Make sure to use the correct image path in your project file

3. **Update the Project List**
   - Open `Projects/project-list.json`
   - Add your project name (without the .js) to the list
   - Example: `"projects": ["existing-project-1", "existing-project-2", "my-new-project"]`

### Adding a New Event (Admin Only)

To add a new event to the website:

1. Open `Events/events.json`
2. Add your event information following this simple format:
   ```json
   {
     "id": 3,
     "date": "DD.MM",
     "title": "Your Event Title",
     "image": "Assets/your-event-image.png"
   }
   ```
3. Make sure to add it inside the "events" array and separate it with a comma from the previous event

## Need Help?

If you're having trouble:
1. Check that your project file is in the `Projects` folder
2. Make sure you've added your project name to project-list.json
3. Verify that your images are in the Assets folder
4. Contact the website administrator for assistance

## Browser Support

The website works best on modern browsers like:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 