function highlightAllParagraphs() {
            
    var highlightedParagraphs = document.querySelectorAll('.highlight');

    
    highlightedParagraphs.forEach(function(paragraph) {
        paragraph.style.color = 'red';
    });
}