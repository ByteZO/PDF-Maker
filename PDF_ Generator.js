const { PDFDocument, rgb } = require("pdf-lib");
const fs = require("fs");

async function generatePdf(data) {
  
  const templateBytes = fs.readFileSync("template.pdf");
  const pdfDoc = await PDFDocument.load(templateBytes);

 
  const page = pdfDoc.getPages()[0];

  const fontSize = 12;
  const color = rgb(0, 0, 0);

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

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("generated.pdf", pdfBytes);
}

const data = {
  name: "Gopaljeet Narayan",
  email: "gopaljeet@example.com",
  message: "This is a dynamic PDF generated using pdf-lib.",
};

generatePdf(data)
  .then(() => {
    console.log("PDF generated successfully!");
  })
  .catch((err) => {
    console.error("Error generating PDF:", err);
  });
