import { c as createComponent, m as maybeRenderHead, f as renderScript, b as renderTemplate, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderComponent, a as createAstro, j as defineScriptVars, d as addAttribute } from '../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { V as VALID_INPUT_FORMATS, a as $$Layout, $ as $$Image } from '../chunks/Layout_D4JteZMS.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
import '@astrojs/internal-helpers/remote';
import { A as Audio_NEMUNAI_TEKA___DRAKONO_KALNUS } from '../chunks/NEMUNAI_TEKA_Į_DRAKONO_KALNUS_Ctlk-nAN.mjs';
export { renderers } from '../renderers.mjs';

const $$AudioPlayer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="AudioPlayer-child" class="bg-dark-background flex h-58 w-full flex-col items-center rounded-2xl p-8"> <div class="w-full"> <div id="TimeLine" class="relative flex h-8 items-center"> <div id="Line" class="bg-dark-text-light h-1 w-full rounded-full"></div> <div id="Bubble" class="absolute h-4 w-8 rounded-full bg-amber-500"></div> </div> <div class="w-full"> <audio class="w-full" id="audio-grotuvas" preload="metadata"></audio> </div> <div class="flex justify-between"> <div><p id="dabartinis-laikas">--:--</p></div> <!-- <p id="grojema-knyga">----</p> --> <div><p id="pilnas-laikas">--:--</p></div> </div> </div> <div id="Controls" class="mb-6 flex items-center gap-4"> <span id="replay" class="material-symbols-rounded text-dark-text-light icons !text-4xl select-none">
replay_5
</span> <div id="playMiktukas" class="bg-dark-text-light flex h-16 w-16 items-center justify-center rounded-full"> <span id="playIcona" class="material-symbols-rounded text-dark-primary-darker icons !text-4xl select-none">
play_arrow
</span> </div> <span id="forward" class="material-symbols-rounded text-dark-text-light icons !text-4xl select-none">
forward_5
</span> </div> <div id="Volume" class="w-full"> <input id="volume" type="range" min="0" max="1" step="0.01" value="1" class="w-full cursor-pointer accent-amber-500"> </div> </div> ${renderScript($$result, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro", void 0);

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
      const data = await import('../chunks/_astro_data-layer-content_C03KWzvs.mjs');
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

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://rasagaja.lt", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
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
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
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
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/Layout_D4JteZMS.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
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
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_CC8Ve1kN.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { audio_knygos: "nemunai-teka-i-drakono-kalnus" } },
    { params: { audio_knygos: "klausyti-i\u0161traukos" } }
  ];
}
const $$audioKnygos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
    title = "Nemunai teka \u012F  drakono kalnus";
  } else {
    title = audio_knygos;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": audio_knygos }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">', "</p> ", ' <div class="flex w-full flex-col-reverse gap-8 xl:flex-row"> <div class="group inline-block"> <button id="dropdownMenu-button" class="bg-dark-background mb-2 flex w-80 items-center rounded-2xl px-3 py-2"> <span class="w-full flex-1 pr-1 font-semibold" id="grojema-knyga-dropdown">Skyrius\n</span> <span class="material-symbols-outlined h-4 w-8 origin-[50%_75%] transform fill-current transition duration-150 ease-in-out group-hover:-rotate-180">\nkeyboard_arrow_down\n</span> </button> <ul id="dropdownMenu-ul" class="bg-dark-background *:hover:bg-dark-primary *:text-md scrollbar-thin scrollbar-thumb-dark-primary scrollbar-track-dark-background outline-dark-text-light absolute h-36 w-80 origin-top scale-0 transform space-y-2 overflow-y-auto rounded-2xl p-2 outline transition duration-150 ease-in-out *:cursor-pointer *:rounded-xl *:px-3 *:py-2 group-hover:scale-100 xl:h-43 xl:outline-none"> ', " </ul> </div> ", " <script>(function(){", '\n          const buttonEl = document.getElementById("dropdownMenu-button");\n          const menuEl = document.getElementById("dropdownMenu-ul");\n\n          const audioEl = document.getElementById("audio-grotuvas");\n\n          const chapterNameDropdownEl = document.getElementById(\n            "grojema-knyga-dropdown",\n          );\n\n          const color = "bg-dark-primary";\n\n          buttonEl.addEventListener("click", () => {\n            menuEl.classList.toggle(color);\n          });\n\n          menuEl.querySelectorAll("li").forEach((item) => {\n            item.addEventListener("click", () => {\n              menuEl.querySelectorAll("li").forEach((li) => {\n                li.classList.remove(color);\n                li.classList.add("hover:bg-dark-primary");\n              });\n\n              item.classList.add(color);\n              item.classList.remove("hover:bg-dark-primary");\n\n              const chapterId = item.value;\n              const chapterName = item.dataset.nane;\n\n              audioEl.src = `https://rasagaja.lt/backend/${audio_knygos}/${chapterName}`;\n              // chapterNameEl.textContent = chapterNameDropdownEl.textContent =\n              //   chapterName;\n              chapterNameDropdownEl.textContent = chapterName;\n            });\n          });\n        })();<\/script> </div> </div> </div> '], [" ", '<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">', "</p> ", ' <div class="flex w-full flex-col-reverse gap-8 xl:flex-row"> <div class="group inline-block"> <button id="dropdownMenu-button" class="bg-dark-background mb-2 flex w-80 items-center rounded-2xl px-3 py-2"> <span class="w-full flex-1 pr-1 font-semibold" id="grojema-knyga-dropdown">Skyrius\n</span> <span class="material-symbols-outlined h-4 w-8 origin-[50%_75%] transform fill-current transition duration-150 ease-in-out group-hover:-rotate-180">\nkeyboard_arrow_down\n</span> </button> <ul id="dropdownMenu-ul" class="bg-dark-background *:hover:bg-dark-primary *:text-md scrollbar-thin scrollbar-thumb-dark-primary scrollbar-track-dark-background outline-dark-text-light absolute h-36 w-80 origin-top scale-0 transform space-y-2 overflow-y-auto rounded-2xl p-2 outline transition duration-150 ease-in-out *:cursor-pointer *:rounded-xl *:px-3 *:py-2 group-hover:scale-100 xl:h-43 xl:outline-none"> ', " </ul> </div> ", " <script>(function(){", '\n          const buttonEl = document.getElementById("dropdownMenu-button");\n          const menuEl = document.getElementById("dropdownMenu-ul");\n\n          const audioEl = document.getElementById("audio-grotuvas");\n\n          const chapterNameDropdownEl = document.getElementById(\n            "grojema-knyga-dropdown",\n          );\n\n          const color = "bg-dark-primary";\n\n          buttonEl.addEventListener("click", () => {\n            menuEl.classList.toggle(color);\n          });\n\n          menuEl.querySelectorAll("li").forEach((item) => {\n            item.addEventListener("click", () => {\n              menuEl.querySelectorAll("li").forEach((li) => {\n                li.classList.remove(color);\n                li.classList.add("hover:bg-dark-primary");\n              });\n\n              item.classList.add(color);\n              item.classList.remove("hover:bg-dark-primary");\n\n              const chapterId = item.value;\n              const chapterName = item.dataset.nane;\n\n              audioEl.src = \\`https://rasagaja.lt/backend/\\${audio_knygos}/\\${chapterName}\\`;\n              // chapterNameEl.textContent = chapterNameDropdownEl.textContent =\n              //   chapterName;\n              chapterNameDropdownEl.textContent = chapterName;\n            });\n          });\n        })();<\/script> </div> </div> </div> '])), maybeRenderHead(), title.replaceAll("-", " ").toUpperCase(), renderComponent($$result2, "Image", $$Image, { "src": Audio_NEMUNAI_TEKA___DRAKONO_KALNUS, "alt": "Rasytojos autoportretas", "class": "w-128 rounded-2xl" }), data.map(([id, name]) => renderTemplate`<li${addAttribute(Number(id), "value")}${addAttribute(name, "data-nane")}> ${id} : ${name} </li>`), renderComponent($$result2, "AudioPlayer", $$AudioPlayer, {}), defineScriptVars({ data, audio_knygos })) })}`;
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
