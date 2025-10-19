import { _ as __astro_tag_component__, e as createVNode, F as Fragment } from './astro/server_D3T3oDyi.mjs';
import { a as $$Layout } from './Layout_D4JteZMS.mjs';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "/src/layouts/Layout.astro",
  "title": "Nemunai teka į Drakono kalnus2",
  "cover": "audio-knygos/NEMUNAI TEKA Į DRAKONO KALNUS.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: ["„Išgalvoti dalykai siurbia klausytojo energiją, kad jo vaizduotės ir įsijautimo dėka įgautų šiek tiek realumo. Tikros istorijos yra energijos koncentratai - jos teikia klausytojui galingos gyvybinės energijos!” (R.Štaineris) Ši knygoje cituojama mintis autorei labai svarbi.\n„NEMUNAI TEKA Į DRAKONO KALNUS“ - ", createVNode("spacing", {
      children: "tikra"
    }), " istorija. Sraunia upe išsilieja mylinčios moters prisiminimai apie aktorių, režisierių, rašytoją ", createVNode("spacing", {
      children: "Kęstutį"
    }), " ", createVNode("spacing", {
      children: "Marčiulyną"
    }), ", vėliau - budistų vienuolį ", createVNode("spacing", {
      children: "Bo"
    }), " ", createVNode("spacing", {
      children: "Haeng"
    }), ". Graži ir šiurpi, linksma ir graudi, ši istorija taškyte taškosi gyva energija, nepalikdama abejingų: gąsdindama apsidraudėlius ir anemikus, o neatsargiai įbridusius it kalnų upė nusinešdama kartu.\nKoks tikrasis - slaptas - šios upės vardas?\nAistringas Meilės prisipažinimas? Vaivorykštiniai Vilties tiltai? Klajūno Pero Giunto kančia? Šventas\nSolveigos naivumas? Išdidžiosios Lilit triumfas? Vienuolio žmonos išpažintis? Kūrybinis dienoraštis? Dvasinių ieškojimų punktyras? Tiesą sakant, visa tai.\nPamirškite atsargumą. Drąsos atsiduoti gyvybe kunkuliuojančiam srautui!\nKnygą „NEMUNAI TEKA Į DRAKONO KALNUS“ 2025 m. leidžia leidykla „KAUKO LAIPTAI“.\nPirmasis, autorės redaguotas knygos variantas įrašytas AUDIO formatu..\nBuitinį įrašą REDAGAVO bei RESTAURAVO garso technologas ", createVNode("spacing", {
      children: "Marius"
    }), " ", createVNode("spacing", {
      children: "Venskevičius"
    }), ".\nĮSKAITĖ autorė ", createVNode("spacing", {
      children: "Rasa"
    }), " ", createVNode("spacing", {
      children: "Mickevičiūtė"
    }), "."]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
const url = "/audio-knygos/apie-audio-knyga/nemunai-teka-i-drakono-kalnus copy";
const file = "/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/apie-audio-knyga/nemunai-teka-i-drakono-kalnus copy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/apie-audio-knyga/nemunai-teka-i-drakono-kalnus copy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
