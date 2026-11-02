let p="cm",y="kg";const B={"1.2":"You have a sedentary job and do little or no planned exercise. You mostly sit throughout the day.","1.375":"You exercise lightly 1–3 days per week or do a moderate amount of walking. You have a desk job.","1.55":"You train 3–5 days per week consistently with moderate-intensity workouts.","1.725":"You train hard 6–7 days per week or have a physically demanding job with regular exercise.","1.9":"You have both a physical job AND train intensely daily. This is relatively rare."};window.setHeightUnit=function(i){p=i;const r=document.getElementById("unit-cm"),n=document.getElementById("unit-ft"),o=document.getElementById("height-cm-wrap"),e=document.getElementById("height-ft-wrap");if(i==="cm")r.classList.add("active"),n.classList.remove("active"),o.classList.remove("hide"),e.classList.remove("show"),e.style.display="none";else{n.classList.add("active"),r.classList.remove("active"),o.classList.add("hide"),e.style.display="",e.classList.add("show");const a=parseFloat(document.getElementById("height-cm").value)||175,s=Math.round(a/2.54),t=Math.floor(s/12),d=s%12;document.getElementById("height-ft").value=t.toString(),document.getElementById("height-in").value=d.toString()}};window.setWeightUnit=function(i){y=i;const r=document.getElementById("wunit-kg"),n=document.getElementById("wunit-lbs"),o=document.getElementById("weight"),e=document.getElementById("weight-unit-label"),a=parseFloat(o.value)||75;i==="kg"?(r.classList.add("active"),n.classList.remove("active"),o.value=Math.round(a/2.205).toString(),o.placeholder="Weight in kg",e&&(e.textContent="kilograms")):(n.classList.add("active"),r.classList.remove("active"),o.value=Math.round(a*2.205).toString(),o.placeholder="Weight in lbs",e&&(e.textContent="pounds"))};const c=document.getElementById("activity"),u=document.getElementById("activity-desc");function f(){u&&c&&(u.textContent=B[c.value]||"")}c?.addEventListener("change",f);f();document.getElementById("calc-btn")?.addEventListener("click",()=>{const i=parseFloat(document.getElementById("age").value),r=document.getElementById("sex").value,n=parseFloat(document.getElementById("activity").value),o=parseFloat(document.getElementById("weight").value);let e,a;if(p==="cm")e=parseFloat(document.getElementById("height-cm").value);else{const x=parseFloat(document.getElementById("height-ft").value)||0,w=parseFloat(document.getElementById("height-in").value)||0;e=(x*12+w)*2.54}if(a=y==="kg"?o:o/2.205,!i||!e||!a||i<15||i>80){alert("Please fill in all fields with valid values.");return}const s=r==="male"?10*a+6.25*e-5*i+5:10*a+6.25*e-5*i-161,t=Math.round(s*n),d=Math.round(t-400),v=Math.round(t-200),h=t,m=Math.round(t+250),g=Math.round(t+400),b={"1.2":"Sedentary","1.375":"Lightly Active","1.55":"Moderately Active","1.725":"Very Active","1.9":"Extra Active"}[n.toString()]||"Moderate",l=document.getElementById("result");l&&(l.style.display="block",l.innerHTML=`
    <!-- Main TDEE result -->
    <div style="background:linear-gradient(135deg,var(--accent-bg),var(--bg));border:2px solid var(--accent-border);border-radius:var(--radius-2xl);padding:28px;margin-bottom:16px;text-align:center;">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--accent-hover);margin-bottom:6px;">Your Maintenance Calories</div>
      <div style="font-family:'Poppins',sans-serif;font-size:3.5rem;font-weight:900;color:var(--accent);letter-spacing:-0.04em;line-height:1;">${t.toLocaleString()}</div>
      <div style="font-size:1rem;color:var(--text-2);margin-top:4px;">calories per day</div>
      <div style="font-size:0.8rem;color:var(--text-3);margin-top:8px;">Activity: ${b} · ${r==="male"?"Male":"Female"} · ${Math.round(a)}kg · ${Math.round(e)}cm</div>
      <div style="font-size:0.78rem;color:var(--text-3);margin-top:4px;">BMR: ${Math.round(s).toLocaleString()} cal/day (at complete rest)</div>
    </div>

    <!-- Goal-based targets -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:16px;">
      <div style="background:var(--surface);border:1px solid var(--border);border-left:4px solid #06B6D4;border-radius:var(--radius-lg);padding:16px;">
        <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#06B6D4;margin-bottom:6px;">🏖️ Aggressive Cut</div>
        <div style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:800;color:#06B6D4;">${d.toLocaleString()}</div>
        <div style="font-size:0.72rem;color:var(--text-3);">cal/day · −${t-d} deficit</div>
        <div style="font-size:0.72rem;color:var(--text-3);margin-top:3px;">~0.5kg/week fat loss</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-left:4px solid #93C5FD;border-radius:var(--radius-lg);padding:16px;">
        <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#60A5FA;margin-bottom:6px;">✂️ Mild Cut</div>
        <div style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:800;color:#60A5FA;">${v.toLocaleString()}</div>
        <div style="font-size:0.72rem;color:var(--text-3);">cal/day · −${t-v} deficit</div>
        <div style="font-size:0.72rem;color:var(--text-3);margin-top:3px;">~0.25kg/week fat loss</div>
      </div>
      <div style="background:var(--accent-bg);border:2px solid var(--accent-border);border-radius:var(--radius-lg);padding:16px;grid-column:1/-1;">
        <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-hover);margin-bottom:6px;">⚖️ Maintenance</div>
        <div style="font-family:'Poppins',sans-serif;font-size:1.75rem;font-weight:900;color:var(--accent);">${h.toLocaleString()} cal/day</div>
        <div style="font-size:0.78rem;color:var(--text-2);margin-top:4px;">Eat at this level to maintain your current weight</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-left:4px solid #FB923C;border-radius:var(--radius-lg);padding:16px;">
        <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#FB923C;margin-bottom:6px;">💪 Lean Bulk</div>
        <div style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:800;color:#FB923C;">${m.toLocaleString()}</div>
        <div style="font-size:0.72rem;color:var(--text-3);">cal/day · +${m-t} surplus</div>
        <div style="font-size:0.72rem;color:var(--text-3);margin-top:3px;">Muscle gain, minimal fat</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-left:4px solid #F59E0B;border-radius:var(--radius-lg);padding:16px;">
        <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#F59E0B;margin-bottom:6px;">🏋️ Aggressive Bulk</div>
        <div style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:800;color:#F59E0B;">${g.toLocaleString()}</div>
        <div style="font-size:0.72rem;color:var(--text-3);">cal/day · +${g-t} surplus</div>
        <div style="font-size:0.72rem;color:var(--text-3);margin-top:3px;">Faster muscle, more fat</div>
      </div>
    </div>

    <div style="padding:14px 16px;background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius-lg);font-size:0.78rem;color:var(--text-3);">
      ⚠️ These are estimates. Track your actual weight over 2–3 weeks at maintenance and adjust by 100–150 cal if needed. Individual metabolism varies by 10–15%.
    </div>
  `,l.scrollIntoView({behavior:"smooth",block:"start"}))});
