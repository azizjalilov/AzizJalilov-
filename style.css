/* --- GLOBAL STYLES & VARIABLES --- */
:root {
    --bg-color: #0a0a0a;
    --text-color: #e0e0e0;
    --heading-color: #ffffff;
    --accent-color: #00e5ff;
    --border-color: rgba(255, 255, 255, 0.1);
    --font-family: 'Inter', sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
    font-family: var(--font-family);
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    overscroll-behavior: none;
}
.main-header { position: fixed; top: 0; left: 0; width: 100%; padding: 25px 50px; z-index: 100; }
.logo { font-size: 1.5rem; font-weight: 700; color: var(--heading-color); }
main { width: 100%; }

/* --- SECTION STYLES --- */
.section { padding: 100px 50px; min-height: 60vh; border-bottom: 1px solid var(--border-color); }
#hero { min-height: 100vh; display: flex; align-items: center; border-bottom: none; }
.content-section { max-width: 1200px; margin: 0 auto; }
.section-title { font-size: 2.5rem; color: var(--heading-color); margin-bottom: 50px; font-weight: 500; }
.section-intro { font-size: 1.8rem; line-height: 1.5; max-width: 800px; font-weight: 300; }

/* HERO SECTION */
.hero-content { font-size: 4vw; font-weight: 700; color: var(--heading-color); line-height: 1.2; }
.hero-line { overflow: hidden; /* Animatsiya uchun */ }
.hero-line span { display: block; }
.cta-link { color: var(--accent-color); text-decoration: none; font-size: 1.2rem; font-weight: 500; margin-top: 20px; display: inline-block; }

/* CV SECTION */
.cv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
.cv-column h3 { font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-color); margin-bottom: 20px; }
.cv-item { border-top: 1px solid var(--border-color); padding-top: 20px; margin-bottom: 30px; }
.cv-item h4 { font-size: 1.5rem; color: var(--heading-color); font-weight: 500; }
.cv-item p { font-size: 1.1rem; }
.cv-date { color: #888; margin-top: 5px; }

/* SKILLS SECTION */
.skills-list { display: flex; flex-wrap: wrap; gap: 15px; }
.skill-item { font-size: 1.5rem; padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 30px; }

/* PROJECTS SECTION */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
.project-card { cursor: pointer; overflow: hidden; position: relative; }
.project-card img { width: 100%; height: 400px; object-fit: cover; display: block; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
.project-card:hover img { transform: scale(1.05); }
.project-title { position: absolute; bottom: 0; left: 0; padding: 20px; color: white; font-size: 1.2rem; font-weight: 500; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); width: 100%; }

/* CONTACT SECTION */
.contact-text { font-size: 1.8rem; max-width: 600px; margin-bottom: 40px; }
.contact-links a { color: var(--heading-color); text-decoration: none; font-size: 2.5rem; margin-right: 30px; font-weight: 500; position: relative; }
.contact-links a:after { content: ''; position: absolute; left: 0; bottom: -5px; width: 0%; height: 3px; background-color: var(--accent-color); transition: width 0.3s ease; }
.contact-links a:hover:after { width: 100%; }

/* --- PROJECT MODAL --- */
.modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); z-index: 1000; display: none; align-items: center; justify-content: center; }
.modal-content { background: var(--bg-color); width: 90%; height: 90%; max-width: 1600px; padding: 40px; position: relative; }
.modal-close { position: absolute; top: 20px; right: 20px; background: none; border: none; color: white; font-size: 2.5rem; cursor: pointer; }
#modal-title { font-size: 2rem; margin-bottom: 20px; }
.modal-gallery-wrapper { width: 100%; height: calc(100% - 80px); overflow: hidden; }
.modal-gallery { display: flex; height: 100%; gap: 20px; overflow-x: auto; /* Horizontal scroll */ }
.modal-gallery-item { flex-shrink: 0; width: auto; height: 100%; text-align: center; }
.modal-gallery-item img { height: 85%; width: auto; object-fit: contain; }
.modal-gallery-item p { margin-top: 10px; color: #aaa; }

/* ADAPTIVE DESIGN */
@media (max-width: 768px) {
    .section { padding: 80px 20px; }
    .main-header { padding: 20px; }
    .hero-content { font-size: 8vw; }
    .cv-grid { grid-template-columns: 1fr; }
    .projects-grid { grid-template-columns: 1fr; }
    .contact-links a { display: block; margin-bottom: 20px; }
    .modal-content { width: 95%; height: 85%; }
}
