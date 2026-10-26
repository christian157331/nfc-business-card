
const contact = {
    firstName: "Christian",
    lastName: "Angeles",
    jobTitle: "Computer Engineer",
    phone: "YOUR_PHONE_NUMBER",
    email: "YOUR_EMAIL@example.com"
};

const saveButton = document.getElementById("save-contact");

saveButton.addEventListener("click", function () {
    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Angeles;Christian;;;",
        "FN:Christian Angeles",
        "TITLE:Computer Engineer",
        `TEL;TYPE=CELL:${contact.phone}`,
        `EMAIL;TYPE=INTERNET:${contact.email}`,
        "END:VCARD"
    ].join("\r\n");

    const file = new Blob(
        [vCard],
        { type: "text/vcard;charset=utf-8" }
    );

    const fileURL = URL.createObjectURL(file);
    const downloadLink = document.createElement("a");

    downloadLink.href = fileURL;
    downloadLink.download = "Christian_Angeles.vcf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    setTimeout(function () {
        URL.revokeObjectURL(fileURL);
    }, 1000);
});
