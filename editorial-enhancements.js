/* SmartSheets: cambios editoriales y actualización del calendario. */
(function () {
  function init() {
    // Destacar únicamente palabras seleccionadas, conservando el texto original.
    var accents = [
      ['.solutions .section-title', 'Crece.'],
      ['.why-us h2', 'Excel'],
      ['.how .section-title', 'efectivo'],
      ['.cita-copy .section-title', '30 minutos'],
      ['.contact-info h2', 'Excel?']
    ];
    accents.forEach(function (entry) {
      var heading = document.querySelector(entry[0]);
      if (!heading || heading.querySelector('.title-accent')) return;
      var text = heading.textContent;
      var position = text.lastIndexOf(entry[1]);
      if (position < 0) return;
      heading.textContent = '';
      heading.appendChild(document.createTextNode(text.slice(0, position)));
      var accent = document.createElement('em');
      accent.className = 'title-accent';
      accent.textContent = text.slice(position, position + entry[1].length);
      heading.appendChild(accent);
      heading.appendChild(document.createTextNode(text.slice(position + entry[1].length)));
    });
    // La frase completa conserva su contenido; se cambia exclusivamente la tipografía.
    var seo = document.querySelector('.seo-text > .container');
    if (seo && !seo.querySelector('.seo-layout')) {
      var title = seo.querySelector('h2');
      var paragraphs = Array.prototype.slice.call(seo.querySelectorAll(':scope > p'));
      if (title && paragraphs.length) {
        var layout = document.createElement('div');
        layout.className = 'seo-layout';
        var heading = document.createElement('div');
        heading.className = 'seo-heading';
        var kicker = document.createElement('span');
        kicker.className = 'seo-kicker';
        kicker.textContent = 'Excel para empresas';
        heading.appendChild(kicker);
        var fullTitle = title.textContent;
        var phrase = 'Madrid y España';
        var index = fullTitle.indexOf(phrase);
        if (index !== -1) {
          title.textContent = fullTitle.slice(0, index);
          var emphasis = document.createElement('em');
          emphasis.className = 'title-accent';
          emphasis.textContent = phrase;
          title.appendChild(emphasis);
        }
        heading.appendChild(title);
        var copy = document.createElement('div');
        copy.className = 'seo-description';
        paragraphs.forEach(function (paragraph) { copy.appendChild(paragraph); });
        layout.appendChild(heading);
        layout.appendChild(copy);
        seo.appendChild(layout);
      }
    }
    // En HTML estático no se ejecuta el shortcode [cal_custom] de WordPress.
    // Se usa la misma URL pública en el iframe existente con vista mensual y tema claro.
    var cal = document.querySelector('#cita iframe.cal');
    if (cal) {
      var config = {
        theme: 'light',
        cssVarsPerTheme: { light: { 'cal-brand': '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      };
      var url = new URL('https://cal.com/n8n-automatizaciones/30min');
      url.searchParams.set('embed', 'true');
      url.searchParams.set('theme', 'light');
      url.searchParams.set('layout', 'month_view');
      url.searchParams.set('monthView', 'true');
      url.searchParams.set('ui', JSON.stringify(config));
      cal.src = url.toString();
      cal.title = 'Reservar asesoría de 30 minutos con SmartSheets';
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
