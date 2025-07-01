import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DawsWqd3.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../chunks/LayoutSecondary_Dx0lPXpS.mjs';
import { A as Autoportretas_ } from '../chunks/AUTOPORTRETAS_DJkJ4oOP.mjs';
export { renderers } from '../renderers.mjs';

const $$Autoportretas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": "Autoportretas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-col"> <div> <img${addAttribute(Autoportretas_.src, "src")} alt="" srcset="" class="rounded-2xl pt-104 bg-[#FEFEFC] h-screen"> </div> <div> <p>
Basakojė, vienplaukė ‒ nuoga oda, kol nešiurpsta, ‒ braidau
                pievas, klaidžioju miškais.
</p> <p>
Su žaibais nešoku ‒ perkūnija grožiuosi iš slėptuvių. Jaučiuosi
                laiminga kalnų viršūnėse. Dievinu aukštąsias mačerniškas
                akimirkas.
</p> <p>
Atlapa vėjams, godi saulės ir vandens glamonių, įsimylėjusi ‒ ne
                be atsako! ‒ žvaigždes... Atsidavusi klajūniškai laisvės
                dvasiai, nenualsinama ilgo kelio, atvira kelyje sutiktiems, esu
                dėkinga Žemei už visus joje trykštančius žemiškos stiprybės
                šaltinius, o Dangui ‒ už nesenkančias įkvėpimo versmes.
</p> <p>
Deja, Žemei jaučiuosi be galo skolinga. Skolą tikiuosi grąžinti.
</p> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/autoportretas.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/autoportretas.astro";
const $$url = "/autoportretas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Autoportretas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
