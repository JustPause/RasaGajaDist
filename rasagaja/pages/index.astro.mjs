import { d as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, e as renderSlot, h as renderHead, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DawsWqd3.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header, b as $$ClientRouter, c as $$BaseHead } from '../chunks/ClientRouter_DJybakKp.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rasagaja.lt");
const $$LayoutPrimory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutPrimory;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", "", '</head> <body class="bg-background"> ', ' <script>\n            document.documentElement.classList.add("font-loading");\n\n            document.fonts.ready.then(() => {\n                document.documentElement.classList.remove("font-loading");\n            });\n        <\/script> <div class="w-[97%] flex max-w-[1920px] mx-auto pt-16 flex-col min-h-screen"> <div class="flex flex-row gap-8 mt-8"> <p class="header1 ml-8 select-none">', "</p> </div> ", " </div> ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title }), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), title, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/justinas/Programming/RasoSvetaine/src/layouts/LayoutPrimory.astro", void 0);

const nuotrauka = new Proxy({"src":"/_astro/FOTO PARYSKINTA.3ZZTRPPb.jpg","width":2362,"height":1772,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/FOTO PARYSKINTA.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/justinas/Programming/RasoSvetaine/src/img/FOTO PARYSKINTA.jpg");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tabs = [
    {
      title: "Apie save",
      body: "Esu degte i\u0161degta Meil\u0117s \u2012 \u017Demei ir Dangui, \u017Dmogui ir \u017Dod\u017Eiui...",
      link: "/apie-save"
    },
    {
      title: "Tekstai",
      body: "Tik \u017Dmogus gali prabilti \u017Dod\u017Eiu. Tik jis duoda vardus pasaulio daiktams. \u201EEsame \u010Dia kalb\u0117ti\u201C, \u2012 sako senov\u0117s hebraj\u0173 legenda.",
      link: "/tekstai"
    },
    {
      title: "Audio \u012Fra\u0161ai",
      body: "Aktorius bando atsp\u0117ti intonacij\u0105. Autorius \u017Eino tikr\u0105j\u0105 ...",
      link: "/audio-ira\u0161ai"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutPrimory, { "title": "Rasa Gaja" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="mx-32 xs:mx-52 sm:mx-47 md:mx-52 
		xl:ml-74 2xl:ml-96
		header5
		w-6/12
		xl:w-96 select-none">
novelistė, eseistė, publicistė, scenaristė, skaitovė
</p> <div class="flex xl:flex-row flex-col justify-center items-center xl:gap-32 gap-16"> <div class="xl:w-1/2 flex flex-col
				gap-6 2xs:gap-10 xs:gap-12 sm:gap-14 md:gap-16
				xl:ml-16
				mt-6
				xl:
				w-9/12"> ${tabs.map((tab) => renderTemplate`<div class="transition-transform duration-700 hover:translate-x-10"> <a${addAttribute(tab.link, "href")}> <p class="header2 select-none">${tab.title}</p> <p class="ml-2 2xs:ml-5 xs:ml-19 sm:ml-15 md:ml-20 lg:ml-24 xl:ml-25 2xl:ml-32 select-none"> ${tab.body} </p> </a> </div>`)} </div> <div class="xl:w-1/2 md:w-4/5 w-11/12
		h-full 
		xl:pr-8 pr-0 
		flex
		justify-center xl:justify-end"> <img class="2xl:w-full
				xl:h-auto
				object-cover
				rounded-2xl"${addAttribute(nuotrauka.src, "src")} alt="" srcset=""> </div> </div> ` })}`;
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
