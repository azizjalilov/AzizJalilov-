:root{
  --bg-1: #0f1724;
  --bg-2: #07142a;
  --accent: #7ce7ff;
  --accent-2: #8a7cff;
  --muted: #9aa4b2;
  --glass: rgba(255,255,255,0.04);
  --radius: 12px;
  --max-width: 1100px;
  font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color-scheme: dark;
}

*{box-sizing:border-box}
html,body,#app{height:100%}
body{
  margin:0;
  background:linear-gradient(180deg,var(--bg-1) 0%, var(--bg-2) 100%);
  color: #e6eef8;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.4;
}

/* Topbar */
.topbar{
  position:fixed;
  top:16px;
  left:50%;
  transform:translateX(-50%);
  width:calc(100% - 40px);
  max-width:var(--max-width);
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:16px;
  padding:10px 16px;
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015));
  border-radius:14px;
  backdrop-filter: blur(6px) saturate(120%);
  z-index:60;
  box-shadow: 0 6px 20px rgba(2,6,23,0.6);
}

.brand{font-weight:700; letter-spacing:0.3px}
.brand .dot{color:var(--accent); margin-left:6px}

/* Nav */
.nav a{
  color:var(--muted);
  text-decoration:none;
  margin-left:14px;
  font-weight:600;
  font-size:14px;
}
.nav a.cta{
  background:linear-gradient(90deg,var(--accent),var(--accent-2));
  color:#021421;
  padding:8px 12px;
  border-radius:10px;
  margin-left:18px;
  font-weight:700;
  box-shadow:0 6px 18px rgba(126,179,255,0.08);
}

/* Hero area */
.hero{
  display:grid;
  grid-template-columns: 1fr 560px;
  gap:40px;
  align-items:center;
  max-width:var(--max-width);
  margin:120px auto 40px;
  padding:0 20px;
}

@media (max-width:1000px){
  .hero{grid-template-columns:1fr; margin-top:90px; gap:24px}
}

/* Left content */
.hero-content{max-width:620px}
.title{
  font-size:34px;
  margin:0 0 12px 0;
  line-height:1.05;
  font-weight:700;
  letter-spacing:-0.4px;
}
.subtitle{color:var(--muted); margin:0 0 18px 0; font-size:15px}
.hero-actions{display:flex; gap:12px; margin-bottom:12px}
.btn{
  display:inline-block;
  text-decoration:none;
  padding:12px 18px;
  border-radius:12px;
  background:linear-gradient(90deg,var(--accent),var(--accent-2));
  color:#021421;
  font-weight:700;
}
.btn.ghost{
  background:transparent;
  border:1px solid rgba(255,255,255,0.06);
  color:var(--accent);
  font-weight:600;
}

/* Badges */
.badges{display:flex; gap:8px; margin-top:12px}
.badges span{
  background:var(--glass);
  padding:6px 10px;
  border-radius:999px;
  color:var(--muted);
  font-weight:600;
  font-size:13px;
}

/* Canvas section */
.hero-canvas{
  position:relative;
  height:520px;
  border-radius:var(--radius);
  overflow:hidden;
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
}

@media (max-width:1000px){
  .hero-canvas{height:420px}
}

#scene{
  width:100%;
  height:100%;
  display:block;
}

/* overlay label */
.canvas-overlay{
  position:absolute;
  left:18px;
  bottom:18px;
  z-index:10;
  background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:10px 14px;
  border-radius:10px;
  color:var(--muted);
  font-weight:600;
  backdrop-filter: blur(6px);
}

/* Work grid */
.work{max-width:var(--max-width); margin:30px auto; padding:30px 20px; border-radius:14px; background:linear-gradient(180deg, rgba(255,255,255,0.012), rgba(255,255,255,0.01));}
.work h2{margin:0 0 18px 0}
.grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}
@media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.grid{grid-template-columns:1fr}}

.card{
  padding:16px;
  border-radius:12px;
  background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
  box-shadow:0 6px 24px rgba(2,6,23,0.45);
}
.card .thumb{
  height:120px;
  border-radius:10px;
  background:linear-gradient(135deg,var(--accent),var(--accent-2));
  color:#021421;
  font-weight:700;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:12px;
}

/* About & contact */
.about{max-width:var(--max-width); margin:24px auto; padding:20px; color:var(--muted)}
.contact{
  max-width:var(--max-width);
  margin:20px auto 60px;
  padding:18px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-radius:12px;
  background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
  color:var(--muted);
}
@media(max-width:700px){ .contact{flex-direction:column; gap:8px; text-align:center} }

/* small screens tweaks */
@media (max-width:520px){
  .title{font-size:22px}
  .hero{padding:0 12px}
  .topbar{padding:8px 10px}
}
