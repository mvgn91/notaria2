# -*- coding: utf-8 -*-
import re

# Read the file
with open('src/pages/index.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the old testimonials section
start_marker = '  <!-- ── TESTIMONIALS ── -->'
end_marker = '  <!-- ── CLIENTES ── -->'

start_idx = content.find(start_marker)
end_section_marker = '</section>'
end_search_start = content.find(end_marker)
section_end_idx = content.rfind(end_section_marker, 0, end_search_start)
# Include the newline after </section>
old_section_end = section_end_idx + len(end_section_marker)

# The new HTML
new_section = '''  <!-- ── TESTIMONIALS ── -->
  <section class="py-24 lg:py-32 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
    <!-- Decorative top line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>

    <!-- Floating decorative shapes -->
    <div class="floating-shape floating-shape-3 opacity-30" style="top: 8%; left: 3%; width: 180px; height: 180px;"></div>
    <div class="floating-shape floating-shape-3 opacity-20" style="bottom: 12%; right: 5%; width: 220px; height: 220px; animation-delay: 3s;"></div>

    <!-- Subtle dot pattern overlay -->
    <div class="absolute inset-0 opacity-[0.015] pointer-events-none" style="background-image: radial-gradient(var(--color-primary) 1px, transparent 1px); background-size: 24px 24px;"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center mb-14 lg:mb-16 reveal">
        <span class="text-primary-light text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">Testimonios</span>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
          Lo que dicen <span class="text-primary-light font-light italic">nuestros clientes</span>
        </h2>
        <p class="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mt-3">
          La satisfacción de nuestros clientes es nuestro mejor aval.
        </p>
      </div>

      <!-- ── GOOGLE RATING SUMMARY ── -->
      <div class="flex justify-center mb-10 sm:mb-12 reveal">
        <div class="inline-flex items-center gap-4 bg-white/90 rounded-2xl px-6 py-3.5 shadow-lg border border-primary/5 hover:shadow-xl hover:border-primary/10 transition-all duration-300">
          <div class="flex items-center gap-0.5">
            <i class="fas fa-star text-amber-400 text-lg sm:text-xl"></i>
            <i class="fas fa-star text-amber-400 text-lg sm:text-xl"></i>
            <i class="fas fa-star text-amber-400 text-lg sm:text-xl"></i>
            <i class="fas fa-star text-amber-400 text-lg sm:text-xl"></i>
            <i class="fas fa-star text-amber-400 text-lg sm:text-xl"></i>
          </div>
          <span class="text-2xl sm:text-3xl font-bold text-primary font-display">4.8</span>
          <div class="w-px h-8 bg-gray-200"></div>
          <div class="text-left">
            <span class="text-xs sm:text-sm font-semibold text-gray-700 block leading-tight">Google</span>
            <span class="text-xs text-gray-400 block leading-tight">66 reseñas</span>
          </div>
        </div>
      </div>

      <!-- ── MURO DE CONFIANZA: Featured card + 3x3 grid ── -->
      <div class="max-w-5xl mx-auto stagger-children">

        <!-- ═══ FEATURED CARD ═══ (Ana Tamez) -->
        <div class="testimonial-featured mb-6 reveal">
          <div class="testimonial-featured-accent"></div>
          <div class="testimonial-featured-quote-mark" aria-hidden="true">"</div>
          <div class="testimonial-featured-content">
            <div class="flex gap-1 mb-4">
              <i class="fas fa-star text-amber-400 text-sm"></i>
              <i class="fas fa-star text-amber-400 text-sm"></i>
              <i class="fas fa-star text-amber-400 text-sm"></i>
              <i class="fas fa-star text-amber-400 text-sm"></i>
              <i class="fas fa-star text-amber-400 text-sm"></i>
            </div>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 mb-5 italic">
              "Tuve una experiencia excelente. Desde el primer momento, el personal fue muy amable, profesional y atento a cada detalle. Me brindaron asesoría clara y precisa, resolviendo todas mis dudas con paciencia y conocimiento. La atención fue rápida, eficiente y transparente en todo el proceso."
            </p>
            <div class="flex items-center gap-3 mb-4">
              <span class="flex-1 h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></span>
            </div>
            <div class="flex items-center gap-3 sm:gap-4">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-base sm:text-lg font-bold shadow-lg shrink-0">
                A
              </div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-sm sm:text-base md:text-lg">Ana Tamez</h4>
                <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span class="text-xs sm:text-sm text-gray-400">Google</span>
                  <span class="w-1 h-1 rounded-full bg-gray-300 shrink-0"></span>
                  <i class="fas fa-check-circle text-emerald-500 text-xs shrink-0"></i>
                  <span class="text-xs text-emerald-600 font-medium">
                    <a href="https://www.google.com/search?q=notar%C3%ADa+80+gdl&oq=notar%C3%ADa+80+gdl&sourceid=chrome&ie=UTF-8&sei=lQcaaujYD_jOp84PwOfNgQo#lrd=0x8428ae2679dfae35:0x33004c352e9cb36b,1,,,," target="_blank" class="hover:text-emerald-700 transition-colors">Verificada</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ GRID 3x3 ═══ -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

          <!-- Card 1: Adrián B. -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "Fui para certificar mi cédula y la verdad me sorprendió lo rápido que me atendieron desde que llegué. El personal fue muy amable y me explicaron todo con paciencia. El trámite fue súper ágil..."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">A</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Adrián B.</h4>
                <span class="text-[10px] text-gray-400">Local Guide</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Osiris Yajaira León Robles -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "Excelente servicio, me atendió el Lic. Miguel Magaña de la notaría núm. 80, muy profesional en su trabajo, siempre transparente y sin errores... Gracias a él tengo las escrituras de mi casa."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">O</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Osiris Y. León Robles</h4>
                <span class="text-[10px] text-gray-400">Google</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Ana Bertha Jiménez -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "En La Notaría 80, el personal son muy profesionales, muy capacitado en su ramo. Fui atendida por el Lic. Miguel Magaña y todo el trámite fue muy fácil de entenderlo, ya que el Lic. cuenta con el conocimiento y amabilidad..."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">A</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Ana Bertha Jiménez</h4>
                <span class="text-[10px] text-gray-400">Google</span>
              </div>
            </div>
          </div>

          <!-- Card 4: Moisés Alonso -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "De las notarías más comprometidas con los clientes. Los abogados son muy profesionales, comprometidos y respetuosos. Además, sus servicios son muy ágiles y eficientes. En cuanto a los costos, son muy accesibles."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">M</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Moisés Alonso</h4>
                <span class="text-[10px] text-gray-400">Local Guide</span>
              </div>
            </div>
          </div>

          <!-- Card 5: Hildeberto Peñaloza Muñoz -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "Es una Notaría Pública que se distingue por su calidad profesional y calidez humana de quienes en ella laboran, hacia quien acude a solicitar la elaboración de escrituras, certificaciones... Completamente satisfecho."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">H</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Hildeberto Peñaloza M.</h4>
                <span class="text-[10px] text-gray-400">Google</span>
              </div>
            </div>
          </div>

          <!-- Card 6: Natalia Osua -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "Son muy amables, y resolvieron todas mis dudas de la mejor manera. Muchas felicidades a todo el equipo por eso, siempre es un gusto ir a hacer mis trámites con ustedes."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">N</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Natalia Osua</h4>
                <span class="text-[10px] text-gray-400">Google</span>
              </div>
            </div>
          </div>

          <!-- Card 7: Miriam Campos Sánchez -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "Excelente personal altamente capacitado, son muy serviciales y amables. Sin duda alguna, siempre que necesito algún trámite, acudo a ellos."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">M</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Miriam Campos Sánchez</h4>
                <span class="text-[10px] text-gray-400">Google</span>
              </div>
            </div>
          </div>

          <!-- Card 8: Josué Francisco Galaviz Hernández -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "Excelente atención al cliente, me atendieron de manera respetuosa y muy amable. El lugar es muy limpio y seguro."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">J</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Josué F. Galaviz H.</h4>
                <span class="text-[10px] text-gray-400">Google</span>
              </div>
            </div>
          </div>

          <!-- Card 9: Isabel Zaragoza -->
          <div class="testimonial-card-item">
            <div class="flex gap-1 mb-3">
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
              <i class="fas fa-star text-amber-400 text-xs"></i>
            </div>
            <p class="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 italic line-clamp-4">
              "Excelente servicio, asesoría y atención de la Lic. Enriqueta y su personal, además buenos precios."
            </p>
            <div class="mt-auto flex items-center gap-2.5 pt-3 border-t border-primary/5">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-cream text-xs font-bold shrink-0">I</div>
              <div class="min-w-0">
                <h4 class="font-display font-semibold text-primary text-xs sm:text-sm truncate">Isabel Zaragoza</h4>
                <span class="text-[10px] text-gray-400">Google</span>
              </div>
            </div>
          </div>

        </div>

        <!-- ── CTA: Ver todas en Google ── -->
        <div class="text-center mt-10 sm:mt-12 reveal">
          <a href="https://www.google.com/search?q=notar%C3%ADa+80+gdl&oq=notar%C3%ADa+80+gdl&sourceid=chrome&ie=UTF-8&sei=lQcaaujYD_jOp84PwOfNgQo#lrd=0x8428ae2679dfae35:0x33004c352e9cb36b,1,,,," target="_blank" class="btn-secondary inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base shadow-lg group">
            <i class="fab fa-google text-lg"></i>
            Ver todas las <strong>66 reseñas</strong> en Google
            <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

      </div>
    </div>
  </section>'''

# Do the replacement
new_content = content[:start_idx] + new_section + content[old_section_end:]

print(f'Old section length: {len(content[start_idx:old_section_end])}')
print(f'New section length: {len(new_section)}')
print(f'File size before: {len(content)}')
print(f'File size after: {len(new_content)}')

# Write the file
with open('src/pages/index.astro', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('SUCCESS: File updated!')
