@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;700&display=swap');

:root {
    --text-color: #e0e0e0;
    --primary-color: #00ffff;
    --bg-color: #000000;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Exo 2', sans-serif;
    color: var(--text-color);
    background-color: var(--bg-color);
    overflow-x: hidden;
}

#canvas-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
}

.content {
    width: 100%;
    position: relative;
    z-index: 1;
}

.hero-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-section h1 {
    font-size: clamp(3rem, 10vw, 7rem);
    font-weight: 700;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 0 0 15px var(--primary-color), 0 0 30px var(--primary-color);
}

.hero-section p {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: var(--text-color);
    margin-top: 1rem;
    font-weight: 300;
}

.content-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 150px 40px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    /* Animatsiya uchun boshlang'ich holat */
    opacity: 0;
    transform: translateY(50px);
}

.content-section h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
    text-align: center;
}

.content-section p {
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: center;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 2rem;
}

.social-links a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1.1rem;
    padding: 10px 20px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background-color: var(--primary-color);
    color: var(--bg-color);
    box-shadow: 0 0 15px var(--primary-color);
}
