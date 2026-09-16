const fs = require('fs');

function checkTags(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const tags = content.match(/<[^>]*>/g) || [];
    const stack = [];
    
    tags.forEach(tag => {
        if (tag.startsWith('<!--')) return; // ignore comments
        if (tag.endsWith('/>')) return; // self-closing
        
        const tagNameMatch = tag.match(/<(\/?[a-zA-Z0-9.]+)/);
        if (!tagNameMatch) return;
        
        const tagName = tagNameMatch[1];
        
        if (tagName.startsWith('/')) {
            const openName = tagName.substring(1);
            if (stack.length === 0) {
                console.log(`Error: Unexpected closing tag </${openName}>`);
            } else {
                const last = stack.pop();
                if (last !== openName) {
                    console.log(`Error: Tag mismatch. Expected </${last}> but found </${openName}>`);
                }
            }
        } else {
            stack.push(tagName);
        }
    });
    
    if (stack.length > 0) {
        console.log(`Error: Unclosed tags: ${stack.join(', ')}`);
    } else {
        console.log(`Check finished for ${filePath}. No simple tag imbalances found.`);
    }
}

const file = process.argv[2];
if (file) checkTags(file);
else console.log('Please provide a file path.');
