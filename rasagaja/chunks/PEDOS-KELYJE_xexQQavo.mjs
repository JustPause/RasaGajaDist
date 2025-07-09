const Pedos_kelyja_ = new Proxy({"src":"/_astro/PEDOS-KELYJE.Dt2EgbPl.jpg","width":1767,"height":2359,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/PEDOS-KELYJE.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/justinas/Programming/RasoSvetaine/src/img/PEDOS-KELYJE.jpg");
							return target[name];
						}
					});

export { Pedos_kelyja_ as P };
