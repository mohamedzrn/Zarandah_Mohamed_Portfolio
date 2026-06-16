require('dotenv').config({ override: true });
const express = require('express');
const db      = require('./nodes/db');

const app  = express();
const PORT = process.env.PORT || process.env.DASHBOARD_PORT || 3000;

app.use(express.json());

// ─── API ──────────────────────────────────────────────────────────────────────

app.get('/api/leads', async (req, res) => {
  try {
    await db.init();
    res.json(db.getAll());
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/stats', async (req, res) => {
  try {
    await db.init();
    const leads = db.getAll();
    const now   = Date.now();
    res.json({
      total:           leads.length,
      contacted:       leads.filter(l => l.contactedAt && !l.pendingApproval).length,
      pendingApproval: leads.filter(l => l.pendingApproval).length,
      followup1Sent:   leads.filter(l => l.followup1Sent).length,
      followup2Sent:   leads.filter(l => l.followup2Sent).length,
      replyReceived:   leads.filter(l => l.replyReceived).length,
      followupDueSoon: leads.filter(l =>
        (!l.followup1Sent && l.followUp1Due && l.followUp1Due - now < 24 * 60 * 60 * 1000) ||
        (!l.followup2Sent && l.followUp2Due && l.followUp2Due - now < 24 * 60 * 60 * 1000)
      ).length,
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── Dashboard ────────────────────────────────────────────────────────────────

app.get('/', (req, res) => res.send(DASHBOARD_HTML));

app.listen(PORT, () => console.log('\n Dashboard   http://localhost:' + PORT));

// ─── HTML ─────────────────────────────────────────────────────────────────────


const DASHBOARD_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Partner Engine — Dashboard</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
/* ── Design Tokens ── */
:root{
  --bg:#09090f;
  --bg2:#0f1019;
  --surface:#141520;
  --surface2:#1a1c2e;
  --surface3:#1f2237;
  --border:#252840;
  --border-l:#2f3350;
  --text:#e8eaf6;
  --muted:#6b7099;
  --dim:#353954;

  --blue:#5c85f5;
  --blue-dim:rgba(92,133,245,0.12);
  --green:#22c55e;
  --green-dim:rgba(34,197,94,0.1);
  --yellow:#f59e0b;
  --yellow-dim:rgba(245,158,11,0.1);
  --purple:#a855f7;
  --purple-dim:rgba(168,85,247,0.1);
  --pink:#ec4899;
  --pink-dim:rgba(236,72,153,0.1);
  --red:#ef4444;
  --red-dim:rgba(239,68,68,0.1);

  --radius:8px;
  --radius-lg:12px;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  font-family:'Inter',system-ui,sans-serif;
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  line-height:1.5;
  -webkit-font-smoothing:antialiased;
}

/* ── Layout ── */
.layout{display:flex;min-height:100vh}
.sidebar{
  width:220px;flex-shrink:0;
  background:var(--bg2);
  border-right:1px solid var(--border);
  display:flex;flex-direction:column;
  padding:24px 16px;
  position:sticky;top:0;height:100vh;
  overflow-y:auto;
}
.main{flex:1;padding:32px 36px;overflow:auto}

/* ── Sidebar ── */
.logo{
  display:flex;align-items:center;gap:10px;
  margin-bottom:32px;padding:0 4px;
}
.logo-icon{
  width:32px;height:32px;border-radius:8px;
  background:linear-gradient(135deg,var(--blue),var(--purple));
  display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:700;color:#fff;flex-shrink:0;
}
.logo-name{font-size:14px;font-weight:700;color:var(--text)}
.logo-sub{font-size:11px;color:var(--muted)}

.nav-section{margin-bottom:8px}
.nav-label{
  font-size:10px;font-weight:600;letter-spacing:0.1em;
  text-transform:uppercase;color:var(--dim);
  padding:0 8px;margin-bottom:6px;margin-top:20px;
  display:block;
}
.nav-item{
  display:flex;align-items:center;gap:10px;
  padding:8px 10px;border-radius:var(--radius);
  font-size:13px;font-weight:500;color:var(--muted);
  cursor:pointer;transition:color .15s,background .15s;
  text-decoration:none;border:none;background:none;
  width:100%;text-align:left;font-family:inherit;
  margin-bottom:2px;
}
.nav-item:hover{color:var(--text);background:var(--surface2)}
.nav-item.active{color:var(--text);background:var(--surface2)}
.nav-item svg{flex-shrink:0;opacity:.7}
.nav-item.active svg{opacity:1}

.sidebar-footer{
  margin-top:auto;padding-top:20px;
  border-top:1px solid var(--border);
}
.status-dot{
  width:7px;height:7px;border-radius:50%;background:var(--green);
  display:inline-block;flex-shrink:0;
  box-shadow:0 0 0 3px rgba(34,197,94,0.2);
  animation:pulse 2s infinite;
}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.4)}50%{box-shadow:0 0 0 6px rgba(34,197,94,0)}}
.status-row{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted)}

/* ── Page Header ── */
.page-header{
  display:flex;align-items:flex-start;justify-content:space-between;
  margin-bottom:28px;flex-wrap:wrap;gap:16px;
}
.page-title{font-size:22px;font-weight:700;color:var(--text);line-height:1.2}
.page-sub{font-size:13px;color:var(--muted);margin-top:4px}
.header-actions{display:flex;gap:8px;align-items:center;flex-shrink:0}
.lu{font-size:11px;color:var(--dim)}
.btn{
  display:inline-flex;align-items:center;gap:6px;
  background:var(--surface2);border:1px solid var(--border-l);
  color:var(--muted);padding:7px 14px;border-radius:var(--radius);
  font-size:12px;font-weight:500;cursor:pointer;transition:all .15s;
  font-family:inherit;
}
.btn:hover{background:var(--surface3);color:var(--text);border-color:var(--border-l)}
.btn-primary{
  display:inline-flex;align-items:center;gap:6px;
  background:var(--blue);border:1px solid var(--blue);
  color:#fff;padding:7px 16px;border-radius:var(--radius);
  font-size:12px;font-weight:600;cursor:pointer;transition:all .15s;
  font-family:inherit;
}
.btn-primary:hover{background:#4a73e3}

/* ── Stats Grid ── */
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px;margin-bottom:28px}
.stat{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--radius-lg);padding:20px 18px;
  position:relative;overflow:hidden;transition:border-color .15s;
}
.stat:hover{border-color:var(--border-l)}
.stat-accent{border-left:3px solid}
.stat-accent.blue{border-left-color:var(--blue)}
.stat-accent.green{border-left-color:var(--green)}
.stat-accent.yellow{border-left-color:var(--yellow)}
.stat-accent.purple{border-left-color:var(--purple)}
.stat-accent.pink{border-left-color:var(--pink)}
.stat-accent.red{border-left-color:var(--red)}
.sv{font-size:28px;font-weight:700;line-height:1;color:var(--text)}
.sv.blue{color:var(--blue)}.sv.green{color:var(--green)}
.sv.yellow{color:var(--yellow)}.sv.purple{color:var(--purple)}
.sv.pink{color:var(--pink)}.sv.red{color:var(--red)}
.sl{font-size:11px;font-weight:500;color:var(--muted);margin-top:6px;text-transform:uppercase;letter-spacing:0.05em}

/* ── Section Header ── */
.section-hdr{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:16px;flex-wrap:wrap;gap:8px;
}
.section-title{font-size:13px;font-weight:600;color:var(--text)}
.section-sub{font-size:11px;color:var(--muted)}

/* ── Table ── */
.table-wrap{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--radius-lg);overflow:hidden;
}
.table-wrap table{width:100%;border-collapse:collapse;font-size:13px}
.table-wrap thead tr{background:var(--bg2)}
.table-wrap th{
  text-align:left;padding:11px 14px;
  color:var(--muted);font-weight:500;font-size:11px;
  text-transform:uppercase;letter-spacing:0.05em;
  border-bottom:1px solid var(--border);white-space:nowrap;
}
.table-wrap td{
  padding:12px 14px;border-bottom:1px solid var(--border);
  vertical-align:middle;color:var(--text);
}
.table-wrap tr:last-child td{border-bottom:none}
.table-wrap tr:hover td{background:var(--surface2)}
.company-name{font-weight:600;font-size:13px}
.contact-name{font-size:12px;color:var(--muted);margin-top:1px}

/* ── Badges ── */
.badge{
  display:inline-flex;align-items:center;gap:4px;
  padding:3px 9px;border-radius:99px;
  font-size:11px;font-weight:500;white-space:nowrap;border:1px solid;
}
.badge::before{content:'';width:5px;height:5px;border-radius:50%;background:currentColor;flex-shrink:0}
.badge.replied  {background:var(--green-dim);color:var(--green);border-color:rgba(34,197,94,0.25)}
.badge.pending  {background:var(--yellow-dim);color:var(--yellow);border-color:rgba(245,158,11,0.25)}
.badge.fu2      {background:var(--purple-dim);color:var(--purple);border-color:rgba(168,85,247,0.25)}
.badge.fu1      {background:var(--blue-dim);color:var(--blue);border-color:rgba(92,133,245,0.25)}
.badge.contacted{background:var(--green-dim);color:var(--green);border-color:rgba(34,197,94,0.2)}
.badge.none     {background:var(--surface2);color:var(--dim);border-color:var(--border)}

/* ── Pills ── */
.tier-pill{font-size:11px;font-weight:600;padding:2px 0}
.tier-priority{color:var(--yellow)}
.tier-standard{color:var(--blue)}
.variant-pill{
  display:inline-block;width:22px;height:22px;border-radius:6px;
  font-size:11px;font-weight:700;text-align:center;line-height:22px;
}
.var-a{background:rgba(34,197,94,0.15);color:var(--green)}
.var-b{background:rgba(245,158,11,0.15);color:var(--yellow)}
.score-chip{
  display:inline-flex;align-items:center;justify-content:center;
  background:var(--surface2);border:1px solid var(--border-l);
  border-radius:6px;padding:2px 8px;
  font-size:11px;font-weight:600;color:var(--muted);min-width:32px;
}

/* ── Date overdue ── */
.overdue{color:var(--red);font-size:12px;font-weight:500}
.due-soon{color:var(--yellow);font-size:12px;font-weight:500}
.date-normal{font-size:12px;color:var(--muted)}

/* ── Empty state ── */
.empty{text-align:center;padding:64px 20px;color:var(--dim)}
.empty p{font-size:14px}

/* ── Responsive ── */
@media(max-width:900px){
  .sidebar{width:60px;padding:16px 8px}
  .logo-name,.logo-sub,.nav-item span,.sidebar-footer .status-row span:not(.status-dot),.nav-label{display:none}
  .nav-item{justify-content:center}
  .main{padding:20px}
}
</style>
</head>
<body>
<div class="layout">

  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="logo">
      <div class="logo-icon">PE</div>
      <div>
        <div class="logo-name">Partner Engine</div>
        <div class="logo-sub">Dashboard</div>
      </div>
    </div>

    <span class="nav-label">Pipeline</span>
    <button class="nav-item active" onclick="">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      <span>Overview</span>
    </button>
    <button class="nav-item" onclick="">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      <span>Leads</span>
    </button>
    <button class="nav-item" onclick="">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      <span>Analytics</span>
    </button>

    <span class="nav-label">Settings</span>
    <button class="nav-item" onclick="">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 4.93 4.93 10 10 0 0 0 4.93 19.07 10 10 0 0 0 19.07 19.07 10 10 0 0 0 19.07 4.93Z"/></svg>
      <span>Settings</span>
    </button>

    <div class="sidebar-footer">
      <div class="status-row">
        <span class="status-dot"></span>
        <span>Engine running</span>
      </div>
    </div>
  </aside>

  <!-- Main -->
  <main class="main">
    <div class="page-header">
      <div>
        <h1 class="page-title">Lead Pipeline</h1>
        <p class="page-sub" id="sub">Loading pipeline data...</p>
      </div>
      <div class="header-actions">
        <span class="lu" id="lu"></span>
        <button class="btn" onclick="load()">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          Refresh
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="stats">
      <div class="stat stat-accent blue">
        <div class="sv blue" id="s0">—</div>
        <div class="sl">Total Leads</div>
      </div>
      <div class="stat stat-accent green">
        <div class="sv green" id="s1">—</div>
        <div class="sl">Contacted</div>
      </div>
      <div class="stat stat-accent yellow">
        <div class="sv yellow" id="s2">—</div>
        <div class="sl">Awaiting Approval</div>
      </div>
      <div class="stat stat-accent blue">
        <div class="sv blue" id="s3">—</div>
        <div class="sl">FU1 Sent</div>
      </div>
      <div class="stat stat-accent purple">
        <div class="sv purple" id="s4">—</div>
        <div class="sl">FU2 Sent</div>
      </div>
      <div class="stat stat-accent pink">
        <div class="sv pink" id="s5">—</div>
        <div class="sl">Replies</div>
      </div>
      <div class="stat stat-accent red">
        <div class="sv red" id="s6">—</div>
        <div class="sl">Due &lt;24h</div>
      </div>
    </div>

    <!-- Table -->
    <div class="section-hdr">
      <div>
        <span class="section-title">All Leads</span>
        <span class="section-sub" id="lead-count" style="margin-left:10px"></span>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Company / Contact</th>
            <th>Role</th>
            <th>Tier</th>
            <th>Score</th>
            <th>Variant</th>
            <th>Status</th>
            <th>Contacted</th>
            <th>FU1 Due</th>
            <th>FU2 Due</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr><td colspan="9" class="empty"><p>Loading leads...</p></td></tr>
        </tbody>
      </table>
    </div>
  </main>
</div>

<script>
function fmt(ts){
  if(!ts)return'—';
  return new Date(ts).toLocaleDateString('en-GB',{day:'2-digit',month:'short'});
}
function fmtDue(ts){
  if(!ts)return'<span style="color:var(--dim)">—</span>';
  const d=ts-Date.now(),s=fmt(ts);
  if(d<0)return'<span class="overdue">'+s+' overdue</span>';
  if(d<86400000)return'<span class="due-soon">'+s+' · today</span>';
  if(d<172800000)return'<span class="due-soon">'+s+'</span>';
  return'<span class="date-normal">'+s+'</span>';
}
function badge(l){
  if(l.replyReceived)  return'<span class="badge replied">Replied</span>';
  if(l.pendingApproval)return'<span class="badge pending">Approval</span>';
  if(l.followup2Sent)  return'<span class="badge fu2">FU2 Sent</span>';
  if(l.followup1Sent)  return'<span class="badge fu1">FU1 Sent</span>';
  if(l.contactedAt)    return'<span class="badge contacted">Contacted</span>';
  return'<span class="badge none">—</span>';
}
function tier(t){
  if(t==='priority')return'<span class="tier-pill tier-priority">⬡ Priority</span>';
  if(t==='standard')return'<span class="tier-pill tier-standard">○ Standard</span>';
  return'<span style="color:var(--dim);font-size:12px">—</span>';
}
function variant(v){
  if(v==='A')return'<span class="variant-pill var-a">A</span>';
  if(v==='B')return'<span class="variant-pill var-b">B</span>';
  return'<span style="color:var(--dim);font-size:12px">—</span>';
}
async function load(){
  try{
    const[st,leads]=await Promise.all([
      fetch('/api/stats').then(r=>r.json()),
      fetch('/api/leads').then(r=>r.json())
    ]);
    document.getElementById('s0').textContent=st.total??'—';
    document.getElementById('s1').textContent=st.contacted??'—';
    document.getElementById('s2').textContent=st.pendingApproval??'—';
    document.getElementById('s3').textContent=st.followup1Sent??'—';
    document.getElementById('s4').textContent=st.followup2Sent??'—';
    document.getElementById('s5').textContent=st.replyReceived??'—';
    document.getElementById('s6').textContent=st.followupDueSoon??'—';
    document.getElementById('sub').textContent=
      st.total+' lead'+(st.total===1?'':'s')+' · '+
      st.contacted+' contacted · '+
      st.replyReceived+' repl'+(st.replyReceived===1?'y':'ies');
    document.getElementById('lu').textContent='Updated '+new Date().toLocaleTimeString();
    const tb=document.getElementById('tbody');
    const lc=document.getElementById('lead-count');
    if(!leads.length){
      tb.innerHTML='<tr><td colspan="9" class="empty"><p>No leads in the pipeline yet.</p></td></tr>';
      if(lc)lc.textContent='';
      return;
    }
    if(lc)lc.textContent=leads.length+' record'+(leads.length===1?'':'s');
    leads.sort((a,b)=>{
      if(a.pendingApproval&&!b.pendingApproval)return-1;
      if(!a.pendingApproval&&b.pendingApproval)return 1;
      return(b.contactedAt||0)-(a.contactedAt||0);
    });
    tb.innerHTML=leads.map(l=>`<tr>
      <td>
        <div class="company-name">${l.company||'—'}</div>
        ${l.contactName?'<div class="contact-name">'+l.contactName+'</div>':''}
      </td>
      <td style="font-size:12px;color:var(--muted)">${l.roleTargeting||'—'}</td>
      <td>${tier(l.tier)}</td>
      <td><span class="score-chip">${l.score??'—'}</span></td>
      <td>${variant(l.promptVariant)}</td>
      <td>${badge(l)}</td>
      <td class="date-normal">${fmt(l.contactedAt)}</td>
      <td>${fmtDue(!l.followup1Sent?l.followUp1Due:null)}</td>
      <td>${fmtDue(!l.followup2Sent?l.followUp2Due:null)}</td>
    </tr>`).join('');
  }catch(e){
    console.error(e);
    document.getElementById('sub').textContent='Error loading data';
  }
}
load();
setInterval(load,30000);
</script>
</body>
</html>`;
