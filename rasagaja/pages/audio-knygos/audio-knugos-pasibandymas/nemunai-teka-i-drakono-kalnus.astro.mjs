import { _ as __astro_tag_component__, e as createVNode, F as Fragment } from '../../../chunks/astro/server_WWt00ON-.mjs';
import { $ as $$AudioBookLayout } from '../../../chunks/AudioBookLayout_DkJ0xOk3.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$AudioBookLayout, {
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
  "layout": "/src/layouts/AudioBookLayout.astro",
  "title": "Knygos isigijimas"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus";
const file = "/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus.mdx";
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
