
// Change these details to your own information.
const contact = {
    firstName: "Christian",
    lastName: "Angeles",
    jobTitle: "Computer Engineer",
    phone: "+09954024903",
    email: "jaychristian157@gmail.com",
    website: "https://your-website-url.com"
};

// Find the Save Contact button.
const saveButton = document.getElementById("save-contact");

// Create a contact file when the button is clicked.
saveButton.addEventListener("click", function () {

    // Prepare the contact information.
    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${contact.lastName};${contact.firstName};;;`,
        `FN:${contact.firstName} ${contact.lastName}`,
        `TITLE:${contact.jobTitle}`,
        `TEL;TYPE=CELL:${contact.phone}`,
        `EMAIL:${contact.email}`,
        `URL:${contact.website}`,
        "END:VCARD"
    ].join("\r\n");

    // Convert the contact details into a downloadable file.
    const file = new Blob(
        [vCard],
        { type: "text/vcard;charset=utf-8" }
    );

    // Create a temporary download link.
    const fileURL = URL.createObjectURL(file);
    const downloadLink = document.createElement("a");

    downloadLink.href = fileURL;
    downloadLink.download =
        `${contact.firstName}_${contact.lastName}.vcf`;

    // Start downloading the contact file.
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    // Release the temporary file URL.
    setTimeout(() => URL.revokeObjectURL(fileURL), 1000);
});
