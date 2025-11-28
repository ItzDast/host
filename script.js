const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
months.forEach((m,i)=>{let o=document.createElement('option');o.value=i+1;o.textContent=m;monthSelect.appendChild(o);});
const thisYear=new Date().getFullYear();
for(let y=thisYear;y>=1900;y--){let o=document.createElement('option');o.value=y;o.textContent=y;yearSelect.appendChild(o);}
function updateDays(){const m=parseInt(monthSelect.value),y=parseInt(yearSelect.value);const dM=new Date(y,m,0).getDate();let sel=parseInt(daySelect.value)||1;if(sel>dM)sel=dM;daySelect.innerHTML='';for(let d=1;d<=dM;d++){let o=document.createElement('option');o.value=d;o.textContent=d;if(d===sel)o.selected=true;daySelect.appendChild(o);}}
monthSelect.addEventListener('change',updateDays);yearSelect.addEventListener('change',updateDays);updateDays();

function plural(num, one, two, five) {
  num = Math.abs(num) % 100;
  const n1 = num % 10;
  if (num > 10 && num < 20) return five;
  if (n1 > 1 && n1 < 5) return two;
  if (n1 === 1) return one;
  return five;
}

function calculateAge() {
  const d=parseInt(daySelect.value),m=parseInt(monthSelect.value)-1,y=parseInt(yearSelect.value);
  const birth=new Date(y,m,d);const now=new Date();
  if(birth>now){
    result.querySelector('.result-text').innerHTML='Дата рождения не может быть в будущем!';
    result.classList.add('visible');
    return;
}
  const diffMs=now-birth;
  const s=Math.floor(diffMs/1000),min=Math.floor(s/60),h=Math.floor(min/60),days=Math.floor(h/24);
  let years=now.getFullYear()-y;let monthsC=now.getMonth()-m;if(monthsC<0){years--;monthsC+=12;}
  const totalMonths=years*12+monthsC;
  const yText=plural(years,'год','года','лет');
  const mText=plural(monthsC,'месяц','месяца','месяцев');
  
  result.querySelector('.result-text').innerHTML = `
    <div id="dayscopy" onclick="copy()">🗓️ <b>${days.toLocaleString()}</b> дней<br></div>
    📆 ${years} ${yText}, ${monthsC} ${mText}<br>
    🕓 всего ${totalMonths} ${plural(totalMonths,'месяц','месяца','месяцев')}<br>
    ⏰ ${h.toLocaleString()} часов<br>
    ⏱️ ${min.toLocaleString()} минут<br>
    ⏳ ${s.toLocaleString()} секунд`;
  result.classList.add('visible');
}

copyBtn.addEventListener("click", async () => {
  if (!result.classList.contains("visible")) return;
  try {
    const text = result.querySelector(".result-text").innerText;
    await navigator.clipboard.writeText(text);
    showCopied();
  } catch (err) {
    console.error("Ошибка копирования:", err);
  }
});

function showCopied() {
  const msg = document.createElement("div");
  msg.className = "copied";
  msg.textContent = "✓ Скопировано!";
  result.appendChild(msg);
  setTimeout(()=>msg.remove(),1200);
}
let fire = 520;
const startday = new Date(2025, 10, 22)
let today = new Date();
let days = Math.floor((today - startday) / (1000 * 60 * 60 * 24));
document.getElementById("fireday").textContent ="🔥"+(fire + days);

function copy() {
  var copyText = document.getElementById("dayscopy");
  navigator.clipboard.writeText(copyText.textContent)
}

fetch("https://api.ipify.org?format=json")
.then(res => res.json())
.then(data => console.log("Твой айпи:", data.ip+" 🌐"+"\nну все взламали тебя щас майнер тебе скачаю😈😈😈👹👹💀💀☠️☠️"+'\n\n'+new Date()+"\n\nогонек уже🔥"+(fire + days)))
.catch(err => console.error(err));

navigator.geolocation.getCurrentPosition(
  pos => {
    console.log("Твоя геолокация получена:");
    console.log("Широта:", pos.coords.latitude);
    console.log("Долгота:", pos.coords.longitude);
    // console.log("Точность (метров):", pos.coords.accuracy);
  },
  err => {
    console.error("Ошибка:", err.message);
  }
);


const img = new Image();
img.crossOrigin = "anonymous"; 
img.src = "abdi.png";

img.onload = () => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const dataURL = canvas.toDataURL();

  console.log(
    "%c ",
    `
      padding: 200px;
      background-image: url(${dataURL});
      background-size: contain;
      background-repeat: no-repeat;
    `
  );
};
const now = new Date(),year = now.getFullYear(),month = now.getMonth() + 1,date = now.getDate(),hours = now.getHours(),minutes = now.getMinutes(),seconds = now.getSeconds();console.log(`\n%c  ------------------  \n%c〔Date: [${date}.${month}.${year}]〕\n%c〔Time: [${hours}: ${minutes}: ${seconds}]〕\n%c  ------------------  `, 'color: green; font-weight: bold; background-color: #0a0a0aff', 'color: green; font-weight: bold; background-color: #0a0a0aff', 'color: green; font-weight: bold; background-color: #0a0a0aff', 'color: green; font-weight: bold; background-color: #0a0a0aff;');
