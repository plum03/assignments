var blogContainer = document.getElementById("blog-container");

// Constructor Template to create new blog post (each contained w/in own wrapper)
function BlogTemplate(title, author, content) {
    // Construct HTML elements
    var wrapper = document.createElement("div"); 
    var h2 = document.createElement("h2");
    var h4 = document.createElement("h4");
    var p = document.createElement("p");

    // Set HTML elements to the value of the params
    h2.innerHTML = title;
    h4.innerHTML = author;
    p.innerHTML = content;

    // Append to post wrapper
    wrapper.appendChild(h2);
    wrapper.appendChild(h4);
    wrapper.appendChild(p);

    return wrapper;
}

// Create Template that creates new blog-post object and appends to document
function addBlogPost(title, author, content) {
    var blogPost = new BlogTemplate(title, author,content);
    blogContainer.appendChild(blogPost);
}

// Call function to create new post and display on page
addBlogPost("My Wednesday", "Erica", "I'm loving this class today!");

// Or better yet, create a form to take inputs and a function to display onclick. YAY!!
function handleSubmit(event) {
    event.preventDefault(); // This prevents the page from reloading and wiping data when submit is clicked
    var form = document.myForm;
    var title = form.title.value;
    var author = form.author.value;
    var content = form.content.value;

    // call addBlogPost and provide with user input values
    addBlogPost(title, author, content);
}

// use onsubmit for the form, rather than onclick
document.myForm.onsubmit = handleSubmit; 
// Important: do not place () after handleSubmit in this part or it will run the function before the user has a chance to input values and will create new blog posts with blank values