# CS 140 In Class Assignment: Button Counter

Create a simple interactive web page using HTML and JavaScript. This page will contain a button that, when clicked, increments a counter displayed on the page. An alert will display every time the counter reaches an even number.

## Instructions

1. **Set Up HTML Structure**
   - Create an HTML file.
   - Inside the HTML file, create a button with some text in it.

2. **Initialize JavaScript**
   - Inside a `<script>` tag in your HTML file, create a variable called `count` and set it to `0`:

3. **Create the Click Function**
   - Define a function called `clickEvent`.
   - Within this function:
     - Increment the `count` variable by one using `count++`.
     - Log the value of `count` to the console with `console.log(count);`.

4. **Link the Button to the Click Function**
   - Set the `onclick` attribute of the button to `clickEvent`
      
5. **Add a Paragraph to Display Click Count**
   - Create a paragraph element in HTML:

6. **Update Paragraph on Click**
   - Inside the `clickEvent` function, add code to display the updated `count` variable in the paragraph each time the button is clicked:

7. **Add Alert for Even Numbers**
   - In the `clickEvent` function, add code to check if `count` is even:
     - Use the modulus operator `%` to determine if `count` is even (`count % 2 === 0`).
     - If `count` is even, display an alert with a message

8. **Commit and Submit**
   - Commit your code to your repository.
   - Submit the repository link on Brightspace.

--- 

## What's Inside?

This template is equipped with the basic structure for web development using HTML, CSS, and JavaScript. Here's what you'll find:

| File Type | Description                                      | How to Use                                 |
|-----------|--------------------------------------------------|--------------------------------------------|
| `.html`   | HTML files define the structure of your web pages. | Add your content and structure here.      |
| `.css`    | CSS files style your web pages.                  | Use these to make your site look amazing. |
| `.js`     | JavaScript files add interactivity to your pages. | Bring your pages to life with JS.         |

---

## Handy Tags, CSS Rules, and JavaScript Snippets

### HTML Tags to Remember

| Tag        | Description                           | Example                                 |
|------------|---------------------------------------|-----------------------------------------|
| `<a>`      | Creates a hyperlink to another page.  | `<a href="https://example.com">Visit!</a>` |
| `<img>`    | Embeds an image in your webpage.      | `<img src="image.jpg" alt="A cool image">` |
| `<ul>`, `<li>` | Creates a list of items.             | `<ul><li>Item 1</li><li>Item 2</li></ul>`   |
| `<div>`    | Defines a division or section.        | `<div>Content here</div>`               |

### CSS Rules to Spice Up Your Site

| Rule              | Description                                | Example                               |
|-------------------|--------------------------------------------|---------------------------------------|
| `font-family`     | Changes the font of your text.             | `font-family: 'Arial', sans-serif;`   |
| `margin`, `padding` | Controls the space around and inside elements. | `margin: 10px; padding: 20px;`        |
| `border`          | Adds a border around elements.             | `border: 2px solid #000;`             |
| `background-color`| Sets the background color of elements.     | `background-color: #ffcc00;`          |

### JavaScript Snippets for Interactivity

- **Show an Alert**:
  - `alert('Welcome to CS 140 Web Development!');`
- **Change Text Content**:
  - Example: `document.getElementById('exampleId').textContent = 'Hello, CS 140!';`
- **Add a Click Event**:
  - Example:
    ```javascript
    document.getElementById('clickMeButton').addEventListener('click', function() {
        alert('You clicked the button!');
    });
    ```

*This document was initially drafted with the help of ChatGPT. It has been edited and customized to fit our class's needs.
*
