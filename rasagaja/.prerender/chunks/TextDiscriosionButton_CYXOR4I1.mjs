import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './prerender_CQD0AcWy.mjs';
import 'clsx';

const $$TextDiscriosionButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TextDiscriosionButton;
  const { title, body, link, dataId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col items-center"${addAttribute(dataId, "data-sync")}> <p class="header">${title}</p> <p class="md:max-w-l max-w-80 indent-24 md:w-80 lg:w-90 xl:w-117"> ${body} </p> <a${addAttribute(link, "href")} class="boutton border-dark-text-light bouttonAnimasion mt-6 rounded-2xl border px-4 py-2 text-center text-nowrap sm:w-min sm:px-8 sm:py-4">Skaityti toliau</a> </div>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/TextDiscriosionButton.astro", void 0);

export { $$TextDiscriosionButton as $ };
