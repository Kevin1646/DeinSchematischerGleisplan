window.LINE_DEFS = {
  hauptgleis: {
    label: "Hauptgleis",
    widthCM: 0.04,
    color: "black",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  nebengleis: {
    label: "Nebengleis",
    widthCM: 0.02,
    color: "black",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_nb: {
    label: "Nb-Grenze",
    widthCM: 0.02,
    color: "black",
    fineGrid: true,
    visible: true,
    kind: "dash",
    dashFactory: (w) => {
      const dash = 8 * w, gap = 4 * w, dot = 0.6 * w;
      return [dash, gap, dot, gap, dot, gap];
    }
  },

  linie_stb: {
    label: "StB-Grenze",
    widthCM: 0.02,
    color: "black",
    fineGrid: true,
    visible: true,
    kind: "dash",
    dashFactory: (w) => {
      const dash = 8 * w, gap = 4 * w, dot = 0.6 * w;
      return [dash, gap, dot, gap];
    }
  },

  linie_gkt: {
    label: "Gemeinschaftskabeltrasse",
    widthCM: 0.02,
    color: "black",
    fineGrid: true,
    visible: true,
    kind: "dash",
    dashFactory: (w) => {
      const dash = 15 * w, gap = 1.4 * w, dot = 0.3 * w;
      return [dash, gap, dot, gap];
    }
  },

  linie_lstk: {
    label: "LST Kabeltrasse",
    widthCM: 0.02,
    color: "black",
    fineGrid: true,
    visible: true,
    kind: "dash",
    dashFactory: (w) => {
      const dash = 8 * w, gap = 1 * w;
      return [dash, gap];
    }
  },

  linie_fmkt: {
    label: "Fernmeldekabeltrasse",
    widthCM: 0.02,
    color: "black",
    fineGrid: true,
    visible: true,
    kind: "dash",
    dashFactory: (w) => {
      const dash = 18 * w, gap = 1.4 * w;
      return [dash, gap, dash, gap];
    }
  },

  linie_km: {
    label: "Kilometrierung",
    widthCM: 0.02,
    color: "black",
    fineGrid: true,
    visible: true,
    kind: "dash",
    dashFactory: (w) => {
      const dash = 6 * w, gap = 3 * w;
      return [dash, gap];
    }
  },

  linie_pink: {
    label: "Rangierweg",
    widthCM: 0.12,
    color: "#ff2fb0",
    fineGrid: true,
    visible: true,
    kind: "pattern"
  },

  linie_gruen: {
    label: "Fahrweg",
    widthCM: 0.12,
    color: "#00c853",
    fineGrid: true,
    visible: true,
    kind: "pattern"
  },

  linie_grau: {
    label: "Sonstiger Weg",
    widthCM: 0.12,
    color: "#9e9e9e",
    fineGrid: true,
    visible: true,
    kind: "pattern"
  },

  linie_gelb: {
    label: "Hilfsweg",
    widthCM: 0.12,
    color: "#00c125",
    fineGrid: true,
    visible: true,
    kind: "pattern"
  },

  linie_zugb: {
    label: "Betriebsgleis Zugbildung",
    widthCM: 0.04,
    color: "#ff0000",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_dispo: {
    label: "Betriebsgleis Dispo",
    widthCM: 0.04,
    color: "#ffd400",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_andi: {
    label: "Betriebsgleis Andienung",
    widthCM: 0.04,
    color: "#ff7a00",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_ab: {
    label: "Abstellgleis",
    widthCM: 0.04,
    color: "#0033ff",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_lade: {
    label: "Ladegleis",
    widthCM: 0.04,
    color: "#00c853",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_lade_kv: {
    label: "Ladegleis KV",
    widthCM: 0.04,
    color: "#00bfa5",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_lok: {
    label: "Lokgleis",
    widthCM: 0.04,
    color: "#7b0000",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_tank: {
    label: "Tankgleis",
    widthCM: 0.04,
    color: "#00e5ff",
    fineGrid: false,
    visible: true,
    kind: "solid"
  },

  linie_zuf: {
    label: "Zuführung",
    widthCM: 0.04,
    color: "#ff00ff",
    fineGrid: false,
    visible: true,
    kind: "solid"
  }
};

window.buildLineTypesCM = function () {
  const result = {};
  for (const [id, def] of Object.entries(window.LINE_DEFS)) {
    result[id] = {
      width: def.widthCM,
      color: def.color
    };
  }
  return result;
};

window.buildLineVisibilityDefaults = function () {
  const result = {};
  for (const [id, def] of Object.entries(window.LINE_DEFS)) {
    result[id] = def.visible !== false;
  }
  return result;
};

window.isFineLineType = function (type) {
  return !!window.LINE_DEFS[type]?.fineGrid;
};

window.buildCanvasLineTypes = function ({
  PIXELS_PER_CM,
  PINK_CELL,
  PINK_ROWS,
  PINK_CHECKER_PATTERN,
  GREEN_CHECKER_PATTERN,
  GRAY_CHECKER_PATTERN,
  YELLOW_CHECKER_PATTERN
}) {
  const result = {};

  for (const [id, def] of Object.entries(window.LINE_DEFS)) {
    if (def.kind === "pattern") {
      const patternMap = {
        linie_pink: PINK_CHECKER_PATTERN,
        linie_gruen: GREEN_CHECKER_PATTERN,
        linie_grau: GRAY_CHECKER_PATTERN,
        linie_gelb: YELLOW_CHECKER_PATTERN
      };

      result[id] = {
        width: PINK_CELL * PINK_ROWS,
        color: def.color,
        dash: [],
        pattern: patternMap[id],
        fixedColor: true,
        lineCap: "butt",
        lineJoin: "miter",
        outline: { color: def.color, thickness: 0.1 }
      };
      continue;
    }

    const w = def.widthCM * PIXELS_PER_CM;

    result[id] = {
      width: w,
      color: def.color,
      dash: def.dashFactory ? def.dashFactory(w) : []
    };
  }

  return result;
};