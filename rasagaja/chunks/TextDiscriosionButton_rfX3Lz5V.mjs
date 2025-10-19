import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$TextDiscriosionButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextDiscriosionButton;
  const { title, body, link, dataId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col items-center"${addAttribute(dataId, "data-sync")}> <p class="header">${title}</p> <p class="max-w-80 indent-8 md:w-80 md:max-w-128 lg:w-90 xl:w-117"> ${body} </p> <a${addAttribute(link, "href")} class="boutton border-dark-text-light bouttonAnimasion mt-6 rounded-2xl border px-4 py-2 text-center text-nowrap sm:w-min sm:px-8 sm:py-4">Skaityti toliau</a> </div>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/TextDiscriosionButton.astro", void 0);

export { $$TextDiscriosionButton as $ };
