
# PDF Generator Project

A simple JavaScript project that dynamically generates PDF files using a pre-defined PDF template. The program allows you to input specific data (like names, emails, and messages) and embeds this information into the template, generating a customized PDF on demand.

## Features
- Dynamically add text to pre-defined positions on a PDF.
- Supports custom data input for fields such as `Name`, `Email`, and `Message`.
- Easily integrate with any PDF template.

## Technologies Used
- **JavaScript**
- **pdf-lib**: A powerful JavaScript library for creating and editing PDF files.
- **Node.js**: To run the script and manage dependencies.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/pdf-generator-project.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd pdf-generator-project
   ```

3. **Install the necessary dependencies:**
   ```bash
   npm install
   ```

4. **Download the PDF template:**
   - [Download template.pdf](./template.pdf) (place it in the project root folder).

## Usage

1. **Run the project:**
   To generate a PDF with your data, run the following command:
   ```bash
   node PDF_Generator.js
   ```

2. **Input your data:**
   Modify the `data` object inside `PDF_Generator.js` with your desired values:
   ```javascript
   const data = {
       name: "Your Name",
       email: "your.email@example.com",
       message: "This is a test message.",
   };
   ```

3. **PDF Output:**
   After running the script, the generated PDF will be saved to the `output` folder as `generated.pdf`.

## Example Code

Here's a snippet of the core logic that generates the PDF with dynamic content:

```javascript
page.drawText(`Name: ${data.name}`, {
    x: 50,
    y: 650,
    size: fontSize,
    color: color,
});

page.drawText(`Email: ${data.email}`, {
    x: 50,
    y: 630,
    size: fontSize,
    color: color,
});

page.drawText(`Message: ${data.message}`, {
    x: 50,
    y: 610,
    size: fontSize,
    color: color,
});
```

## Troubleshooting

- **Error: `ENOENT: no such file or directory`**:
   - This error typically occurs when the `template.pdf` file is missing or the path is incorrect. Ensure the template is placed in the correct folder and the file path is correct in the code.

- **Text not showing up at the right position:**
   - Make sure that the `x` and `y` coordinates you are using for `page.drawText` are correct for your PDF template's layout.

## Future Enhancements
- Add support for more dynamic fields (e.g., images or tables).
- Implement an interactive form to input the data instead of hardcoding it in the script.
- Add error handling for missing template files or invalid data.

## License
This project is open-source and available under the [MIT License](LICENSE).
