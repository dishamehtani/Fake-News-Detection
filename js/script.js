// ===============================
// FakeNews AI - JavaScript
// ===============================

// Display current year in footer (if needed)
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${year} FakeNews AI | Built with HTML, CSS, JavaScript & Node.js`;
}

// ===============================
// Check News Button
// ===============================

checkBtn.addEventListener("click",()=>{

    const news=document.getElementById("newsInput").value.trim();

    if(news===""){

        alert("Please enter a news article.");

        return;

    }

    localStorage.setItem("newsArticle",news);

    document.getElementById("loader").style.display="flex";

    setTimeout(()=>{

        window.location.href="result.html";

    },3000);

});
// ===============================
// Load News on Result Page
// ===============================

const preview = document.querySelector(".news-preview p");

if (preview) {

    const article = localStorage.getItem("newsArticle");

    if (article) {
        preview.textContent = article;
    }

}

// ===============================
// Clear History Button
// ===============================

const clearBtn = document.querySelector(".history-actions .btn");

if (clearBtn) {

    clearBtn.addEventListener("click", () => {

        if (confirm("Clear all history?")) {

            localStorage.clear();

            alert("History cleared.");

            location.reload();

        }

    });

}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Fade-in Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card, .news-card, .step, .about-card, .tech-card")
.forEach(element => observer.observe(element));

