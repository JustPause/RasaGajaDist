import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-[calc(100vh-256px)] overflow-hidden pt-16"> <div class="absolute flex h-[50vh] w-full items-center justify-center"> <p class="header1 rotate-12 text-8xl duration-1000 hover:-rotate-12">
404
</p> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/errors/404.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/errors/404.astro";
const $$url = "/errors/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
