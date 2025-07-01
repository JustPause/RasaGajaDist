import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, d as createAstro, m as maybeRenderHead, b as addAttribute, g as renderScript, r as renderComponent } from '../chunks/astro/server_DawsWqd3.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../chunks/LayoutSecondary_Dx0lPXpS.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
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

const angle_double_left = createSvgComponent({"meta":{"src":"/_astro/angle-double-left.CQWE54XD.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Outline","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M12,24a1,1,0,0,1-.71-.29L3.12,15.54a5,5,0,0,1,0-7.08L11.29.29a1,1,0,1,1,1.42,1.42L4.54,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,12,24Z\" /><path d=\"M22,24a1,1,0,0,1-.71-.29l-9.58-9.59a3,3,0,0,1,0-4.24L21.29.29a1,1,0,1,1,1.42,1.42l-9.59,9.58a1,1,0,0,0,0,1.42l9.59,9.58a1,1,0,0,1,0,1.42A1,1,0,0,1,22,24Z\" />"});

const angle_double_right = createSvgComponent({"meta":{"src":"/_astro/angle-double-right.CvEzWAbT.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Outline","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z\" /><path d=\"M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z\" />"});

const angle_left = createSvgComponent({"meta":{"src":"/_astro/angle-left.CQkSYQl7.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Outline","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z\" />"});

const angle_right = createSvgComponent({"meta":{"src":"/_astro/angle-right.C-53CXW_.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Outline","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z\" />"});

const pause = createSvgComponent({"meta":{"src":"/_astro/pause.Bjeu0Q70.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Outline","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0ZM8,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z\" /><path d=\"M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0ZM19,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z\" />"});

const play_pause = createSvgComponent({"meta":{"src":"/_astro/play-pause.CZRbaLvY.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Layer_1","data-name":"Layer 1","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M22,21c-.553,0-1-.448-1-1V4c0-.552,.447-1,1-1s1,.448,1,1V20c0,.552-.447,1-1,1Zm-4,0c-.553,0-1-.448-1-1V4c0-.552,.447-1,1-1s1,.448,1,1V20c0,.552-.447,1-1,1Zm-13.673-.271c-.509,0-1.023-.122-1.509-.367-1.139-.578-1.818-1.683-1.818-2.958V6.597c0-1.275,.679-2.381,1.817-2.958,1.119-.567,2.452-.457,3.46,.285l7.368,5.402c.86,.631,1.354,1.606,1.354,2.674s-.494,2.043-1.355,2.674l-7.368,5.403c-.588,.432-1.265,.651-1.949,.651Zm-.003-15.455c-.205,0-.408,.05-.603,.149-.458,.232-.721,.66-.721,1.174v10.807c0,.514,.263,.941,.721,1.174,.459,.232,.959,.19,1.372-.112l7.369-5.404c.347-.254,.538-.631,.538-1.061s-.191-.807-.538-1.061L5.094,5.536c-.233-.172-.5-.262-.77-.262Z\" />"});

const play = createSvgComponent({"meta":{"src":"/_astro/play.tN431uV5.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Outline","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z\" />"});

const refresh = createSvgComponent({"meta":{"src":"/_astro/refresh.C8jnTJZv.svg","width":512,"height":512,"format":"svg"},"attributes":{"id":"Outline","viewBox":"0 0 24 24","width":"512","height":"512"},"children":"<path d=\"M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z\" /><path d=\"M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z\" />"});

const $$Astro$1 = createAstro("https://rasagaja.lt");
const $$AudioPlayer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AudioPlayer;
  const { list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-accent rounded-2xl"> <div class="my-4 mx-8 flex flex-col sm:gap-8 items-center gap-4"> <div class="flex gap-2 w-fit p-1.5 rounded-lg flex-col"> <div class="flex items-center"> <select id="list-books" class="w-full p-2 border rounded"> <option class="select-none" value="" disabled selected>Pasirink koki nori skyriu</option> ${list.map((post, index) => renderTemplate`<option${addAttribute(post, "value")} class="select-none"> ${index + 1}. ${post} </option>`)} </select> </div> <div class="relative w-full"> <div class="w-full rounded-full h-0.5 bg-black"></div> <div id="audio-progress-knob" class="w-4 h-4 bg-primary absolute -top-[7px] -left-1.5 rounded-full border-2 border-accent"></div> </div> <audio id="audio-player" controls class="w-full mt-4"> <source id="audio-source" src="" type="audio/wav">
Your browser does not support the audio element.
</audio> <div class="flex justify-center sm:gap-1 w-fit *:rounded-lg *:p-1 *:sm:p-2 *:duration-300 *:hover:bg-secondary *:w-[20%] *:sm:w-[36px]"> <img${addAttribute(refresh.src, "src")} alt="refresh" id="refresh-btn"> <img${addAttribute(angle_double_left.src, "src")} alt="beginning" id="restart-btn"> <img${addAttribute(angle_left.src, "src")} alt="rewind" id="rewind-btn"> <img${addAttribute(play_pause.src, "src")} alt="toggle play/pause" id="toggle-btn"> <img${addAttribute(pause.src, "src")} alt="pause" id="pause-btn"> <img${addAttribute(play.src, "src")} alt="play" id="play-btn"> <img${addAttribute(angle_right.src, "src")} alt="forward" id="forward-btn"> <img${addAttribute(angle_double_right.src, "src")} alt="end" id="end-btn"> </div> </div> </div> </div> ${renderScript($$result, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro?astro&type=script&index=2&lang.ts")}`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro", void 0);

const $$Astro = createAstro("https://rasagaja.lt");
function getStaticPaths() {
  return [
    {
      params: {
        audio_knygos: "nemunai-teka-i-drakono-kalnus"
      }
    },
    {
      params: {
        audio_knygos: "test"
      }
    }
  ];
}
const $$audioKnygos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$audioKnygos;
  const { audio_knygos } = Astro2.params;
  const listOfAudio = await fetch(
    `http://localhost:3000/books/${audio_knygos}/`
  );
  const awaitlistOfAudio = await listOfAudio.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": audio_knygos.charAt(0).toUpperCase() + audio_knygos.slice(1).replaceAll("-", " ") }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AudioPlayer", $$AudioPlayer, { "list": awaitlistOfAudio })} ` })}`;
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
