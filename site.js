'use strict';
const steps = [
 {title:'The update belongs to the same story.',copy:'The person corrects a reading session from 15 to 25 minutes, switches back to Project Cedar, then returns to reading. The assistant distinguishes the goal from the recorded activity.',image:'conversation.png',alt:'Actual conversation correcting reading time, recalling Project Cedar, and returning to the reading goal.',caption:'Actual prototype · chat and memory continuity'},
 {title:'A correction changes the record.',copy:'The generated reading log shows The Alchemist, 25 minutes, September 20. The daily goal remains 20 minutes. This saved record was also reopened after an offline restart.',image:'reading.png',alt:'Generated Reading Log with a 20-minute daily goal and one 25-minute session for The Alchemist.',caption:'Actual prototype · corrected local record'},
 {title:'Different needs, one conversation.',copy:'The existing Project Cedar tracker retains Mira as the owner, October 8 as the deadline, and Done as the status. The reading conversation did not replace this project.',image:'project.png',alt:'Generated Project Cedar tracker with Mira owning the draft due October 8, marked Done.',caption:'Actual prototype · existing project tracker'}
];
document.querySelectorAll('.demo-step').forEach(button=>button.addEventListener('click',()=>{
 const step=steps[Number(button.dataset.step)];
 document.querySelectorAll('.demo-step').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
 document.getElementById('step-title').textContent=step.title;
 document.getElementById('step-copy').textContent=step.copy;
 const image=document.getElementById('demo-image');image.src='assets/'+step.image;image.alt=step.alt;
 document.getElementById('demo-caption').textContent=step.caption;
}));
