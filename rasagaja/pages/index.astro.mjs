import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Layout, $ as $$Image } from '../chunks/Layout_CNJUpmtr.mjs';
import { A as AUTOPORTRETAS } from '../chunks/AUTOPORTRETAS_DHbMvzVP.mjs';
import { A as Audio_NEMUNAI_TEKA___DRAKONO_KALNUS } from '../chunks/NEMUNAI_TEKA_Į_DRAKONO_KALNUS_Ctlk-nAN.mjs';
import { $ as $$TextDiscriosionButton } from '../chunks/TextDiscriosionButton_rfX3Lz5V.mjs';
export { renderers } from '../renderers.mjs';

const RASA_GAJA_VEIDAS = new Proxy({"src":"/_astro/RASA_GAJA_VEIDAS.BU-01ayU.jpg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/RASA_GAJA_VEIDAS.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/justinas/Programming/RasoSvetaine/src/img/RASA_GAJA_VEIDAS.jpg");
							return target[name];
						}
					});

const Tekstai_NEMUNAI_TEKA_Į_DRAKONO_KALNUS = new Proxy({"src":"/_astro/NEMUNAI_TEKA_Į_DRAKONO_KALNUS.BNr0HFlN.png","width":1587,"height":2245,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/tekstai/NEMUNAI_TEKA_Į_DRAKONO_KALNUS.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/justinas/Programming/RasoSvetaine/src/img/tekstai/NEMUNAI_TEKA_Į_DRAKONO_KALNUS.png");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rasa Gaja" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": RASA_GAJA_VEIDAS, "id": "backgroundImg", "alt": "Fono nuotrauka", "class": "xs:w-min xs:h-[26.5rem] xs:-top-10 xs:left-14 xs:self-auto imgFadeIn relative mx-6 w-10/12 self-center rounded-2xl object-contain sm:mx-0 md:h-[32.5rem] xl:left-25" })} ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col sm:flex-row"> ${renderComponent($$result2, "TextDiscriosionButton", $$TextDiscriosionButton, { "title": "Apie save", "body": "Esu degte i\u0161degta Meil\u0117s - \u017Demei ir Dangui, \u017Dmogui ir \u017Dod\u017Eiui...", "link": "/apie-save" })} <div class="mx-1 flex h-full items-center justify-center md:mx-0 lg:w-200"> ${renderComponent($$result2, "Image", $$Image, { "src": AUTOPORTRETAS, "alt": "Rasytojos autoportretas", "class": "imgFadeIn h-full w-full max-w-96 rounded-2xl object-cover sm:h-auto sm:max-w-full" })} </div> </div> </div> <div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col sm:flex-row-reverse"> ${renderComponent($$result2, "TextDiscriosionButton", $$TextDiscriosionButton, { "title": "Tekstai", "body": "Tik \u017Emogus gali prabilti \u017Eod\u017Eiu. Tik jis duoda vardus pasaulio daiktams. ,,Esame \u010Dia kalb\u0117ti\u201D, - sako senov\u0117s hebraj\u0173 legenda.", "link": "/tekstai" })} <div class="mx-1 flex h-96 items-center justify-center md:mx-0 md:w-120"> ${renderComponent($$result2, "Image", $$Image, { "src": Tekstai_NEMUNAI_TEKA_\u012E_DRAKONO_KALNUS, "alt": "knygos vir\u0161elio nuotauka", "class": "imgFadeIn h-auto max-h-full w-auto max-w-full rounded-2xl object-contain" })} </div> </div> </div> <div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col sm:flex-row"> ${renderComponent($$result2, "TextDiscriosionButton", $$TextDiscriosionButton, { "title": "Apie save", "body": "Aktorius bando atsp\u0117ti intonacij\u0105. Autorius \u017Eino tikr\u0105j\u0105...", "link": "/audio-ira\u0161ai" })} <div class="mx-1 flex h-96 items-center justify-center md:mx-0 md:w-120"> ${renderComponent($$result2, "Image", $$Image, { "src": Audio_NEMUNAI_TEKA___DRAKONO_KALNUS, "alt": "knygos vir\u0161elio nuotauka", "class": "imgFadeIn h-auto max-h-full w-auto max-w-full rounded-2xl object-contain" })} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/index.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
