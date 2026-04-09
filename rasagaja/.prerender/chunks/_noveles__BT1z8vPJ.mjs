import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as renderTemplate } from './prerender_CQD0AcWy.mjs';
import 'clsx';

async function getStaticPaths() {
  const response = await fetch("https://rasagaja.lt/backend/doc/noveles");
  const noveles_json = await response.json();
  return noveles_json.map((novele) => ({
    params: { noveles: novele }
  }));
}
const $$noveles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$noveles;
  const { noveles } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<h1>${noveles}</h1>`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/noveles/[noveles].astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/noveles/[noveles].astro";
const $$url = "/tekstai/noveles/[noveles]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$noveles,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
