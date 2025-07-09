const Autoportretas_ = new Proxy({"src":"/_astro/AUTOPORTRETAS.CYcHfHUU.jpg","width":2560,"height":1536,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/AUTOPORTRETAS.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/justinas/Programming/RasoSvetaine/src/img/AUTOPORTRETAS.jpg");
							return target[name];
						}
					});

export { Autoportretas_ as A };
