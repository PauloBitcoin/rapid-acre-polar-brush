import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, c as Moon, d as Languages, f as Flame, i as Share2, l as Lock, m as BadgeCheck, o as Pin, p as Bookmark, r as Sun, s as Pause, t as X, u as ListPlus } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CApdH1w2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NOW = Date.parse("2026-10-14T23:11:00.000Z");
function formatDuration(seconds) {
	const safe = Math.max(0, Math.round(seconds));
	return `${Math.floor(safe / 60)}:${(safe % 60).toString().padStart(2, "0")}`;
}
function compactNumber(value) {
	if (value < 1e3) return String(value);
	if (value < 1e6) {
		const scaled = value / 1e3;
		return `${(scaled < 10 ? scaled.toFixed(1) : Math.round(scaled).toString()).replace(".", ",")} mil`;
	}
	return `${(value / 1e6).toFixed(1).replace(".", ",")} mi`;
}
function relativeTime(iso) {
	const delta = Math.max(0, NOW - Date.parse(iso));
	const minutes = Math.floor(delta / 6e4);
	const hours = Math.floor(delta / 36e5);
	const days = Math.floor(delta / 864e5);
	if (hours < 1) return {
		label: minutes <= 1 ? "agora" : `há ${minutes} min`,
		fresh: true
	};
	if (hours < 24) return {
		label: hours === 1 ? "há 1 hora" : `há ${hours} horas`,
		fresh: true
	};
	if (days === 1) return {
		label: "há 1 dia",
		fresh: false
	};
	return {
		label: `há ${days} dias`,
		fresh: false
	};
}
var hoursAgo = (hours) => (/* @__PURE__ */ new Date(NOW - hours * 36e5)).toISOString();
var videos = [
	{
		shortId: "ivry01",
		title: "You looking like an angel in ivory",
		cover: "/covers/ivory.jpg",
		duration: 42,
		viewCount: 29,
		createdAt: hoursAgo(96),
		isPrivate: true,
		isFixed: false,
		isDubbed: false,
		resumePosition: 0,
		tags: [{
			id: "pastel",
			tag: "pastel"
		}, {
			id: "look",
			tag: "look"
		}],
		blurb: "Luz de fim de tarde, seda crua e um colar que segura o quadro. Curto, quase um olhar.",
		user: {
			id: "u1",
			username: "mira.vale",
			verified: true
		}
	},
	{
		shortId: "tree02",
		title: "Gold hour in a bare garden",
		cover: "/covers/trees.jpg",
		duration: 10,
		viewCount: 12,
		createdAt: hoursAgo(18),
		isPrivate: true,
		isFixed: false,
		isDubbed: false,
		resumePosition: 0,
		tags: [{
			id: "garden",
			tag: "garden"
		}, {
			id: "gold",
			tag: "gold"
		}],
		blurb: "Vestido bordado entre árvores sem folha. O vapor da manhã faz o trabalho da luz.",
		user: {
			id: "u2",
			username: "noor.atelier",
			verified: true
		}
	},
	{
		shortId: "silk03",
		title: "Close enough to hear the silk",
		cover: "/covers/close.jpg",
		duration: 120,
		viewCount: 20,
		createdAt: hoursAgo(600),
		isPrivate: true,
		isFixed: false,
		isDubbed: true,
		resumePosition: 0,
		tags: [{
			id: "beauty",
			tag: "beauty"
		}, {
			id: "silk",
			tag: "silk"
		}],
		blurb: "Retrato fechado, renda e ouro velho. A faixa dublada entra por baixo, sem cobrir a voz.",
		user: {
			id: "u3",
			username: "liora.sen",
			verified: true
		}
	},
	{
		shortId: "pwdr04",
		title: "Powder, pearls, no rush",
		cover: "/covers/powder.jpg",
		duration: 54,
		viewCount: 17,
		createdAt: hoursAgo(144),
		isPrivate: true,
		isFixed: false,
		isDubbed: false,
		resumePosition: 0,
		tags: [{
			id: "pastel",
			tag: "pastel"
		}, {
			id: "pearls",
			tag: "pearls"
		}],
		blurb: "Estúdio claro, azul-pó e brinco de pérola. Um take só, sem corte no meio do gesto.",
		user: {
			id: "u4",
			username: "ansel.studio",
			verified: false
		}
	},
	{
		shortId: "lant05",
		title: "Lantern hour",
		cover: "/covers/lantern.jpg",
		duration: 185,
		viewCount: 860,
		createdAt: hoursAgo(288),
		isPrivate: false,
		isFixed: false,
		isDubbed: true,
		resumePosition: 70,
		tags: [{
			id: "night",
			tag: "night"
		}, {
			id: "silk",
			tag: "silk"
		}],
		blurb: "Seda esmeralda e lanternas. O áudio dublado acompanha o original, lado a lado.",
		user: {
			id: "u5",
			username: "casa.lume",
			verified: true
		}
	},
	{
		shortId: "corr06",
		title: "The corridor goes champagne",
		cover: "/covers/corridor.jpg",
		duration: 108,
		viewCount: 140,
		createdAt: hoursAgo(48),
		isPrivate: false,
		isFixed: true,
		isDubbed: false,
		resumePosition: 24,
		tags: [{
			id: "motion",
			tag: "motion"
		}, {
			id: "light",
			tag: "light"
		}],
		blurb: "Organza no corredor de mármore. O tecido chega um segundo antes da pessoa.",
		user: {
			id: "u1",
			username: "mira.vale",
			verified: true
		}
	},
	{
		shortId: "coln07",
		title: "Walking the colonnade at six",
		cover: "/covers/colonnade.jpg",
		duration: 252,
		viewCount: 2400,
		createdAt: hoursAgo(8),
		isPrivate: false,
		isFixed: false,
		isDubbed: false,
		resumePosition: 40,
		tags: [{
			id: "golden",
			tag: "golden"
		}, {
			id: "hour",
			tag: "hour"
		}],
		blurb: "Plano aberto, fim de tarde, sombra longa. O único vídeo de verdade em paisagem.",
		user: {
			id: "u2",
			username: "noor.atelier",
			verified: true
		}
	}
];
var trendingIds = [
	"ivry01",
	"tree02",
	"silk03",
	"pwdr04",
	"lant05",
	"corr06"
];
function QuickLook({ video, position, playing, onClose, onToggle, onSave, saved, onQueue, queued }) {
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = previous;
		};
	}, [onClose]);
	const pct = Math.min(100, position / Math.max(video.duration, 1) * 100);
	const ended = position >= video.duration - .4 && position > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-3 sm:items-center",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "quick-title",
			className: "grid max-h-[92dvh] w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-xl sm:grid-cols-2",
			onClick: (event) => event.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-video bg-frame sm:aspect-auto sm:min-h-80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: video.cover,
						alt: "",
						className: "absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: video.cover,
						alt: "",
						className: "relative z-10 h-full w-full object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onToggle,
						className: "absolute bottom-3 left-3 z-20 inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-4 text-sm font-semibold text-ink",
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "h-4 w-4",
							fill: "currentColor"
						}), ended ? "De novo" : playing ? "Pausar" : position > 0 ? "Continuar" : "Assistir"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 z-20 h-1 bg-paper/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-accent",
							style: { width: `${ended ? 100 : pct}%` }
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 overflow-y-auto p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "quick-title",
							className: "text-xl font-semibold leading-snug text-balance text-ink",
							children: video.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							"aria-label": "Fechar",
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted hover:bg-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted tabular-nums",
						children: [
							formatDuration(position),
							" / ",
							formatDuration(video.duration)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-pretty text-sm leading-relaxed text-ink",
						children: video.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 text-sm font-medium text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-7 w-7 place-items-center rounded-full bg-ink text-xs text-paper",
								children: video.user.username.slice(0, 1).toUpperCase()
							}),
							video.user.username,
							video.user.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
								className: "h-4 w-4 text-accent",
								"aria-label": "Verificado"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto flex flex-wrap gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onSave,
							className: "min-h-11 rounded-full bg-ink px-4 text-sm font-semibold text-paper",
							children: saved ? "Salvo" : "Ver depois"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onQueue,
							className: "min-h-11 rounded-full border border-line px-4 text-sm font-semibold text-ink",
							children: queued ? "Na fila" : "Adicionar à fila"
						})]
					})
				]
			})]
		})
	});
}
function PlansDialog({ video, onClose, onPretend }) {
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = previous;
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-3 sm:items-center",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "plans-title",
			className: "w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-xl",
			onClick: (event) => event.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-40 bg-frame",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: video.cover,
						alt: "",
						className: "absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: video.cover,
						alt: "",
						className: "relative z-10 h-full w-full object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute top-3 left-3 z-20 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Privado"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "plans-title",
						className: "text-xl font-semibold text-balance text-ink",
						children: "Esse vídeo pede assinatura"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-pretty text-sm leading-relaxed text-muted",
						children: "O card continua levando visitante para os planos. Assinante, dono e admin entram direto — igual na sua regra atual."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onPretend,
						className: "min-h-11 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent",
						children: "Virar assinante e assistir"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "min-h-11 rounded-full text-sm font-medium text-muted",
						children: "Agora não"
					})
				]
			})]
		})
	});
}
function Toast({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper shadow-lg",
		role: "status",
		children: message
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var flameClass = [
	"text-red-500",
	"text-orange-500",
	"text-amber-400"
];
function VideoTile(props) {
	if (props.variant === "classic") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicTile, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioTile, { ...props });
}
function Meta({ video }) {
	const time = relativeTime(video.createdAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-center gap-1 text-sm text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
				className: "h-3 w-3 shrink-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums",
				children: compactNumber(video.viewCount)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				children: "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: time.fresh ? "text-fresh" : void 0,
				children: time.label
			})
		]
	});
}
function ClassicBadges({ video, trending }) {
	const chip = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-on-accent";
	const showPin = video.isFixed && !trending;
	if (!video.isPrivate && !video.isDubbed && !showPin) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex flex-wrap gap-1.5",
		children: [
			video.isPrivate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn(chip, "bg-accent"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
					className: "h-3 w-3",
					"aria-hidden": true
				}), " Privado"]
			}),
			showPin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn(chip, "bg-ink text-paper"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
					className: "h-3 w-3",
					"aria-hidden": true
				}), " Fixado"]
			}),
			video.isDubbed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn(chip, "bg-violet-700"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
					className: "h-3 w-3",
					"aria-hidden": true
				}), " Dublado"]
			})
		]
	});
}
function ClassicTile({ video, layout, index = 0, trending, position, priority, onOpen, onTag, onCreator }) {
	const resume = position > 0 && position < video.duration;
	const open = () => onOpen(video);
	if (layout === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "w-64 shrink-0 snap-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: open,
			className: "group flex w-full flex-col overflow-hidden rounded-xl border border-line bg-card text-left shadow-sm transition hover:shadow-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicCover, {
				video,
				position,
				tall: false,
				priority
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "flex items-center gap-1 text-base font-bold tracking-tight text-ink",
						children: [trending && index < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
							className: cn("h-4 w-4 shrink-0", flameClass[index]),
							fill: "currentColor",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: video.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, { video })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicBadges, {
						video,
						trending
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: resume ? "Com progresso" : ""
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition hover:shadow-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: open,
			className: "block text-left",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicCover, {
				video,
				position,
				tall: true,
				priority
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-3 pt-2.5 pb-3",
			children: [
				video.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-sm leading-snug",
					children: video.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onTag(tag.tag),
						className: "mr-2 inline min-h-11 text-fresh hover:underline",
						children: ["#", tag.tag]
					}, tag.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: open,
					className: "text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "line-clamp-2 text-lg font-bold leading-snug tracking-tight text-balance text-ink",
						children: video.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, { video })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicBadges, {
					video,
					trending
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onCreator(video.user.username),
					className: "mt-2 inline-flex min-h-11 w-fit items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { name: video.user.username }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-ink hover:underline",
							children: video.user.username
						}),
						video.user.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
							className: "h-4 w-4 text-fresh",
							"aria-label": "Verificado"
						})
					]
				})
			]
		})]
	});
}
function ClassicCover({ video, position, tall, priority }) {
	const resume = position > 0 && position < video.duration;
	const pct = Math.min(100, position / video.duration * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden bg-frame", tall ? "h-56" : "h-36"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: video.cover,
				alt: "",
				draggable: false,
				className: "h-full w-full object-contain transition duration-300 group-hover:scale-105",
				loading: priority ? "eager" : "lazy",
				fetchPriority: priority ? "high" : "auto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute right-2 z-10 rounded-md bg-frame/80 px-2 py-0.5 text-xs font-semibold text-on-accent tabular-nums", resume ? "bottom-3" : "bottom-2"),
				children: formatDuration(video.duration)
			}),
			resume && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 z-10 h-1 bg-paper/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent",
					style: { width: `${pct}%` }
				})
			})
		]
	});
}
function StudioTile(props) {
	const { video, layout, index = 0, trending, position, saved, queued, priority, onOpen, onSave, onQueue, onShare, onTag, onCreator } = props;
	const [hot, setHot] = (0, import_react.useState)(false);
	const [scrub, setScrub] = (0, import_react.useState)(.5);
	const done = position >= video.duration - .4 && video.duration > 0;
	const resume = position > 0 && !done;
	const pct = Math.min(100, position / Math.max(video.duration, 1) * 100);
	const time = relativeTime(video.createdAt);
	function move(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		const next = (event.clientX - rect.left) / rect.width;
		setScrub(Math.min(1, Math.max(0, next)));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition duration-200 hover:border-accent/30 hover:shadow-md", layout === "compact" ? "w-72 shrink-0 snap-start" : "w-full"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-video overflow-hidden bg-frame",
			onMouseEnter: () => setHot(true),
			onMouseLeave: () => {
				setHot(false);
				setScrub(.5);
			},
			onMouseMove: move,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: video.cover,
					alt: "",
					"aria-hidden": true,
					draggable: false,
					className: "absolute inset-0 h-full w-full scale-125 object-cover opacity-80 blur-2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: video.cover,
					alt: video.title,
					draggable: false,
					loading: priority ? "eager" : "lazy",
					fetchPriority: priority ? "high" : "auto",
					className: "relative z-10 h-full w-full object-contain transition-transform duration-150",
					style: hot ? { transform: `scale(1.07) translate3d(${(.5 - scrub) * 4}%, 0, 0)` } : void 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 z-20",
					"aria-label": `Abrir ${video.title}`,
					onClick: () => onOpen(video)
				}),
				trending && index < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "pointer-events-none absolute top-2 left-2 z-30 inline-flex items-center gap-1 rounded-md bg-ink/80 px-1.5 py-0.5 text-xs font-semibold text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
						className: "h-3.5 w-3.5 text-accent",
						fill: "currentColor",
						"aria-hidden": true
					}), index + 1]
				}),
				video.isPrivate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute top-2 right-2 z-30 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink/75 text-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("pointer-events-none absolute left-1/2 top-1/2 z-30 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-md transition duration-200", hot ? "scale-100 opacity-100" : "scale-95 opacity-0"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						className: "h-4 w-4",
						fill: "currentColor",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("pointer-events-none absolute right-2 z-30 rounded-md bg-ink/75 px-2 py-0.5 text-xs font-semibold text-paper tabular-nums", resume || hot ? "bottom-3" : "bottom-2"),
					children: done ? "Visto" : formatDuration(video.duration)
				}),
				hot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 h-0.5 bg-paper/35",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-accent",
						style: { width: `${scrub * 100}%` }
					})
				}),
				resume && !hot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 z-30 h-1 bg-paper/40",
					role: "progressbar",
					"aria-valuenow": Math.round(pct),
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-accent",
						style: { width: `${pct}%` }
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-1 px-3 pt-2.5 pb-2",
			children: [
				layout === "feed" && video.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-sm leading-snug",
					children: video.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onTag(tag.tag),
						className: "mr-2 inline min-h-11 text-fresh hover:underline",
						children: ["#", tag.tag]
					}, tag.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen(video),
					className: "text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: cn("line-clamp-2 text-balance font-semibold leading-snug tracking-tight text-ink", layout === "compact" ? "text-base" : "text-lg"),
						children: video.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "h-3 w-3 shrink-0",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: compactNumber(video.viewCount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: time.fresh ? "text-fresh" : void 0,
							children: time.label
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioBadges, {
					video,
					trending
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onCreator(video.user.username),
						className: "inline-flex min-h-11 min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { name: video.user.username }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-medium text-ink hover:underline",
								children: video.user.username
							}),
							video.user.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
								className: "h-4 w-4 shrink-0 text-accent",
								"aria-label": "Verificado"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: saved ? "Remover dos salvos" : "Ver depois",
								pressed: saved,
								onClick: () => onSave(video.shortId),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
									className: "h-4 w-4",
									fill: saved ? "currentColor" : "none"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: queued ? "Tirar da fila" : "Adicionar à fila",
								pressed: queued,
								onClick: () => onQueue(video.shortId),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPlus, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: "Compartilhar",
								onClick: () => onShare(video),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" })
							})
						]
					})]
				})
			]
		})]
	});
}
function StudioBadges({ video, trending }) {
	const chip = "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium";
	const showPin = video.isFixed && !trending;
	if (!video.isPrivate && !video.isDubbed && !showPin) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 flex flex-wrap gap-1.5",
		children: [
			video.isPrivate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn(chip, "border-accent/30 bg-accent-soft text-accent"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
					className: "h-3 w-3",
					"aria-hidden": true
				}), " Privado"]
			}),
			video.isDubbed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn(chip, "border-line text-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
					className: "h-3 w-3",
					"aria-hidden": true
				}), " Dublado"]
			}),
			showPin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn(chip, "border-line text-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
					className: "h-3 w-3",
					"aria-hidden": true
				}), " Fixado"]
			})
		]
	});
}
function IconButton({ label, pressed, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		"aria-pressed": pressed,
		onClick,
		className: cn("grid h-11 w-11 place-items-center rounded-full transition", pressed ? "text-accent" : "text-muted hover:bg-paper hover:text-ink"),
		children
	});
}
function Avatar({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-paper",
		"aria-hidden": true,
		children: name.slice(0, 1).toUpperCase()
	});
}
var KEY = "card-studio-v1";
var seedPositions = () => {
	const base = {};
	for (const video of videos) if (video.resumePosition > 0) base[video.shortId] = video.resumePosition;
	return base;
};
function Studio() {
	const [mode, setMode] = (0, import_react.useState)("studio");
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [subscriber, setSubscriber] = (0, import_react.useState)(false);
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [queue, setQueue] = (0, import_react.useState)([]);
	const [positions, setPositions] = (0, import_react.useState)(seedPositions);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("new");
	const [tag, setTag] = (0, import_react.useState)(null);
	const [creator, setCreator] = (0, import_react.useState)(null);
	const [active, setActive] = (0, import_react.useState)(null);
	const [plansFor, setPlansFor] = (0, import_react.useState)(null);
	const [playingId, setPlayingId] = (0, import_react.useState)(null);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const toastTimer = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const data = JSON.parse(raw);
				if (data.mode === "classic" || data.mode === "studio") setMode(data.mode);
				if (data.theme === "dark" || data.theme === "light") setTheme(data.theme);
				if (typeof data.subscriber === "boolean") setSubscriber(data.subscriber);
				if (Array.isArray(data.saved)) setSaved(data.saved);
				if (Array.isArray(data.queue)) setQueue(data.queue);
				if (data.positions && typeof data.positions === "object") setPositions({
					...seedPositions(),
					...data.positions
				});
			}
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);
	(0, import_react.useEffect)(() => {
		if (!hydrated || playingId) return;
		const payload = {
			mode,
			theme,
			subscriber,
			saved,
			queue,
			positions
		};
		localStorage.setItem(KEY, JSON.stringify(payload));
	}, [
		hydrated,
		playingId,
		mode,
		theme,
		subscriber,
		saved,
		queue,
		positions
	]);
	(0, import_react.useEffect)(() => {
		if (!playingId) return;
		const video = videos.find((item) => item.shortId === playingId);
		if (!video) return;
		const timer = window.setInterval(() => {
			setPositions((prev) => {
				const current = prev[video.shortId] ?? video.resumePosition;
				const next = Math.min(video.duration, current + video.duration / 70);
				return {
					...prev,
					[video.shortId]: next
				};
			});
		}, 200);
		return () => window.clearInterval(timer);
	}, [playingId]);
	(0, import_react.useEffect)(() => {
		if (!playingId) return;
		const video = videos.find((item) => item.shortId === playingId);
		if (!video) return;
		if ((positions[playingId] ?? 0) >= video.duration) setPlayingId(null);
	}, [playingId, positions]);
	const notify = (0, import_react.useCallback)((message) => {
		setToast(message);
		window.clearTimeout(toastTimer.current);
		toastTimer.current = window.setTimeout(() => setToast(null), 2200);
	}, []);
	const positionOf = (0, import_react.useCallback)((video) => positions[video.shortId] ?? video.resumePosition, [positions]);
	const matches = (0, import_react.useCallback)((video) => {
		if (filter === "fresh" && !relativeTime(video.createdAt).fresh) return false;
		if (filter === "private" && !video.isPrivate) return false;
		if (filter === "dubbed" && !video.isDubbed) return false;
		if (tag && !video.tags.some((item) => item.tag === tag)) return false;
		if (creator && video.user.username !== creator) return false;
		return true;
	}, [
		filter,
		tag,
		creator
	]);
	const trending = (0, import_react.useMemo)(() => trendingIds.map((id) => videos.find((video) => video.shortId === id)).filter((video) => !!video && matches(video)), [matches]);
	const feed = (0, import_react.useMemo)(() => {
		return [...videos.filter(matches)].sort((a, b) => sort === "views" ? b.viewCount - a.viewCount : Date.parse(b.createdAt) - Date.parse(a.createdAt));
	}, [matches, sort]);
	const continueWatching = (0, import_react.useMemo)(() => videos.filter((video) => positionOf(video) > 0 && positionOf(video) < video.duration - .4), [positionOf]);
	const savedVideos = (0, import_react.useMemo)(() => saved.map((id) => videos.find((video) => video.shortId === id)).filter((video) => !!video), [saved]);
	const queuedVideos = (0, import_react.useMemo)(() => queue.map((id) => videos.find((video) => video.shortId === id)).filter((video) => !!video), [queue]);
	function openVideo(video) {
		if (video.isPrivate && !subscriber) {
			setPlansFor(video);
			return;
		}
		setActive(video);
	}
	function toggleSave(id) {
		setSaved((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev]);
	}
	function toggleQueue(id) {
		setQueue((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
	}
	async function share(video) {
		const text = `${video.title} — /v/${video.shortId}`;
		try {
			await navigator.clipboard.writeText(text);
			notify("Link copiado");
		} catch {
			notify(text);
		}
	}
	function playToggle(video) {
		const current = positionOf(video);
		if (playingId === video.shortId) {
			setPlayingId(null);
			return;
		}
		if (current >= video.duration - .4) setPositions((prev) => ({
			...prev,
			[video.shortId]: 0
		}));
		setPlayingId(video.shortId);
	}
	function becomeSubscriber() {
		const video = plansFor;
		setSubscriber(true);
		setPlansFor(null);
		if (video) setActive(video);
		notify("Assinante ativo — o privado abre direto");
	}
	const tileProps = {
		variant: mode,
		onOpen: openVideo,
		onSave: toggleSave,
		onQueue: toggleQueue,
		onShare: share,
		onTag: (next) => {
			setTag(next);
			setCreator(null);
		},
		onCreator: (name) => {
			setCreator(name);
			setTag(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 pt-6 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-wide text-accent",
							children: "Card Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 text-3xl font-semibold tracking-tight text-balance text-ink",
							children: "O card, sem a tarja"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-pretty text-sm leading-relaxed text-muted",
							children: mode === "studio" ? "A capa vertical preenche o quadro com ela mesma, desfocada. O título ganha duas linhas. Passe o mouse na imagem para a prévia, salve, monte uma fila ou dê play na olhada rápida." : "Este é o card de hoje: imagem vertical em object-contain, fundo preto, e o fogo do ranking comendo o título."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex rounded-full border border-line bg-card p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								label: "Atual",
								on: mode === "classic",
								onClick: () => setMode("classic")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								label: "Novo",
								on: mode === "studio",
								onClick: () => setMode("studio"),
								accent: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": subscriber,
							onClick: () => setSubscriber((value) => !value),
							className: cn("min-h-11 rounded-full border px-4 text-sm font-medium", subscriber ? "border-accent bg-accent-soft text-accent" : "border-line bg-card text-muted"),
							children: subscriber ? "Assinante" : "Visitante"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": theme === "dark" ? "Tema claro" : "Tema escuro",
							onClick: () => setTheme((value) => value === "dark" ? "light" : "dark"),
							className: "grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						})
					]
				})]
			}),
			(tag || creator) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					label: `#${tag}`,
					onClear: () => setTag(null)
				}), creator && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					label: `@${creator}`,
					onClear: () => setCreator(null)
				})]
			}),
			trending.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Em alta",
				hint: "Arraste o trilho",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { children: trending.map((video, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoTile, {
					...tileProps,
					video,
					layout: "compact",
					index,
					trending: true,
					position: positionOf(video),
					saved: saved.includes(video.shortId),
					queued: queue.includes(video.shortId),
					priority: index < 2
				}, video.shortId)) })
			}),
			mode === "studio" && continueWatching.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Continuar assistindo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { children: continueWatching.map((video) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoTile, {
					...tileProps,
					video,
					layout: "compact",
					position: positionOf(video),
					saved: saved.includes(video.shortId),
					queued: queue.includes(video.shortId)
				}, video.shortId)) })
			}),
			mode === "studio" && savedVideos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Ver depois",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { children: savedVideos.map((video) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoTile, {
					...tileProps,
					video,
					layout: "compact",
					position: positionOf(video),
					saved: true,
					queued: queue.includes(video.shortId)
				}, video.shortId)) })
			}),
			queuedVideos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Sua fila",
				hint: `${queuedVideos.length} na ordem em que você adicionou`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: queuedVideos.map((video, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-xl border border-line bg-card pr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openVideo(video),
							className: "flex min-h-11 min-w-0 flex-1 items-center gap-3 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: video.cover,
									alt: "",
									className: "h-14 w-20 rounded-l-xl object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-muted tabular-nums",
									children: index + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-sm font-semibold text-ink",
									children: video.title
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Tirar ${video.title} da fila`,
							onClick: () => toggleQueue(video.shortId),
							className: "grid h-11 w-11 place-items-center rounded-full text-muted hover:text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}, video.shortId))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight text-ink",
						children: "Feed de vídeos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
								filter,
								onChange: setFilter
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "sort",
								children: "Ordenar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "sort",
								value: sort,
								onChange: (event) => setSort(event.target.value),
								className: "min-h-11 w-full shrink-0 rounded-full border border-line bg-card px-4 text-sm font-medium text-ink sm:w-44",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "new",
									children: "Mais recentes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "views",
									children: "Mais vistos"
								})]
							})
						]
					})]
				}), feed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-xl border border-dashed border-line px-4 py-10 text-center text-sm text-muted",
					children: [
						"Nada com esse filtro.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "font-semibold text-accent",
							onClick: () => {
								setFilter("all");
								setTag(null);
								setCreator(null);
							},
							children: "Limpar"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
					children: feed.map((video) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoTile, {
						...tileProps,
						video,
						layout: "feed",
						position: positionOf(video),
						saved: saved.includes(video.shortId),
						queued: queue.includes(video.shortId)
					}, video.shortId))
				})]
			}),
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLook, {
				video: active,
				position: positionOf(active),
				playing: playingId === active.shortId,
				saved: saved.includes(active.shortId),
				queued: queue.includes(active.shortId),
				onClose: () => {
					setPlayingId(null);
					setActive(null);
				},
				onToggle: () => playToggle(active),
				onSave: () => toggleSave(active.shortId),
				onQueue: () => toggleQueue(active.shortId)
			}),
			plansFor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlansDialog, {
				video: plansFor,
				onClose: () => setPlansFor(null),
				onPretend: becomeSubscriber
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, { message: toast })
		]
	});
}
function Seg({ label, on, onClick, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: cn("min-h-10 rounded-full px-4 text-sm font-semibold", on ? accent ? "bg-accent text-on-accent" : "bg-ink text-paper" : "text-muted"),
		children: label
	});
}
function FilterChip({ label, onClear }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onClear,
		className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-3 text-sm font-medium text-paper",
		children: [
			label,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Limpar filtro"
			})
		]
	});
}
function FilterBar({ filter, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex flex-wrap rounded-full border border-line bg-card p-1",
		children: [
			{
				id: "all",
				label: "Todos"
			},
			{
				id: "fresh",
				label: "Novos"
			},
			{
				id: "private",
				label: "Privados"
			},
			{
				id: "dubbed",
				label: "Dublados"
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": filter === item.id,
			onClick: () => onChange(item.id),
			className: cn("min-h-11 rounded-full px-3 text-sm font-medium", filter === item.id ? "bg-ink text-paper" : "text-muted"),
			children: item.label
		}, item.id))
	});
}
function Section({ title, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold tracking-tight text-ink",
				children: title
			}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: hint
			})]
		}), children]
	});
}
function Rail({ children }) {
	const ref = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)({
		active: false,
		x: 0,
		left: 0,
		moved: false
	});
	const blockClick = (0, import_react.useRef)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "rail flex cursor-grab items-stretch gap-4 overflow-x-auto pb-3 active:cursor-grabbing",
		onPointerDown: (event) => {
			if (event.pointerType !== "mouse" || event.button !== 0 || !ref.current) return;
			drag.current = {
				active: true,
				x: event.clientX,
				left: ref.current.scrollLeft,
				moved: false
			};
		},
		onPointerMove: (event) => {
			if (!drag.current.active || !ref.current) return;
			const dx = event.clientX - drag.current.x;
			if (Math.abs(dx) < 8) return;
			drag.current.moved = true;
			if (!ref.current.hasPointerCapture(event.pointerId)) ref.current.setPointerCapture(event.pointerId);
			ref.current.scrollLeft = drag.current.left - dx;
		},
		onPointerUp: () => {
			blockClick.current = drag.current.moved;
			drag.current.active = false;
		},
		onClickCapture: (event) => {
			if (!blockClick.current) return;
			event.preventDefault();
			event.stopPropagation();
			blockClick.current = false;
		},
		children
	});
}
var SplitComponent = Studio;
//#endregion
export { SplitComponent as component };
