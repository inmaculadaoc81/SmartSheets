/* SmartSheets: redes, navegación móvil y mejoras editoriales. */
(function(){
  // Cargar los estilos nuevos antes de montar la página, sin modificar el HTML existente.
  ['typography-layout.css','cal-booking.css'].forEach(function(href){
    if(!document.querySelector('link[href="'+href+'"]')){
      var link=document.createElement('link');link.rel='stylesheet';link.href=href;document.head.appendChild(link);
    }
  });
  function ready(){
    var nav=document.querySelector('.nav-wrap');
    var menu=nav&&nav.querySelector('nav.main-nav');
    var toggle=nav&&nav.querySelector('.menu-toggle');
    var desktopCTA=nav&&nav.querySelector('.nav-cta .btn');
    if(menu&&toggle){
      if(!menu.querySelector('.mobile-nav-cta')){
        var cta=document.createElement('a');
        cta.href=desktopCTA?desktopCTA.getAttribute('href'):'#contacto';
        cta.className='btn btn-primary mobile-nav-cta';
        cta.textContent='Solicita una asesoría';
        menu.appendChild(cta);
      }
      toggle.setAttribute('type','button');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-controls','smartsheets-mobile-menu');
      menu.id='smartsheets-mobile-menu';
      toggle.addEventListener('click',function(){
        var open=menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded',String(open));
        toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
      });
      menu.addEventListener('click',function(e){
        if(e.target.closest('a')){
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded','false');
          toggle.setAttribute('aria-label','Abrir menú');
        }
      });
      document.addEventListener('keydown',function(e){
        if(e.key==='Escape'&&menu.classList.contains('is-open')){
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded','false');
          toggle.setAttribute('aria-label','Abrir menú');
          toggle.focus();
        }
      });
      window.addEventListener('resize',function(){
        if(window.innerWidth>980){
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded','false');
          toggle.setAttribute('aria-label','Abrir menú');
        }
      });
    }
    var contact=document.querySelector('#contacto');
    var map=contact&&contact.querySelector('.contact-map');
    if(map&&!contact.querySelector('.social-section')){
      var section=document.createElement('section');
      section.className='social-section';
      section.setAttribute('aria-labelledby','social-title');
      var inner=document.createElement('div');
      inner.className='social-section-inner';
      var heading=document.createElement('h2');
      heading.id='social-title';
      heading.textContent='Nuestras Redes sociales';
      inner.appendChild(heading);
      var links=document.createElement('div');
      links.className='social-links';
      [
        ['facebook','Facebook','https://www.facebook.com/profile.php?id=61560356115236','facebook'],
        ['instagram','Instagram','https://www.instagram.com/n8n.labs/','instagram'],
        ['youtube','YouTube','https://www.youtube.com/@n8nlabs_madrid','youtube'],
        ['tiktok','TikTok','https://www.tiktok.com/@n8nlabs','tiktok'],
        ['x-twitter','X','https://x.com/N8nLabs','x'],
        ['snapchat','Snapchat','https://www.snapchat.com/@n8nlabs','snapchat']
      ].forEach(function(item){
        var anchor=document.createElement('a');
        anchor.className='social-link '+item[0];
        anchor.href=item[2];
        anchor.target='_blank';
        anchor.rel='noopener noreferrer';
        anchor.setAttribute('aria-label',item[1]);
        var img=document.createElement('img');
        img.src='https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/'+item[3]+'.svg';
        img.alt='';
        img.loading='lazy';
        anchor.appendChild(img);
        links.appendChild(anchor);
      });
      inner.appendChild(links);
      section.appendChild(inner);
      map.parentNode.insertBefore(section,map);
    }
    var footer=document.querySelector('footer');
    if(footer){
      var grid=footer.querySelector('.footer-grid');
      var columns=grid?grid.querySelectorAll(':scope > .footer-col'):[];
      if(columns.length>=4){
        var follow=columns[3];
        if(follow)follow.remove();
      }
      footer.querySelectorAll('.footer-contact li').forEach(function(li){
        if(li.querySelector('path[d^="M4 4h16"]')||li.textContent.indexOf('hola@smartsheets.es')!==-1){li.remove();}
      });
      var navCol=grid&&grid.querySelectorAll(':scope > .footer-col')[1];
      if(navCol){
        var navLinks=navCol.querySelector('ul');
        if(navLinks){
          navLinks.querySelectorAll('a').forEach(function(a){
            if(a.textContent.trim()==='Nosotros')a.remove();
          });
        }
      }
    }
    // Activar la maquetación y cambiar la URL de reservas mediante el script local.
    if(!document.querySelector('script[src="editorial-enhancements.js"]')){
      var editorial=document.createElement('script');
      editorial.src='editorial-enhancements.js';
      editorial.defer=true;
      document.body.appendChild(editorial);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
