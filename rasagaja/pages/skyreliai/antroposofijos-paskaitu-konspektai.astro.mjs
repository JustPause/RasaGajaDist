import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_CNJUpmtr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$AntroposofijosPaskaituKonspektai = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AntroposofijosPaskaituKonspektai;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Pavadinimas, "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${Pavadinimas}</p>` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/antroposofijos-paskaitu-konspektai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/antroposofijos-paskaitu-konspektai.astro";
const $$url = "/skyreliai/antroposofijos-paskaitu-konspektai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AntroposofijosPaskaituKonspektai,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
