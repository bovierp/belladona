const fs = require('fs');
const path = require('path');

// List of all HTML files to update
const htmlFiles = [
    'index.html',
    'servicios.html',
    'servicios2.html',
    'reservas.html',
    'sobre-mi.html',
    'contacto.html'
];

// The new menu item to insert
const newMenuItem = `
                <li><a href="testimonios.html"><i class="fas fa-star"></i> <span class="lang-es">Testimonios</span><span class="lang-ca">Testimonis</span><span class="lang-en">Testimonials</span></a></li>`;

// Process each HTML file
htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    try {
        // Read the file
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find the position to insert the new menu item (after Sobre mí and before Contacto)
        const insertAfter = '<a href="sobre-mi.html"><i class="fas fa-user"></i> <span class="lang-es">Sobre mí</span><span class="lang-ca">Sobre mi</span><span class="lang-en">About me</span></a>';
        const insertBefore = '<a href="contacto.html"><i class="fas fa-envelope"></i> <span class="lang-es">Contacto</span>';
        
        // Check if the insertion point exists and the menu item isn't already there
        if (content.includes(insertAfter) && content.includes(insertBefore) && !content.includes('href="testimonios.html"')) {
            // Insert the new menu item
            const updatedContent = content.replace(
                insertAfter, 
                insertAfter + '\n                </li>\n                <li>' + newMenuItem
            );
            
            // Write the updated content back to the file
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`Updated navigation in ${file}`);
        } else if (content.includes('href="testimonios.html"')) {
            console.log(`Testimonios link already exists in ${file}`);
        } else {
            console.log(`Could not find the correct insertion point in ${file}`);
        }
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
});
