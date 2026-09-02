import React, { useState } from "react";
import { Leaf, Sigma, BookOpen, FlaskConical, Atom, Landmark, Globe2 } from "lucide-react";

const SUBJECTS = [
  { id: "biologia", name: "Biologia", tagline: "Da célula ao ecossistema", color: "#5C7A5A", icon: Leaf, ready: true },
  { id: "matematica", name: "Matemática", tagline: "Do número à demonstração", color: "#5A6B94", icon: Sigma, ready: false },
  { id: "portugues", name: "Português", tagline: "Da gramática ao texto", color: "#8A4B54", icon: BookOpen, ready: false },
  { id: "quimica", name: "Química", tagline: "Do átomo à reação", color: "#4E8A82", icon: FlaskConical, ready: false },
  { id: "fisica", name: "Física", tagline: "Do movimento à energia", color: "#4F6E86", icon: Atom, ready: false },
  { id: "historia", name: "História", tagline: "Do fato ao processo", color: "#9C7A42", icon: Landmark, ready: false },
  { id: "geografia", name: "Geografia", tagline: "Do lugar ao território", color: "#A15A3E", icon: Globe2, ready: false },
];

const BIOLOGIA = [
  {
    id: "citologia", name: "Citologia",
    subtemas: [
      { id: "membrana", name: "Membrana plasmática", conceitos: [
        { id: "transporte-passivo", name: "Transporte passivo", desc: "Movimento de substâncias a favor do gradiente de concentração, sem gasto de energia — difusão simples, difusão facilitada e osmose." },
        { id: "transporte-ativo", name: "Transporte ativo", desc: "Movimento contra o gradiente de concentração, com gasto de ATP, como na bomba de sódio e potássio." },
        { id: "mosaico-fluido", name: "Modelo do mosaico fluido", desc: "Descreve a membrana como uma bicamada lipídica fluida, com proteínas móveis inseridas nela." },
      ]},
      { id: "organelas", name: "Organelas citoplasmáticas", conceitos: [
        { id: "mitocondria", name: "Mitocôndria", desc: "Organela responsável pela respiração celular e pela produção de ATP." },
        { id: "reticulo", name: "Retículo endoplasmático", desc: "O liso sintetiza lipídios; o rugoso sintetiza proteínas, com ribossomos aderidos à sua superfície." },
        { id: "golgi", name: "Complexo de Golgi", desc: "Modifica, empacota e distribui proteínas e lipídios produzidos na célula." },
      ]},
      { id: "nucleo", name: "Núcleo celular", conceitos: [
        { id: "cromatina", name: "Cromatina e cromossomos", desc: "Formas de organização do DNA no núcleo, que se condensa em cromossomos durante a divisão celular." },
        { id: "nucleolo", name: "Nucléolo", desc: "Região do núcleo onde ocorre a produção dos ribossomos." },
      ]},
      { id: "divisao", name: "Divisão celular", conceitos: [
        { id: "mitose", name: "Mitose", desc: "Divisão celular que origina duas células-filhas geneticamente idênticas à célula-mãe." },
        { id: "meiose", name: "Meiose", desc: "Divisão que reduz o número de cromossomos à metade, formando os gametas." },
      ]},
    ],
  },
  {
    id: "genetica", name: "Genética",
    subtemas: [
      { id: "mendel", name: "Leis de Mendel", conceitos: [
        { id: "primeira-lei", name: "1ª Lei de Mendel", desc: "Lei da segregação dos fatores: cada característica é determinada por um par de genes que se separam na formação dos gametas." },
        { id: "segunda-lei", name: "2ª Lei de Mendel", desc: "Lei da segregação independente: genes de características diferentes se distribuem de forma independente entre os gametas." },
      ]},
      { id: "populacoes", name: "Genética de populações", conceitos: [
        { id: "hardy-weinberg", name: "Equilíbrio de Hardy-Weinberg", desc: "Modelo que descreve como as frequências alélicas se mantêm estáveis numa população em condições ideais." },
      ]},
      { id: "biotecnologia", name: "Biotecnologia", conceitos: [
        { id: "engenharia-genetica", name: "Engenharia genética", desc: "Técnicas que permitem manipular diretamente o DNA de um organismo, como no DNA recombinante." },
        { id: "transgenicos", name: "Organismos transgênicos", desc: "Organismos que tiveram seu genoma alterado pela inserção de genes de outra espécie." },
      ]},
      { id: "heranca-sexo", name: "Herança ligada ao sexo", conceitos: [
        { id: "daltonismo", name: "Daltonismo e hemofilia", desc: "Exemplos clássicos de heranças recessivas ligadas ao cromossomo X." },
      ]},
    ],
  },
  {
    id: "botanica", name: "Botânica",
    subtemas: [
      { id: "morfologia", name: "Morfologia vegetal", conceitos: [
        { id: "raiz-caule-folha", name: "Raiz, caule e folha", desc: "Órgãos vegetativos responsáveis por fixação/absorção, sustentação/condução e fotossíntese/transpiração." },
      ]},
      { id: "fisiologia-vegetal", name: "Fisiologia vegetal", conceitos: [
        { id: "fotossintese", name: "Fotossíntese", desc: "Processo pelo qual as plantas convertem luz solar, água e CO₂ em glicose e oxigênio." },
        { id: "transporte-seiva", name: "Transporte de seiva", desc: "A seiva bruta sobe pelo xilema; a seiva elaborada é distribuída pelo floema." },
      ]},
      { id: "classificacao-plantas", name: "Classificação das plantas", conceitos: [
        { id: "briofitas-pteridofitas", name: "Briófitas e pteridófitas", desc: "Grupos de plantas sem sementes, dependentes de água para a reprodução." },
        { id: "gimno-angio", name: "Gimnospermas e angiospermas", desc: "Grupos de plantas com sementes; as angiospermas também produzem frutos e flores." },
      ]},
      { id: "reproducao-vegetal", name: "Reprodução vegetal", conceitos: [
        { id: "polinizacao", name: "Polinização e fecundação", desc: "Transferência do pólen até o óvulo, originando a semente após a fecundação." },
      ]},
    ],
  },
  {
    id: "zoologia", name: "Zoologia",
    subtemas: [
      { id: "invertebrados", name: "Invertebrados", conceitos: [
        { id: "poriferos-cnidarios", name: "Poríferos e cnidários", desc: "Animais aquáticos simples, sem tecidos verdadeiros (poríferos) ou com simetria radial (cnidários)." },
        { id: "artropodes", name: "Artrópodes", desc: "Maior filo animal, com exoesqueleto de quitina e corpo segmentado — insetos, aracnídeos, crustáceos." },
      ]},
      { id: "vertebrados", name: "Vertebrados", conceitos: [
        { id: "peixes-anfibios", name: "Peixes e anfíbios", desc: "Vertebrados aquáticos ou de dupla vida, com respiração branquial e/ou cutânea e pulmonar." },
        { id: "repteis-aves-mamiferos", name: "Répteis, aves e mamíferos", desc: "Vertebrados amniotas terrestres, com diferentes estratégias de regulação térmica e reprodução." },
      ]},
      { id: "fisiologia-animal", name: "Fisiologia animal", conceitos: [
        { id: "respiracao-animal", name: "Sistemas respiratórios", desc: "Estratégias de troca gasosa nos animais: brânquias, traqueias, pulmões e respiração cutânea." },
      ]},
      { id: "filogenia-animal", name: "Filogenia animal", conceitos: [
        { id: "arvore-filogenetica", name: "Árvores filogenéticas", desc: "Diagramas que representam as relações evolutivas de parentesco entre grupos de animais." },
      ]},
    ],
  },
  {
    id: "ecologia", name: "Ecologia",
    subtemas: [
      { id: "relacoes-ecologicas", name: "Relações ecológicas", conceitos: [
        { id: "predatismo-competicao", name: "Predatismo e competição", desc: "Interações desarmônicas entre espécies, com efeito negativo para pelo menos uma delas." },
        { id: "mutualismo-comensalismo", name: "Mutualismo e comensalismo", desc: "Interações harmônicas entre espécies, com benefício mútuo ou para apenas uma delas." },
      ]},
      { id: "ciclos-biogeoquimicos", name: "Ciclos biogeoquímicos", conceitos: [
        { id: "ciclo-carbono", name: "Ciclo do carbono", desc: "Circulação do carbono entre atmosfera, seres vivos, oceanos e solo." },
        { id: "ciclo-nitrogenio", name: "Ciclo do nitrogênio", desc: "Passagem do nitrogênio pela atmosfera, solo e seres vivos, dependente de bactérias fixadoras." },
      ]},
      { id: "biomas", name: "Biomas e ecossistemas", conceitos: [
        { id: "biomas-brasileiros", name: "Biomas brasileiros", desc: "Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal, cada um com clima e vegetação próprios." },
      ]},
      { id: "impactos-ambientais", name: "Impactos ambientais", conceitos: [
        { id: "aquecimento-global", name: "Aquecimento global", desc: "Aumento da temperatura média do planeta, associado ao acúmulo de gases de efeito estufa." },
      ]},
    ],
  },
  {
    id: "fisiologia-humana", name: "Fisiologia Humana",
    subtemas: [
      { id: "sistema-digestorio", name: "Sistema digestório", conceitos: [
        { id: "digestao", name: "Digestão e absorção", desc: "Quebra mecânica e química dos alimentos, seguida da absorção de nutrientes, principalmente no intestino delgado." },
      ]},
      { id: "sistema-circulatorio", name: "Sistema circulatório", conceitos: [
        { id: "coracao", name: "Coração e vasos sanguíneos", desc: "Bomba muscular que impulsiona o sangue por artérias, veias e capilares." },
      ]},
      { id: "sistema-nervoso", name: "Sistema nervoso", conceitos: [
        { id: "neuronio", name: "Neurônio e impulso nervoso", desc: "Unidade funcional do sistema nervoso, que conduz sinais elétricos e químicos pelo corpo." },
      ]},
      { id: "sistema-endocrino", name: "Sistema endócrino", conceitos: [
        { id: "hormonios", name: "Glândulas e hormônios", desc: "Estruturas que produzem hormônios, substâncias que regulam funções do corpo à distância." },
      ]},
    ],
  },
  {
    id: "evolucao", name: "Evolução",
    subtemas: [
      { id: "darwinismo", name: "Darwinismo e neodarwinismo", conceitos: [
        { id: "selecao-natural", name: "Seleção natural", desc: "Indivíduos mais adaptados ao ambiente têm maior chance de sobreviver e se reproduzir." },
      ]},
      { id: "evidencias", name: "Evidências evolutivas", conceitos: [
        { id: "fosseis-orgaos", name: "Fósseis e órgãos homólogos", desc: "Registros e estruturas que comprovam o parentesco evolutivo entre espécies." },
      ]},
      { id: "especiacao", name: "Especiação", conceitos: [
        { id: "isolamento-reprodutivo", name: "Isolamento reprodutivo", desc: "Impede o cruzamento entre populações, levando à formação de novas espécies ao longo do tempo." },
      ]},
      { id: "origem-vida", name: "Origem da vida", conceitos: [
        { id: "hipoteses-origem", name: "Hipóteses sobre a origem da vida", desc: "Teorias como a abiogênese e a panspermia, que buscam explicar o surgimento dos primeiros seres vivos." },
      ]},
    ],
  },
];

function Crumb({ children, onClick, active }) {
  return (
    <button onClick={onClick} className="crumb" style={{ fontWeight: active ? 700 : 500, opacity: active ? 1 : 0.62 }}>
      {children}
    </button>
  );
}

function TreeNode({ label, level, active, onClick, hasChildren, dim }) {
  const sizes = ["1.02rem", "0.9rem", "0.8rem", "0.74rem"];
  return (
    <div
      className={"node" + (active ? " node-active" : "") + (dim ? " node-dim" : "")}
      style={{ fontSize: sizes[level] }}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {label}
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [placeholderSubject, setPlaceholderSubject] = useState(null);
  const [temaId, setTemaId] = useState(null);
  const [subtemaId, setSubtemaId] = useState(null);
  const [conceitoId, setConceitoId] = useState(null);

  const tema = BIOLOGIA.find((t) => t.id === temaId) || null;
  const subtema = tema ? tema.subtemas.find((s) => s.id === subtemaId) : null;
  const conceito = subtema ? subtema.conceitos.find((c) => c.id === conceitoId) : null;

  function openSubject(s) {
    if (s.id === "biologia") {
      setView("biologia");
    } else {
      setPlaceholderSubject(s);
      setView("placeholder");
    }
  }

  function goHome() {
    setView("home");
    setTemaId(null);
    setSubtemaId(null);
    setConceitoId(null);
  }

  function pickTema(id) {
    setTemaId(id);
    setSubtemaId(null);
    setConceitoId(null);
  }
  function pickSubtema(id) {
    setSubtemaId(id);
    setConceitoId(null);
  }
  function pickConceito(id) {
    setConceitoId(id);
  }

  return (
    <div className="wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        .wrap {
          --wood: #241C15;
          --wood2: #2E241A;
          --paper: #F1EAD6;
          --paper2: #E9E0C8;
          --ink: #2A2118;
          --brass: #B08D57;
          --green: #5C7A5A;
          --greendark: #3C5138;
          font-family: 'IBM Plex Sans', sans-serif;
          background: var(--wood);
          min-height: 100vh;
          color: var(--paper);
          padding: 40px 24px 64px;
        }
        .wrap * { box-sizing: border-box; }
        .display { font-family: 'Fraunces', serif; }

        /* ---------- HOME ---------- */
        .home-header { max-width: 920px; margin: 0 auto 40px; }
        .home-header h1 { font-size: clamp(2.4rem, 6vw, 3.6rem); margin: 0 0 10px; font-weight: 600; letter-spacing: -0.01em; }
        .home-header p { font-size: 1.05rem; color: #D8CDB2; max-width: 480px; line-height: 1.5; margin: 0; }

        .grid { max-width: 920px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        @media (max-width: 760px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }

        .card {
          position: relative;
          background: var(--paper);
          border-radius: 3px;
          padding: 26px 20px 22px;
          cursor: pointer;
          color: var(--ink);
          transition: transform 160ms ease;
          box-shadow: 0 10px 0 -6px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.35);
        }
        .card:hover { transform: translateY(-4px); }
        .card .tab {
          position: absolute; top: -12px; left: 18px;
          padding: 3px 12px; border-radius: 2px;
          font-family: 'Fraunces', serif; font-weight: 600; font-size: 0.72rem;
          color: #fff;
        }
        .card .icon-row { margin-top: 10px; margin-bottom: 22px; }
        .card h3 { font-family: 'Fraunces', serif; font-size: 1.3rem; margin: 0 0 6px; font-weight: 600; }
        .card p { margin: 0; font-size: 0.85rem; color: #5a5142; }
        .card .status { position: absolute; bottom: 14px; right: 16px; font-size: 0.68rem; color: #8a7f68; }

        /* ---------- BIOLOGIA VIEW ---------- */
        .top-nav { max-width: 1100px; margin: 0 auto 22px; display: flex; align-items: center; justify-content: space-between; }
        .back-link { background: none; border: none; color: #D8CDB2; font-family: 'IBM Plex Sans'; font-size: 0.85rem; cursor: pointer; padding: 0; }
        .back-link:hover { color: #fff; }

        .breadcrumbs { max-width: 1100px; margin: 0 auto 20px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
        .crumb { background: none; border: none; color: var(--paper); font-family: 'Fraunces', serif; font-size: 1.15rem; cursor: pointer; padding: 0; }
        .crumb-sep { color: #6b5f4a; }

        .layout { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 330px 1fr; gap: 20px; align-items: start; }
        @media (max-width: 860px) { .layout { grid-template-columns: 1fr; } }

        .panel { background: var(--paper); color: var(--ink); border-radius: 4px; padding: 22px 22px 24px; }
        .panel h4 { font-family: 'Fraunces', serif; font-size: 1rem; margin: 0 0 14px; font-weight: 600; color: #4a4030; }

        .index-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; }
        .index-list li button {
          width: 100%; text-align: left; background: none; border: none; cursor: pointer;
          padding: 9px 10px; border-radius: 3px; font-family: 'IBM Plex Sans'; font-size: 0.9rem; color: #3a3225;
        }
        .index-list li button:hover { background: var(--paper2); }
        .index-list li button.active { background: var(--green); color: #fff; font-weight: 600; }

        .desc-card { margin-top: 18px; padding-top: 16px; border-top: 1px solid #d9cfb4; }
        .desc-card h5 { font-family: 'Fraunces', serif; margin: 0 0 8px; font-size: 1.05rem; }
        .desc-card p { margin: 0; font-size: 0.88rem; line-height: 1.55; color: #4a4030; }

        .tree-panel { background: var(--wood2); border-radius: 4px; padding: 26px 18px; overflow-x: auto; }
        .tree-caption { text-align: center; font-size: 0.72rem; color: #9c8f74; margin-top: 6px; }

        .tree, .tree ul { list-style: none; margin: 0; padding: 0; position: relative; }
        .tree { text-align: center; padding-top: 6px; }
        .tree ul { padding-top: 26px; }
        .tree li { display: inline-block; vertical-align: top; padding: 26px 10px 0; position: relative; }
        .tree li::before, .tree li::after {
          content: ''; position: absolute; top: 0; right: 50%; border-top: 1px solid #55492f; width: 50%; height: 26px;
        }
        .tree li::after { right: auto; left: 50%; border-left: 1px solid #55492f; }
        .tree li:only-child::after, .tree li:only-child::before { display: none; }
        .tree li:only-child { padding-top: 0; }
        .tree li:first-child::before, .tree li:last-child::after { border: 0 none; }
        .tree li:last-child::before { border-right: 1px solid #55492f; border-radius: 0 4px 0 0; }
        .tree li:first-child::after { border-radius: 4px 0 0 0; }
        .tree ul::before {
          content: ''; position: absolute; top: 0; left: 50%; border-left: 1px solid #55492f; width: 0; height: 26px;
        }
        .tree li:only-child::before, .tree li:only-child::after { display: none; }

        .node {
          display: inline-block; font-family: 'Fraunces', serif; color: #C7BBA0; cursor: pointer;
          padding: 6px 12px; border-radius: 3px; white-space: nowrap; transition: opacity 140ms ease;
        }
        .node:hover { color: #fff; }
        .node-active { background: var(--green); color: #fff; font-weight: 600; }
        .node-dim { opacity: 0.55; }
        .root-node { font-weight: 700; color: #fff; font-size: 1.15rem; padding-bottom: 4px; }

        /* ---------- PLACEHOLDER ---------- */
        .placeholder-box { max-width: 640px; margin: 60px auto; text-align: center; color: #D8CDB2; }
        .placeholder-box h2 { font-family: 'Fraunces', serif; font-size: 2rem; margin-bottom: 10px; }
      `}</style>

      {view === "home" && (
        <>
          <div className="home-header">
            <h1 className="display">Fichário</h1>
            <p>Um catálogo de matérias, organizado por gavetas. Abra uma e veja o quanto o assunto se ramifica, do mais geral ao mais específico.</p>
          </div>
          <div className="grid">
            {SUBJECTS.map((s) => {
              const Icon = s.icon;
              return (
                <div className="card" key={s.id} onClick={() => openSubject(s)}>
                  <span className="tab" style={{ background: s.color }}>{s.name}</span>
                  <div className="icon-row"><Icon size={26} color={s.color} strokeWidth={1.6} /></div>
                  <h3>{s.name}</h3>
                  <p>{s.tagline}</p>
                  {!s.ready && <span className="status">em breve</span>}
                </div>
              );
            })}
          </div>
        </>
      )}

      {view === "placeholder" && placeholderSubject && (
        <div className="placeholder-box">
          <button className="back-link" onClick={goHome}>← voltar ao Fichário</button>
          <h2 className="display" style={{ marginTop: 24 }}>{placeholderSubject.name}</h2>
          <p>Essa gaveta ainda está sendo organizada. Em breve ela terá o mesmo índice ramificado da Biologia.</p>
        </div>
      )}

      {view === "biologia" && (
        <>
          <div className="top-nav">
            <button className="back-link" onClick={goHome}>← voltar ao Fichário</button>
          </div>

          <div className="breadcrumbs">
            <Crumb onClick={() => pickTema(null)} active={!tema}>Biologia</Crumb>
            {tema && <><span className="crumb-sep">/</span><Crumb onClick={() => pickSubtema(null)} active={!subtema}>{tema.name}</Crumb></>}
            {subtema && <><span className="crumb-sep">/</span><Crumb onClick={() => pickConceito(null)} active={!conceito}>{subtema.name}</Crumb></>}
            {conceito && <><span className="crumb-sep">/</span><Crumb active>{conceito.name}</Crumb></>}
          </div>

          <div className="layout">
            {/* LEFT: index list */}
            <div className="panel">
              {!tema && (
                <>
                  <h4>Temas de Biologia</h4>
                  <ul className="index-list">
                    {BIOLOGIA.map((t) => (
                      <li key={t.id}><button onClick={() => pickTema(t.id)}>{t.name}</button></li>
                    ))}
                  </ul>
                </>
              )}
              {tema && !subtema && (
                <>
                  <h4>Subtemas de {tema.name}</h4>
                  <ul className="index-list">
                    {tema.subtemas.map((s) => (
                      <li key={s.id}><button onClick={() => pickSubtema(s.id)}>{s.name}</button></li>
                    ))}
                  </ul>
                </>
              )}
              {subtema && (
                <>
                  <h4>Conceitos de {subtema.name}</h4>
                  <ul className="index-list">
                    {subtema.conceitos.map((c) => (
                      <li key={c.id}>
                        <button className={conceito && conceito.id === c.id ? "active" : ""} onClick={() => pickConceito(c.id)}>{c.name}</button>
                      </li>
                    ))}
                  </ul>
                  {conceito && (
                    <div className="desc-card">
                      <h5>{conceito.name}</h5>
                      <p>{conceito.desc}</p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* RIGHT: tree */}
            <div className="tree-panel">
              <div className="tree">
                <div className="root-node display">Biologia</div>
                <ul>
                  {BIOLOGIA.map((t) => (
                    <li key={t.id}>
                      <TreeNode
                        label={t.name}
                        level={1}
                        active={temaId === t.id}
                        dim={temaId && temaId !== t.id}
                        onClick={() => pickTema(temaId === t.id ? null : t.id)}
                      />
                      {temaId === t.id && (
                        <ul>
                          {t.subtemas.map((s) => (
                            <li key={s.id}>
                              <TreeNode
                                label={s.name}
                                level={2}
                                active={subtemaId === s.id}
                                dim={subtemaId && subtemaId !== s.id}
                                onClick={() => pickSubtema(subtemaId === s.id ? null : s.id)}
                              />
                              {subtemaId === s.id && (
                                <ul>
                                  {s.conceitos.map((c) => (
                                    <li key={c.id}>
                                      <TreeNode
                                        label={c.name}
                                        level={3}
                                        active={conceitoId === c.id}
                                        dim={conceitoId && conceitoId !== c.id}
                                        onClick={() => pickConceito(conceitoId === c.id ? null : c.id)}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tree-caption">quanto mais fundo o galho, mais específico o conteúdo</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}