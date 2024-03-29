// Function referenced from https://www.geeksforgeeks.org/how-to-include-html-code-snippets-in-html/
const includeHTMLSnippet = () => {
    // Traverse all HTML elements
    id = document.getElementsByTagName("*");
    for (let i = 0; i < id.length; i++) {
        element = id[i];
        // Search for elements with specific attributes
        file = element.getAttribute("GFG-include-html-snippet");
        if (file) {
            // Create HTTP request with the attributre value as the file name
            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        element.innerHTML = "Snippet not found!";
                    }
                    // Delete the attribute and call this function again
                    element.removeAttribute("GFG-include-html-snippet");
                    includeHTMLSnippet();
                }
            }
            xmlRequest.open("GET", file, true);
            xmlRequest.send();
            return; // Exit function
        }
    }
}

includeHTMLSnippet(); // Navbar