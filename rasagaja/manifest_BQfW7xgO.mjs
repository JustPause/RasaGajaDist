import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_WWt00ON-.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/justinas/Programming/RasoSvetaine/","cacheDir":"file:///home/justinas/Programming/RasoSvetaine/node_modules/.astro/","outDir":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/","srcDir":"file:///home/justinas/Programming/RasoSvetaine/src/","publicDir":"file:///home/justinas/Programming/RasoSvetaine/public/","buildClientDir":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/client/","buildServerDir":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/server/","adapterName":"","routes":[{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/apie-save/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/apie-save","isIndex":false,"type":"page","pattern":"^\\/apie-save\\/?$","segments":[[{"content":"apie-save","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apie-save.astro","pathname":"/apie-save","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-ira%C5%A1ai/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/audio-irašai","isIndex":false,"type":"page","pattern":"^\\/audio-irašai\\/?$","segments":[[{"content":"audio-irašai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/audio-irašai.astro","pathname":"/audio-irašai","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-knygos/Apie-audio-knyga/nemunai-teka-i-drakono-kalnus/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/audio-knygos/apie-audio-knyga/nemunai-teka-i-drakono-kalnus","isIndex":false,"type":"page","pattern":"^\\/audio-knygos\\/Apie-audio-knyga\\/nemunai-teka-i-drakono-kalnus\\/?$","segments":[[{"content":"audio-knygos","dynamic":false,"spread":false}],[{"content":"Apie-audio-knyga","dynamic":false,"spread":false}],[{"content":"nemunai-teka-i-drakono-kalnus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/audio-knygos/Apie-audio-knyga/nemunai-teka-i-drakono-kalnus.mdx","pathname":"/audio-knygos/Apie-audio-knyga/nemunai-teka-i-drakono-kalnus","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/audio-knygos/audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus","isIndex":false,"type":"page","pattern":"^\\/audio-knygos\\/Audio-knugos-pasibandymas\\/nemunai-teka-i-drakono-kalnus\\/?$","segments":[[{"content":"audio-knygos","dynamic":false,"spread":false}],[{"content":"Audio-knugos-pasibandymas","dynamic":false,"spread":false}],[{"content":"nemunai-teka-i-drakono-kalnus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus.mdx","pathname":"/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/audio-knygos/knygos-isigijias/nemunai-teka-i-drakono-kalnus","isIndex":false,"type":"page","pattern":"^\\/audio-knygos\\/Knygos-isigijias\\/nemunai-teka-i-drakono-kalnus\\/?$","segments":[[{"content":"audio-knygos","dynamic":false,"spread":false}],[{"content":"Knygos-isigijias","dynamic":false,"spread":false}],[{"content":"nemunai-teka-i-drakono-kalnus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus.mdx","pathname":"/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/autoportretas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/autoportretas","isIndex":false,"type":"page","pattern":"^\\/autoportretas\\/?$","segments":[[{"content":"autoportretas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/autoportretas.astro","pathname":"/autoportretas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/Dirbu%20dar%20prie%20to/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dirbu dar prie to","isIndex":false,"type":"page","pattern":"^\\/Dirbu dar prie to\\/?$","segments":[[{"content":"Dirbu dar prie to","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Dirbu dar prie to.astro","pathname":"/Dirbu dar prie to","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/400/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/errors/400","isIndex":false,"type":"page","pattern":"^\\/errors\\/400\\/?$","segments":[[{"content":"errors","dynamic":false,"spread":false}],[{"content":"400","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/errors/400.astro","pathname":"/errors/400","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/401/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/errors/401","isIndex":false,"type":"page","pattern":"^\\/errors\\/401\\/?$","segments":[[{"content":"errors","dynamic":false,"spread":false}],[{"content":"401","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/errors/401.astro","pathname":"/errors/401","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/403/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/errors/403","isIndex":false,"type":"page","pattern":"^\\/errors\\/403\\/?$","segments":[[{"content":"errors","dynamic":false,"spread":false}],[{"content":"403","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/errors/403.astro","pathname":"/errors/403","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/404/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/errors/404","isIndex":false,"type":"page","pattern":"^\\/errors\\/404\\/?$","segments":[[{"content":"errors","dynamic":false,"spread":false}],[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/errors/404.astro","pathname":"/errors/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/500/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/errors/500","isIndex":false,"type":"page","pattern":"^\\/errors\\/500\\/?$","segments":[[{"content":"errors","dynamic":false,"spread":false}],[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/errors/500.astro","pathname":"/errors/500","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/pedos-kelyje/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pedos-kelyje","isIndex":false,"type":"page","pattern":"^\\/pedos-kelyje\\/?$","segments":[[{"content":"pedos-kelyje","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pedos-kelyje.astro","pathname":"/pedos-kelyje","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tekstai/apie-knyga/nemunai-teka-i-drakono-kalnus","isIndex":false,"type":"page","pattern":"^\\/tekstai\\/Apie-knyga\\/nemunai-teka-i-drakono-kalnus\\/?$","segments":[[{"content":"tekstai","dynamic":false,"spread":false}],[{"content":"Apie-knyga","dynamic":false,"spread":false}],[{"content":"nemunai-teka-i-drakono-kalnus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus.mdx","pathname":"/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/tekstai/Tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tekstai/tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus","isIndex":false,"type":"page","pattern":"^\\/tekstai\\/Tekstines-knygos-pasibandymas\\/nemunai-teka-i-drakono-kalnus\\/?$","segments":[[{"content":"tekstai","dynamic":false,"spread":false}],[{"content":"Tekstines-knygos-pasibandymas","dynamic":false,"spread":false}],[{"content":"nemunai-teka-i-drakono-kalnus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tekstai/Tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus.mdx","pathname":"/tekstai/Tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/tekstai/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tekstai","isIndex":false,"type":"page","pattern":"^\\/tekstai\\/?$","segments":[[{"content":"tekstai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tekstai.astro","pathname":"/tekstai","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://rasagaja.lt","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/justinas/Programming/RasoSvetaine/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/Apie-audio-knyga/nemunai-teka-i-drakono-kalnus.mdx",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus.mdx",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus.mdx",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus.mdx",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/Tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus.mdx",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/Dirbu dar prie to.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/[audio_knygos].astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/apie-save.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/audio-irašai.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/autoportretas.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/errors/400.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/errors/401.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/errors/403.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/errors/404.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/errors/500.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/pedos-kelyje.astro",{"propagation":"none","containsHead":true}],["/home/justinas/Programming/RasoSvetaine/src/pages/tekstai.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/apie-save@_@astro":"pages/apie-save.astro.mjs","\u0000@astro-page:src/pages/audio-irašai@_@astro":"pages/audio-irašai.astro.mjs","\u0000@astro-page:src/pages/audio-knygos/Apie-audio-knyga/nemunai-teka-i-drakono-kalnus@_@mdx":"pages/audio-knygos/apie-audio-knyga/nemunai-teka-i-drakono-kalnus.astro.mjs","\u0000@astro-page:src/pages/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus@_@mdx":"pages/audio-knygos/audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus.astro.mjs","\u0000@astro-page:src/pages/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus@_@mdx":"pages/audio-knygos/knygos-isigijias/nemunai-teka-i-drakono-kalnus.astro.mjs","\u0000@astro-page:src/pages/autoportretas@_@astro":"pages/autoportretas.astro.mjs","\u0000@astro-page:src/pages/Dirbu dar prie to@_@astro":"pages/dirbu dar prie to.astro.mjs","\u0000@astro-page:src/pages/errors/400@_@astro":"pages/errors/400.astro.mjs","\u0000@astro-page:src/pages/errors/401@_@astro":"pages/errors/401.astro.mjs","\u0000@astro-page:src/pages/errors/403@_@astro":"pages/errors/403.astro.mjs","\u0000@astro-page:src/pages/errors/404@_@astro":"pages/errors/404.astro.mjs","\u0000@astro-page:src/pages/errors/500@_@astro":"pages/errors/500.astro.mjs","\u0000@astro-page:src/pages/pedos-kelyje@_@astro":"pages/pedos-kelyje.astro.mjs","\u0000@astro-page:src/pages/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus@_@mdx":"pages/tekstai/apie-knyga/nemunai-teka-i-drakono-kalnus.astro.mjs","\u0000@astro-page:src/pages/tekstai/Tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus@_@mdx":"pages/tekstai/tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus.astro.mjs","\u0000@astro-page:src/pages/tekstai@_@astro":"pages/tekstai.astro.mjs","\u0000@astro-page:src/pages/[audio_knygos]@_@astro":"pages/_audio_knygos_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BQfW7xgO.mjs","/home/justinas/Programming/RasoSvetaine/src/pages/[audio_knygos].astro?astro&type=script&index=0&lang.ts":"_astro/_audio_knygos_.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro?astro&type=script&index=0&lang.ts":"_astro/AudioPlayer.astro_astro_type_script_index_0_lang.CMgfKxn7.js","/home/justinas/Programming/RasoSvetaine/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/justinas/Programming/RasoSvetaine/src/pages/[audio_knygos].astro?astro&type=script&index=0&lang.ts",""],["/home/justinas/Programming/RasoSvetaine/src/components/AudioPlayer.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"audio-player\"),d=document.getElementById(\"list-books\"),s=document.getElementById(\"loading-spinner\"),a=document.getElementById(\"full-audio-player\");function m(e){const t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${r.toString().padStart(2,\"0\")}`}function u(e){const t=e.selectedIndex;t<e.options.length-1&&(e.selectedIndex=t+1,e.dispatchEvent(new Event(\"change\")))}function v(e){const t=document.getElementById(\"seek-slider\"),r=document.getElementById(\"current-time\"),l=document.getElementById(\"duration\"),c=document.getElementById(\"volume-slider\"),n=(p,E)=>{const i=document.getElementById(p);i&&(i.onclick=E)};n(\"refresh-btn\",()=>e.load()),n(\"restart-btn\",()=>e.currentTime=0),n(\"rewind-btn\",()=>e.currentTime-=5),n(\"forward-btn\",()=>e.currentTime+=5),n(\"end-btn\",()=>u(d)),n(\"toggle-btn\",()=>e.paused?e.play():e.pause()),e.addEventListener(\"loadedmetadata\",()=>{l.textContent=m(e.duration),t.max=Math.floor(e.duration).toString()}),e.addEventListener(\"timeupdate\",()=>{t.value=Math.floor(e.currentTime).toString(),r.textContent=m(e.currentTime)}),t.addEventListener(\"input\",()=>{e.currentTime=parseFloat(t.value)}),c.addEventListener(\"input\",()=>{e.volume=parseFloat(c.value)/100})}v(o);d?.addEventListener(\"change\",()=>{g(a,s),o.addEventListener(\"canplay\",()=>{console.log(\"Audio is ready to play!\"),o.play().catch(e=>console.error(\"Playback error:\",e)),a.classList.remove(\"hidden\"),s.classList.add(\"hidden\"),console.log(\"stoped thining\")},{once:!0}),o.addEventListener(\"ended\",()=>{console.log(\"Audio ended, ready to play next!\"),u(d)},{once:!0})});window.onload=()=>{d.options.selectedIndex=1,d.dispatchEvent(new Event(\"change\")),g(a,s)};function g(e,t){e.classList.add(\"hidden\"),t.classList.remove(\"hidden\"),console.log(\"thining\");const r=d.value,l=`https://rasagaja.lt/backendhidden/nemunai-teka-i-drakono-kalnus/${encodeURIComponent(r)}`;o.src=l,o.load()}"]],"assets":["/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/apie-save/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-ira%C5%A1ai/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-knygos/Apie-audio-knyga/nemunai-teka-i-drakono-kalnus/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-knygos/Audio-knugos-pasibandymas/nemunai-teka-i-drakono-kalnus/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/audio-knygos/Knygos-isigijias/nemunai-teka-i-drakono-kalnus/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/autoportretas/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/Dirbu%20dar%20prie%20to/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/400/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/401/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/403/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/404/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/errors/500/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/pedos-kelyje/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/tekstai/Apie-knyga/nemunai-teka-i-drakono-kalnus/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/tekstai/Tekstines-knygos-pasibandymas/nemunai-teka-i-drakono-kalnus/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/tekstai/index.html","/file:///home/justinas/Programming/RasoSvetaine/dist/rasagaja/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"rnJnBqjDYpkW3eh88cmrIGn5gYEqQGSTzhRjN5/u4oM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
