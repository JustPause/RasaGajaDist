import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot, b as addAttribute } from './astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from './LayoutSecondary_BwrVyyen.mjs';

const $$Astro = createAstro("https://rasagaja.lt");
const $$TextBookLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextBookLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row justify-around mt-8"> <div class="w-4xl mx-8 text-justify flex flex-col gap-8 *:indent-8"> ${renderSlot($$result2, $$slots["default"])} </div> <div class="w-4/12"> <img${addAttribute(`../../../img/${frontmatter.cover}`, "src")} alt="" srcset="" class="rounded-2xl"> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/layouts/TextBookLayout.astro", void 0);

export { $$TextBookLayout as $ };
