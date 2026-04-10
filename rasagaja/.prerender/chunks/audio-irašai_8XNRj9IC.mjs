import { c as createComponent, a as $$Layout, $ as $$Image } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';
import { A as Audio_NEMUNAI_TEKA___DRAKONO_KALNUS } from './NEMUNAI_TEKA_Į_DRAKONO_KALNUS_B-H3Xxe-.mjs';

const RASA_SU_VARNA = new Proxy({"src":"/_astro/RASA_SU_VARNA.Bb5tLlt6.jpg","width":1414,"height":1396,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/RASA_SU_VARNA.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/justinas/Programming/RasoSvetaine/src/img/RASA_SU_VARNA.jpg");
							return target[name];
						}
					});

const $$AudioIraai = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Audio įrašai" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Nemunai teka į Drakono kalnus</p> <div class="flex flex-col items-center gap-8 md:block xl:flex xl:flex-row xl:items-start"> <div class="xs:float-left 2xs:block mr-0 flex w-full max-w-96 flex-col gap-8 md:mr-4 xl:flex"> ${renderComponent($$result2, "Image", $$Image, { "src": Audio_NEMUNAI_TEKA___DRAKONO_KALNUS, "width": Audio_NEMUNAI_TEKA___DRAKONO_KALNUS.width / 2, "alt": "Knygos viršelis", "class": "mb-8 rounded-2xl xl:mb-0" })} <a class="bg-dark-primary-darker bouttonAnimasion flex w-full max-w-96 items-center rounded-2xl p-4 xl:w-96" href="/klausyti-ištrauku"> <span class="material-symbols-rounded text-dark-text-light icons text-6xl! select-none">
play_arrow
</span> <p>Klausyti ištraukų</p> </a> </div> <div class="*:mb-8 xl:flex xl:flex-col xl:gap-8"> <p class="indent-8">
„Išgalvoti dalykai siurbia klausytojo energiją, kad jo vaizduotės ir
            įsijautimo dėka įgautų šiek tiek realumo. Tikros istorijos yra
            energijos koncentratai - jos teikia klausytojui galingos gyvybinės
            energijos!” (R.Štaineris) Ši knygoje cituojama mintis autorei labai
            svarbi.
</p> <p class="indent-8">
„NEMUNAI TEKA Į DRAKONO KALNUS“ - t i k r a istorija. Sraunia upe
            išsilieja mylinčios moters prisiminimai apie aktorių, režisierių,
            rašytoją <spacing>Kęstutį</spacing> <spacing>Marčiulyną</spacing>, vėliau - budistų vienuolį <spacing>Bo</spacing> <spacing>Haeng</spacing>. Graži ir šiurpi, linksma ir graudi, ši
            istorija taškyte taškosi gyva energija, nepalikdama abejingų:
            gąsdindama apsidraudėlius ir anemikus, o neatsargiai įbridusius it
            kalnų upė nusinešdama kartu.
</p> <p class="indent-8">Koks tikrasis - slaptas - šios upės vardas?</p> <p class="indent-8">
Aistringas Meilės prisipažinimas? Vaivorykštiniai Vilties tiltai?
            Klajūno Pero Giunto kančia? Šventas Solveigos naivumas? Išdidžiosios
            Lilit triumfas? Vienuolio žmonos išpažintis? Kūrybinis dienoraštis?
            Dvasinių ieškojimų punktyras? Tiesą sakant, visa tai.
</p> <p class="indent-8">
Pamirškite atsargumą. Drąsos atsiduoti gyvybe kunkuliuojančiam
            srautui!
</p> </div> </div> </div> </div> <div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col xl:flex-row"> <div class="flex flex-col justify-center"> <p class="indent-8">
Knygą „NEMUNAI TEKA Į DRAKONO KALNUS“ leidžia leidykla „KAUKO
          LAIPTAI“.
</p> <p class="indent-8">
AUDIO formatu įskaitytas pirmasis, autorės redaguotas knygos
          variantas.
</p> <p class="indent-8">
Buitinį įrašą REDAGAVO bei RESTAURAVO garso technologas <spacing>Marius Venskevičius</spacing>.
</p> <p class="indent-8">
SKAITO autorė <spacing>Rasa Mickevičiūtė</spacing>.
</p> </div> ${renderComponent($$result2, "Image", $$Image, { "src": RASA_SU_VARNA, "alt": "Rasytoja nuotrauka", "class": "h-auto w-106 rounded-2xl object-contain" })} </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/audio-irašai.astro", void 0);

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
