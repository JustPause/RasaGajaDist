import { c as createComponent, a as $$Layout, $ as $$Image } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';
import { A as AUTOPORTRETAS } from './AUTOPORTRETAS_oiwTb9lt.mjs';

const $$Autoportretas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Autoportretas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing inline"> ${renderComponent($$result2, "Image", $$Image, { "src": AUTOPORTRETAS, "alt": "Rasytojos autoportretas", "class": "imgFadeIn mt-16 mr-8 rounded-2xl lg:float-left lg:w-1/2", "width": AUTOPORTRETAS.width / 3 })} <p class="header">Autoportretas</p> <div class="*:indent-24"> <p>Esu degte išdegta Meilės - Žemei ir Dangui, Žmogui ir Žodžiui...</p> <p>
Basakojė, vienplaukė - nuoga oda, kol nešiurpsta, - braidau pievomis,
          klaidžioju miškais.
</p> <p>
Su žaibais nešoku - perkūnija grožiuosi iš slėptuvių. Jaučiuosi
          laiminga kalnų viršūnėse. Dievinu aukštąsias mačerniškas akimirkas.
</p> <p>
Atlapa vėjams, godi saulės ir vandens glamonių, įsimylėjusi - ne be
          atsako! - žvaigždes... Atsidavusi klajūniškai laisvės dvasiai,
          nenualsinama ilgo kelio, atvira kelyje sutiktiems, esu dėkinga Žemei
          už visus joje trykštančius žemiškos stiprybės šaltinius, o Dangui - už
          nesenkančias įkvėpimo versmes.
</p> <p>Deja, Žemei jaučiuosi be galo skolinga. Skolą tikiuosi grąžinti.</p> </div> </div> </div> ` })}`;
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
