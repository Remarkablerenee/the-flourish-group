document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));

const pageName=location.pathname.split('/').pop().replace(/\.html$/,'')||'home';
document.body.dataset.page=pageName==='index'?'home':pageName;

const concierge=document.createElement('div');
concierge.innerHTML=`<button class="concierge-trigger" type="button" aria-expanded="false" aria-controls="tfg-concierge-panel">AI Concierge</button>
<section class="concierge-panel" id="tfg-concierge-panel" role="dialog" aria-modal="false" aria-labelledby="tfg-concierge-title">
  <header class="concierge-head"><strong id="tfg-concierge-title">THE FLOURISH GROUP</strong><p>How can we help you move forward?</p><button class="concierge-close" type="button" aria-label="Close concierge">×</button></header>
  <div class="concierge-body"><p class="concierge-greeting">Choose a topic to get started.</p><div class="concierge-choices"></div><div class="concierge-answer" aria-live="polite" hidden></div></div>
  <footer class="concierge-foot">Guided answers from the information on this site.</footer>
</section>`;
document.body.append(concierge);
const conciergeButton=concierge.querySelector('.concierge-trigger');
const panel=concierge.querySelector('.concierge-panel');
const closeButton=concierge.querySelector('.concierge-close');
const answer=concierge.querySelector('.concierge-answer');
const topics=[
  {label:'Services',text:'Explore flexible support for your digital presence, business ideas, and marketing direction.',href:'services.html',link:'View Services'},
  {label:'Opportunities',text:'See the current opportunities and ways to connect with The Flourish Group.',href:'opportunities.html',link:'View Opportunities'},
  {label:'Resources',text:'Browse practical resources and information gathered to support your next steps.',href:'resources.html',link:'Explore Resources'},
  {label:'About TFG',text:'Learn more about The Flourish Group and its approach to helping ideas move forward.',href:'about.html',link:'About TFG'},
  {label:'Something else',text:'For questions not covered here, contact the team at hello@theflourishgroup.co.',href:'mailto:hello@theflourishgroup.co',link:'Email The Flourish Group'}
];
const choices=concierge.querySelector('.concierge-choices');
topics.forEach(topic=>{const choice=document.createElement('button');choice.className='concierge-choice';choice.type='button';choice.textContent=topic.label;choice.addEventListener('click',()=>{answer.replaceChildren();const copy=document.createElement('p');copy.textContent=topic.text;const link=document.createElement('a');link.href=topic.href;link.textContent=topic.link;answer.append(copy,link);answer.hidden=false;});choices.append(choice);});
conciergeButton.addEventListener('click',()=>{const open=panel.classList.toggle('is-open');conciergeButton.setAttribute('aria-expanded',String(open));if(open)closeButton.focus();});
closeButton.addEventListener('click',()=>{panel.classList.remove('is-open');conciergeButton.setAttribute('aria-expanded','false');conciergeButton.focus();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panel.classList.contains('is-open')){panel.classList.remove('is-open');conciergeButton.setAttribute('aria-expanded','false');conciergeButton.focus();}});
