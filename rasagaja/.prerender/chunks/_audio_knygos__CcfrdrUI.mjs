import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, p as generateCspDigest, s as spreadAttributes, u as unescapeHTML, A as AstroError, q as UnknownContentCollectionError, r as renderComponent, t as defineScriptVars } from './prerender_CQD0AcWy.mjs';
import { r as renderScript, V as VALID_INPUT_FORMATS, a as $$Layout, $ as $$Image } from './Layout_DV8QEiCP.mjs';
import 'clsx';
import 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import * as z from 'zod/v4';
import { removeBase, isRemotePath } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
import { A as Audio_NEMUNAI_TEKA___DRAKONO_KALNUS } from './NEMUNAI_TEKA_Į_DRAKONO_KALNUS_B-H3Xxe-.mjs';

const $$AudioPlayer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AudioPlayer;
  const { data, audioKnygos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="AudioPlayer-child" class="bg-dark-background flex h-58 w-full flex-col items-center rounded-2xl p-8"> <div class="w-full"> <div id="TimeLine" class="relative mb-2 flex cursor-pointer items-center"> <div id="Line" class="bg-dark-text-light h-1 w-full rounded-full"></div> <div id="Bubble" class="bg-light-primary absolute h-4 w-8 rounded-full"></div> </div> <div class="w-full"> <audio class="w-full" id="audio-grotuvas" preload="auto"${addAttribute(JSON.stringify(data), "data-data")}${addAttribute(audioKnygos, "data-audio-knygos")}></audio> </div> <div class="flex justify-between"> <div><p id="dabartinis-laikas">--:--</p></div> <div><p id="pilnas-laikas">--:--</p></div> </div> </div> <div id="Controls" class="mb-6 flex w-full items-center justify-between"> <div class="mx-auto flex items-center gap-4"> <span id="replay" class="material-symbols-rounded text-dark-text-light icons cursor-pointer text-4xl! select-none">
replay_5
</span> <div id="playMiktukas" class="bg-dark-text-light flex h-16 w-16 items-center justify-center rounded-full"> <span id="playIcona" class="material-symbols-rounded text-dark-primary-darker icons cursor-pointer text-4xl! select-none">
play_arrow
</span> </div> <span id="forward" class="material-symbols-rounded text-dark-text-light icons cursor-pointer text-4xl! select-none">
forward_5
</span> </div> <span id="doubleForward" class="material-symbols-rounded icons h-10 w-10 cursor-pointer text-center text-4xl! select-none">
double_arrow
</span> </div> <div id="Volume" class="w-full"> <input id="volume" type="range" min="0" max="1" step="0.01" value="1" class="accent-light-primary w-full cursor-pointer"> </div> </div> ${renderScript($$result, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro", void 0);

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_CxuEQRmb.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        if (imported.__svgData) {
          const { __svgData: svgData, ...meta } = imported;
          ctx.update(createSvgComponent({ meta, ...svgData }));
        } else {
          ctx.update(imported);
        }
      } else {
        ctx.update(src);
      }
    }
  });
}

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
function getStaticPaths() {
  return [
    { params: { audio_knygos: "nemunai-teka-i-drakono-kalnus" } },
    { params: { audio_knygos: "klausyti-i\u0161trauku" } }
  ];
}
const $$audioKnygos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$audioKnygos;
  const list_apie_audio_knyga = await getCollection("apie_audio_knyga");
  const { audio_knygos } = Astro2.params;
  if (list_apie_audio_knyga === void 0) {
    return Astro2.redirect("/404");
  }
  const response = await fetch(`https://rasagaja.lt/backend/${audio_knygos}`);
  const data = Object.entries(await response.json());
  let title;
  if (audio_knygos == "nemunai-teka-i-drakono-kalnus") {
    title = "Nemunai teka \u012F drakono kalnus";
  } else {
    title = "Klausyti i\u0161trauk\u0173";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": audio_knygos }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">', "</p> ", ' <div class="flex w-full flex-col-reverse gap-8 xl:flex-row"> <div class="group inline-block"> <button id="dropdownMenu-button" class="bg-dark-background mb-2 flex w-80 items-center rounded-2xl px-3 py-2"> <span class="w-full flex-1 pr-1 font-semibold" id="grojema-knyga-dropdown">Skyrius\n</span> <span class="material-symbols-outlined h-4 w-8 origin-[50%_75%] transform fill-current transition duration-150 ease-in-out group-hover:-rotate-180">\nkeyboard_arrow_down\n</span> </button> <ul id="dropdownMenu-ul" class="bg-dark-background *:hover:bg-dark-primary *:text-md scrollbar-thin scrollbar-thumb-dark-primary scrollbar-track-dark-background noScroll absolute h-36 w-80 origin-top scale-0 transform space-y-2 overflow-y-auto rounded-2xl p-2 transition duration-150 ease-in-out *:cursor-pointer *:rounded-xl *:px-3 *:py-2 group-hover:scale-100 xl:h-43"> ', " </ul> </div> ", " <script>(function(){", '\n          function initSelectionAudioFile() {\n            const menuEl = document.getElementById("dropdownMenu-ul");\n            const audioEl = document.getElementById("audio-grotuvas");\n            const chapterNameDropdownEl = document.getElementById(\n              "grojema-knyga-dropdown",\n            );\n\n            menuEl.querySelectorAll("li").forEach((item) => {\n              item.addEventListener("click", () => {\n                const chapterName = item.dataset.name;\n\n                audioEl.dataset.chapterId = item.value;\n                audioEl.src = `https://rasagaja.lt/backend/${audio_knygos}/${chapterName}`;\n\n                chapterNameDropdownEl.textContent = chapterName;\n              });\n            });\n          }\n\n          document.addEventListener("astro:page-load", initSelectionAudioFile);\n        })();<\/script> </div> </div> </div> '], [" ", '<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">', "</p> ", ' <div class="flex w-full flex-col-reverse gap-8 xl:flex-row"> <div class="group inline-block"> <button id="dropdownMenu-button" class="bg-dark-background mb-2 flex w-80 items-center rounded-2xl px-3 py-2"> <span class="w-full flex-1 pr-1 font-semibold" id="grojema-knyga-dropdown">Skyrius\n</span> <span class="material-symbols-outlined h-4 w-8 origin-[50%_75%] transform fill-current transition duration-150 ease-in-out group-hover:-rotate-180">\nkeyboard_arrow_down\n</span> </button> <ul id="dropdownMenu-ul" class="bg-dark-background *:hover:bg-dark-primary *:text-md scrollbar-thin scrollbar-thumb-dark-primary scrollbar-track-dark-background noScroll absolute h-36 w-80 origin-top scale-0 transform space-y-2 overflow-y-auto rounded-2xl p-2 transition duration-150 ease-in-out *:cursor-pointer *:rounded-xl *:px-3 *:py-2 group-hover:scale-100 xl:h-43"> ', " </ul> </div> ", " <script>(function(){", '\n          function initSelectionAudioFile() {\n            const menuEl = document.getElementById("dropdownMenu-ul");\n            const audioEl = document.getElementById("audio-grotuvas");\n            const chapterNameDropdownEl = document.getElementById(\n              "grojema-knyga-dropdown",\n            );\n\n            menuEl.querySelectorAll("li").forEach((item) => {\n              item.addEventListener("click", () => {\n                const chapterName = item.dataset.name;\n\n                audioEl.dataset.chapterId = item.value;\n                audioEl.src = \\`https://rasagaja.lt/backend/\\${audio_knygos}/\\${chapterName}\\`;\n\n                chapterNameDropdownEl.textContent = chapterName;\n              });\n            });\n          }\n\n          document.addEventListener("astro:page-load", initSelectionAudioFile);\n        })();<\/script> </div> </div> </div> '])), maybeRenderHead(), title.replaceAll("-", " ").toUpperCase(), renderComponent($$result2, "Image", $$Image, { "src": Audio_NEMUNAI_TEKA___DRAKONO_KALNUS, "alt": "Rasytojos autoportretas", "class": "w-lg rounded-2xl" }), data.map(([id, name], index) => renderTemplate`<li${addAttribute(index, "value")}${addAttribute(name, "data-name")}> ${id} : ${name} </li>`), renderComponent($$result2, "AudioPlayer", $$AudioPlayer, { "data": data, "audioKnygos": audio_knygos }), defineScriptVars({ data, audio_knygos })) })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/[audio_knygos].astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/[audio_knygos].astro";
const $$url = "/[audio_knygos]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$audioKnygos,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
