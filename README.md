
## LingoBridge Translator

  ##    Author

Robby Chungo - 2410051
BES – 3rd Year, 1st Semester

## Overview

**LingoBridge** is a simple web-based language translator built using **HTML, CSS, and JavaScript**.
It allows users to translate text between languages, listen to pronunciation, copy translations, and switch between light and dark mode.

The application uses the **MyMemory Translation API** for translations and the **Web Speech API** for text-to-speech functionality.

---

## Features

* Translate text between **English and French**
* **Text-to-speech** for both input and translated output
* **Copy text** to clipboard
* **Swap languages** instantly
* **Dark mode toggle**
* **Character counter** for input text
* Responsive and simple user interface

---

## Technologies Used

* HTML5 (Semantic structure)
* CSS3
* JavaScript (ES6)
* MyMemory Translation API
* Web Speech API

---

## Project Structure

```
LingoBridge/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and dark mode
├── script.js       # Application logic
└── README.md       # Project documentation
```

---

## Setup Instructions

### 1. Clone or Download the Project

Download the project folder or clone it using:

```
git clone https://github.com/yourusername/lingobridge.git
```

Or download the ZIP file and extract it.

---

### 2. Open the Project Folder

Navigate to the project directory:

```
cd LingoBridge
```

---

### 3. Run the Application

Open the `index.html` file in a web browser.

You can simply double-click the file or run it using a local server.

Example using VS Code Live Server:

1. Install **Live Server extension**
2. Right click `index.html`
3. Click **Open with Live Server**

---

## How to Use the App

1. Enter text in the **Input** box.
2. Select the **source language**.
3. Select the **target language**.
4. Click the **Translate** button.
5. The translated text will appear in the **Output** box.

Additional controls:

* **🔊 Listen** – plays the pronunciation
* **📋 Copy** – copies text to clipboard
* **⇄ Swap** – switches languages
* **🌙 Dark Mode** – toggles dark theme

---

## API Used

### MyMemory Translation API

This API is used to perform translations.

Example request:

```
https://api.mymemory.translated.net/get?q=Hello&langpair=en|fr
```

---

## Browser Compatibility

The application works best in modern browsers:

* Google Chrome
* Microsoft Edge
* Firefox
* Safari

Text-to-speech quality may vary depending on the browser and operating system.

---

## Future Improvements

Possible enhancements include:

* Support for more languages
* Automatic language detection
* Improved AI voice synthesis
* Speech-to-text input
* Mobile optimization

---

## Author

Robby Chungo
BES – 3rd Year, 1st Semester

---

## License

This project is for **educational purposes**.
