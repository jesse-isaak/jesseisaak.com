/* 
This JavaScript Document
will enable the slide n hide 
vector menu. 

- it will detect if the user clicks on the button class="btn-menu"
- each click will toggle ON and OFF the class="show", between these two states:
   <nav class="show">
    OR
   <nav>
- css style will take care of what to do with class="show"

More on javascript in a future lesson
*/


(function(d){
	
	// d = document
	
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.btn-menu');
	
	$btn.addEventListener('click', function(){
		
		$nav.classList.toggle('show');
		
	});
	
	
})(document);

(function(d){
	
	// d = document
	
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.closebtn');
	
	$btn.addEventListener('click', function(){
		
		$nav.classList.toggle('show');
		
	});
	
	
})(document);