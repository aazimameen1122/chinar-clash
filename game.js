import * as THREE from 'three';

/* ============ DATA (original roster, written for this game) ============ */
const FIGHTERS = [
  { id:'omar', name:'OMAR SKIWALA', party:'Team Chinar', emoji:'🎿', accent:'#e63946',
    look:{ skin:0xeab892, top:0xf3ead8, jacket:0x9c2230, pants:0x2e2a33, hat:'karakul', hatColor:0x1c1a1a, beard:'short', beardColor:0x35302c },
    walk:2.5, jump:7.8, dmg:1.0, scale:1.0,
    special1:'SKI POLE JAB!', special2:'MANIFESTO DASH KICK!', sweep:'PHERAN SWEEP!',
    superName:'GONDOLA DROP', superDesc:'A Gulmarg gondola cable snaps and drops the cabin on the rival. 30% damage.',
    intro:'Chenab se Chinar tak!', win:'Kursi par haq hamara hai!', excuse:'"Snow was slippery," the camp explained.' },
  { id:'mehbooba', name:'MEHBOOBA MADAM', party:'Team Jhelum', emoji:'🖋️', accent:'#2fbf71',
    look:{ skin:0xdb9c72, top:0x1e7d4f, jacket:0x14563a, pants:0xe8e0cc, hat:'scarf', hatColor:0xf7f2e2, beard:'none', beardColor:0x000000 },
    walk:2.4, jump:7.6, dmg:0.98, scale:0.98,
    special1:'INKPOT SPLASH!', special2:'PEN STRIKE KICK!', sweep:'JHELUM SWEEP!',
    superName:'INK STORM', superDesc:'The giant pen-and-inkpot spills a storm of ink and resolutions. 30% damage.',
    intro:'Baatein hongi, amal bhi!', win:'Kalam ki taaqat jeeti!', excuse:'"It was only a symbolic protest," aides clarified.' },
  { id:'farooq', name:'FAROOQ DADA', party:'Team Evergreen', emoji:'💃', accent:'#ffb703',
    look:{ skin:0xc98d5f, top:0x274156, jacket:0x1b2f42, pants:0x3a3f4a, hat:'karakul', hatColor:0x3a3230, beard:'full', beardColor:0xe8e4da, glasses:true },
    walk:1.9, jump:6.8, dmg:1.06, scale:1.02,
    special1:'MIC DROP SLAP!', special2:'EVERGREEN ROUNDHOUSE!', sweep:'DANCE FLOOR SWEEP!',
    superName:'EVERGREEN DANCE', superDesc:'Forty years in politics and the dance still floors everyone. 30% damage.',
    intro:'Beta, hum tab bhi thay!', win:'Abhi toh party shuru hui hai!', excuse:'"Dada was only warming up," the family said.' },
  { id:'sajad', name:'SAJAD SOLO', party:'Team Lion', emoji:'🦁', accent:'#fb8500',
    look:{ skin:0xe0aa7e, top:0x5b4a35, jacket:0x3f3425, pants:0x2c2c34, hat:'none', hatColor:0x241f1c, beard:'full', beardColor:0x241f1c },
    walk:2.6, jump:8.0, dmg:0.97, scale:1.0,
    special1:'LION POUNCE!', special2:'HANDWARA HOOK KICK!', sweep:'SOLO SWEEP!',
    superName:'LION ROAR', superDesc:'A roar from Handwara that shakes the whole assembly hall. 30% damage.',
    intro:'Akela aaya hoon, akela kaafi hoon!', win:'Sher apni marzi ka malik hai!', excuse:'"The lion was resting, not losing," supporters roared.' },
  { id:'altaf', name:'ALTAF TYCOON', party:'Team Bat', emoji:'🏏', accent:'#4cc9f0',
    look:{ skin:0xd9a06f, top:0xdfe6ee, jacket:0x20304d, pants:0x232733, hat:'none', hatColor:0x4a4038, beard:'none', beardColor:0x000000 },
    walk:2.2, jump:7.2, dmg:1.08, scale:1.03,
    special1:'DEAL SEAL SLAP!', special2:'CONTRACT KICK!', sweep:'LEDGER SWEEP!',
    superName:'BAT BARRAGE', superDesc:'A full over of cricket-bat swings, every ball a boundary. 30% damage.',
    intro:'Deal pakki, fight pakki!', win:'Business bhi jeeta, bout bhi!', excuse:'"The tycoon has bought a rematch," markets rumoured.' },
  { id:'azad', name:'AZAD SAHAB', party:'Team Azadi', emoji:'🪣', accent:'#2ec4b6',
    look:{ skin:0xe2ac7d, top:0xe8e2d2, jacket:0x73634f, pants:0x3c3a35, hat:'none', hatColor:0xdcd6c8, beard:'short', beardColor:0xdcd6c8, glasses:true },
    walk:2.1, jump:7.0, dmg:1.02, scale:1.0,
    special1:'DELHI EXIT UPPERCUT!', special2:'RESIGNATION LETTER KICK!', sweep:'BUCKET SWEEP!',
    superName:'BUCKET TSUNAMI', superDesc:'One giant bucket, forty years of Delhi water, all at once. 30% damage.',
    intro:'Main azaad hoon, aur azaad rahunga!', win:'Azadi ka josh kabhi purana nahi hota!', excuse:'"A strategic retreat," the veteran smiled.' },
  { id:'rashid', name:'ENGINEER RASHID', party:'Team Awaaz', emoji:'📣', accent:'#b565f0',
    look:{ skin:0xd69a68, top:0x7a5230, jacket:0x5d3f22, pants:0x33291f, hat:'topi', hatColor:0xe8e0cc, beard:'full', beardColor:0x2e2620 },
    walk:2.7, jump:8.2, dmg:0.95, scale:0.99,
    special1:'MIC THROW!', special2:'AWAAZ UPPERCUT!', sweep:'LANGATE SWEEP!',
    superName:'PARLIAMENT LECTURE', superDesc:'A non-stop fiery speech. Nobody survives the full lecture. 30% damage.',
    intro:'Awaaz buland karo!', win:'Janta ki awaaz jeet gayi!', excuse:'"He was saving his voice for Parliament," fans said.' },
  { id:'sher', name:'SHER-E-KASHMIR', party:'Final Boss · The Legend', emoji:'👑', accent:'#ffd700', boss:true,
    look:{ skin:0xdfa878, top:0x8a1f2d, jacket:0x6e1420, pants:0x2e2a33, hat:'karakul', hatColor:0xf0ead8, beard:'full', beardColor:0xe8e4da },
    walk:2.3, jump:7.4, dmg:1.2, scale:1.1,
    special1:'LION CLAW!', special2:'LEGEND UPPERCUT!', sweep:'CHINAR SWEEP!',
    superName:'CHINAR JUDGEMENT', superDesc:'The great chinar itself drops every leaf in Kashmir on the rival. 30% damage.',
    intro:'Kashmir ki shaan abhi zinda hai!', win:'Sher hamesha sher hota hai!', excuse:'Legends do not give excuses.' },
];
const byId = id => FIGHTERS.find(f => f.id === id);
/* named combo finishers + victory dances (feature pattern from the REA blueprint, our own names) */
const FINISHERS = { omar:'SKI SE KURSI COMBO!', mehbooba:'KALAM TOD COMBO!', farooq:'PAANCH SAAL COMBO!', sajad:'LION MAUL COMBO!', altaf:'TYCOON TAKEOVER COMBO!', azad:'AZAADI EXPRESS COMBO!', rashid:'BINA BREAK COMBO!', sher:'SHER KA PANJA COMBO!' };
const DANCES = { omar:'GULMARG SHIMMY!', mehbooba:'JHELUM JIVE!', farooq:'DADA DISCO!', sajad:'HANDWARA HOP!', altaf:'DEAL DANCE!', azad:'BUCKET BOOGIE!', rashid:'AWAAZ WAVE!', sher:'CHINAR SHAKE!' };
const HEADLINES = [
  'Kursi ke liye do neta aamne-saamne, chai thandi ho gayi',
  'Exit polls phir galat, ladai asli result degi',
  'Manifesto sirf kagaz hai, mukka asli hai — ground report',
  'Shikara wala beech mai phasa, dono taraf se naare',
  'Ghanta Ghar ki ghanti baji, round ka faisla nazdeek',
  'Pheran ke andar chhupa tha game plan, sources ka dawa',
  'Jeetne wale ko kursi, haarne wale ko press conference',
];
const STAGES = [
  { id:'dal', name:'DAL LAKE' },
  { id:'lalchowk', name:'LAL CHOWK' },
  { id:'gulmarg', name:'GULMARG' },
];
const DIFFS = { easy:{ react:520, agg:0.35, block:0.15, name:'EASY' }, normal:{ react:340, agg:0.55, block:0.35, name:'NORMAL' }, hard:{ react:190, agg:0.8, block:0.6, name:'HARD' } };

/* ============ tiny synth SFX (no audio files) ============ */
let AC = null;
function audio(){ if(!AC) AC = new (window.AudioContext||window.webkitAudioContext)(); if(AC.state==='suspended') AC.resume(); return AC; }
function blip(f0, f1, dur, type='square', vol=0.12){
  try { const ac=audio(), o=ac.createOscillator(), g=ac.createGain();
    o.type=type; o.frequency.setValueAtTime(f0, ac.currentTime); o.frequency.exponentialRampToValueAtTime(Math.max(f1,1), ac.currentTime+dur);
    g.gain.setValueAtTime(vol, ac.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+dur);
    o.connect(g).connect(ac.destination); o.start(); o.stop(ac.currentTime+dur); } catch(e){}
}
function noiseHit(vol=0.2, dur=0.09){
  try { const ac=audio(), len=ac.sampleRate*dur, buf=ac.createBuffer(1,len,ac.sampleRate), d=buf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*(1-i/len);
    const s=ac.createBufferSource(); s.buffer=buf; const g=ac.createGain(); g.gain.value=vol;
    const f=ac.createBiquadFilter(); f.type='lowpass'; f.frequency.value=900;
    s.connect(f).connect(g).connect(ac.destination); s.start(); } catch(e){}
}
const sfx = { swing:()=>blip(300,90,0.08,'sawtooth',0.05), hit:()=>noiseHit(0.25), block:()=>blip(180,120,0.06,'square',0.08),
  ko:()=>{ blip(400,40,0.7,'sawtooth',0.18); noiseHit(0.3,0.4); }, jingle:()=>{ [523,659,784].forEach((f,i)=>setTimeout(()=>blip(f,f,0.16,'triangle',0.14), i*130)); },
  select:()=>blip(700,900,0.07,'square',0.07), super:()=>{ blip(120,900,0.5,'sawtooth',0.14); } };

/* ============ THREE setup ============ */
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 200);
camera.position.set(0, 3.1, 11.5); camera.lookAt(0, 1.5, 0);
scene.add(new THREE.HemisphereLight(0xffffff, 0x554433, 0.95));
const sun = new THREE.DirectionalLight(0xfff2dd, 1.6); sun.position.set(5, 10, 6); sun.castShadow = true; scene.add(sun);
function resize(){ const w=innerWidth, h=innerHeight; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

const mat = (c, r=0.9) => new THREE.MeshStandardMaterial({ color:c, roughness:r });
function box(w,h,d,c,x=0,y=0,z=0){ const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat(c)); m.position.set(x,y,z); m.castShadow=true; m.receiveShadow=true; return m; }
function cyl(rt,rb,h,c,x=0,y=0,z=0,seg=14){ const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,seg), mat(c)); m.position.set(x,y,z); m.castShadow=true; return m; }
function sph(r,c,x=0,y=0,z=0,sx=1,sy=1,sz=1){ const m=new THREE.Mesh(new THREE.SphereGeometry(r,20,16), mat(c)); m.position.set(x,y,z); m.scale.set(sx,sy,sz); m.castShadow=true; return m; }
function textSprite(text, size=64, color='#fff', bg=null){
  const c=document.createElement('canvas'); c.width=1024; c.height=256; const g=c.getContext('2d');
  if(bg){ g.fillStyle=bg; g.fillRect(0,0,1024,256); }
  g.fillStyle=color; g.font=`bold ${size*2}px Georgia, serif`; g.textAlign='center'; g.textBaseline='middle'; g.fillText(text, 512, 128);
  const t=new THREE.CanvasTexture(c); const m=new THREE.Mesh(new THREE.PlaneGeometry(6.4,1.6), new THREE.MeshBasicMaterial({ map:t, transparent:!bg }));
  return m;
}
let stageGroup = null, stageAnim = null;
function buildStage(id){
  if(stageGroup) scene.remove(stageGroup);
  stageGroup = new THREE.Group(); stageAnim = null;
  const S = stageGroup;
  if(id==='dal'){
    scene.background = new THREE.Color(0xa8c8e0); scene.fog = new THREE.Fog(0xa8c8e0, 26, 60);
    const water = box(80, 0.2, 40, 0x2e6da8, 0, -0.35, -6); water.receiveShadow=true; S.add(water);
    S.add(box(30, 0.35, 7, 0x8a6238, 0, 0, 0)); // wooden deck = the arena floor base
    for(const sx of [-1,1]){ // Zabarwan mountains
      const mtn = new THREE.Mesh(new THREE.ConeGeometry(11, 8, 5), mat(0x7d8a99)); mtn.position.set(sx*17, 3.4, -17); S.add(mtn);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(4.4, 3.4, 5), mat(0xf4f7f9)); cap.position.set(sx*17, 7.4, -17); S.add(cap);
    }
    for(const hx of [-11, 10.5]){ // houseboats
      S.add(box(6, 1.6, 2.6, 0x6e4525, hx, 0.7, -8.5));
      S.add(box(6.6, 0.5, 3.1, 0x3f7a52, hx, 1.75, -8.5));
      S.add(box(1.1, 1, 0.15, 0xf3d98b, hx-1.4, 0.75, -7.1));
    }
    for(const tx of [-7.5, 7.8]){ // chinar trees, autumn
      S.add(cyl(0.28, 0.42, 3.4, 0x6b4a2f, tx, 1.7, -5.5));
      S.add(sph(2, 0xd96f26, tx, 4.4, -5.5)); S.add(sph(1.5, 0xe8943a, tx-1.2, 3.6, -5.2)); S.add(sph(1.4, 0xc75b1d, tx+1.3, 3.7, -5.8));
    }
    const shikara = new THREE.Group(); // drifting shikara
    shikara.add(box(3.4, 0.35, 0.9, 0xa33b2e, 0, 0, 0)); shikara.add(box(1.4, 0.5, 0.8, 0xf3d98b, 0, 0.4, 0));
    shikara.position.set(-6, 0.05, -6.5); S.add(shikara);
    let t=0; stageAnim = dt => { t+=dt; shikara.position.x = -6 + Math.sin(t*0.25)*2.2; shikara.position.y = 0.05 + Math.sin(t*1.4)*0.06; };
  } else if(id==='lalchowk'){
    scene.background = new THREE.Color(0xe8b48a); scene.fog = new THREE.Fog(0xe8b48a, 28, 62);
    S.add(box(46, 0.3, 26, 0x9a8d80, 0, -0.15, -4));
    const tower = new THREE.Group(); // Ghanta Ghar
    tower.add(box(2.2, 9.5, 2.2, 0xb8a58e, 0, 4.75, 0));
    tower.add(box(3, 0.7, 3, 0x7a2a1e, 0, 9.8, 0));
    tower.add(cyl(0.95, 0.95, 0.3, 0xf7efe0, 0, 7.9, 1.15));
    tower.add(box(0.12, 0.8, 0.06, 0x221605, 0, 7.9, 1.32)); tower.add(box(0.55, 0.12, 0.06, 0x221605, 0.2, 7.75, 1.32));
    tower.position.set(0, 0, -11); S.add(tower);
    for(const sx of [-1,1]) for(let i=0;i<3;i++){ // shops
      const x = sx*(6.5 + i*5.2), h = 3 + (i%2);
      S.add(box(4.4, h, 3, [0xc9b18c, 0xa8b8c9, 0xd9c9a8][i], x, h/2, -9.5));
      S.add(box(4.8, 0.35, 3.4, 0x7a2a1e, x, h+0.15, -9.5));
    }
    const sign = textSprite('LAL CHOWK', 62, '#f7efe0', '#7a2a1e'); sign.position.set(0, 3.4, -7.6); S.add(sign);
  } else {
    scene.background = new THREE.Color(0xd8e6f2); scene.fog = new THREE.Fog(0xd8e6f2, 26, 58);
    S.add(box(50, 0.3, 28, 0xf2f6fa, 0, -0.15, -4));
    for(const sx of [-1,1]){ const mtn=new THREE.Mesh(new THREE.ConeGeometry(13,10,5), mat(0xe8eef4)); mtn.position.set(sx*18,4.4,-18); S.add(mtn); }
    for(let i=0;i<7;i++){ const x=-14+i*4.6, z=-6-(i%3)*2; // pines
      S.add(cyl(0.16,0.24,1.4,0x5d4030,x,0.7,z));
      const p=new THREE.Mesh(new THREE.ConeGeometry(1.25,3.4,8), mat(0x2e6b46)); p.position.set(x,3,z); p.castShadow=true; S.add(p);
    }
    S.add(box(0.35, 5.4, 0.35, 0x666c75, -5.5, 2.7, -7)); S.add(box(0.35, 5.4, 0.35, 0x666c75, 5.5, 2.7, -7)); // gondola poles
    const cable = box(11.4, 0.06, 0.06, 0x333333, 0, 5.3, -7); S.add(cable);
    const cabin = box(1.5, 1.3, 1.2, 0xd7263d, 0, 4.3, -7); S.add(cabin);
    let t=0; stageAnim = dt => { t+=dt; cabin.position.x = Math.sin(t*0.35)*4.6; };
    const sign = textSprite('GULMARG', 62, '#123', null); sign.position.set(0, 3.6, -9); S.add(sign);
  }
  scene.add(S);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(26, 6.4), new THREE.MeshStandardMaterial({ color:0x000000, transparent:true, opacity:0.14 }));
  floor.rotation.x = -Math.PI/2; floor.position.y = 0.19; floor.receiveShadow = true; S.add(floor);
}

/* ============ procedural fighter model ============ */
function limb(r, len, color){
  const g = new THREE.Group();
  const m = cyl(r, r*0.85, len, color, 0, -len/2, 0); g.add(m);
  return { g, end:m };
}
function makeModel(def){
  const L = def.look, root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  // legs
  const legL = limb(0.13, 0.95, L.pants); legL.g.position.set(0, 1.0, 0.19);
  const legR = limb(0.13, 0.95, L.pants); legR.g.position.set(0, 1.0, -0.19);
  legL.g.add(box(0.34, 0.11, 0.2, 0x2a2118, 0.08, -0.98, 0)); legR.g.add(box(0.34, 0.11, 0.2, 0x2a2118, 0.08, -0.98, 0));
  body.add(legL.g, legR.g);
  // torso: pheran (flared) + jacket front
  const torso = cyl(0.34, 0.52, 0.95, L.top, 0, 1.45, 0); body.add(torso);
  body.add(box(0.24, 0.8, 0.6, L.jacket, 0.22, 1.48, 0));
  // arms (camera-side arm does most of the visible work)
  const armL = limb(0.105, 0.82, L.jacket); armL.g.position.set(0, 1.88, 0.46);
  const armR = limb(0.105, 0.82, L.jacket); armR.g.position.set(0, 1.88, -0.46);
  armL.g.add(sph(0.13, L.skin, 0, -0.88, 0)); armR.g.add(sph(0.13, L.skin, 0, -0.88, 0));
  body.add(armL.g, armR.g);
  // head
  const head = new THREE.Group(); head.position.set(0, 2.22, 0);
  head.add(sph(0.31, L.skin, 0, 0, 0));
  if(L.beard !== 'none') head.add(sph(0.27, L.beardColor, 0.07, -0.15, 0, 0.9, 0.75, 0.92));
  if(L.hat === 'karakul') head.add(cyl(0.3, 0.33, 0.24, L.hatColor, 0, 0.24, 0));
  else if(L.hat === 'scarf'){ head.add(sph(0.35, L.hatColor, -0.03, 0.08, 0, 1, 0.92, 1)); head.add(box(0.34, 0.62, 0.6, L.hatColor, -0.14, -0.28, 0)); }
  else if(L.hat === 'topi'){ head.add(cyl(0.29, 0.3, 0.13, L.hatColor, 0, 0.26, 0)); }
  else head.add(sph(0.315, L.hatColor, 0, 0.09, 0, 1, 0.72, 1)); // hair
  if(L.glasses) head.add(box(0.05, 0.09, 0.5, 0x14100c, 0.29, 0.04, 0));
  body.add(head);
  root.scale.setScalar(def.scale);
  scene.add(root);
  return { root, body, head, armL:armL.g, armR:armR.g, legL:legL.g, legR:legR.g, torso };
}
/* pose the model from fighter state. t = seconds, atk = attack anim progress 0..1 or -1 */
function pose(F, dt, now){
  const M = F.model, moving = Math.abs(F.vx) > 0.2 && F.grounded;
  const walkPh = now * 11;
  M.body.position.y = F.crouch ? -0.34 : Math.abs(Math.sin(now*2.4)) * 0.045;
  M.body.rotation.z = 0;
  M.legL.rotation.z = moving ? Math.sin(walkPh) * 0.55 : 0;
  M.legR.rotation.z = moving ? Math.sin(walkPh + Math.PI) * 0.55 : 0;
  M.armL.rotation.z = moving ? Math.sin(walkPh + Math.PI) * 0.35 : Math.sin(now*2.4) * 0.07;
  M.armR.rotation.z = moving ? Math.sin(walkPh) * 0.35 : Math.cos(now*2.4) * 0.07;
  M.armL.rotation.x = 0; M.armR.rotation.x = 0;
  if(F.crouch){ M.legL.rotation.z = 0.9; M.legR.rotation.z = -0.5; }
  if(F.blocking){ M.armL.rotation.z = -1.5; M.armL.rotation.x = 0.7; M.armR.rotation.z = -1.5; M.armR.rotation.x = -0.7; }
  if(F.hitT > 0){ M.body.rotation.z = -0.16 * F.facing; }
  if(F.atk){
    const p = F.atk.t / F.atk.dur, ext = Math.sin(Math.min(p,1) * Math.PI); // out-and-back
    if(F.atk.type === 'punch' || F.atk.type === 'special1'){ M.armL.rotation.z = -1.65 * ext; }
    if(F.atk.type === 'special1'){ M.body.position.x = 0; M.armL.rotation.z = -1.9 * ext; }
    if(F.atk.type === 'kick' || F.atk.type === 'special2'){ M.legL.rotation.z = -1.5 * ext; }
    if(F.atk.type === 'sweep'){ M.legL.rotation.z = -1.2 * ext; M.body.position.y = -0.4; }
    if(F.atk.type === 'grab'){ M.armL.rotation.z = -1.4 * ext; M.armR.rotation.z = -1.4 * ext; }
  }
  if(!F.grounded){ M.legL.rotation.z = 0.35; M.legR.rotation.z = -0.25; }
  if(F.ko){ M.root.rotation.z = F.facing * (Math.PI/2) * Math.min(1, F.koT * 2.2); M.root.position.y = 0.25 * Math.min(1, F.koT*2.2); }
  else M.root.rotation.z = 0;
  if(F.winPose){ M.armL.rotation.z = -2.9; M.armR.rotation.z = -2.9; M.body.position.y = Math.abs(Math.sin(now*6))*0.12; }
  M.root.position.x = F.x; if(!F.ko) M.root.position.y = F.y;
  M.root.scale.x = F.def.scale * F.facing;
}

/* ============ fight state ============ */
const $ = id => document.getElementById(id);
const ARENA = 7.4, GRAV = 22;
let screen = 'title'; // title | select | fight | pause | result
let sel = { p1:'omar', p2:'mehbooba', stage:'dal', diff:'normal' };
let P1 = null, P2 = null, match = null, hitstop = 0, shake = 0, slowmo = 1;
const keys = {};
addEventListener('keydown', e => { keys[e.code] = true; onKey(e); });
addEventListener('keyup', e => { keys[e.code] = false; });
const touchState = {};
document.querySelectorAll('#touch button').forEach(b => {
  const k = b.dataset.t;
  b.addEventListener('pointerdown', e => { e.preventDefault(); touchState[k] = true; });
  b.addEventListener('pointerup', () => touchState[k] = false);
  b.addEventListener('pointerleave', () => touchState[k] = false);
});
/* virtual joystick (like the original's stick): drag = move, push up = jump, pull down = crouch */
const stickEl = document.getElementById('stick'), knobEl = document.getElementById('knob');
let stickId = null;
function stickMove(e){
  const r = stickEl.getBoundingClientRect(), cx = r.left + r.width/2, cy = r.top + r.height/2;
  let dx = (e.clientX - cx) / (r.width/2), dy = (e.clientY - cy) / (r.height/2);
  const m = Math.hypot(dx, dy); if(m > 1){ dx /= m; dy /= m; }
  knobEl.style.transform = `translate(${dx*34}px, ${dy*34}px)`;
  touchState.left = dx < -0.35; touchState.right = dx > 0.35; touchState.crouch = dy > 0.6;
  if(dy < -0.62 && !touchState._jumped){ touchState.jump = true; touchState._jumped = true; }
  if(dy > -0.3) touchState._jumped = false;
}
function stickEnd(){ stickId = null; knobEl.style.transform = ''; touchState.left = touchState.right = touchState.crouch = false; }
stickEl.addEventListener('pointerdown', e => { e.preventDefault(); stickId = e.pointerId; try { stickEl.setPointerCapture(e.pointerId); } catch(err){} stickMove(e); });
stickEl.addEventListener('pointermove', e => { if(e.pointerId === stickId) stickMove(e); });
stickEl.addEventListener('pointerup', stickEnd);
stickEl.addEventListener('pointercancel', stickEnd);

function newFighter(def, x, facing, isP1){
  return { def, model:makeModel(def), x, y:0, vx:0, vy:0, facing, isP1,
    hp:100, meter:0, grounded:true, crouch:false, blocking:false,
    atk:null, hitT:0, ko:false, koT:0, winPose:false, wins:0,
    combo:0, comboT:0, lastHitBy:null, cpuT:0, cpuPlan:null, blockT:0, superFx:null };
}
function clearFighters(){ for(const F of [P1,P2]) if(F){ scene.remove(F.model.root); } P1 = P2 = null; }

function startMatch(){
  clearFighters();
  buildStage(sel.stage);
  P1 = newFighter(byId(sel.p1), -2.6, 1, true);
  P2 = newFighter(byId(sel.p2), 2.6, -1, false);
  if(match){ P1.wins = match.w1; P2.wins = match.w2; }
  match = { round:(match ? match.round : 1), w1:P1.wins, w2:P2.wins, time:60, state:'intro', stateT:0, over:false };
  $('hname-l').textContent = P1.def.name; $('hname-r').textContent = P2.def.name;
  show('fight'); announce(`ROUND ${match.round}`); sfx.select(); startTicker();
  setTimeout(()=>{ if(match && match.state==='intro'){ match.state='fight'; announce('FIGHT!'); } }, 1150);
}
function endRound(winner, loser, byKO){
  match.state = 'end'; match.stateT = 0;
  loser.ko = true; winner.winPose = true;
  winner.wins++; if(winner.isP1) match.w1++; else match.w2++;
  announce(byKO ? 'K.O.!' : 'TIME UP!');
  if(byKO) sfx.ko();
  if(winner.wins >= 2) setTimeout(()=> announce(DANCES[winner.def.id]), 1250);
  setTimeout(()=>{
    if(winner.wins >= 2) return endMatch(winner, loser);
    match.round++; P1.wins = match.w1; P2.wins = match.w2;
    const keep = { ...match }; startMatch(); match.round = keep.round; match.w1 = keep.w1; match.w2 = keep.w2;
    P1.wins = keep.w1; P2.wins = keep.w2; announce(`ROUND ${match.round}`);
  }, 2400);
}
let tickerTimer = null, tickerIdx = 0;
function startTicker(){
  stopTicker(); tickerIdx = Math.floor(Math.random() * HEADLINES.length);
  const tick = () => { const el = $('ticker-text'); if(el) el.textContent = HEADLINES[tickerIdx++ % HEADLINES.length]; };
  tick(); tickerTimer = setInterval(tick, 4500);
}
function stopTicker(){ if(tickerTimer){ clearInterval(tickerTimer); tickerTimer = null; } }
function spawnConfetti(accent){
  const r = $('result'); r.querySelectorAll('.confetti').forEach(x => x.remove());
  const colors = [accent, '#ffd700', '#ffffff', '#ffb347'];
  for(let i = 0; i < 36; i++){ const d = document.createElement('div'); d.className = 'confetti';
    d.style.left = (2 + Math.random() * 96) + 'vw'; d.style.background = colors[i % colors.length];
    d.style.animationDelay = (Math.random() * 0.9) + 's'; d.style.animationDuration = (2.2 + Math.random() * 1.6) + 's';
    r.appendChild(d); }
}
function endMatch(winner, loser){
  match.over = true; stopTicker();
  const store = loadBoss();
  let sub = '';
  if(winner.isP1){ store.streak += 1; if(store.streak >= 3 && !store.unlocked){ store.unlocked = true; sub = '🏆 3-win streak — SHER-E-KASHMIR unlocked as BOSS!'; } else sub = `Win streak: ${store.streak}. Win ${Math.max(0, 3-store.streak)} more in a row to unlock the Boss.`; }
  else { store.streak = 0; sub = 'Streak reset. The kursi slips away…'; }
  if(winner.def.id==='sher' || loser.def.id==='sher'){ store.bestWin = winner.isP1 ? true : store.bestWin; }
  saveBoss(store); sfx.jingle();
  $('paper-date').textContent = 'SRINAGAR · ' + new Date().toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long', year:'numeric' }).toUpperCase();
  $('paper-headline').textContent = `${winner.def.name} GRABS THE KURSI! ${loser.def.name} LEFT STANDING (BARELY)`;
  $('paper-body').textContent = `${winner.def.intro} — and then the fists did the talking at ${STAGES.find(s=>s.id===sel.stage).name}. "${winner.def.win}" roared the winner, hoisting the kursi overhead. ${loser.def.excuse} Sources say the chai bhaiya has demanded compensation for three broken cups. Exit polls, as usual, were wrong.`;
  $('paper-stamp').textContent = winner.isP1 ? 'YOU WIN!' : 'YOU LOSE';
  $('paper-stamp').style.color = winner.isP1 ? '#1d7a35' : '#b3202a'; $('paper-stamp').style.borderColor = winner.isP1 ? '#1d7a35' : '#b3202a';
  $('result-sub').textContent = sub;
  show('result'); spawnConfetti(winner.def.accent);
}
const ATTACKS = {
  punch:   { dur:0.26, dmg:5,  range:1.25, kb:1.6, meter:6 },
  kick:    { dur:0.36, dmg:7,  range:1.4,  kb:2.2, meter:8 },
  special1:{ dur:0.34, dmg:9,  range:1.5,  kb:3.0, meter:10, lunge:3.2 },
  special2:{ dur:0.42, dmg:10, range:1.55, kb:3.4, meter:11, lunge:2.4 },
  sweep:   { dur:0.4,  dmg:8,  range:1.35, kb:2.6, meter:9 },
  grab:    { dur:0.44, dmg:8,  range:1.05, kb:4.2, meter:9, unblockable:true },
};
function tryAttack(F, type){
  if(F.atk || F.ko || match.state !== 'fight') return;
  const A = ATTACKS[type]; F.atk = { type, t:0, dur:A.dur, hitDone:false };
  if(A.lunge) F.vx = F.facing * A.lunge;
  sfx.swing();
}
function F_isBasic(t){ return t === 'punch' || t === 'kick'; }
function moveBanner(txt){ const b = $('move-banner'); b.textContent = txt; b.classList.remove('hidden'); clearTimeout(moveBanner._t); moveBanner._t = setTimeout(()=> b.classList.add('hidden'), 900); }
function bonusHit(att, def, dmg, label){
  def.hp = Math.max(0, def.hp - dmg); def.hitT = Math.max(def.hitT, 0.3); hitstop = 0.11; shake = 0.26;
  moveBanner(label); blip(200, 40, 0.25, 'sawtooth', 0.16); noiseHit(0.3);
}
function landHit(att, def, A){
  const blocked = def.blocking && def.grounded && !A.unblockable;
  const dmg = blocked ? Math.ceil(A.dmg * 0.12) : Math.round(A.dmg * att.def.dmg);
  def.hp = Math.max(0, def.hp - dmg);
  def.hitT = blocked ? 0.08 : 0.22;
  def.vx = att.facing * A.kb * (blocked ? 0.3 : 1);
  if(!def.grounded || A.type==='grab') { /* keep momentum */ }
  att.meter = Math.min(100, att.meter + A.meter);
  def.meter = Math.min(100, def.meter + A.meter * 0.7);
  att.combo++; att.comboT = 1.1; def.combo = 0;
  hitstop = blocked ? 0.03 : 0.065; shake = blocked ? 0.06 : 0.14;
  blocked ? sfx.block() : sfx.hit();
  /* combo sequences: punch/kick chains trigger named finishers (REA blueprint) */
  if(!blocked && (F_isBasic(att.atk?.type))){
    att.seq = att.seq || []; att.seq.push(att.atk.type === 'punch' ? 'p' : 'k'); att.seqT = 1.1;
    if(att.seq.length > 3) att.seq = att.seq.slice(-3);
    const s = att.seq.join(',');
    if(s === 'p,p,p' || s === 'p,p,k' || s === 'p,k,k'){ att.seq = []; bonusHit(att, def, 4, FINISHERS[att.def.id]); }
    else if(s.endsWith('k,k') && att.seq.length >= 2){ att.seq = []; bonusHit(att, def, 2, att.def.special2); }
  } else if(!blocked){ att.seq = []; }
  if(def.hp <= 0 && match.state === 'fight') endRound(att, def, true);
}
function doSuper(F, foe){
  if(F.meter < 100 || F.atk || match.state !== 'fight') return;
  F.meter = 0; sfx.super();
  const sb = $('super-banner'); sb.textContent = `${F.def.name}: ${F.def.superName}!`; sb.classList.remove('hidden');
  setTimeout(()=> sb.classList.add('hidden'), 1400);
  const g = new THREE.Group();
  const orb = sph(0.55, new THREE.Color(F.def.accent).getHex(), F.x + F.facing*0.8, 1.6, 0);
  g.add(orb); scene.add(g);
  F.superFx = { g, orb, vx: F.facing * 13, foe, t:0 };
  F.atk = { type:'super', t:0, dur:0.5, hitDone:true };
}

/* ============ input + CPU ============ */
function playerControl(F, foe, dt){
  const L = keys['KeyA'] || keys['ArrowLeft'] || touchState.left;
  const R = keys['KeyD'] || keys['ArrowRight'] || touchState.right;
  const fwd = F.facing > 0 ? R : L, back = F.facing > 0 ? L : R;
  F.crouch = !!((keys['KeyS'] || keys['ArrowDown']) || touchState.crouch) && F.grounded;
  F.blocking = !!back && F.grounded && !F.atk;
  if(!F.atk && match.state === 'fight'){
    if(L && !F.crouch) F.vx = -F.def.walk; else if(R && !F.crouch) F.vx = F.def.walk; else F.vx = 0;
    if((keys['KeyW'] || keys['ArrowUp'] || touchState.jump) && F.grounded && !F.crouch){ F.vy = F.def.jump; F.grounded = false; touchState.jump = false; }
  } else if(!F.atk) F.vx = 0;
  if(touchState.punch){ tryAttack(F, F.crouch ? 'punch' : (fwd ? 'special1' : 'punch')); touchState.punch = false; }
  if(touchState.kick){ tryAttack(F, F.crouch ? 'sweep' : (fwd ? 'special2' : 'kick')); touchState.kick = false; }
  if(touchState.super){ doSuper(F, foe); touchState.super = false; }
  if(touchState.grab){ tryAttack(F, 'grab'); touchState.grab = false; }
}
function onKey(e){
  if(screen === 'title' && (e.code === 'Enter' || e.code === 'Space')) return openSelect();
  if(screen === 'fight' || screen === 'pause'){
    if(e.code === 'Escape'){ if(screen==='fight'){ show('pause'); } else { show('fight'); } return; }
  }
  if(screen !== 'fight' || !P1) return;
  const F = P1;
  if(e.code === 'KeyJ') tryAttack(F, F.crouch ? 'punch' : ((F.facing>0 ? (keys['KeyD']||keys['ArrowRight']) : (keys['KeyA']||keys['ArrowLeft'])) ? 'special1' : 'punch'));
  if(e.code === 'KeyK') tryAttack(F, F.crouch ? 'sweep' : ((F.facing>0 ? (keys['KeyD']||keys['ArrowRight']) : (keys['KeyA']||keys['ArrowLeft'])) ? 'special2' : 'kick'));
  if(e.code === 'KeyI') tryAttack(F, 'grab');
  if(e.code === 'KeyL' || e.code === 'Space') doSuper(F, P2);
}
function cpuControl(F, foe, dt){
  const D = DIFFS[sel.diff];
  F.cpuT -= dt * 1000;
  const dist = Math.abs(foe.x - F.x), dirTo = Math.sign(foe.x - F.x);
  F.blocking = false;
  if(foe.atk && dist < 1.9 && Math.random() < D.block){ F.blocking = true; F.vx = 0; }
  if(F.cpuT <= 0){
    F.cpuT = D.react * (0.7 + Math.random()*0.6);
    const r = Math.random();
    if(F.meter >= 100 && dist < 6) F.cpuPlan = 'super';
    else if(dist > 1.5) F.cpuPlan = r < 0.85 ? 'approach' : 'jumpin';
    else F.cpuPlan = r < D.agg ? (r < D.agg*0.45 ? 'punch' : (r < D.agg*0.75 ? 'kick' : 'special')) : (r < D.agg + 0.25 ? 'retreat' : 'block');
  }
  if(F.atk || match.state !== 'fight') return;
  F.crouch = false;
  switch(F.cpuPlan){
    case 'approach': F.vx = dirTo * F.def.walk; break;
    case 'retreat': F.vx = -dirTo * F.def.walk * 0.8; break;
    case 'block': F.blocking = true; F.vx = 0; break;
    case 'jumpin': if(F.grounded){ F.vy = F.def.jump; F.grounded = false; } F.vx = dirTo * F.def.walk; F.cpuPlan='approach'; break;
    case 'punch': tryAttack(F, Math.random()<0.3 ? 'special1' : 'punch'); F.cpuPlan='wait'; F.vx=0; break;
    case 'kick': tryAttack(F, Math.random()<0.3 ? 'special2' : (Math.random()<0.25 ? 'sweep' : 'kick')); F.cpuPlan='wait'; F.vx=0; break;
    case 'special': tryAttack(F, Math.random()<0.5 ? 'special1' : 'special2'); F.cpuPlan='wait'; F.vx=0; break;
    case 'super': doSuper(F, foe); F.cpuPlan='wait'; break;
    default: F.vx = 0;
  }
  if(F.cpuPlan==='wait') F.vx = 0;
}

/* ============ physics + update ============ */
function stepFighter(F, foe, dt){
  if(F.ko){ F.koT += dt; pose(F, dt, performance.now()/1000); return; }
  F.hitT = Math.max(0, F.hitT - dt);
  F.comboT -= dt; if(F.comboT <= 0) F.combo = 0;
  if(F.seqT !== undefined){ F.seqT -= dt; if(F.seqT <= 0) F.seq = []; }
  if(F.atk){
    F.atk.t += dt;
    const A = ATTACKS[F.atk.type];
    if(A && !F.atk.hitDone && F.atk.t > F.atk.dur * 0.35){
      F.atk.hitDone = true;
      const inRange = Math.abs(foe.x - F.x) < A.range && Math.abs(foe.y - F.y) < 1.3 && Math.sign(foe.x - F.x) === F.facing;
      if(inRange && !foe.ko) landHit(F, foe, A);
    }
    if(F.atk.t >= (A ? A.dur : F.atk.dur)) F.atk = null;
  }
  if(!F.grounded){ F.vy -= GRAV * dt; F.y += F.vy * dt; if(F.y <= 0){ F.y = 0; F.vy = 0; F.grounded = true; } }
  if(!F.atk || !ATTACKS[F.atk.type]?.lunge) { if(!F.blocking && F.grounded && Math.abs(F.vx) > 0 && F.hitT <= 0) {} }
  F.x += F.vx * dt;
  if(F.grounded && !F.atk && F.hitT <= 0) F.vx *= Math.pow(0.0001, dt); // settle when idle-driven
  if(F.hitT > 0) {} else if(!F.atk) {}
  F.x = Math.max(-ARENA, Math.min(ARENA, F.x));
  // push apart
  const minD = 0.85, d = foe.x - F.x;
  if(Math.abs(d) < minD && !foe.ko){ const push = (minD - Math.abs(d)) / 2 * Math.sign(d || 1); F.x -= push; foe.x += push; }
  F.facing = foe.x >= F.x ? 1 : -1;
  // super projectile
  if(F.superFx){
    const fx = F.superFx; fx.t += dt; fx.orb.position.x += fx.vx * dt;
    fx.orb.scale.setScalar(1 + fx.t * 1.6);
    if(Math.abs(fx.orb.position.x - fx.foe.x) < 0.8 && fx.t > 0.05){
      if(!fx.foe.ko){ fx.foe.hp = Math.max(0, fx.foe.hp - 30); fx.foe.hitT = 0.4; fx.foe.vx = F.facing * 5; hitstop = 0.12; shake = 0.3; sfx.hit();
        if(fx.foe.hp <= 0 && match.state === 'fight') endRound(F, fx.foe, true); }
      scene.remove(fx.g); F.superFx = null;
    } else if(fx.t > 1.4){ scene.remove(fx.g); F.superFx = null; }
  }
  pose(F, dt, performance.now()/1000);
}
function updateHUD(){
  $('hp-l').style.width = P1.hp + '%'; $('hp-r').style.width = P2.hp + '%';
  $('meter-l').style.width = P1.meter + '%'; $('meter-r').style.width = P2.meter + '%';
  $('wins-l').textContent = '●'.repeat(P1.wins); $('wins-r').textContent = '●'.repeat(P2.wins);
  $('timer').textContent = Math.max(0, Math.ceil(match.time));
  $('combo-l').textContent = P1.combo > 1 ? `${P1.combo} HITS!` : '';
  $('combo-r').textContent = P2.combo > 1 ? `${P2.combo} HITS!` : '';
}
let last = performance.now();
function loop(now){
  requestAnimationFrame(loop);
  let dt = Math.min(0.05, (now - last) / 1000); last = now;
  if(stageAnim && screen !== 'select') stageAnim(dt);
  if(screen === 'fight' && P1 && P2 && match){
    if(hitstop > 0){ hitstop -= dt; }
    else {
      dt *= slowmo;
      if(match.state === 'fight'){
        match.time -= dt;
        if(match.time <= 0){ match.time = 0; const w = P1.hp === P2.hp ? (Math.random()<0.5?P1:P2) : (P1.hp > P2.hp ? P1 : P2); endRound(w, w===P1?P2:P1, false); }
        playerControl(P1, P2, dt); cpuControl(P2, P1, dt);
      }
      stepFighter(P1, P2, dt); stepFighter(P2, P1, dt);
      if(match.state === 'end'){ /* still pose winners/losers */ }
      updateHUD();
    }
    if(shake > 0){ shake = Math.max(0, shake - dt*1.4); camera.position.x = (Math.random()-0.5) * shake * 0.5; camera.position.y = 3.1 + (Math.random()-0.5) * shake * 0.4; }
    else { camera.position.x = 0; camera.position.y = 3.1; }
    const mid = (P1.x + P2.x) / 2; camera.position.x += mid * 0.16; camera.lookAt(mid * 0.3, 1.5, 0);
  }
  renderer.render(scene, camera);
}
requestAnimationFrame(loop);

/* ============ screens / UI ============ */
function show(s){
  screen = s;
  for(const id of ['title','select','pause','result']) $(id).classList.toggle('hidden', id !== s);
  $('hud').classList.toggle('hidden', !(s==='fight' || s==='pause'));
  if(s !== 'fight' && s !== 'pause') $('announce').classList.add('hidden');
}
function announce(txt){ const a = $('announce'); a.textContent = txt; a.classList.remove('hidden'); clearTimeout(announce._t); announce._t = setTimeout(()=> a.classList.add('hidden'), 1000); }
function openSelect(){ buildSelect(); show('select'); if(!localStorage.getItem('chinar-clash:legal-v1')) $('legal').classList.remove('hidden'); }

/* boss progress (localStorage) */
function loadBoss(){ try { return { streak:0, unlocked:false, ...JSON.parse(localStorage.getItem('chinar-clash:boss-v1') || '{}') }; } catch(e){ return { streak:0, unlocked:false }; } }
function saveBoss(s){ try { localStorage.setItem('chinar-clash:boss-v1', JSON.stringify(s)); } catch(e){} }

function buildSelect(){
  const grid = $('grid'); grid.innerHTML = '';
  const boss = loadBoss();
  for(const f of FIGHTERS){
    const locked = f.boss && !boss.unlocked;
    const b = document.createElement('button');
    b.className = 'tile' + (locked ? ' locked' : '') + (sel.p1===f.id ? ' sel1' : '') + (sel.p2===f.id ? ' sel2' : '');
    b.style.setProperty('--ac', f.accent);
    b.innerHTML = `${f.boss ? '<span class="bosstag">BOSS</span>' : ''}${locked ? '<span class="lock">🔒</span>' : ''}<span class="face">${locked ? '❓' : f.emoji}</span><span class="tname">${locked ? '???' : f.name}</span><span class="tparty">${f.party}</span>`;
    b.onclick = () => { if(locked){ announce(`BOSS LOCKED — WIN ${3-boss.streak} MORE IN A ROW`); return; } audio(); sfx.select();
      if(lastPick === 'p1'){ if(sel.p2 === f.id) sel.p2 = sel.p1; sel.p1 = f.id; lastPick = 'p2'; }
      else { if(sel.p1 === f.id) sel.p1 = sel.p2; sel.p2 = f.id; lastPick = 'p1'; }
      buildSelect(); };
    grid.appendChild(b);
  }
  $('boss-progress').textContent = boss.unlocked ? '👑 Boss unlocked: SHER-E-KASHMIR is on the roster!' : `👑 Boss quest: win streak ${boss.streak}/3 — win 3 matches in a row to unlock SHER-E-KASHMIR.`;
  plate('p1', byId(sel.p1)); plate('p2', byId(sel.p2));
  const sp = $('stage-pick'); sp.querySelectorAll('button').forEach(x=>x.remove());
  for(const s of STAGES){ const b = document.createElement('button'); b.textContent = s.name; if(sel.stage===s.id) b.className='on'; b.onclick=()=>{ sel.stage=s.id; buildStage(s.id); buildSelect(); }; sp.appendChild(b); }
  const dp = $('diff-pick'); dp.querySelectorAll('button').forEach(x=>x.remove());
  for(const k of Object.keys(DIFFS)){ const b = document.createElement('button'); b.textContent = DIFFS[k].name; if(sel.diff===k) b.className='on'; b.onclick=()=>{ sel.diff=k; buildSelect(); }; dp.appendChild(b); }
}
let lastPick = 'p1';
function plate(which, f){
  const p = $('plate-' + which); p.style.setProperty('--ac', f.accent);
  p.querySelector('.pname').textContent = f.name + ' · ' + f.party;
  p.querySelector('.psuper').textContent = 'SUPER: ' + f.superName;
  p.querySelector('.pdesc').textContent = f.superDesc;
}
$('start-btn').onclick = () => { audio(); openSelect(); };
$('fight-btn').onclick = () => { audio(); match = null; startMatch(); };
$('resume-btn').onclick = () => show('fight');
$('quit-btn').onclick = () => { stopTicker(); clearFighters(); match = null; buildSelect(); show('select'); };
$('rematch-btn').onclick = () => { match = null; startMatch(); };
$('select-btn').onclick = () => { stopTicker(); clearFighters(); match = null; buildSelect(); show('select'); };
$('legal-ok').onclick = () => { try { localStorage.setItem('chinar-clash:legal-v1','1'); } catch(e){} $('legal').classList.add('hidden'); };
addEventListener('pointerdown', ()=>{ if(AC && AC.state==='suspended') AC.resume(); }, { passive:true });

/* boot: ambient Dal stage behind title */
buildStage('dal');
const demo1 = newFighter(byId('omar'), -2.4, 1, true); demo1.winPose = true;
const demo2 = newFighter(byId('mehbooba'), 2.4, -1, false);
P1 = demo1; P2 = demo2; match = { state:'attract', time:60, w1:0, w2:0, round:0, over:true };
setInterval(()=>{ if(screen==='title'){ pose(demo1, 0.016, performance.now()/1000); pose(demo2, 0.016, performance.now()/1000); } }, 16);
