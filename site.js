// Aluminiumfoil Consult — shared behaviour
(function(){
  document.documentElement.classList.add('js');
  // nav scroll state
  var nav=document.getElementById('nav');
  if(nav){
    var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>20);};
    addEventListener('scroll',onScroll);onScroll();
  }
  // mobile menu
  var toggle=document.getElementById('navToggle');
  var links=document.getElementById('navLinks');
  if(toggle&&links){
    toggle.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open);
      toggle.textContent=open?'Close':'Menu';
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        links.classList.remove('open');toggle.textContent='Menu';
        toggle.setAttribute('aria-expanded',false);
      });
    });
  }
  // scroll reveal
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.16});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  // mock contact form
  var form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var n=document.getElementById('formNote');
      if(n)n.textContent='Thanks — in a live build this would send your message. (Mock only.)';
    });
  }
})();
