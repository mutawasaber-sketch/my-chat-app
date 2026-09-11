<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aqlak - عقلك</title>
<style>
*{box-sizing:border-box;font-family:'Segoe UI',Tahoma}
body{margin:0;min-height:100vh;background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);display:flex;flex-direction:column;align-items:center;color:#fff}
.glass{background:rgba(255,255,255,.1);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,.2);border-radius:20px}
#header{width:95%;max-width:600px;margin:15px;padding:15px;text-align:center}
#header h1{margin:0;font-size:24px}
#header span{color:#4ade80;font-size:14px}
#chat{width:95%;max-width:600px;height:55vh;overflow-y:auto;padding:15px;margin-bottom:10px}
.msg{padding:10px 15px;margin:8px 0;border-radius:15px;max-width:80%}
.user{background:#4f46e5;margin-right:auto}
.ai{background:rgba(255,255,255,.15);margin-left:auto}
#controls{width:95%;max-width:600px;padding:15px;display:flex;flex-direction:column;gap:10px}
#keyRow{display:flex;gap:8px}
input,button{border:none;border-radius:12px;padding:12px;font-size:16px}
input{flex:1;background:rgba(0,0,0,.3);color:#fff;outline:none}
button{background:#22c55e;color:#fff;font-weight:bold;cursor:pointer;min-width:90px}
button:hover{opacity:.9}
#inputRow{display:flex;gap:8px}
</style>
</head>
<body>
<div id="header" class="glass">
<h1>Aqlak - عقلك</h1>
<span>● AI Assistant • Online</span>
</div>
<div id="chat" class="glass"></div>
<div id="controls" class="glass">
<div id="keyRow">
<input type="password" id="apiKey" placeholder="حط مفتاح API هنا...">
<button onclick="saveKey()">حفظ</button>
</div>
<div id="inputRow">
<input type="text" id="msgInput" placeholder="مرحبا... اكتب رسالتك">
<button onclick="sendMsg()">إرسال</button>
</div>
<button onclick="setReminder()" style="background:#3b82f6">تذكير بعد ساعة</button>
</div>
<script>
let key = localStorage.getItem('aqlak_key') || '';
if(key) document.getElementById('apiKey').value = key;
function saveKey(){
 key = document.getElementById('apiKey').value.trim();
 localStorage.setItem('aqlak_key',key);
 alert('تم حفظ المفتاح');
}
function addMsg(t,c){let d=document.createElement('div');d.className='msg '+c;d.textContent=t;document.getElementById('chat').appendChild(d);document.getElementById('chat').scrollTop=9999}
async function sendMsg(){
 let inp=document.getElementById('msgInput');let txt=inp.value.trim();if(!txt)return;
 if(!key){alert('حط المفتاح الأول');return}
 addMsg(txt,'user');inp.value='';addMsg('...','ai');
 try{
  let r=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({model:'gpt-4o-mini',messages:[{role:'user',content:txt}]})});
  let j=await r.json();document.querySelectorAll('.ai').pop().remove();
  addMsg(j.choices[0].message.content,'ai');
 }catch(e){document.querySelectorAll('.ai').pop().remove();addMsg('خطأ في الاتصال بالمفتاح','ai')}
}
function setReminder(){
 Notification.requestPermission().then(p=>{
  setTimeout(()=>{new Notification('mutawasaber-sketch.github.io',{body:'تم ضبط التذكير'});alert('يعرض موقع mutawasaber-sketch.github.io\nتم ضبط التذكير')},2000);
 });
}
document.getElementById('msgInput').addEventListener('keypress',e=>{if(e.key==='Enter')sendMsg()});
addMsg('أهلا بيك في عقلك! حط المفتاح وابدأ','ai');
</script>
</body>
</html>
