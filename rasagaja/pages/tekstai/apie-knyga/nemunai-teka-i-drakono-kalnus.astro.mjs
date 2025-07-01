import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot, b as addAttribute, _ as __astro_tag_component__, f as createVNode, F as Fragment } from '../../../chunks/astro/server_DawsWqd3.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../../../chunks/LayoutSecondary_Dx0lPXpS.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://rasagaja.lt");
const $$BookLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row justify-around mt-8"> <div class="w-4xl mx-8 text-justify flex flex-col gap-8 *:indent-8"> ${renderSlot($$result2, $$slots["default"])} </div> <div class="w-4/12"> <img${addAttribute(`../../img/${frontmatter.cover}`, "src")} alt="Knygos virserlis" alt="" srcset="" class="rounded-2xl"> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/layouts/BookLayout.astro", void 0);

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BookLayout, {
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
  "layout": "/src/layouts/BookLayout.astro",
  "title": "Nemunai teka į Drakono kalnus",
  "cover": "tekstai/NEMUNAI TEKA Į DRAKONO KALNUS.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "„Išgalvoti dalykai siurbia klausytojo energiją, kad jo vaizduotės ir įsijautimo dėka įgautų šiek tiek realumo. Tikros  istorijos yra energijos koncentratai - jos teikia klausytojui galingos gyvybinės energijos!” (R.Štaineris) Ši knygoje cituojama mintis autorei labai svarbi."
    }), "\n", createVNode(_components.p, {
      children: "„NEMUNAI TEKA Į DRAKONO KALNUS“ - t i k r a  istorija. Sraunia upe išsilieja mylinčios moters prisiminimai apie aktorių, režisierių, rašytoją  K ę s t u t į  M a r č i u l y n  ą, vėliau - budistų vienuolį  B o  H a e n g . Graži ir šiurpi, linksma ir graudi, ši istorija taškyte taškosi gyva energija, nepalikdama abejingų: gąsdindama apsidraudėlius ir anemikus, o neatsargiai įbridusius  it kalnų upė nusinešdama kartu."
    }), "\n", createVNode("center", {
      children: createVNode("p", {
        children: "x"
      })
    }), "\n", createVNode(_components.p, {
      children: "Koks tikrasis - slaptas - šios upės vardas?"
    }), "\n", createVNode(_components.p, {
      children: "Aistringas Meilės prisipažinimas? Vaivorykštiniai Vilties tiltai? Klajūno Pero Giunto kančia? Šventas Solveigos  naivumas? Išdidžiosios Lilit triumfas? Vienuolio žmonos išpažintis? Kūrybinis dienoraštis? Dvasinių ieškojimų punktyras? Tiesą sakant,  visa tai."
    }), "\n", createVNode(_components.p, {
      children: "Pamirškite atsargumą. Drąsos atsiduoti gyvybe kunkuliuojančiam srautui!"
    }), "\n", createVNode(_components.p, {
      children: "Knygą „NEMUNAI TEKA Į DRAKONO KALNUS“ 2025 m. leidžia leidykla „KAUKO LAIPTAI“."
    }), "\n", createVNode(_components.p, {
      children: "Pirmasis, autorės redaguotas knygos variantas įrašytas AUDIO formatu.."
    }), "\n", createVNode(_components.p, {
      children: "Buitinį įrašą REDAGAVO bei RESTAURAVO garso technologas  M a r i u s  V e n s k e v i č i u s ."
    }), "\n", createVNode(_components.p, {
      children: "ĮSKAITĖ autorė  R a s a  M i c k e v i č i ū t ė ."
    })]
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

const url = "/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus";
const file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus.mdx";
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

const page = () => _page;

export { page };
