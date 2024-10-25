## Lyrics Search App Documentation

This documentation provides an overview of the Lyrics Search application. It includes the HTML, CSS, and JavaScript files responsible for its functionality.

### 1. HTML (`index.html`)

* **DOCTYPE declaration**: Declares the document to be HTML5.
* **Language**: Specifies the language of the document as English.
* **Meta tags**:
    * `charset="UTF-8"`: Specifies the character encoding for the document.
    * `viewport`: Configures the viewport for optimal viewing on different devices.
* **Link to CSS**: Includes the external stylesheet `style.css` to apply styling to the page.
* **Title**: Sets the title of the webpage to "Lyrics Search".
* **Body**:
    * **Header**: Contains the heading "Lyrics Search" and the search form.
        * **Form (`id="form"`)**: Contains the search input field (`id="search"`) and the search button.
    * **Result container (`id="result"`)**: Displays the search results and lyrics.
    * **More container (`id="more"`)**: Displays pagination buttons for more results.
    * **Script tag**: Includes the external JavaScript file `script.js` to handle the application's logic.

### 2. CSS (`style.css`)

* **Imports Google Fonts**: Imports the "Rubik" font from Google Fonts.
* **Root Variables**: Defines root variables for colors:
    * `--main-color`:  The primary color (#3B9B76).
    * `--secondary-color`:  The secondary color (#5AB193).
    * `--text-color`:  The primary text color (rgba(255, 255, 255, 0.87)).
* **Global Styles**:
    * **Box sizing**: Sets `box-sizing: border-box` for all elements.
    * **Font family**: Sets the default font to "Rubik", sans-serif.
    * **Margin**: Resets the body margin to 0.
* **Header Styles**:
    * **Background**: Sets a background image from Unsplash with a semi-transparent overlay.
    * **Color**: Sets the text color to white with 95% opacity.
    * **Flexbox**: Uses flexbox for centering the content.
    * **Padding**: Adds padding to the header.
    * **Position**: Sets the header's position to relative for the pseudo-element.
    * **Pseudo-element (`::after`)**: Adds a dark overlay on top of the background image.
    * **Child elements**: Styles the heading (`h1`) and form.
* **Form Styles**:
    * **Width**: Sets the form's width.
    * **Input field**: Styles the search input field.
    * **Button**: Styles the search button.
* **Button Styles**:
    * **Cursor**: Sets the cursor to a pointer on hover.
    * **Active state**: Styles the button on active state.
    * **Focus**: Removes outline on focus.
* **`.btn` Styles**: Styles generic buttons with a specific background color.
* **`.songs` Styles**: Styles the list of songs.
* **`.container` Styles**: Styles generic containers.
* **`.centered` Styles**: Centers content horizontally using flexbox.
* **`.toast` Styles**: Styles a notification toast.

### 3. JavaScript (`script.js`)

* **Variables**: Declares variables for the form, search input, result container, and more container.
* **API URL**: Defines the base URL for the Lyrics API.
* **`searchSongs(term)`**:
    * Makes a fetch request to the Lyrics API's suggest endpoint with the search term.
    * Parses the response as JSON.
    * Calls the `showData()` function to display the results.
* **`getLyrics(artist, songTitle)`**:
    * Makes a fetch request to the Lyrics API's lyrics endpoint with the artist and song title.
    * Parses the response as JSON.
    * Displays the lyrics or an error message.
* **`getMoreSongs(url)`**:
    * Makes a fetch request to the Lyrics API's pagination URL.
    * Parses the response as JSON.
    * Calls the `showData()` function to display the results.
* **`showData(data)`**:
    * Renders the song list based on the data.
    * Implements pagination using `prev` and `next` buttons.
* **`showAlert(message)`**:
    * Creates a notification toast to display error messages.
* **Event Listeners**:
    * **`form.addEventListener("submit")`**: Handles form submission.
        * Prevents default form submission behavior.
        * Gets the search term from the input field.
        * Calls `searchSongs()` to search for songs.
    * **`result.addEventListener("click")`**: Handles clicks within the result container.
        * Gets the artist and song title from the clicked button.
        * Calls `getLyrics()` to retrieve the lyrics.
* **Initialization**:
    * Calls `searchSongs("one")` on page load to display initial results.

### Explanation of Key Functions:

* **`searchSongs(term)`**: This function fetches song suggestions from the Lyrics API based on the search term provided. It then calls the `showData` function to display the results.
* **`getLyrics(artist, songTitle)`**: This function fetches lyrics from the Lyrics API for a given artist and song title. It displays the lyrics or an error message in the `result` container.
* **`getMoreSongs(url)`**: This function handles pagination. It fetches data from a given URL, typically a "next" or "previous" link, and displays the new results.
* **`showData(data)`**: This function dynamically generates HTML to display the search results and lyrics. It also implements pagination functionality.
* **`showAlert(message)`**: This function displays a notification toast with an error message.

### How to Use:

1. **Copy the files:** Download the `index.html`, `style.css`, and `script.js` files.
2. **Open in a browser:** Open `index.html` in a web browser.
3. **Search for lyrics:** Enter an artist or song name in the search bar and click "Search".
4. **View results:** The search results will be displayed in the `result` container. Click the "Get Lyrics" button next to a song to display its lyrics.

This application allows you to easily search for lyrics using the Lyrics API. It features pagination, error handling, and a clean user interface. 
