    
    // get users name 
    let name = prompt('Enter Your Name','Guest');

    // welcome pop up 
    alert(`Welcome ${name} to Online Clock`);
    // Display-time 
    let a;
    let date;
    let time;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setInterval(() => {
        a= new Date;
        date = a.toLocaleDateString(undefined,options);
        //get hour , time and mintes 
        let hours = a.getHours();
        let minutes = a.getMinutes();
        let secoonds = a.getSeconds();

        //display time in 2 digits
        hours = hours <= 9 ? '0' + hours : hours;
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        secoonds = secoonds <= 9 ? '0' + secoonds : secoonds;

        time = hours + ':' + minutes + ':' + secoonds;
        document.getElementById('time').innerHTML= time +"</br> On  " +date ;
        
    }, 1000);

    // show-more fuction 
    function show() {
        let show = document.getElementById('show_more');
        if (show.style.display != 'block') {
            document.getElementById('show_more').innerHTML="This time is according to - </br> Time zone in India (GMT+5:30)"
            document.querySelector('.button').innerText="Show less"
            show.style.display = 'block';
        }
        else{
            document.querySelector('.button').innerText="Show more"
            show.style.display = 'none'
        }
        
    }