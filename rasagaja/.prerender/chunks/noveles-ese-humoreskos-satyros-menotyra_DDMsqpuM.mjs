import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$NovelesEseHumoreskosSatyrosMenotyra = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save į saują", "subtitle": "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Novelės. Esė. Humoreskos. Satyros. Menotyra.</p> <div class="*:bg-dark-primary-darker flex w-full flex-col gap-4 *:rounded-xl *:p-2 *:uppercase sm:max-w-306"> <!-- {
          noveles.map((novele: string) => (
            <a href={\`/tekstai/noveles/\${novele}\`}>Sugrazinti senaji dysina</a>
          ))
        } --> </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/noveles-ese-humoreskos-satyros-menotyra.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/noveles-ese-humoreskos-satyros-menotyra.astro";
const $$url = "/tekstai/noveles-ese-humoreskos-satyros-menotyra";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NovelesEseHumoreskosSatyrosMenotyra,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
