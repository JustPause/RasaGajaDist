const Pedos_kelyja = new Proxy({"src":"/_astro/PEDOS_KELYJE.Dt2EgbPl.jpg","width":1767,"height":2359,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinas/Programming/RasoSvetaine/src/img/PEDOS_KELYJE.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/justinas/Programming/RasoSvetaine/src/img/PEDOS_KELYJE.jpg");
							return target[name];
						}
					});

export { Pedos_kelyja as P };
