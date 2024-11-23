

---

# Password Generator Chrome Extension

A **secure password generator Chrome extension** that creates random passwords and checks their safety using the [Have I Been Pwned (HIBP) API](https://haveibeenpwned.com/). This extension ensures you can generate strong, uncompromised passwords directly from your browser.

## Features

- Generate random passwords with customizable options:
  - Include uppercase letters
  - Include numbers
  - Include symbols
- Validate password security using the HIBP API.
- Copy generated passwords to the clipboard for easy use.
- Responsive interface with smooth loading transitions.

## Screenshots

![Extension Screenshot](https://res.cloudinary.com/dzdxnfmal/image/upload/v1732346489/my/r1gcqf4ihirxqcugicho.png)

## Installation

### Prerequisites
- Google Chrome browser (latest version).

### Steps
1. Clone this repository or download the source code.
    ```bash
    git clone https://github.com/ravindulakmina/password-generator-extension.git
    cd password-generator-extension
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** and select the folder containing the extension files.
5. The extension will now appear in your browser's extension bar.

## Usage

1. Click the extension icon in your browser toolbar.
2. Customize the password settings:
   - Enter the desired password length.
   - Select options to include uppercase letters, numbers, or symbols.
3. Click **Generate** to create a password.
4. View the security status of the generated password:
   - **Password has been compromised!** indicates the password exists in a known data breach.
   - **Password is safe!** indicates the password is unique.
5. Use the **Copy** button to copy the password to your clipboard.

## File Structure

```
password-generator-extension/
├── assets/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│   └── screenshot.png
├── popup.html
├── popup.css
├── popup.js
└── manifest.json
```

- **assets/**: Contains icons and other media assets.
- **popup.html**: The main HTML file for the extension interface.
- **popup.css**: Styles for the extension interface.
- **popup.js**: JavaScript logic for generating passwords and interacting with the HIBP API.
- **manifest.json**: Chrome extension configuration.

## Development

To modify or enhance the extension:
1. Edit the code files (`popup.html`, `popup.js`, `popup.css`) as needed.
2. Reload the extension in Chrome by clicking the **Reload** button in `chrome://extensions/`.

## Roadmap

- Add options for storing and managing multiple passwords.
- Implement a dark mode for the interface.
- Include additional security checks using other APIs or algorithms.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Let me know if you'd like additional sections or edits to the README!
