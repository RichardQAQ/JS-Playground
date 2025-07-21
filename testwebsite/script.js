// This file handles loading lessons and executing their scripts

document.addEventListener('DOMContentLoaded', function() {
    // Get the lesson content container
    const lessonContainer = document.getElementById('lesson-content');
    
    // Function to load a lesson by ID
    function loadLesson(lessonId) {
        // Find the lesson with the matching ID
        const lesson = window.appLessons.find(lesson => lesson.id === lessonId);
        
        if (!lesson) {
            lessonContainer.innerHTML = '<p>Lesson not found.</p>';
            return;
        }
        
        // Set the lesson content
        lessonContainer.innerHTML = lesson.content;
        
        // Execute the lesson's scripts if available
        if (lesson.scripts) {
            try {
                // Create a new function from the script string and execute it
                const scriptFunction = new Function(lesson.scripts);
                scriptFunction();
            } catch (error) {
                console.error('Error executing lesson scripts:', error);
            }
        }
        
        // Update the code editor if it exists
        const codeEditor = document.getElementById('code-editor');
        if (codeEditor && lesson.initialCode) {
            codeEditor.value = lesson.initialCode;
        }
    }
    
    // Load the default lesson or the one specified in the URL
    function initializeLessons() {
        // Get lesson ID from URL hash or default to the first lesson
        const lessonId = window.location.hash.slice(1) || window.appLessons[0].id;
        loadLesson(lessonId);
        
        // Highlight the active lesson in the navigation
        const navLinks = document.querySelectorAll('.lesson-nav a');
        navLinks.forEach(link => {
            if (link.getAttribute('data-lesson-id') === lessonId) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize lesson navigation
    function setupNavigation() {
        const nav = document.querySelector('.lesson-nav');
        if (!nav) return;
        
        nav.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                const lessonId = event.target.getAttribute('data-lesson-id');
                
                // Update URL hash
                window.location.hash = lessonId;
                
                // Load the lesson
                loadLesson(lessonId);
                
                // Update active class
                document.querySelectorAll('.lesson-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                event.target.classList.add('active');
            }
        });
    }
    
    // Initialize the page
    initializeLessons();
    setupNavigation();
    
    // Handle hash changes (browser navigation)
    window.addEventListener('hashchange', initializeLessons);
});
