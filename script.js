:root {
    --bg-color: #0a0a1a;
    --primary-color: #ffffff;
    --secondary-color: #a9a9d4;
    --accent-color: #00ffc3;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-color);
    color: var(--primary-color);
    overflow-x: hidden;
}

#canvas-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.container {
    padding: 0 5%;
}

header {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
}

nav {
    display: flex;
    gap: 2rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem 2rem;
    border-radius: 50px;
    backdrop-filter: blur(10px);
}

.nav-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: var(--accent-color);
}

#hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-content {
    opacity: 0;
    transform: translateY(20px);
}

.hero-content h1 {
    font-size: 5rem;
    font-weight: 700;
}

.hero-content p {
    font-size: 1.5rem;
    color: var(--secondary-color);
}

.content-section {
    padding: 6rem 0;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(50px);
}

.content-section h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--accent-color);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.project-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    transition: transform 0.3s, background 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
}

#contact p {
    text-align: center;
    margin-bottom: 2rem;
}

#contact a {
    color: var(--accent-color);
    text-decoration: none;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.social-links a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--accent-color);
}
