import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout, $ as $$Image } from './Layout_DV8QEiCP.mjs';

const SU_PLUNKSNA_C_PASIRINKTA_SALIA_ESAME = new Proxy({"src":"/_astro/SU_PLUNKSNA_C_PASIRINKTA_SALIA_ESAME.Dft2cqxH.jpg","width":872,"height":1375,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/SU_PLUNKSNA_C_PASIRINKTA_SALIA_ESAME.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/justinas/Programming/RasoSvetaine/src/img/SU_PLUNKSNA_C_PASIRINKTA_SALIA_ESAME.jpg");
							return target[name];
						}
					});

const $$Tekstai = createComponent(($$result, $$props, $$slots) => {
  const tekstai = [
    {
      text: "Novel\u0117s. Es\u0117. Humoreskos. Satyros. Menotyra.",
      link: "/tekstai/noveles-ese-humoreskos-satyros-menotyra"
    },
    {
      text: "Straipsniai. Paskait\u0173 konspektai. Dienora\u0161\u010Diai. Lai\u0161kai.",
      link: "/tekstai/straipsniai-paskaitu-konspektai-dienorasciai-laiskai"
    },
    {
      text: "Scenarijai, libretai, vaidinimai",
      link: "/tekstai/scenarijai-libretai-vaidinimai"
    },
    {
      text: "Knygos. Knyg\u0173 intarpai, i\u0161traukos ir rankra\u0161\u010Diai.",
      link: "/tekstai/knygos-knygu-intarpai-istraukos-ir-rankrasciai"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing"> <div class="flex flex-col items-center md:block"> <p class="header">Esame čia kalbėti</p> ${renderComponent($$result2, "Image", $$Image, { "src": SU_PLUNKSNA_C_PASIRINKTA_SALIA_ESAME, "width": SU_PLUNKSNA_C_PASIRINKTA_SALIA_ESAME.width / 4, "alt": "Rasytoja nuotrauka", "class": "xs:mb-4 xs:ml-4 float-right w-full max-w-72 rounded-2xl opacity-100 duration-400 lg:mb-8 lg:ml-8 starting:opacity-0" })} <div class="xs:*:text-justify xs:mx-4 *:text-center *:indent-24"> <div> <p>Sena hebrajų legenda pasakoja...</p> <p>
Kai Dievas sukūrė žmogų, angelai įsižeidė - kam reikalingas
              žmogus?! Dievas tylėdamas nusivedė angelus į Rojaus sodą. Ten
              vaikščiojo žmogus, duodamas vardus pasaulio daiktams...
</p> <p>Tik Žmogus gali prabilti Žodžiu.</p> <p>Tik Jis gali duoti vardus pasaulio daiktams.</p> <p>Taigi esame čia <spacing>kalbėti!</spacing></p> </div> <div> <p>
Žodis man - galingiausias dvasinis veiksmas. Juk per Žodį prabyla
              Dvasia!
</p><p>
Kai ji atsiveria gryna - bekūnė, bekraujė, - lenkiuosi, net
              atnašauju. Bet labai branginu ir kitokį - gyvybės sklidiną Žodį.
</p> </div> <div> <p>
Sakoma, kad asmeninė Žmogaus legenda - svarbiausias jo kūrinys.
              Užgauta Meilės, amžių pravirpėjau kaip styga. Kiekvienas mano
              Žodis - tik netilstantis jos skambėjimas.
</p> <p>
Ši svetainė - tai sauja, surenkanti mane į viena. Meilės aidas,
              kuriuo noriu dalintis...
</p> </div> </div> </div> </div> </div> <div class="IndexPageOutsideListing flex-row"> <div class="mx-8 flex w-180 flex-wrap justify-center gap-4 xl:w-372 xl:flex-nowrap xl:gap-16"> ${tekstai.map((dat) => renderTemplate`<a class="bg-dark-primary-darker 2xs:w-72 bouttonAnimasion text-dark-text-light w-auto rounded-2xl p-4 text-center text-sm md:text-xl xl:w-auto xl:p-6"${addAttribute(dat.link, "href")}> ${dat.text.toUpperCase()} </a>`)} </div> </div> ` })}`;
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
