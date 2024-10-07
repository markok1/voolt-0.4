gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

if ( document.querySelector('#section1') ){

function shineAnimation(el,del) {
    var scale1 = gsap.utils.random(.84, .96);
    var scale2 = 1 + (1-scale1);
   // console.log(window.screen.width)
    if (window.screen.width<768){
    	var y1 = gsap.utils.random(50, 100);
    	var x1 = gsap.utils.random(-50, 50) + "px";
    } else {
    	var y1 = gsap.utils.random(150, 450);
    	var x1 = gsap.utils.random(-150, 150) + "px";
    }
    
    //var del = gsap.utils.random(0, 5);
    dur = gsap.utils.random(5, 5);

    gsap.set(el, {"margin-left":x1, y:y1, alpha:0, scale:scale1, delay:del, duration:0, ease: Linear.easeNone})
    gsap.to(el, { y:y1*0.5, alpha:1, scale:1, delay:del, duration:dur, ease: Linear.easeNone})
    gsap.to(el, { y:0, alpha:0, scale:scale2, delay:(del+dur), duration:dur, ease: Linear.easeNone, onComplete:shineAnimation, onCompleteParams:[el,0]});
  }

shineAnimation('#shine_1',0);
shineAnimation('#shine_2',1);
shineAnimation('#shine_3',2);
shineAnimation('#shine_4',3);
shineAnimation('#shine_5',4);
shineAnimation('#shine_6',5);

var js_left1 = [], js_top1 = [], delay1;


var i, points, points2, margLeft, t8, t8_1;

points = 1, points2 = 1;

var t8_duration;

function set_anim_parameters(anim_id,class_name1){
	 i=0;
	
	//set start positions on 6 points
	document.querySelectorAll(class_name1).forEach((element) => {
		anim_id.set(element, {'bottom':'auto', 'top':'82%', 'left':'50%', xPercent:-50, yPercent:0, alpha:0});
		if (points==1){
			margLeft = getRandomInt(1,6)+'%';
		} else if (points==2){
			margLeft = getRandomInt(10,22)+'%';
		} else if (points==3){
			margLeft = getRandomInt(-6,-1)+'%';
		} else if (points==4){
			margLeft = getRandomInt(-35,-25)+'%';
		} else if (points==5){
			margLeft = getRandomInt(-22,-10)+'%';
		} else if (points==6){
			margLeft = getRandomInt(25,35)+'%';
		}
		//console.log(margLeft)
		anim_id.set(element, {'margin-left':margLeft});
		points++;
		if (points>6){
			points = 1;
		}
	});

	i=0;

js_left1 = [];
	document.querySelectorAll(class_name1).forEach((element) => {
		if (i>0){
			delay1 = -4;
		} else {
			delay1 = 0;
		}
	
		js_left1[i] = Math.round(v_glow_1.clientWidth/element.clientWidth)*14;
		
		if (points2==1){
			js_left1[i] = 50 + getRandomInt(js_left1[i]*0.1,js_left1[i]);
		} else if (points2==2){
			js_left1[i] = 50 + getRandomInt(js_left1[i]*0.1,js_left1[i]);
		} else if (points2==3){
			js_left1[i] = -50 + getRandomInt(-js_left1[i],-js_left1[i]*0.1);
		} else if (points2==4){
			js_left1[i] = -50 + getRandomInt(-js_left1[i],-js_left1[i]*0.1);
		} else if (points2==5){
			js_left1[i] = -50 + getRandomInt(-js_left1[i],-js_left1[i]*0.1);
		} else if (points2==6){
			js_left1[i] = 50 + getRandomInt(js_left1[i]*0.1,js_left1[i]);
		}
	
		js_top1[i] = Math.round(section1.clientHeight/element.clientHeight)*86;
		
		
		anim_id.to(element, {
			
		    motionPath:{
		    	path:[{yPercent:0, alpha:0, xPercent:-50}, {alpha:1, yPercent:-js_top1[i]/2, xPercent:-50}, {alpha:0,yPercent:-js_top1[i], xPercent:js_left1[i]}  ],
				start:0,
			    end:1
		    },
			duration: 5, 
			ease: Linear.easeNone,
			//ease:Power3.easeInOut,
			delay:delay1,
			onStart:function(){
				
			}
		})

points2++;
		if (points2>6){
			points2 = 1;
		}
		i++;
	});

t8_duration = t8.totalDuration();
	

		//t8.add(t8.totalDuration());
}

function js_phone_anim(){
	 t8 = gsap.timeline({
		//repeat: -1,
        paused: false,
        delay:0,
 		repeatRefresh: true,
 		onComplete: function(){		
 			t8.kill();
 			js_phone_anim();
 		}

	});
	 set_anim_parameters(t8,'.animate_js_1_2')
	
}		

var first_time = 1, delay_n = 13.4;

function js_phone_anim2(){
	//console.log(t8_duration)
	 t8_1 = gsap.timeline({
		 delay: delay_n,
        paused: false,
       
 		repeatRefresh: true,
 		onComplete: function(){		
 			t8_1.kill();
 			js_phone_anim2();
 		}

	});
	 set_anim_parameters(t8_1,'.animate_js_1_1');

	 if (first_time==1){
		first_time = 0;
		delay_n = 10.0;
	}
	
}	
	//js_phone_anim();	
		
		function anim_init(){
			document.querySelectorAll('.animate_js_1').forEach((element,i) => {
				if (i<3){
					element.classList.add('animate_js_1_1');
				} else {
					element.classList.add('animate_js_1_2');
				}
				
			})
			js_phone_anim();
			js_phone_anim2();
		}
		

		//window.onload = anim_init;
		window.addEventListener("load", anim_init )
	}

window.addEventListener("load", function(){
//js_slider_move1
if ( document.querySelector('#js_slider_move1') ){
	var js_slider_move1_duration =  document.querySelector('#js_slider_move1').clientHeight/50;

	if (document.querySelector('#js_slider_move1').clientWidth > document.querySelector('#js_slider_move1').clientHeight) {
		js_slider_move1_duration = document.querySelector('#js_slider_move1').clientWidth/30;
	}

	//window.addEventListener("load", anim_init )

	var js_slider_move1_dublicate = document.querySelector('#js_slider_move1').outerHTML.replace('js_slider_move1','js_slider_move1_1');
	//console.log(js_slider_move1_dublicate)

	document.querySelector('#js_slider_move1').parentNode.innerHTML = document.querySelector('#js_slider_move1').outerHTML + js_slider_move1_dublicate;

	document.querySelector('#js_slider_move1').classList.add('js_move1');
	document.querySelector('#js_slider_move1_1').classList.add('js_move1');
	
	document.querySelector('#js_slider_move1').style.animationDuration = js_slider_move1_duration+'s';
	document.querySelector('#js_slider_move1_1').style.animationDuration = js_slider_move1_duration+'s';


	/*
	var t10 = gsap.timeline({
		repeat: -1,
		repeatDelay: 0,
        paused: false
	});

	t10
	.to('#js_slider_move1,#js_slider_move1_1', {
		yPercent:-100,
			duration: js_slider_move1_duration, 
			ease: Linear.easeNone,
			delay:0
		})
	*/
}
if ( document.querySelector('#js_slider_move3') ){
	var js_slider_move3_duration =  document.querySelector('#js_slider_move3').clientHeight/50;

	if (document.querySelector('#js_slider_move3').clientWidth > document.querySelector('#js_slider_move3').clientHeight) {
		js_slider_move3_duration = document.querySelector('#js_slider_move3').clientWidth/30;
	}

	//window.addEventListener("load", anim_init )

	var js_slider_move3_dublicate = document.querySelector('#js_slider_move3').outerHTML.replace('js_slider_move3','js_slider_move3_1');
	//console.log(js_slider_move1_dublicate)

	document.querySelector('#js_slider_move3').parentNode.innerHTML = document.querySelector('#js_slider_move3').outerHTML + js_slider_move3_dublicate;

	document.querySelector('#js_slider_move3').classList.add('js_move1');
	document.querySelector('#js_slider_move3_1').classList.add('js_move1');
	
	document.querySelector('#js_slider_move3').style.animationDuration = js_slider_move3_duration+'s';
	document.querySelector('#js_slider_move3_1').style.animationDuration = js_slider_move3_duration+'s';

}
if ( document.querySelector('#js_slider_move2') ){
	var js_slider_move1_duration2 =  document.querySelector('#js_slider_move2').clientHeight/50;

	//window.addEventListener("load", anim_init )

	var js_slider_move1_dublicate = document.querySelector('#js_slider_move2').outerHTML.replace('js_slider_move2','js_slider_move2_1');
	//console.log(js_slider_move1_dublicate)

	document.querySelector('#js_slider_move2').parentNode.innerHTML = document.querySelector('#js_slider_move2').outerHTML + js_slider_move1_dublicate;

	document.querySelector('#js_slider_move2,#js_slider_move2_1').classList.add();

	document.querySelector('#js_slider_move2').classList.add('js_move2');
	document.querySelector('#js_slider_move2_1').classList.add('js_move2');
	
	document.querySelector('#js_slider_move2').style.animationDuration = js_slider_move1_duration2+'s';
	document.querySelector('#js_slider_move2_1').style.animationDuration = js_slider_move1_duration2+'s';

	/*
	var t11 = gsap.timeline({
		repeat: -1,
		repeatDelay: 0,
        paused: false
	});

	t11
	.set('#js_slider_move2,#js_slider_move2_1', {yPercent:-100})
	.to('#js_slider_move2,#js_slider_move2_1', {
		yPercent:0,
			duration: js_slider_move1_duration2, 
			ease: Linear.easeNone,
			delay:0
		})
	*/
}
})


window.addEventListener("load", function(){

if(document.querySelector('.odometr1')){
	gsap.from('.odometr1', {
		scrollTrigger: {
		    trigger: '.odometr1',
		    start: 'top bottom',
				end:'top top',
				scrub:false,
				delay:0
		  },  
		y: 0,
		duration:0.1,
		ease: "none",
		onStart: function(){
			var val1 = document.querySelector('.odometr1').getAttribute('data-num')-0+getRandomInt(1,10);
			var el1 = document.querySelector('.odometr1');
			var od1 = new Odometer({
			  el: el1,
			  value: 0,
			  // Any option (other than auto and selector) can be passed in here
			  format: '',
			  theme: 'digital'
			});
			od1.update(val1);
			setInterval(function(){
				val1 += getRandomInt(1,10);
				od1.update(val1)
			},4900);
		}
	});
}
if(document.querySelector('.odometr2')){
	gsap.from('.odometr2', {
		scrollTrigger: {
		    trigger: '.odometr2',
		    start: 'top bottom',
				end:'top top',
				scrub:false,

		  },  
		y: 0,
		duration:0.1,
		ease: "none",
		delay:1.5,
		onStart: function(){
			var val2 = document.querySelector('.odometr2').getAttribute('data-num')-0+getRandomInt(1,10);
			var el2 = document.querySelector('.odometr2');
			var od2 = new Odometer({
			  el: el2,
			  value: 0,
			  // Any option (other than auto and selector) can be passed in here
			  format: '',
			  theme: 'digital'
			});
			od2.update(val2);
			setInterval(function(){
				val2 += getRandomInt(1,10);
				od2.update(val2)
			},5300);
		}
	});
}
if(document.querySelector('.odometr3')){
gsap.from('.odometr3', {
		scrollTrigger: {
		    trigger: '.odometr3',
		    start: 'top bottom',
				end:'top top',
				scrub:false
		  },  
		y: 0,
		duration:0.1,
		delay:3,
		ease: "none",
		onStart: function(){

			var val3 = (document.querySelector('.odometr3').getAttribute('data-num')-0)+getRandomInt(1,10);
			var el3 = document.querySelector('.odometr3');
			var od3 = new Odometer({
			  el: el3,
			  value: 0,
			  // Any option (other than auto and selector) can be passed in here
			  format: '',
			  theme: 'digital'
			});
			od3.update(val3);
			setInterval(function(){
				val3 += getRandomInt(1,10);
				od3.update(val3)
			},5600);
		}
	});

}

// or
//el.innerHTML = 555

} )




/*google results animation*/


//gsap.to("#Fountain .reversed", {strokeDashoffset: 320, repeat: -1, ease: "none", duration: 5});

if ( document.querySelector('#google_results') ){

var t12 = gsap.timeline({
			//repeat: -1,
      paused: false,
      delay:0,
 		repeatRefresh: true,
 		onComplete: function(){		
 			//anim4_inp_1.value = '';
 			
 		},
	scrollTrigger: {
		    trigger: '#anim4__div',
		    start: 'top bottom',
				
				scrub:false,
				delay:0
		  }
	});

var str1 = 'junk removal near me';
str1 = str1.split('');


str1.forEach((element) => {
	t12.to('#anim4_inp_1', { alpha:1,  delay:0.1, duration:0, ease: Linear.easeNone, onComplete:function(){
		anim4_inp_1.value = anim4_inp_1.value.replace('|','');
		anim4_inp_1.value = anim4_inp_1.value+element+'|';
	} })
})

t12.to('#anim4__search', { scale:1.1, duration:0.2, ease: Power3.easeOut })
t12.to('#anim4__search', { scale:1, duration:0.2, ease: Power3.easeIn })

t12.set('#anim4__img', { scale:0.7, alpha:0 })
t12.to('#anim4__img', { scale:1, alpha:1, duration:1, ease: Power3.easeInOut })

//t12.to('#anim4__rotate', { rotation:180,  duration:1, ease: Power3.easeInOut })

t12.to("#anim4__svg1_rect", {strokeDashoffset: -100, repeat: -1, ease: "none", duration: 5, delay:-0.5});

//t12.set('#anim4__lead1, #anim4__lead2', { scale:0, alpha:0 })

t12.to(anim4__lead1, {
			alpha:1,
			scale: 1, 
			ease:Power3.easeInOut,
			duration:0.5,
			delay:-5
		})
t12.to(anim4__lead2, {
			alpha:1,
			scale: 1, 
			ease:Power3.easeInOut,
			duration:0.5,
			delay:-0.5
		})
t12.to(anim4__lead1, {
			
		    motionPath:{
		    	path: "M-3.54,309.39L322.41,-3.34L635.14,322.61L309.19,635.34Z",
				start:-0.15,
			    end:0.85
		    },
			duration: 15, 
			repeat: -1,
			ease: Linear.easeNone,
			//ease:Power3.easeInOut,
			delay:-0.5
		})

t12.to(anim4__lead2, {
			
		    motionPath:{
		    	path: "M-3.54,309.39L322.41,-3.34L635.14,322.61L309.19,635.34Z",
				start:0.35,
			    end:1.35
		    },
			duration: 15, 
			repeat: -1,
			ease: Linear.easeNone,
			//ease:Power3.easeInOut,
			delay:-15
		})

t12.to(anim4__lightning1, {
			
		    motionPath:{
		    	path: "M-3.54,309.39L322.41,-3.34L635.14,322.61L309.19,635.34Z",
				start:0,
			    end:1
		    },
			duration: 15, 
			repeat: -1,
			ease: Linear.easeNone,
			//ease:Power3.easeInOut,
			delay:-15
		})
t12.to(anim4__lightning2, {
			
		    motionPath:{
		    	path: "M-3.54,309.39L322.41,-3.34L635.14,322.61L309.19,635.34Z",
				start:-0.5,
			    end:0.5
		    },
			duration: 15, 
			repeat: -1,
			ease: Linear.easeNone,
			//ease:Power3.easeInOut,
			delay:-15
		})


}