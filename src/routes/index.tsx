import { createFileRoute } from "@tanstack/react-router";
import heroVesper from "@/assets/hero-vesper.png";
import mousseVerte from "@/assets/mousse-verte.png";
import noirDeCuir from "@/assets/noir-de-cuir.png";
import lumiereYuzu from "@/assets/lumiere-yuzu.png";
import atelier from "@/assets/atelier.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solstice — Perfumaria Artesanal" },
      {
        name: "description",
        content:
          "Perfumes compostos à mão, em pequenos lotes. Descubra Vesper Bloom e a coleção Solstice.",
      },
      { property: "og:title", content: "Solstice — Perfumaria Artesanal" },
      {
        property: "og:description",
        content:
          "Perfumes compostos à mão, em pequenos lotes. Descubra Vesper Bloom e a coleção Solstice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const acts = [
  {
    label: "Ato I · 0–15 min",
    title: "A abertura",
    text: "Bergamota brilhante e pimenta-rosa despertam primeiro, um clarão fresco que apresenta o caráter do perfume antes de ele se aprofundar.",
    notes: [
      { name: "Bergamota", dot: "bg-clay" },
      { name: "Pimenta-rosa", dot: "bg-blush" },
      { name: "Sal marinho", dot: "bg-cream" },
    ],
    panel: "bg-stone ring-black/5 text-ink/80",
  },
  {
    label: "Ato II · 15 min–3 h",
    title: "O coração",
    text: "O núcleo floral floresce — tuberosas e jasmim envoltas em orris em pó, a expressão mais fiel do perfume.",
    notes: [
      { name: "Tuberosa", dot: "bg-clay" },
      { name: "Jasmim sambac", dot: "bg-sage" },
      { name: "Raiz de orris", dot: "bg-ink/40" },
    ],
    panel: "bg-blush/30 ring-black/5 text-ink/80",
  },
  {
    label: "Ato III · 3 h+",
    title: "O fundo",
    text: "Sândalo, âmbar e um traço de oud assentam na pele, um rastro silencioso e íntimo que só os mais próximos seguem.",
    notes: [
      { name: "Sândalo", dot: "bg-clay" },
      { name: "Âmbar", dot: "bg-blush" },
      { name: "Oud", dot: "bg-sage" },
    ],
    panel: "bg-ink ring-black/5 text-cream/80",
  },
];

const collection = [
  {
    image: mousseVerte,
    name: "Mousse Verte",
    type: "Eau de parfum · 50ml",
    top: "Galbano, cassis",
    heart: "Figo, violeta",
    base: "Vetiver, almíscar",
    price: "A partir de R$ 780",
  },
  {
    image: noirDeCuir,
    name: "Noir de Cuir",
    type: "Eau de parfum · 50ml",
    top: "Açafrão, chá preto",
    heart: "Couro, íris",
    base: "Benjoim, lâdano",
    price: "A partir de R$ 920",
  },
  {
    image: lumiereYuzu,
    name: "Lumière d'Yuzu",
    type: "Eau de toilette · 75ml",
    top: "Yuzu, toranja",
    heart: "Neroli, figo",
    base: "Almíscar branco, cedro",
    price: "A partir de R$ 640",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone via-cream to-blush">
        <div
          className="pointer-events-none absolute -top-24 left-1/3 size-[420px] rounded-full bg-blush/50 blur-3xl"
          style={{ animation: "drift 18s ease-in-out infinite" }}
        />
        <div
          className="pointer-events-none absolute bottom-[-120px] right-10 size-[380px] rounded-full bg-clay/25 blur-3xl"
          style={{ animation: "drift2 22s ease-in-out infinite" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-24">
          <nav className="flex items-center justify-between">
            <span className="font-display text-xl tracking-tight">Solstice</span>
            <div className="hidden gap-8 text-sm text-ink/70 sm:flex">
              <span>Coleção</span>
              <span>Notas</span>
              <span>História</span>
            </div>
            <button className="py-2 pr-3 pl-2 text-sm ring-1 ring-ink/20 ring-inset">
              Sacola · 0
            </button>
          </nav>
          <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-clay">
                Assinatura · Nº 03
              </p>
              <h1 className="max-w-[30ch] text-balance text-5xl leading-none text-ink sm:text-6xl lg:text-7xl">
                Vesper Bloom
              </h1>
              <p className="mt-6 max-w-[46ch] text-pretty text-base leading-relaxed text-ink/70 sm:text-lg">
                Um desabrochar lento — a bergamota cede lugar à tuberosa e,
                por fim, tudo assenta num fundo quente e envolvente que fica
                na pele muito depois do entardecer.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="px-6 py-3 text-sm text-cream ring-1 ring-clay ring-inset bg-clay transition-colors hover:bg-clay-deep">
                  Descubra o aroma
                </button>
                <button className="px-6 py-3 text-sm text-ink/70">
                  Ver coleção completa
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={heroVesper}
                alt="Frasco de perfume Vesper Bloom sobre linho creme"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE SLOW BLOOM */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
          <div className="max-w-[40ch]">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-clay">
              O desabrochar lento
            </p>
            <h2 className="text-balance text-3xl leading-tight text-ink lg:text-4xl">
              Como uma fragrância evolui na pele
            </h2>
            <p className="mt-4 max-w-[48ch] text-pretty text-base text-ink/60 sm:text-lg">
              Toda composição passa por três atos. Este é o arco de Vesper
              Bloom ao sair do frasco.
            </p>
          </div>

          {acts.map((act, i) => (
            <div
              key={act.title}
              className="mt-16 grid items-center gap-10 lg:grid-cols-12"
            >
            <div
              className={
                i === 1
                  ? "order-1 lg:order-2 lg:col-span-7"
                  : "lg:col-span-7"
              }
            >
              <p className="text-xs uppercase tracking-[0.3em] text-clay">
                {act.label}
              </p>
              <h3 className="mt-2 text-balance text-2xl leading-tight text-ink">
                {act.title}
              </h3>
              <p className="mt-3 max-w-[44ch] text-pretty text-base text-ink/60">
                {act.text}
              </p>
            </div>
            <div
              className={`flex h-full flex-col justify-center gap-3 rounded-[min(1vw,12px)] p-8 ring-1 ${act.panel} ${
                i === 1
                  ? "order-2 lg:order-1 lg:col-span-5"
                  : "lg:col-span-5"
              }`}
            >
                {act.notes.map((note) => (
                  <div key={note.name} className="flex items-center gap-3">
                    <span
                      className={`size-3 shrink-0 rounded-full ${note.dot}`}
                    />
                    <span className="text-sm">{note.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-clay">
                A coleção
              </p>
              <h2 className="text-balance text-3xl leading-tight text-ink lg:text-4xl">
                Três casas de aroma
              </h2>
            </div>
            <span className="hidden text-sm text-ink/50 sm:block">
              Ver tudo
            </span>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collection.map((perfume) => (
              <article key={perfume.name} className="bg-cream ring-1 ring-black/5 p-5">
                <img
                  src={perfume.image}
                  alt={`Frasco do perfume ${perfume.name}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-5 text-balance text-xl text-ink">
                  {perfume.name}
                </h3>
                <p className="mt-1 text-sm text-ink/50">{perfume.type}</p>
                <div className="mt-4 space-y-1.5 text-sm">
                  <p className="text-ink/70">
                    <span className="text-clay">Saída</span> — {perfume.top}
                  </p>
                  <p className="text-ink/70">
                    <span className="text-clay">Coração</span> — {perfume.heart}
                  </p>
                  <p className="text-ink/70">
                    <span className="text-clay">Fundo</span> — {perfume.base}
                  </p>
                </div>
                <p className="mt-5 text-sm text-ink/80">{perfume.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <img
                src={atelier}
                alt="Perfumista misturando essências em um béquer de vidro"
                width={1088}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-clay">
                Nossa história
              </p>
              <h2 className="text-balance text-3xl leading-tight text-cream lg:text-4xl">
                Aroma, feito devagar em salas pequenas
              </h2>
              <p className="mt-5 max-w-[48ch] text-pretty text-base leading-relaxed text-cream/60 sm:text-lg">
                A Solstice é um pequeno ateliê que compõe fragrâncias como um
                poeta escreve — com paciência, em camadas, atento ao que
                permanece. Cada aroma é misturado à mão, em lotes limitados.
              </p>
              <p className="mt-4 max-w-[48ch] text-pretty text-base leading-relaxed text-cream/60 sm:text-lg">
                Acreditamos que um perfume deve mudar com você ao longo do
                dia, e não lutar contra a sua pele.
              </p>
              <button className="mt-8 px-6 py-3 text-sm text-cream ring-1 ring-clay/60 ring-inset transition-colors hover:bg-clay/20">
                Conheça nosso processo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-ink to-clay/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 lg:py-28">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cream/60">
            Comece o seu desabrochar lento
          </p>
          <h2 className="text-balance text-4xl leading-tight text-cream lg:text-5xl">
            Encontre o aroma que fica com você
          </h2>
          <p className="mx-auto mt-4 max-w-[40ch] text-pretty text-base text-cream/60">
            Peça um kit-descoberta com três aromas, ou comece pela assinatura.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-cream px-7 py-3 text-sm text-ink ring-1 ring-cream ring-inset transition-colors hover:bg-blush">
              Comprar a coleção
            </button>
            <button className="px-7 py-3 text-sm text-cream ring-1 ring-cream/40 ring-inset transition-colors hover:bg-cream/10">
              Pedir uma amostra
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-display text-lg">Solstice</span>
            <div className="flex flex-wrap gap-6 text-sm text-cream/50">
              <span>Coleção</span>
              <span>Notas</span>
              <span>História</span>
              <span>Contato</span>
            </div>
            <p className="text-xs text-cream/30">
              Composto à mão · © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
