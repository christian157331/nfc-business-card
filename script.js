
const contact = {
    firstName: "Christian",
    lastName: "Angeles",
    phone: "YOUR_PHONE_NUMBER",
    email: "YOUR_REAL_EMAIL@example.com",
    jobTitle: "Computer Engineer"
};

document.getElementById("save-contact").addEventListener("click", function () {
    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Angeles;Christian;;;",
        "FN:Christian Angeles",
        "TITLE:Computer Engineer",
        `TEL;TYPE=CELL:${contact.phone}`,
        `EMAIL:${contact.email}`,
        "END:VCARD"
    ].join("\r\n");

    const contactURL = URL.createObjectURL(
        new Blob([vCard], { type: "text/vcard;charset=utf-8" })
    );

    window.location.href = contactURL;

    setTimeout(function () {
        URL.revokeObjectURL(contactURL);
    }, 10000);
});
