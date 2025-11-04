document.addEventListener("DOMContentLoaded", function() {
	const popup = document.getElementById("contactPopup");
	const contactLinks = document.querySelectorAll("#contactLink");
	const closeBtn = document.querySelector(".close");

	contactLinks.forEach(link => {
		link.addEventListener("click", e => {
			e.preventDefault();
			popup.style.display = "flex";
		});
	});

	closeBtn.addEventListener("click", () => {
		popup.style.display = "none";
	});

	window.addEventListener("click", event => {
		if (event.target === popup) {
			popup.style.display = "none";
		}
	});

	const contactForm = document.getElementById("contactForm");
	if (contactForm) {
		contactForm.addEventListener("submit", async e => {
			e.preventDefault();

			const data = {
				name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				message: document.getElementById("message").value,
				timestamp: new Date().toISOString()
			};

			try {
				const res = await fetch("/save-client", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data)
				});

				if (res.ok) {
					alert("Your message was saved successfully!");
					contactForm.reset();
					popup.style.display = "none";
				} else {
					alert("Error saving your message.");
				}
			} catch (err) {
				alert("Server connection failed.");
				console.error(err);
			}
		});
	}
});
