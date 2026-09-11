<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>عقلك - Aqlak</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; font-family:'Segoe UI', Tahoma, sans-serif; }
body {
  background:#0a0f0d;
  color:#fff;
  height:100vh;
  overflow:hidden;
  position:relative;
}
body::before {
  content:'';
  position:absolute;
  width:400px; height:400px;
  background:radial-gradient(circle, rgba(0,255,120,0.25), transparent 70%);
  top:20%; right:10%;
  filter:blur(80px);
  z-index:0;
}
body::after {
  content:'';
  position:absolute;
  width:300px; height:300px;
  background:radial-gradient(circle, rgba(0,200,80,0.2), transparent 70%);
  bottom:10%; left:5%;
  filter:blur(80px);
  z-index:0;
}
.phone {
  position:relative;
  z-index:1;
  max-width:420px;
  margin:0 auto;
  height:100vh;
  display:flex;
  flex-direction:column;
  background:rgba(0,0,0,0.3);
  backdrop-filter:blur(20px);
}
.header {
  margin:12px;
  padding:14px 18px;
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.15);
  border-radius:20px;
  backdrop-filter:blur(20px);
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.header h1 { font-size:20px; font-weight:700; }
.header small { display:block; color:#7CFC9A; font-size:12px; font-weight:400; }
.header .dots { color:#7CFC9A; font-size:20px; letter-spacing:4px; }
.back { color:#7CFC9A; font-size:22px; }
.chat {
  flex:1;
  overflow-y:auto;
  padding:10px 14px;
  display:flex;
  flex-direction:column;
  gap:12px;
}
.msg-ai {
  align-self:flex-start;
  max-width:85%;
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.12);
  backdrop-filter:blur(18px);
  border-radius:18px;
  padding:12px 14px;
  font-size:14px;
  line-height:1.7;
}
.msg-ai .name { color:#7CFC9A; font-size:13px; margin-bottom:6px; display:flex; align-items:center; gap:8px; }
.msg-ai .name::before {
  content:'🧠';
  background:rgba(0,255,120,0.15);
  width:28px; height:28px;
  display:inline-flex; align-items:center; justify-content:center;
  border-radius:50%;
}
.msg-user {
  align-self:flex-end;
  max-width:80%;
  background:rgba(0,200,80,0.35);
  border:1px solid rgba(0,255,120,0.3);
  backdrop-filter:blur(18px);
  border-radius:18px;
  padding:12px 14px;
  font-size:14px;
  line-height:1.7;
}
.plan-item { display:flex; gap:8px; margin:8px 0; align-items:flex-start; }
.plan-item span.icon { background:rgba(0,255,120,0.2); width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0; }
.actions { display:flex; gap:8px; margin-top:10px; flex-wrap:wrap; }
.actions button {
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(124,252,154,0.3);
  color:#7CFC9A;
  padding:6px 12px;
  border-radius:20px;
  font-size:12px;
  cursor:pointer;
}
.input-bar {
  position:sticky;
  bottom:0;
  margin:12px;
  padding:8px 8px 8px 8px;
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.15);
  border-radius:30px;
  backdrop-filter:blur(20px);
  display:flex;
  align-items:center;
  gap:8px;
}
.input-bar input {
  flex:1;
  background:transparent;
  border:none;
  outline:none;
  color:#fff;
  font-size:15px;
  padding:10px;
}
.input-bar input::placeholder { color:rgba(255,255,255,0.4); }
.icon-btn {
  width:40px; height:40px;
  border-radius:50%;
  border:1px solid rgba(124,252,154,0.4);
  background:transparent;
  color:#7CFC9A;
  font-size:20px;
  cursor:pointer;
  display:flex; align-items:center; justify-content:center;
}
.send-btn {
  width:48px; height:48px;
  border-radius:50%;
  border:none;
  background:#7CFC9A;
  color:#000;
  font-size:22px;
  cursor:pointer;
  display:flex; align-items:center; justify-content:center;
}
</style>
</head>
<body>
<div class="phone">
  <div class="header">
    <div class="back">‹</div>
    <div style="text-align:center">
      <h1>عقلك - Aqlak</h1>
      <small>AI Assistant • Online</small>
    </div>
    <div class="dots">•••</div>
  </div>

  <div class="chat" id="chat">
    <div class="msg-ai">
      <div class="name">Aqlak AI</div>
      مرحباً! أنا عقلك - مساعدك الذكي.<br>كيف أقدر أساعدك اليوم؟
    </div>
    <div class="msg-user">
      كيف يمكنني تنظيم وقتي اليوم؟<br>أريد خطة بسيطة وسريعة ؟
    </div>
    <div class="msg-ai">
      <div class="name">Aqlak AI</div>
      بالطبع! إليك خطة يومية بسيطة وفعالة:
      <div class="plan-item"><span class="icon">✓</span><div>صباحًا: 08:00 - 08:30<br>• مراجعة المهام والأهداف لليوم</div></div>
      <div class="plan-item"><span class="icon">◷</span><div>صباحًا: 08:30 - 09:30<br>• التركيز على المهمة الأهم (Deep Work)</div></div>
      <div class="plan-item"><span class="icon">🍃</span><div>ظهرًا: 12:30 - 01:00<br>استراحة قصيرة + مشي/ماء</div></div>
      <div class="actions">
        <button onclick="alert('تم تعديل الخطة')">تعديل الخطة</button>
        <button onclick="alert('تم ضبط التذكير')">تذكير بعد ساعة</button>
        <button onclick="alert('تفاصيل أكثر')">تفاصيل أكثر</button>
      </div>
    </div>
  </div>

  <div class="input-bar">
    <button class="icon-btn">+</button>
    <input type="text" id="msgInput" placeholder="اكتب رسالتك..." onkeypress="if(event.key==='Enter') sendMsg()">
    <button class="icon-btn">🎤</button>
    <button class="icon-btn">🖼</button>
    <button class="send-btn" onclick="sendMsg()">➤</button>
  </div>
</div>

<script>
const WORKER_URL = "حط_رابط_الوركر_هنا";
async function sendMsg(){
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if(!text) return;
  const chat = document.getElementById('chat');
  const u = document.createElement('div');
  u.className='msg-user'; u.textContent=text;
  chat.appendChild(u);
  input.value='';
  chat.scrollTop = chat.scrollHeight;

  const a = document.createElement('div');
  a.className='msg-ai';
  a.innerHTML='<div class="name">Aqlak AI</div> جاري الكتابة...';
  chat.appendChild(a);
  chat.scrollTop = chat.scrollHeight;

  try{
    if(WORKER_URL.includes('حط_رابط')){
      setTimeout(()=>{ a.innerHTML='<div class="name">Aqlak AI</div> تم استلام رسالتك: "'+text+'"<br>اربط الـ Worker عشان ارد عليك بذكاء حقيقي.'; chat.scrollTop=chat.scrollHeight; },800);
      return;
    }
    const res = await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text})});
    const data = await res.json();
    a.innerHTML='<div class="name">Aqlak AI</div>'+(data.reply||data.response||'تم');
  }catch(e){
    a.innerHTML='<div class="name">Aqlak AI</div> حصل خطأ في الاتصال.';
  }
  chat.scrollTop = chat.scrollHeight;
}
</script>
</body>
</html>
