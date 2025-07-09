import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../chunks/LayoutSecondary_CXM8OM0G.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const se_ses_gel_tonas_ka_ses = new Proxy({"src":"/_astro/SE-SES_GEL-TON-KA-SES.CnPLoL2e.jpg","width":3120,"height":4160,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/SE-SES_GEL-TON-KA-SES.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/justinas/Programming/RasoSvetaine/src/img/SE-SES_GEL-TON-KA-SES.jpg");
							return target[name];
						}
					});

const $$Astro = createAstro("https://rasagaja.lt");
const $$BookSelection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookSelection;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6 mx-14"> <div class="flex flex-row gap-8 px-4 py-8 mb-4 bg-accent rounded-xl"> <div class="relative h-80 w-min"> <div class="flex flex-col pl-72 gap-4 bg-primary bg-opacity-10 rounded-xl p-4 justify-end relative z-10 top-30"> <p class="header5 text-text-on-dark select-none"> ${data[0].Pavadinias} </p> <div class="flex gap-4 justify-betwee *:bg-secondary *:hover:bg-primary *:hover:text-text-on-dark *:duration-350 *:py-2 *:px-3 *:whitespace-nowrap"> <a class="rounded-l-xl header6 select-none"${addAttribute(`/${data[0].NuotodaApieKnyga}`, "href")}>Apie knygą</a> <a class="rounded-r-xl header6 select-none"${addAttribute(`/${data[0].NuotodaAudioKnygosPasibandymas}`, "href")}>Audio knygos pasibandymas</a> </div> </div> <div class="top-0 left-10 w-[14rem] h-80 bg-opacity-10 rounded-xl absolute z-10 overflow-clip"> <img class="h-full w-auto"${addAttribute(`../../img/${data[0].Nuotrauka}`, "src")} srcset="" alt=""> </div> </div> </div> </div>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/BookSelection.astro", void 0);

const $$Tekstai = createComponent(($$result, $$props, $$slots) => {
  const tekstai = [
    {
      Pavadinias: "NEMUNAI TEKA \u012E DRAKONO KALNUS",
      Nuotrauka: "tekstai/NEMUNAI TEKA \u012E DRAKONO KALNUS.png",
      NuotodaApieKnyga: "tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus",
      NuotodaAudioKnygosPasibandymas: "tekstai/Tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-7 mx-14 my-16 justify-between"> <img${addAttribute(se_ses_gel_tonas_ka_ses.src, "src")} alt="" srcset="" class="w-[32rem] rounded-2xl"> <div class="flex flex-col gap-4 w-[56rem] *:indent-8 self-end *:text-justify mb-4 mr-8"> <p>Pirmąsyk viešai ‒ respublikinėje spaudoje ‒ prabilau trylikametė. Septyniolikos jau tvirtai žinojau: su Žodžiu nesiskirsiu.</p> <p>Išbandžiau save įvairiausiose Žodžio meno sferose ‒ kaip lituanistė, publicistė, eseistė, novelistė, humoristė, meno kritikė, memuaristė, skaitovė, scenaristė, režisierė, epistoliarinio meno puoselėtoja, vertėja, redaktorė...</p> <p>Barstydamasi įvairiuose leidiniuose, nei vienoje srityje neišmyniau brydės ‒ teįspaudžiau pavienes pėdas. Taškiausi, trupinausi, barsčiausi. Lašais tiškau, smiltim žirau, dulkėm ant kelio klojausi... </p> <p>Ši svetainė ‒ tai sauja, surenkanti mane į viena, kad galėčiau su meile dalintis.  Jei pavyks ‒ pilnomis rieškučiomis!</p> </div> </div> ${renderComponent($$result2, "BookSelection", $$BookSelection, { "data": tekstai })} ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai.astro";
const $$url = "/tekstai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Tekstai,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
