@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

:root {
    --primary-color: #ffffff;
    --secondary-color: #bb86fc;
    --background-color: #121212;
    --surface-color: #1e1e1e;
    --text-color: rgba(255, 255, 255, 0.87);
    --header-height: 80px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    overflow-x: hidden;
}

#bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 5%;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    background: rgba(18, 18, 18, 0.5);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
    letter-spacing: 2px;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

nav ul li a:hover {
    color: var(--secondary-color);
    text-shadow: 0 0 10px var(--secondary-color);
}

main {
    position: relative;
    z-index: 1;
}

.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5%;
}

.hero-content {
    max-width: 800px;
}

.hero h1 {
    font-size: 4rem;
    font-weight: 700;
    background: linear-gradient(90deg, #bb86fc, #6200ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    padding: 12px 30px;
    border: 2px solid var(--secondary-color);
    border-radius: 50px;
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
    background-color: var(--secondary-color);
    color: var(--background-color);
    box-shadow: 0 0 20px var(--secondary-color);
}

.content-section {
    padding: 100px 10%;
    max-width: 1200px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.content-section.visible {
    opacity: 1;
    transform: translateY(0);
}

.content-section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-align: center;
    color: var(--primary-color);
    position: relative;
}

.content-section h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--secondary-color);
    margin: 10px auto 0;
    border-radius: 2px;
}

/* Loyihalar */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--surface-color);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-card h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    padding: 20px 20px 10px;
}

.project-card p {
    padding: 0 20px 20px;
    line-height: 1.6;
}

.project-card a {
    display: inline-block;
    margin: 0 20px 20px;
    padding: 8px 15px;
    background: var(--secondary-color);
    color: var(--background-color);
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
}

/* Ko'nikmalar */
.skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}

.skill {
    background: var(--surface-color);
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 500;
    border: 1px solid var(--secondary-color);
    transition: transform 0.3s, box-shadow 0.3s;
}

.skill:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px var(--secondary-color);
}

/* Bog'lanish */
#contact {
    text-align: center;
}

.contact-link {
    font-size: 1.2rem;
    color: var(--secondary-color);
    text-decoration: none;
    display: inline-block;
    margin: 20px 0;
}

.social-links a {
    margin: 0 15px;
    color: var(--text-color);
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--secondary-color);
}

footer {
    text-align: center;
    padding: 30px;
    margin-top: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsiveness */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 3rem;
    }
    .hero p {
        font-size: 1.2rem;
    }
    nav ul {
        display: none; /* Kichik ekranlarda menyuni yashirish mumkin yoki 'burger' menyu qo'shish kerak */
    }
}
