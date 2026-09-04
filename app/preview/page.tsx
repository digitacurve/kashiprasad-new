"use client";

import React, { useState } from "react";

interface AssetInfo {
  name: string;
  category: "Statue" | "Ornaments" | "Mala Components";
  dimensions: string;
  size: string;
  bbox: string;
  description: string;
}

const assets: AssetInfo[] = [
  {
    name: "statue.png",
    category: "Statue",
    dimensions: "2455 × 1686",
    size: "4.01 MB",
    bbox: "(16, 0, 2439, 1686)",
    description: "Monumental Adiyogi bust with isolated background. Hair strands and basalt stone preserved.",
  },
  {
    name: "crescent.png",
    category: "Ornaments",
    dimensions: "1461 × 1228",
    size: "1.14 MB",
    bbox: "(16, 16, 1445, 1212)",
    description: "Golden Chandra adornment. Full interior curvature transparent with antique sheen.",
  },
  {
    name: "tilak.png",
    category: "Ornaments",
    dimensions: "691 × 1267",
    size: "1.04 MB",
    bbox: "(16, 16, 675, 1251)",
    description: "Sacred forehead mark. Sharp metallic bevels and warm golden highlights.",
  },
  {
    name: "earrings.png",
    category: "Ornaments",
    dimensions: "2594 × 1246",
    size: "2.42 MB",
    bbox: "(16, 16, 2578, 1230)",
    description: "Pair of gold hoop earrings. Both interior voids are 100% transparent.",
  },
  {
    name: "rudraksha-bead.png",
    category: "Mala Components",
    dimensions: "1295 × 1294",
    size: "2.23 MB",
    bbox: "(16, 16, 1279, 1278)",
    description: "High-detail 5-Mukhi bead. Fissures and organic ridges with zero halos.",
  },
  {
    name: "spacer-bead.png",
    category: "Mala Components",
    dimensions: "850 × 799",
    size: "0.89 MB",
    bbox: "(16, 16, 834, 783)",
    description: "Secondary rounder bead showing cord channel hole with clean alpha.",
  },
  {
    name: "guru-bead.png",
    category: "Mala Components",
    dimensions: "1291 × 1312",
    size: "2.13 MB",
    bbox: "(16, 16, 1275, 1296)",
    description: "Central Sumeru bead. Through-hole preserved and inter-lobe notch cleaned.",
  },
  {
    name: "mala-cord.png",
    category: "Mala Components",
    dimensions: "1368 × 1405",
    size: "0.99 MB",
    bbox: "(16, 16, 1352, 1389)",
    description: "Looped thread ring. Full inner circular void completely transparent.",
  },
  {
    name: "mala-knot.png",
    category: "Mala Components",
    dimensions: "988 × 1138",
    size: "1.70 MB",
    bbox: "(16, 16, 972, 1122)",
    description: "Brahma Granthi binding knot. Suspension loop hole is clean.",
  },
  {
    name: "pendant.png",
    category: "Mala Components",
    dimensions: "504 × 1393",
    size: "0.74 MB",
    bbox: "(16, 16, 488, 1377)",
    description: "Temple arch locket. Top suspension ring hole 100% hollow with sharp edges.",
  },
  {
    name: "tassel.png",
    category: "Mala Components",
    dimensions: "752 × 1420",
    size: "1.07 MB",
    bbox: "(16, 16, 736, 1404)",
    description: "Brown thread tassel. Outer dangling strands & base fringe threads fully isolated.",
  },
];

type BgMode = "dark" | "black" | "slate" | "checker";

export default function AssetPreviewPage() {
  const [bgMode, setBgMode] = useState<BgMode>("dark");
  const [selectedAsset, setSelectedAsset] = useState<AssetInfo | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const getBgStyle = () => {
    switch (bgMode) {
      case "black":
        return { backgroundColor: "#000000" };
      case "slate":
        return { backgroundColor: "#1e2230" };
      case "checker":
        return {
          backgroundColor: "#11141c",
          backgroundImage: `
            linear-gradient(45deg, #1d222e 25%, transparent 25%), 
            linear-gradient(-45deg, #1d222e 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #1d222e 75%), 
            linear-gradient(-45deg, transparent 75%, #1d222e 75%)
          `,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
        };
      case "dark":
      default:
        return { backgroundColor: "#0e1017" };
    }
  };

  const categories = ["All", "Statue", "Ornaments", "Mala Components"];
  const filteredAssets =
    filter === "All" ? assets : assets.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen bg-[#07080b] text-zinc-100 font-sans p-6 sm:p-10">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10 pb-6 border-b border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-amber-500 font-serif text-2xl tracking-wide">
              KASHI PRASAD
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Inspection Mode
            </span>
          </div>
          <h1 className="text-3xl font-semibold mt-2 tracking-tight text-white">
            Hero Asset Transparency Preview
          </h1>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Inspecting all 11 cleaned assets from{" "}
            <code className="text-zinc-300 font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
              public/hero/assets/clean/
            </code>
            . Test against neutral dark tones and contrast grids to check alpha cutouts.
          </p>
        </div>

        {/* Background Selector */}
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase font-medium tracking-wider text-zinc-400">
            Preview Background
          </span>
          <div className="inline-flex rounded-lg bg-zinc-900 p-1 border border-zinc-800">
            <button
              onClick={() => setBgMode("dark")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                bgMode === "dark"
                  ? "bg-zinc-800 text-amber-300 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Neutral Dark (#0E1017)
            </button>
            <button
              onClick={() => setBgMode("black")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                bgMode === "black"
                  ? "bg-zinc-800 text-amber-300 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Pitch Black (#000000)
            </button>
            <button
              onClick={() => setBgMode("slate")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                bgMode === "slate"
                  ? "bg-zinc-800 text-amber-300 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Deep Slate (#1E2230)
            </button>
            <button
              onClick={() => setBgMode("checker")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                bgMode === "checker"
                  ? "bg-zinc-800 text-amber-300 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Contrast Grid
            </button>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition border ${
              filter === cat
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300"
            }`}
          >
            {cat} {cat === "All" ? `(${assets.length})` : `(${assets.filter((a) => a.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Assets Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => {
          const isLarge = asset.name === "statue.png" || asset.name === "earrings.png";

          return (
            <div
              key={asset.name}
              className={`group bg-zinc-900/40 rounded-xl border border-zinc-800/80 hover:border-amber-500/40 transition-all overflow-hidden flex flex-col ${
                isLarge && filter === "All" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Asset View Canvas */}
              <div
                style={getBgStyle()}
                className="relative h-72 sm:h-80 w-full flex items-center justify-center p-6 transition-colors duration-200 overflow-hidden cursor-pointer"
                onClick={() => setSelectedAsset(asset)}
              >
                {/* Visual Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/hero/assets/clean/${asset.name}`}
                  alt={asset.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />

                <span className="absolute bottom-3 right-3 text-[11px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to inspect full-res
                </span>
              </div>

              {/* Asset Details Footer */}
              <div className="p-4 bg-zinc-950/60 border-t border-zinc-800/60 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-mono text-sm font-semibold text-zinc-100 tracking-wide">
                      {asset.name}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {asset.size}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {asset.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Dims: <strong className="text-zinc-400">{asset.dimensions}</strong></span>
                  <span>Pad: <strong className="text-amber-400/90">16px RGBA</strong></span>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Modal for full inspection */}
      {selectedAsset && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#0d0f14] rounded-2xl border border-zinc-700 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white font-mono">
                  {selectedAsset.name}
                </h3>
                <span className="text-xs text-zinc-400">
                  {selectedAsset.dimensions} px • {selectedAsset.size} • BBox: {selectedAsset.bbox}
                </span>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="text-zinc-400 hover:text-white px-3 py-1 rounded bg-zinc-800 text-sm"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Canvas */}
            <div
              style={getBgStyle()}
              className="flex-1 min-h-[400px] p-8 flex items-center justify-center overflow-auto"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/hero/assets/clean/${selectedAsset.name}`}
                alt={selectedAsset.name}
                className="max-h-[65vh] max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Note */}
            <div className="p-3 px-6 bg-zinc-950 text-xs text-zinc-400 border-t border-zinc-800/80 flex items-center justify-between">
              <span>{selectedAsset.description}</span>
              <span className="text-amber-400 font-mono">Real RGBA Alpha Extrema: (0, 255)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
