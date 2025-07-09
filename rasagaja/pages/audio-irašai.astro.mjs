import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../chunks/LayoutSecondary_CXM8OM0G.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rasagaja.lt");
const $$BookAudioSelection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookAudioSelection;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6 mx-14"> <!-- <div
        class="flex flex-row gap-6 *:bg-accent *:active:bg-primary *:active:text-text-on-dark *:p-2 *:rounded-xl select-none hidden"
    >
        <p class="header4">Grožinėc</p>
        <p class="header4">Publicistika</p>
        <p class="header4">Literatūra</p>
    </div>

    <div
        class="flex flex-row gap-6 *:header4 *:bg-accent *:active:bg-primary *:active:text-text-on-dark *:p-2 *:rounded-xl select-none hidden"
    >
        <p class="header5">Esė</p>
        <p class="header5">Straipsniai</p>
        <p class="header5">Novelės</p>
        <p class="header5">Romanai</p>
        <p class="header5">Scenarijai</p>
        <p class="header5">Prisiminimai</p>
        <p class="header5">Laiškai</p>
    </div> --> <div class="flex flex-row gap-8 px-4 py-8 mb-4 bg-accent rounded-xl"> <div class="relative h-80 w-min"> <div class="flex flex-col pl-72 gap-4 bg-primary bg-opacity-10 rounded-xl p-4 justify-end relative z-10 top-30"> <p class="header5 text-text-on-dark select-none"> ${data[0].Pavadinias} </p> <div class="flex gap-4 justify-betwee *:bg-secondary *:hover:bg-primary *:hover:text-text-on-dark *:duration-350 *:py-2 *:px-3 *:whitespace-nowrap"> <a class="rounded-l-xl header6 select-none"${addAttribute(`/${data[0].NuotodaApieAudioKnyga}`, "href")}>Apie audio knygą</a> <a class="header6 select-none"${addAttribute(`/${data[0].NuotodaAudioKnugosPasibandymas}`, "href")}>Knygos isigijimas</a> <a class="rounded-r-xl header6 select-none"${addAttribute(`/${data[0].NuotodaKnygosIsigijias}`, "href")}>Audio knygos pasibandymas</a> </div> </div> <div class="top-0 left-10 w-[14rem] h-80 bg-opacity-10 rounded-xl absolute z-10 overflow-clip"> <img class="h-full w-auto"${addAttribute(`../../img/${data[0].Nuotrauka}`, "src")} srcset="" alt=""> </div> </div> </div> </div>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/BookAudioSelection.astro", void 0);

const $$AudioIraai = createComponent(($$result, $$props, $$slots) => {
  const audio_knygos = [
    {
      Pavadinias: "NEMUNAI TEKA \u012E DRAKONO KALNUS",
      Nuotrauka: "audio-knygos/NEMUNAI TEKA \u012E DRAKONO KALNUS.png",
      NuotodaApieAudioKnyga: "audio-knygos/Apie-audio-knyga/nemunai-teka-i-drakono-kalnus",
      NuotodaAudioKnugosPasibandymas: "audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus",
      NuotodaKnygosIsigijias: "audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": "Audio \u012Fra\u0161ai" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BookSelection", $$BookAudioSelection, { "data": audio_knygos })} ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/audio-ira\u0161ai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/audio-irašai.astro";
const $$url = "/audio-irašai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AudioIraai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
