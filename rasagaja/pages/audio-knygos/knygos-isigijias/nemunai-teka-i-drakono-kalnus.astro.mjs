import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from '../../../chunks/astro/server_DawsWqd3.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const frontmatter = {};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    meta: "meta",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.p, {
      children: "2"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus";
const file = "/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus.mdx";
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
