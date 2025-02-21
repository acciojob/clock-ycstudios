//your JS code here. If required.

setInterval(() => {
    const timer=document.getElementById('timer');
    const date=new Date();
    timer.textContent=`${date.toLocaleDateString()},${date.toLocaleTimeString()}`
}, 1000);

