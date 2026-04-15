// Elementkatalog
const ELEMENT_CATEGORIES = {
    "[2] Gebäude": {
        type: "nested",
        subcategories: {
            Stellwerk: {
                Stellwerk_1: {
                    type: "image",
                    src: "2_Gebaeude/Stellwerk/SW_mech.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Stellwerk/SW_mech.png",
                        NEUBAU: "2_Gebaeude/Stellwerk/SW_mech_N.png",
                        RUECKBAU: "2_Gebaeude/Stellwerk/SW_mech_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
                Stellwerk_2: {
                    type: "image",
                    src: "2_Gebaeude/Stellwerk/SW_elek.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Stellwerk/SW_elek.png",
                        NEUBAU: "2_Gebaeude/Stellwerk/SW_elek_N.png",
                        RUECKBAU: "2_Gebaeude/Stellwerk/SW_elek_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
                Stellwerk_3: {
                    type: "image",
                    src: "2_Gebaeude/Stellwerk/ESTW_Z.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Stellwerk/ESTW_Z.png",
                        NEUBAU: "2_Gebaeude/Stellwerk/ESTW_Z_N.png",
                        RUECKBAU: "2_Gebaeude/Stellwerk/ESTW_Z_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
                Stellwerk_4: {
                    type: "image",
                    src: "2_Gebaeude/Stellwerk/ESTW_UZ.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Stellwerk/ESTW_UZ.png",
                        NEUBAU: "2_Gebaeude/Stellwerk/ESTW_UZ_N.png",
                        RUECKBAU: "2_Gebaeude/Stellwerk/ESTW_UZ_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
                Stellwerk_5: {
                    type: "image",
                    src: "2_Gebaeude/Stellwerk/ESTW_A.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Stellwerk/ESTW_A.png",
                        NEUBAU: "2_Gebaeude/Stellwerk/ESTW_A_N.png",
                        RUECKBAU: "2_Gebaeude/Stellwerk/ESTW_A_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
            },
            Gebäude: {
                Gebaude: {
                    type: "image",
                    src: "2_Gebaeude/Gebaeude/Gebaude.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Gebaeude/Gebaude.png",
                        NEUBAU: "2_Gebaeude/Gebaeude/Gebaude_N.png",
                        RUECKBAU: "2_Gebaeude/Gebaeude/Gebaude_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
            },
            Signalbrücke: {
                SignalbrueckeEnde: {
                    type: "image",
                    src: "2_Gebaeude/Signalbruecke/SignalbrueckeEnde.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Signalbruecke/SignalbrueckeEnde.png",
                        NEUBAU: "2_Gebaeude/Signalbruecke/SignalbrueckeEnde_N.png",
                        RUECKBAU: "2_Gebaeude/Signalbruecke/SignalbrueckeEnde_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.5,
                },
                SignalbrueckeMitte: {
                    type: "image",
                    src: "2_Gebaeude/Signalbruecke/SignalbrueckeMitte.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Signalbruecke/SignalbrueckeMitte.png",
                        NEUBAU: "2_Gebaeude/Signalbruecke/SignalbrueckeMitte_N.png",
                        RUECKBAU: "2_Gebaeude/Signalbruecke/SignalbrueckeMitte_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.5,
                },
                SignalbrueckeFundament: {
                    type: "image",
                    src: "2_Gebaeude/Signalbruecke/SignalbrueckeFundament.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Signalbruecke/SignalbrueckeFundament.png",
                        NEUBAU: "2_Gebaeude/Signalbruecke/SignalbrueckeFundament_N.png",
                        RUECKBAU: "2_Gebaeude/Signalbruecke/SignalbrueckeFundament_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.1,
                },
            },
            Bedieneinrichtungen: {
                Gebaude: {
                    type: "image",
                    src: "2_Gebaeude/Gebaeude/Gebaude.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Gebaeude/Gebaude.png",
                        NEUBAU: "2_Gebaeude/Gebaeude/Gebaude_N.png",
                        RUECKBAU: "2_Gebaeude/Gebaeude/Gebaude_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
            },
            Schlüsselsperren: {
                Gebaude: {
                    type: "image",
                    src: "2_Gebaeude/Gebaeude/Gebaude.png",
                    phaseSrc: {
                        IST: "2_Gebaeude/Gebaeude/Gebaude.png",
                        NEUBAU: "2_Gebaeude/Gebaeude/Gebaude_N.png",
                        RUECKBAU: "2_Gebaeude/Gebaeude/Gebaude_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.5,
                },
            },
        },
    },
    "[3] W|Kr|Kw|GSP": {
        type: "nested",
        subcategories: {
            Gleissperren: {
                GSP_1: {
                    type: "image",
                    src: "3_Weichen/GSP/GSP_1.png",
                    phaseSrc: {
                        IST: "3_Weichen/GSP/GSP_1.png",
                        NEUBAU: "3_Weichen/GSP/GSP_1_N.png",
                        RUECKBAU: "3_Weichen/GSP/GSP_1_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.6,
                },
                GSP_2: {
                    type: "image",
                    src: "3_Weichen/GSP/GSP_2.png",
                    phaseSrc: {
                        IST: "3_Weichen/GSP/GSP_2.png",
                        NEUBAU: "3_Weichen/GSP/GSP_2_N.png",
                        RUECKBAU: "3_Weichen/GSP/GSP_2_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.6,
                },
                GSP_3: {
                    type: "image",
                    src: "3_Weichen/GSP/GSP_3.png",
                    phaseSrc: {
                        IST: "3_Weichen/GSP/GSP_3.png",
                        NEUBAU: "3_Weichen/GSP/GSP_3_N.png",
                        RUECKBAU: "3_Weichen/GSP/GSP_3_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.6,
                },
                GSP_4: {
                    type: "image",
                    src: "GSP/GSP_4.png",
                    phaseSrc: {
                        IST: "3_Weichen/GSP/GSP_4.png",
                        NEUBAU: "3_Weichen/GSP/GSP_4_N.png",
                        RUECKBAU: "3_Weichen/GSP/GSP_4_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.6,
                },
            },
            EW: {
                weiche_1: {
                    type: "image",
                    src: "3_Weichen/EW/W1.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W1.png",
                        NEUBAU: "3_Weichen/EW/W1_N.png",
                        RUECKBAU: "3_Weichen/EW/W1_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_2: {
                    type: "image",
                    src: "3_Weichen/EW/W2.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W2.png",
                        NEUBAU: "3_Weichen/EW/W2_N.png",
                        RUECKBAU: "3_Weichen/EW/W2_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_3: {
                    type: "image",
                    src: "3_Weichen/EW/W3.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W3.png",
                        NEUBAU: "3_Weichen/EW/W3_N.png",
                        RUECKBAU: "3_Weichen/EW/W3_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_4: {
                    type: "image",
                    src: "3_Weichen/EW/W4.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W4.png",
                        NEUBAU: "3_Weichen/EW/W4_N.png",
                        RUECKBAU: "3_Weichen/EW/W4_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_5: {
                    type: "image",
                    src: "3_Weichen/EW/W5.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W5.png",
                        NEUBAU: "3_Weichen/EW/W5_N.png",
                        RUECKBAU: "3_Weichen/EW/W5_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_6: {
                    type: "image",
                    src: "3_Weichen/EW/W6.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W6.png",
                        NEUBAU: "3_Weichen/EW/W6_N.png",
                        RUECKBAU: "3_Weichen/EW/W6_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_7: {
                    type: "image",
                    src: "3_Weichen/EW/W7.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W7.png",
                        NEUBAU: "3_Weichen/EW/W7_N.png",
                        RUECKBAU: "3_Weichen/EW/W7_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_8: {
                    type: "image",
                    src: "3_Weichen/EW/W8.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W8.png",
                        NEUBAU: "3_Weichen/EW/W8_N.png",
                        RUECKBAU: "3_Weichen/EW/W8_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_9: {
                    type: "image",
                    src: "3_Weichen/EW/W9.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W9.png",
                        NEUBAU: "3_Weichen/EW/W9_N.png",
                        RUECKBAU: "3_Weichen/EW/W9_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_10: {
                    type: "image",
                    src: "3_Weichen/EW/W10.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W10.png",
                        NEUBAU: "3_Weichen/EW/W10_N.png",
                        RUECKBAU: "3_Weichen/EW/W10_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_11: {
                    type: "image",
                    src: "3_Weichen/EW/W11.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W11.png",
                        NEUBAU: "3_Weichen/EW/W11_N.png",
                        RUECKBAU: "3_Weichen/EW/W11_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_12: {
                    type: "image",
                    src: "3_Weichen/EW/W12.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W12.png",
                        NEUBAU: "3_Weichen/EW/W12_N.png",
                        RUECKBAU: "3_Weichen/EW/W12_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_13: {
                    type: "image",
                    src: "3_Weichen/EW/W13.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W13.png",
                        NEUBAU: "3_Weichen/EW/W13_N.png",
                        RUECKBAU: "3_Weichen/EW/W13_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_14: {
                    type: "image",
                    src: "3_Weichen/EW/W14.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W14.png",
                        NEUBAU: "3_Weichen/EW/W14_N.png",
                        RUECKBAU: "3_Weichen/EW/W14_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_15: {
                    type: "image",
                    src: "3_Weichen/EW/W15.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W15.png",
                        NEUBAU: "3_Weichen/EW/W15_N.png",
                        RUECKBAU: "3_Weichen/EW/W15_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
                weiche_16: {
                    type: "image",
                    src: "3_Weichen/EW/W16.png",
                    phaseSrc: {
                        IST: "3_Weichen/EW/W16.png",
                        NEUBAU: "3_Weichen/EW/W16_N.png",
                        RUECKBAU: "3_Weichen/EW/W16_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.7,
                },
            },

            EWBogen: {
                weiche_1B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W1B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W1B.png",
                        NEUBAU: "3_Weichen/EWBogen/W1B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W1B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_2B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W2B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W2B.png",
                        NEUBAU: "3_Weichen/EWBogen/W2B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W2B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_3B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W3B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W3B.png",
                        NEUBAU: "3_Weichen/EWBogen/W3B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W3B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_4B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W4B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W4B.png",
                        NEUBAU: "3_Weichen/EWBogen/W4B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W4B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_5B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W5B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W5B.png",
                        NEUBAU: "3_Weichen/EWBogen/W5B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W5B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_6B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W6B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W6B.png",
                        NEUBAU: "3_Weichen/EWBogen/W6B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W6B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_7B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W7B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W7B.png",
                        NEUBAU: "3_Weichen/EWBogen/W7B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W7B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_8B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W8B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W8B.png",
                        NEUBAU: "3_Weichen/EWBogen/W8B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W8B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_9B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W9B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W9B.png",
                        NEUBAU: "3_Weichen/EWBogen/W9B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W9B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_10B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W10B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W10B.png",
                        NEUBAU: "3_Weichen/EWBogen/W10B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W10B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_11B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W11B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W11B.png",
                        NEUBAU: "3_Weichen/EWBogen/W11B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W11B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_12B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W12B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W12B.png",
                        NEUBAU: "3_Weichen/EWBogen/W12B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W12B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_13B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W13B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W13B.png",
                        NEUBAU: "3_Weichen/EWBogen/W13B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W13B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_14B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W14B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W14B.png",
                        NEUBAU: "3_Weichen/EWBogen/W14B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W14B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_15B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W15B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W15B.png",
                        NEUBAU: "3_Weichen/EWBogen/W15B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W15B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
                weiche_16B: {
                    type: "image",
                    src: "3_Weichen/EWBogen/W16B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EWBogen/W16B.png",
                        NEUBAU: "3_Weichen/EWBogen/W16B_N.png",
                        RUECKBAU: "3_Weichen/EWBogen/W16B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 0.7,
                },
            },

            EKW: {
                weiche_17: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW1.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW1.png",
                        NEUBAU: "3_Weichen/EKW/EKW1_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW1_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_18: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW2.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW2.png",
                        NEUBAU: "3_Weichen/EKW/EKW2_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW2_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_19: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW3.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW3.png",
                        NEUBAU: "3_Weichen/EKW/EKW3_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW3_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_20: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW4.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW4.png",
                        NEUBAU: "3_Weichen/EKW/EKW4_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW4_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_23: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW5.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW5.png",
                        NEUBAU: "3_Weichen/EKW/EKW5_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW5_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_24: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW6.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW6.png",
                        NEUBAU: "3_Weichen/EKW/EKW6_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW6_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_25: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW7.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW7.png",
                        NEUBAU: "3_Weichen/EKW/EKW7_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW7_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_26: {
                    type: "image",
                    src: "3_Weichen/EKW/EKW8.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKW/EKW8.png",
                        NEUBAU: "3_Weichen/EKW/EKW8_N.png",
                        RUECKBAU: "3_Weichen/EKW/EKW8_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
            },

            EKWBogen: {
                weiche_17B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW1B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW1B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW1B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW1B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_18B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW2B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW2B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW2B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW2B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_19B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW3B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW3B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW3B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW3B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_20B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW4B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW4B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW4B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW4B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_23B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW5B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW5B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW5B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW5B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_24B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW6B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW6B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW6B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW6B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_25B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW7B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW7B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW7B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW7B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_26B: {
                    type: "image",
                    src: "3_Weichen/EKWBogen/EKW8B.png",
                    phaseSrc: {
                        IST: "3_Weichen/EKWBogen/EKW8B.png",
                        NEUBAU: "3_Weichen/EKWBogen/EKW8B_N.png",
                        RUECKBAU: "3_Weichen/EKWBogen/EKW8B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
            },

            DKW: {
                weiche_DKW1: {
                    type: "image",
                    src: "3_Weichen/DKW/DKW1.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKW/DKW1.png",
                        NEUBAU: "3_Weichen/DKW/DKW1_N.png",
                        RUECKBAU: "3_Weichen/DKW/DKW1_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_DKW2: {
                    type: "image",
                    src: "3_Weichen/DKW/DKW2.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKW/DKW2.png",
                        NEUBAU: "3_Weichen/DKW/DKW2_N.png",
                        RUECKBAU: "3_Weichen/DKW/DKW2_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_DKW3: {
                    type: "image",
                    src: "3_Weichen/DKW/DKW3.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKW/DKW3.png",
                        NEUBAU: "3_Weichen/DKW/DKW3_N.png",
                        RUECKBAU: "3_Weichen/DKW/DKW3_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_DKW4: {
                    type: "image",
                    src: "3_Weichen/DKW/DKW4.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKW/DKW4.png",
                        NEUBAU: "3_Weichen/DKW/DKW4_N.png",
                        RUECKBAU: "3_Weichen/DKW/DKW4_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
            },

            DKWBogen: {
                weiche_DKW1B: {
                    type: "image",
                    src: "3_Weichen/DKWBogen/DKW1B.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKWBogen/DKW1B.png",
                        NEUBAU: "3_Weichen/DKWBogen/DKW1B_N.png",
                        RUECKBAU: "3_Weichen/DKWBogen/DKW1B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_DKW2B: {
                    type: "image",
                    src: "3_Weichen/DKWBogen/DKW2B.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKWBogen/DKW2B.png",
                        NEUBAU: "3_Weichen/DKWBogen/DKW2B_N.png",
                        RUECKBAU: "3_Weichen/DKWBogen/DKW2B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_DKW3B: {
                    type: "image",
                    src: "3_Weichen/DKWBogen/DKW3B.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKWBogen/DKW3B.png",
                        NEUBAU: "3_Weichen/DKWBogen/DKW3B_N.png",
                        RUECKBAU: "3_Weichen/DKWBogen/DKW3B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
                weiche_DKW4B: {
                    type: "image",
                    src: "3_Weichen/DKWBogen/DKW4B.png",
                    phaseSrc: {
                        IST: "3_Weichen/DKWBogen/DKW4B.png",
                        NEUBAU: "3_Weichen/DKWBogen/DKW4B_N.png",
                        RUECKBAU: "3_Weichen/DKWBogen/DKW4B_R.png"
                    },
                    widthCM: 1,
                    heightCM: 1.5,
                },
            },
        },
    },
    "[4] Haupt- u. Vorignale (Ks)": {
        type: "nested",
        subcategories: {
            Mehrabschnittssignale: {

                signal_MSig1: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/MSig/MSig1.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/MSig/MSig1.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/MSig/MSig1_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/MSig/MSig1_R.png"
                    },
                    widthCM: 0.33,
                    heightCM: 0.2,
                },
                gleis_haupt_msig: {
                    type: "line",
                    lineType: "hauptgleis",   // muss zu deinen lineTypes passen
                    label: "Hgl"
                },

                signal_MSig2: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/MSig/MSig2.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/MSig/MSig2.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/MSig/MSig2_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/MSig/MSig2_R.png"
                    },
                    widthCM: 0.33,
                    heightCM: 0.2,
                },

                signal_MSig3: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/MSig/MSig3.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/MSig/MSig3.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/MSig/MSig3_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/MSig/MSig3_R.png"
                    },
                    widthCM: 0.33,
                    heightCM: 0.2,
                },
                Zusatzlicht1: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/MSig/Zusatzlicht.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/MSig/Zusatzlicht.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/MSig/Zusatzlicht_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/MSig/Zusatzlicht_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },
                signal_Ra12: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/MSig/Ra12.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/MSig/Ra12.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/MSig/Ra12_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/MSig/Ra12_R.png"
                    },
                    widthCM: 0.1675,
                    heightCM: 0.2,
                },

            },

            Hauptsignale: {

                signal_HSig1: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/HSig/HSig1.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/HSig/HSig1.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/HSig/HSig1_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/HSig/HSig1_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },

                signal_HSig2: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/HSig/HSig2.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/HSig/HSig2.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/HSig/HSig2_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/HSig/HSig2_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },

                signal_HSig3: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/HSig/HSig3.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/HSig/HSig3.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/HSig/HSig3_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/HSig/HSig3_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },
                Zusatzlicht2: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/HSig/Zusatzlicht.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/HSig/Zusatzlicht.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/HSig/Zusatzlicht_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/HSig/Zusatzlicht_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },

            },

            Vorsignale: {

                signal_VSig1: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/VSig/VSig1.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/VSig/VSig1.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/VSig/VSig1_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/VSig/VSig1_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },

                signal_VSig2: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/VSig/VSig2.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/VSig/VSig2.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/VSig/VSig2_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/VSig/VSig2_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },

                signal_VSig3: {
                    type: "image",
                    src: "4_Haupt_und_Vorsignale/VSig/VSig3.png",
                    phaseSrc: {
                        IST: "4_Haupt_und_Vorsignale/VSig/VSig3.png",
                        NEUBAU: "4_Haupt_und_Vorsignale/VSig/VSig3_N.png",
                        RUECKBAU: "4_Haupt_und_Vorsignale/VSig/VSig3_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },

            },
            Signalbefestigung: {
                SignalbefestigungK: {
                    type: "image",
                    src: "Signalbefestigung/SMK.png",
                    phaseSrc: {
                        IST: "Signalbefestigung/SMK.png",
                        NEUBAU: "Signalbefestigung/SMK_N.png",
                        RUECKBAU: "Signalbefestigung/SMK_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2,
                },
                SignalbefestigungM: {
                    type: "image",
                    src: "Signalbefestigung/SMM.png",
                    phaseSrc: {
                        IST: "Signalbefestigung/SMM.png",
                        NEUBAU: "Signalbefestigung/SMM_N.png",
                        RUECKBAU: "Signalbefestigung/SMM_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2,
                },
                SignalbefestigungL: {
                    type: "image",
                    src: "Signalbefestigung/SML.png",
                    phaseSrc: {
                        IST: "Signalbefestigung/SML.png",
                        NEUBAU: "Signalbefestigung/SML_N.png",
                        RUECKBAU: "Signalbefestigung/SML_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2,
                },
                SignalbefestigungTL: {
                    type: "image",
                    src: "Signalbefestigung/SMTL.png",
                    phaseSrc: {
                        IST: "Signalbefestigung/SMTL.png",
                        NEUBAU: "Signalbefestigung/SMTL_N.png",
                        RUECKBAU: "Signalbefestigung/SMTL_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.1,
                },
                SignalbefestigungTR: {
                    type: "image",
                    src: "Signalbefestigung/SMTR.png",
                    phaseSrc: {
                        IST: "Signalbefestigung/SMTR.png",
                        NEUBAU: "Signalbefestigung/SMTR_N.png",
                        RUECKBAU: "Signalbefestigung/SMTR_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.1,
                },
                SignalbefestigungKW1: {
                    type: "image",
                    src: "Signalbefestigung/SMKW1.png",
                    phaseSrc: {
                        IST: "Signalbefestigung/SMKW1.png",
                        NEUBAU: "Signalbefestigung/SMKW1_N.png",
                        RUECKBAU: "Signalbefestigung/SMKW1_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.1,
                },
                SignalbefestigungKW2: {
                    type: "image",
                    src: "Signalbefestigung/SMKW2.png",
                    phaseSrc: {
                        IST: "Signalbefestigung/SMKW2.png",
                        NEUBAU: "Signalbefestigung/SMKW2_N.png",
                        RUECKBAU: "Signalbefestigung/SMKW2_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.1,
                },
            },
        },
    },
    "[5] Zusatzsignale": {
        signal_Zs1: {
            type: "image",
            src: "5_Zs/Zs1.png",
            phaseSrc: {
                IST: "5_Zs/Zs1.png",
                NEUBAU: "5_Zs/Zs1_N.png",
                RUECKBAU: "5_Zs/Zs1_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs2el: {
            type: "image",
            src: "5_Zs/Zs2el.png",
            phaseSrc: {
                IST: "5_Zs/Zs2el.png",
                NEUBAU: "5_Zs/Zs2el_N.png",
                RUECKBAU: "5_Zs/Zs2el_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs2bl: {
            type: "image",
            src: "5_Zs/Zs2bl.png",
            phaseSrc: {
                IST: "5_Zs/Zs2bl.png",
                NEUBAU: "5_Zs/Zs2bl_N.png",
                RUECKBAU: "5_Zs/Zs2bl_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs3el: {
            type: "image",
            src: "5_Zs/Zs3el.png",
            phaseSrc: {
                IST: "5_Zs/Zs3el.png",
                NEUBAU: "5_Zs/Zs3el_N.png",
                RUECKBAU: "5_Zs/Zs3el_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs3bl: {
            type: "image",
            src: "5_Zs/Zs3bl.png",
            phaseSrc: {
                IST: "5_Zs/Zs3bl.png",
                NEUBAU: "5_Zs/Zs3bl_N.png",
                RUECKBAU: "5_Zs/Zs3bl_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs6el: {
            type: "image",
            src: "5_Zs/Zs6el.png",
            phaseSrc: {
                IST: "5_Zs/Zs6el.png",
                NEUBAU: "5_Zs/Zs6el_N.png",
                RUECKBAU: "5_Zs/Zs6el_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs6bl: {
            type: "image",
            src: "5_Zs/Zs6bl.png",
            phaseSrc: {
                IST: "5_Zs/Zs6bl.png",
                NEUBAU: "5_Zs/Zs6bl_N.png",
                RUECKBAU: "5_Zs/Zs6bl_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs7: {
            type: "image",
            src: "5_Zs/Zs7.png",
            phaseSrc: {
                IST: "5_Zs/Zs7.png",
                NEUBAU: "5_Zs/Zs7_N.png",
                RUECKBAU: "5_Zs/Zs7_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs13el: {
            type: "image",
            src: "5_Zs/Zs13el.png",
            phaseSrc: {
                IST: "5_Zs/Zs13el.png",
                NEUBAU: "5_Zs/Zs13el_N.png",
                RUECKBAU: "5_Zs/Zs13el_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },

        signal_Zs13bl: {
            type: "image",
            src: "5_Zs/Zs13bl.png",
            phaseSrc: {
                IST: "5_Zs/Zs13bl.png",
                NEUBAU: "5_Zs/Zs13bl_N.png",
                RUECKBAU: "5_Zs/Zs13bl_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },
        signal_MTafel: {
            type: "image",
            src: "5_Zs/MTafel.png",
            phaseSrc: {
                IST: "5_Zs/MTafel.png",
                NEUBAU: "5_Zs/MTafel_N.png",
                RUECKBAU: "5_Zs/MTafel_R.png"
            },
            widthCM: 0.1675,
            heightCM: 0.2,
        },
    },
    "[6] Langsamfahrsignale": {
        type: "nested",
        subcategories: {
            "Anfangs- u. Endscheibe": {
                signal_Anfangsscheibe: {
                    type: "image",
                    src: "6_Lf/Anfangsscheibe.png",
                    phaseSrc: {
                        IST: "6_Lf/Anfangsscheibe.png",
                        NEUBAU: "6_Lf/Anfangsscheibe_N.png",
                        RUECKBAU: "6_Lf/Anfangsscheibe_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },
                signal_Endscheibe: {
                    type: "image",
                    src: "6_Lf/Endscheibe.png",
                    phaseSrc: {
                        IST: "6_Lf/Endscheibe.png",
                        NEUBAU: "6_Lf/Endscheibe_N.png",
                        RUECKBAU: "6_Lf/Endscheibe_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },
            },
            "niedriger Mast": {
                signal_Mast_niedrig: {
                    type: "image",
                    src: "6_Lf/Mast_niedrig.png",
                    phaseSrc: {
                        IST: "6_Lf/Mast_niedrig.png",
                        NEUBAU: "6_Lf/Mast_niedrig_N.png",
                        RUECKBAU: "6_Lf/Mast_niedrig_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },
            },
            "Richtungspfeil": {
                signal_Richtungspfeil: {
                    type: "image",
                    src: "6_Lf/Richtungspfeil.png",
                    phaseSrc: {
                        IST: "6_Lf/Richtungspfeil.png",
                        NEUBAU: "6_Lf/Richtungspfeil_N.png",
                        RUECKBAU: "6_Lf/Richtungspfeil_R.png"
                    },
                    widthCM: 0.08375,
                    heightCM: 0.2
                },
            },
            "Langsamfahrscheibe": {
                signal_Langsamfahrscheibe1: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe1.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe1.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe1_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe1_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe2: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe2.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe2.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe2_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe2_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe3: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe3.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe3.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe3_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe3_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe4: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe4.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe4.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe4_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe4_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe5: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe5.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe5.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe5_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe5_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe6: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe6.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe6.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe6_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe6_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe7: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe7.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe7.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe7_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe7_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe8: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe8.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe8.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe8_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe8_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe9: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe9.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe9.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe9_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe9_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe10: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe10.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe10.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe10_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe10_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe11: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe11.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe11.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe11_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe11_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe12: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe12.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe12.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe12_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe12_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe13: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe13.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe13.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe13_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe13_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe14: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe14.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe14.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe14_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe14_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe15: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe15.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe15.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe15_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe15_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrscheibe16: {
                    type: "image",
                    src: "6_Lf/Langsamfahrscheibe16.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrscheibe16.png",
                        NEUBAU: "6_Lf/Langsamfahrscheibe16_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrscheibe16_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

            },
            "Langsamfahrbeginscheibe": {

                signal_Langsamfahrbeginscheibe1: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe1.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe1.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe1_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe1_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe2: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe2.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe2.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe2_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe2_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe3: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe3.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe3.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe3_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe3_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe4: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe4.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe4.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe4_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe4_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe5: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe5.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe5.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe5_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe5_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe6: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe6.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe6.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe6_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe6_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe7: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe7.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe7.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe7_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe7_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe8: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe8.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe8.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe8_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe8_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe9: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe9.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe9.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe9_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe9_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe10: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe10.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe10.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe10_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe10_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe11: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe11.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe11.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe11_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe11_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe12: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe12.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe12.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe12_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe12_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe13: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe13.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe13.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe13_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe13_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe14: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe14.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe14.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe14_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe14_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe15: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe15.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe15.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe15_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe15_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Langsamfahrbeginscheibe16: {
                    type: "image",
                    src: "6_Lf/Langsamfahrbeginscheibe16.png",
                    phaseSrc: {
                        IST: "6_Lf/Langsamfahrbeginscheibe16.png",
                        NEUBAU: "6_Lf/Langsamfahrbeginscheibe16_N.png",
                        RUECKBAU: "6_Lf/Langsamfahrbeginscheibe16_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },


            },
            "Geschwindigkeitsankündigungssignal": {
                signal_Geschwindigkeitsankundigungssignal1: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal1.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal1.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal1_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal1_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal2: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal2.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal2.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal2_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal2_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal3: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal3.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal3.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal3_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal3_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal4: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal4.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal4.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal4_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal4_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal5: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal5.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal5.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal5_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal5_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal6: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal6.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal6.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal6_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal6_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal7: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal7.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal7.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal7_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal7_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal8: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal8.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal8.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal8_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal8_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal9: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal9.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal9.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal9_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal9_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal10: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal10.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal10.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal10_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal10_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal11: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal11.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal11.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal11_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal11_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal12: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal12.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal12.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal12_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal12_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal13: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal13.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal13.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal13_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal13_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal14: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal14.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal14.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal14_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal14_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal15: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal15.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal15.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal15_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal15_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitsankundigungssignal16: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitsankundigungssignal16.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitsankundigungssignal16.png",
                        NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal16_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal16_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

            },
            "Geschwindigkeitstafel": {

                signal_Geschwindigkeitstafel1: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel1.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel1.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel1_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel1_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel2: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel2.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel2.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel2_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel2_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel3: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel3.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel3.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel3_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel3_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel4: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel4.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel4.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel4_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel4_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel5: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel5.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel5.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel5_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel5_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel6: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel6.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel6.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel6_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel6_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel7: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel7.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel7.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel7_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel7_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel8: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel8.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel8.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel8_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel8_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel9: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel9.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel9.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel9_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel9_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel10: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel10.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel10.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel10_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel10_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel11: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel11.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel11.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel11_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel11_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel12: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel12.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel12.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel12_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel12_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel13: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel13.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel13.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel13_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel13_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel14: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel14.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel14.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel14_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel14_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel15: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel15.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel15.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel15_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel15_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitstafel16: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitstafel16.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitstafel16.png",
                        NEUBAU: "6_Lf/Geschwindigkeitstafel16_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitstafel16_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

            },
            "Geschwindigkeitssignal": {

                signal_Geschwindigkeitssignal1: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal1.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal1.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal1_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal1_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal2: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal2.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal2.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal2_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal2_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal3: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal3.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal3.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal3_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal3_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal4: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal4.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal4.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal4_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal4_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal5: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal5.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal5.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal5_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal5_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal6: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal6.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal6.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal6_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal6_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal7: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal7.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal7.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal7_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal7_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal8: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal8.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal8.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal8_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal8_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal9: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal9.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal9.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal9_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal9_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal10: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal10.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal10.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal10_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal10_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal11: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal11.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal11.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal11_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal11_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal12: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal12.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal12.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal12_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal12_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal13: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal13.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal13.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal13_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal13_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal14: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal14.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal14.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal14_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal14_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal15: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal15.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal15.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal15_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal15_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

                signal_Geschwindigkeitssignal16: {
                    type: "image",
                    src: "6_Lf/Geschwindigkeitssignal16.png",
                    phaseSrc: {
                        IST: "6_Lf/Geschwindigkeitssignal16.png",
                        NEUBAU: "6_Lf/Geschwindigkeitssignal16_N.png",
                        RUECKBAU: "6_Lf/Geschwindigkeitssignal16_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.2
                },

            },
        },

        signal_Geschwindigkeitsankundigungssignal1: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal1.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal1.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal1_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal1_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal2: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal2.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal2.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal2_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal2_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal3: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal3.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal3.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal3_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal3_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal4: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal4.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal4.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal4_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal4_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal5: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal5.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal5.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal5_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal5_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal6: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal6.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal6.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal6_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal6_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal7: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal7.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal7.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal7_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal7_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal8: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal8.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal8.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal8_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal8_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal9: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal9.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal9.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal9_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal9_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal10: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal10.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal10.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal10_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal10_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal11: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal11.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal11.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal11_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal11_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal12: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal12.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal12.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal12_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal12_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal13: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal13.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal13.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal13_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal13_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal14: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal14.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal14.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal14_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal14_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal15: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal15.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal15.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal15_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal15_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

        signal_Geschwindigkeitsankundigungssignal16: {
            type: "image",
            src: "6_Lf/Geschwindigkeitsankundigungssignal16.png",
            phaseSrc: {
                IST: "6_Lf/Geschwindigkeitsankundigungssignal16.png",
                NEUBAU: "6_Lf/Geschwindigkeitsankundigungssignal16_N.png",
                RUECKBAU: "6_Lf/Geschwindigkeitsankundigungssignal16_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },
    },

    "[7] Schutzsignale": {
        sh_1: {
            type: "image",
            src: "7_Sh/Sh2.png",
            phaseSrc: {
                IST: "7_Sh/Sh2.png",
                NEUBAU: "7_Sh/Sh2_N.png",
                RUECKBAU: "7_Sh/Sh2_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },
        Sperrsignal: {
            type: "image",
            src: "7_Sh/Sperrsignal.png",
            phaseSrc: {
                IST: "7_Sh/Sperrsignal.png",
                NEUBAU: "7_Sh/Sperrsignal_N.png",
                RUECKBAU: "7_Sh/Sperrsignal_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },
        SperrsignalK: {
            type: "image",
            src: "7_Sh/SperrsignalK.png",
            phaseSrc: {
                IST: "7_Sh/SperrsignalK.png",
                NEUBAU: "7_Sh/SperrsignalK_N.png",
                RUECKBAU: "7_Sh/SperrsignalK_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },
        Zugedeckungssignal: {
            type: "image",
            src: "7_Sh/Zugedeckungssignal.png",
            phaseSrc: {
                IST: "7_Sh/Zugedeckungssignal.png",
                NEUBAU: "7_Sh/Zugedeckungssignal_N.png",
                RUECKBAU: "7_Sh/Zugedeckungssignal_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },
        signal_Mast_niedrig2: {
            type: "image",
            src: "6_Lf/Mast_niedrig.png",
            phaseSrc: {
                IST: "6_Lf/Mast_niedrig.png",
                NEUBAU: "6_Lf/Mast_niedrig_N.png",
                RUECKBAU: "6_Lf/Mast_niedrig_R.png"
            },
            widthCM: 0.5,
            heightCM: 0.2
        },

    },
    "[8] Nebensignale": {
        signal_Ne1: { type: "image", src: "8_Ne/Ne1.png", phaseSrc: { IST: "8_Ne/Ne1.png", NEUBAU: "8_Ne/Ne1_N.png", RUECKBAU: "8_Ne/Ne1_R.png" }, widthCM: 0.5, heightCM: 0.2 },


        signal_Ne2: { type: "image", src: "8_Ne/Ne2.png", phaseSrc: { IST: "8_Ne/Ne2.png", NEUBAU: "8_Ne/Ne2_N.png", RUECKBAU: "8_Ne/Ne2_R.png" }, widthCM: 0.5, heightCM: 0.2 },


        signal_Ne4: { type: "image", src: "8_Ne/Ne4.png", phaseSrc: { IST: "8_Ne/Ne4.png", NEUBAU: "8_Ne/Ne4_N.png", RUECKBAU: "8_Ne/Ne4_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne4Z1: { type: "image", src: "8_Ne/Ne4Z1.png", phaseSrc: { IST: "8_Ne/Ne4Z1.png", NEUBAU: "8_Ne/Ne4Z1_N.png", RUECKBAU: "8_Ne/Ne4Z1_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne4Z2: { type: "image", src: "8_Ne/Ne4Z2.png", phaseSrc: { IST: "8_Ne/Ne4Z2.png", NEUBAU: "8_Ne/Ne4Z2_N.png", RUECKBAU: "8_Ne/Ne4Z2_R.png" }, widthCM: 0.5, heightCM: 0.2 },

        signal_Ne5: { type: "image", src: "8_Ne/Ne5.png", phaseSrc: { IST: "8_Ne/Ne5.png", NEUBAU: "8_Ne/Ne5_N.png", RUECKBAU: "8_Ne/Ne5_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne5Z1: { type: "image", src: "8_Ne/Ne5Z1.png", phaseSrc: { IST: "8_Ne/Ne5Z1.png", NEUBAU: "8_Ne/Ne5Z1_N.png", RUECKBAU: "8_Ne/Ne5Z1_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne5Z2: { type: "image", src: "8_Ne/Ne5Z2.png", phaseSrc: { IST: "8_Ne/Ne5Z2.png", NEUBAU: "8_Ne/Ne5Z2_N.png", RUECKBAU: "8_Ne/Ne5Z2_R.png" }, widthCM: 0.5, heightCM: 0.2 },


        signal_Ne6: { type: "image", src: "8_Ne/Ne6.png", phaseSrc: { IST: "8_Ne/Ne6.png", NEUBAU: "8_Ne/Ne6_N.png", RUECKBAU: "8_Ne/Ne6_R.png" }, widthCM: 0.5, heightCM: 0.5 },


        signal_Ne12: { type: "image", src: "8_Ne/Ne12.png", phaseSrc: { IST: "8_Ne/Ne12.png", NEUBAU: "8_Ne/Ne12_N.png", RUECKBAU: "8_Ne/Ne12_R.png" }, widthCM: 0.5, heightCM: 0.2 },


        signal_Ne13: { type: "image", src: "8_Ne/Ne13.png", phaseSrc: { IST: "8_Ne/Ne13.png", NEUBAU: "8_Ne/Ne13_N.png", RUECKBAU: "8_Ne/Ne13_R.png" }, widthCM: 0.5, heightCM: 0.2 },


        signal_Ne31: { type: "image", src: "8_Ne/Ne31.png", phaseSrc: { IST: "8_Ne/Ne31.png", NEUBAU: "8_Ne/Ne31_N.png", RUECKBAU: "8_Ne/Ne31_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne32: { type: "image", src: "8_Ne/Ne32.png", phaseSrc: { IST: "8_Ne/Ne32.png", NEUBAU: "8_Ne/Ne32_N.png", RUECKBAU: "8_Ne/Ne32_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne33: { type: "image", src: "8_Ne/Ne33.png", phaseSrc: { IST: "8_Ne/Ne33.png", NEUBAU: "8_Ne/Ne33_N.png", RUECKBAU: "8_Ne/Ne33_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne34: { type: "image", src: "8_Ne/Ne34.png", phaseSrc: { IST: "8_Ne/Ne34.png", NEUBAU: "8_Ne/Ne34_N.png", RUECKBAU: "8_Ne/Ne34_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        signal_Ne35: { type: "image", src: "8_Ne/Ne35.png", phaseSrc: { IST: "8_Ne/Ne35.png", NEUBAU: "8_Ne/Ne35_N.png", RUECKBAU: "8_Ne/Ne35_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        ETCS_Stop_Maker_1: { type: "image", src: "8_Ne/ETCS_Stop_Maker_1.png", phaseSrc: { IST: "8_Ne/ETCS_Stop_Maker_1.png", NEUBAU: "8_Ne/ETCS_Stop_Maker_1_N.png", RUECKBAU: "8_Ne/ETCS_Stop_Maker_1_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        ETCS_Stop_Maker_2: { type: "image", src: "8_Ne/ETCS_Stop_Maker_2.png", phaseSrc: { IST: "8_Ne/ETCS_Stop_Maker_2.png", NEUBAU: "8_Ne/ETCS_Stop_Maker_2_N.png", RUECKBAU: "8_Ne/ETCS_Stop_Maker_2_R.png" }, widthCM: 0.5, heightCM: 0.2 },

    },
    "[9] Orientierungszeichen": {
        BK: { type: "image", src: "9_Orientierungszeichen/BK.png", phaseSrc: { IST: "9_Orientierungszeichen/BK.png", NEUBAU: "9_Orientierungszeichen/BK_N.png", RUECKBAU: "9_Orientierungszeichen/BK_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        BKL: { type: "image", src: "9_Orientierungszeichen/BKL.png", phaseSrc: { IST: "9_Orientierungszeichen/BKL.png", NEUBAU: "9_Orientierungszeichen/BKL_N.png", RUECKBAU: "9_Orientierungszeichen/BKL_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        BKR: { type: "image", src: "9_Orientierungszeichen/BKR.png", phaseSrc: { IST: "9_Orientierungszeichen/BKR.png", NEUBAU: "9_Orientierungszeichen/BKR_N.png", RUECKBAU: "9_Orientierungszeichen/BKR_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        BKU: { type: "image", src: "9_Orientierungszeichen/BKU.png", phaseSrc: { IST: "9_Orientierungszeichen/BKU.png", NEUBAU: "9_Orientierungszeichen/BKU_N.png", RUECKBAU: "9_Orientierungszeichen/BKU_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        ETCS1: { type: "image", src: "9_Orientierungszeichen/ETCS1.png", phaseSrc: { IST: "9_Orientierungszeichen/ETCS1.png", NEUBAU: "9_Orientierungszeichen/ETCS1_N.png", RUECKBAU: "9_Orientierungszeichen/ETCS1_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        ETCS2: { type: "image", src: "9_Orientierungszeichen/ETCS2.png", phaseSrc: { IST: "9_Orientierungszeichen/ETCS2.png", NEUBAU: "9_Orientierungszeichen/ETCS2_N.png", RUECKBAU: "9_Orientierungszeichen/ETCS2_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        LZB: { type: "image", src: "9_Orientierungszeichen/LZB.png", phaseSrc: { IST: "9_Orientierungszeichen/LZB.png", NEUBAU: "9_Orientierungszeichen/LZB_N.png", RUECKBAU: "9_Orientierungszeichen/LZB_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        OB: { type: "image", src: "9_Orientierungszeichen/OB.png", phaseSrc: { IST: "9_Orientierungszeichen/OB.png", NEUBAU: "9_Orientierungszeichen/OB_N.png", RUECKBAU: "9_Orientierungszeichen/OB_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        PZBBU: { type: "image", src: "9_Orientierungszeichen/PZBBU.png", phaseSrc: { IST: "9_Orientierungszeichen/PZBBU.png", NEUBAU: "9_Orientierungszeichen/PZBBU_N.png", RUECKBAU: "9_Orientierungszeichen/PZBBU_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        ZBS: { type: "image", src: "9_Orientierungszeichen/ZBS.png", phaseSrc: { IST: "9_Orientierungszeichen/ZBS.png", NEUBAU: "9_Orientierungszeichen/ZBS_N.png", RUECKBAU: "9_Orientierungszeichen/ZBS_R.png" }, widthCM: 0.5, heightCM: 0.2 },


    },
    "[10] Signale für Rangier- und Sperrfahrten": {
        Ra10: { type: "image", src: "10_RaTs/Ra10.png", phaseSrc: { IST: "10_RaTs/Ra10.png", NEUBAU: "10_RaTs/Ra10_N.png", RUECKBAU: "10_RaTs/Ra10_R.png" }, widthCM: 0.5, heightCM: 0.2 },
        Ra11: { type: "image", src: "10_RaTs/Ra11.png", phaseSrc: { IST: "10_RaTs/Ra11.png", NEUBAU: "10_RaTs/Ra11_N.png", RUECKBAU: "10_RaTs/Ra11_R.png" }, widthCM: 0.5, heightCM: 0.2 },

        Sh1Ra12: { type: "image", src: "10_RaTs/Sh1Ra12.png", phaseSrc: { IST: "10_RaTs/Sh1Ra12.png", NEUBAU: "10_RaTs/Sh1Ra12_N.png", RUECKBAU: "10_RaTs/Sh1Ra12_R.png" }, widthCM: 0.5, heightCM: 0.2 },

        Ts1: { type: "image", src: "10_RaTs/Ts1.png", phaseSrc: { IST: "10_RaTs/Ts1.png", NEUBAU: "10_RaTs/Ts1_N.png", RUECKBAU: "10_RaTs/Ts1_R.png" }, widthCM: 0.5, heightCM: 0.2 },

    },
    "[11] Signale für das Zugpersonal": {
        Bremsprobesignal: { type: "image", src: "11_Zp/Bremsprobesignal.png", phaseSrc: { IST: "11_Zp/Bremsprobesignal.png", NEUBAU: "11_Zp/Bremsprobesignal_N.png", RUECKBAU: "11_Zp/Bremsprobesignal_R.png" }, widthCM: 0.5, heightCM: 0.2 },

        Fahranzeiger: { type: "image", src: "11_Zp/Fahrtanzeiger.png", phaseSrc: { IST: "11_Zp/Fahrtanzeiger.png", NEUBAU: "11_Zp/Fahrtanzeiger_N.png", RUECKBAU: "11_Zp/Fahrtanzeiger_R.png" }, widthCM: 0.5, heightCM: 0.2 },

        Signalhaltmelder: { type: "image", src: "11_Zp/Signalhaltmelder.png", phaseSrc: { IST: "11_Zp/Signalhaltmelder.png", NEUBAU: "11_Zp/Signalhaltmelder_N.png", RUECKBAU: "11_Zp/Signalhaltmelder_R.png" }, widthCM: 0.5, heightCM: 0.2 },

        Zp9: { type: "image", src: "11_Zp/Zp9.png", phaseSrc: { IST: "11_Zp/Zp9.png", NEUBAU: "11_Zp/Zp9_N.png", RUECKBAU: "11_Zp/Zp9_R.png" }, widthCM: 0.5, heightCM: 0.2 },


    },
    "[12] Gleiskennzeichnungen": {
        type: "nested",
        subcategories: {
            elek_Ende: {
                E_Ende: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/E_Ende.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/E_Ende.png",
                        NEUBAU: "12_Gleiskennzeichnungen/E_Ende_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/E_Ende_R.png"
                    },
                    widthCM: 0.1666,
                    heightCM: 0.4
                },
            },
            Kilometrierung: {

                hm: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/hm.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/hm.png",
                        NEUBAU: "12_Gleiskennzeichnungen/hm_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/hm_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2
                },

                km: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/km.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/km.png",
                        NEUBAU: "12_Gleiskennzeichnungen/km_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/km_R.png"
                    },
                    widthCM: 0.25,
                    heightCM: 0.2
                },
            },
            Gleisabschlüsse: {
                Gleisabschluss: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Gleisabschluss.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Gleisabschluss.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Gleisabschluss_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Gleisabschluss_R.png"
                    },
                    widthCM: 0.5,
                    heightCM: 0.4
                },

                Prellbock: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Prellbock.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Prellbock.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Prellbock_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Prellbock_R.png"
                    },
                    widthCM: 0.1666,
                    heightCM: 0.4
                },

                Prellbock_beweg: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Prellbock_beweg.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Prellbock_beweg.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Prellbock_beweg_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Prellbock_beweg_R.png"
                    },
                    widthCM: 0.1666,
                    heightCM: 0.4
                },

                Schwellenkreuz: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Schwellenkreuz.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Schwellenkreuz.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Schwellenkreuz_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Schwellenkreuz_R.png"
                    },
                    widthCM: 0.1666,
                    heightCM: 0.4
                },
            },
            Verkehre: {
                Verkehr1: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr1.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr1.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr1_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr1_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },

                Verkehr2: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr2.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr2.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr2_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr2_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },

                Verkehr3: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr3.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr3.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr3_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr3_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },

                Verkehr4: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr4.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr4.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr4_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr4_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },

                Verkehr5: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr5.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr5.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr5_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr5_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },

                Verkehr6: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr6.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr6.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr6_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr6_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },

                Verkehr7: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr7.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr7.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr7_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr7_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },

                Verkehr8: {
                    type: "image",
                    src: "12_Gleiskennzeichnungen/Verkehr8.png",
                    phaseSrc: {
                        IST: "12_Gleiskennzeichnungen/Verkehr8.png",
                        NEUBAU: "12_Gleiskennzeichnungen/Verkehr8_N.png",
                        RUECKBAU: "12_Gleiskennzeichnungen/Verkehr8_R.png"
                    },
                    widthCM: 0.75,
                    heightCM: 0.2
                },
            },
            Beschriftung: {
                BfGl: {
                    type: "text",
                    variant: "box",
                    label: "BfGl",
                    defaultText: "11",
                    widthCM: 0.125,
                    heightCM: 0.1,
                    noBorder: true,
                },

                StrGl: {
                    type: "text",
                    variant: "box",
                    label: "StrGl",
                    defaultText: "()",
                    widthCM: 0.125,
                    heightCM: 0.1,
                    noBorder: true,
                },
                GlAbschnitt: {
                    type: "text",
                    variant: "plain",
                    label: "GlAbschnitt",
                    defaultText: "111",
                    widthCM: 0.125,
                    heightCM: 0.1,
                    noBorder: true,
                },

            },
        },
    },
    "[13] Gleisschaltmittel,Radsensor,PZB": {
        AZK: { type: "image", src: "13_Gleisschaltmittel/AZK.png", phaseSrc: { IST: "13_Gleisschaltmittel/AZK.png", NEUBAU: "13_Gleisschaltmittel/AZK_N.png", RUECKBAU: "13_Gleisschaltmittel/AZK_R.png" }, widthCM: 0.3333, heightCM: 0.1 },

        AZK45: { type: "image", src: "13_Gleisschaltmittel/AZK45.png", phaseSrc: { IST: "13_Gleisschaltmittel/AZK45.png", NEUBAU: "13_Gleisschaltmittel/AZK45_N.png", RUECKBAU: "13_Gleisschaltmittel/AZK45_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        AZKBU: { type: "image", src: "13_Gleisschaltmittel/AZKBU.png", phaseSrc: { IST: "13_Gleisschaltmittel/AZKBU.png", NEUBAU: "13_Gleisschaltmittel/AZKBU_N.png", RUECKBAU: "13_Gleisschaltmittel/AZKBU_R.png" }, widthCM: 0.3333, heightCM: 0.1 },

        AZKBU45: { type: "image", src: "13_Gleisschaltmittel/AZKBU45.png", phaseSrc: { IST: "13_Gleisschaltmittel/AZKBU45.png", NEUBAU: "13_Gleisschaltmittel/AZKBU45_N.png", RUECKBAU: "13_Gleisschaltmittel/AZKBU45_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Fahrzeugsensor: { type: "image", src: "13_Gleisschaltmittel/Fahrzeugsensor.png", phaseSrc: { IST: "13_Gleisschaltmittel/Fahrzeugsensor.png", NEUBAU: "13_Gleisschaltmittel/Fahrzeugsensor_N.png", RUECKBAU: "13_Gleisschaltmittel/Fahrzeugsensor_R.png" }, widthCM: 0.25, heightCM: 0.1 },

        FunkAnrM: { type: "image", src: "13_Gleisschaltmittel/FunkAnrM.png", phaseSrc: { IST: "13_Gleisschaltmittel/FunkAnrM.png", NEUBAU: "13_Gleisschaltmittel/FunkAnrM_N.png", RUECKBAU: "13_Gleisschaltmittel/FunkAnrM_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        FunkUS: { type: "image", src: "13_Gleisschaltmittel/FunkUS.png", phaseSrc: { IST: "13_Gleisschaltmittel/FunkUS.png", NEUBAU: "13_Gleisschaltmittel/FunkUS_N.png", RUECKBAU: "13_Gleisschaltmittel/FunkUS_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Magnetschienenkontakt: { type: "image", src: "13_Gleisschaltmittel/Magnetschienenkontakt.png", phaseSrc: { IST: "13_Gleisschaltmittel/Magnetschienenkontakt.png", NEUBAU: "13_Gleisschaltmittel/Magnetschienenkontakt_N.png", RUECKBAU: "13_Gleisschaltmittel/Magnetschienenkontakt_R.png" }, widthCM: 0.25, heightCM: 0.1 },

        SK: { type: "image", src: "13_Gleisschaltmittel/SK.png", phaseSrc: { IST: "13_Gleisschaltmittel/SK.png", NEUBAU: "13_Gleisschaltmittel/SK_N.png", RUECKBAU: "13_Gleisschaltmittel/SK_R.png" }, widthCM: 0.3333, heightCM: 0.1 },

        SK45: { type: "image", src: "13_Gleisschaltmittel/SK45.png", phaseSrc: { IST: "13_Gleisschaltmittel/SK45.png", NEUBAU: "13_Gleisschaltmittel/SK45_N.png", RUECKBAU: "13_Gleisschaltmittel/SK45_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        SKBU: { type: "image", src: "13_Gleisschaltmittel/SKBU.png", phaseSrc: { IST: "13_Gleisschaltmittel/SKBU.png", NEUBAU: "13_Gleisschaltmittel/SKBU_N.png", RUECKBAU: "13_Gleisschaltmittel/SKBU_R.png" }, widthCM: 0.3333, heightCM: 0.1 },

        SKBU45: { type: "image", src: "13_Gleisschaltmittel/SKBU45.png", phaseSrc: { IST: "13_Gleisschaltmittel/SKBU45.png", NEUBAU: "13_Gleisschaltmittel/SKBU45_N.png", RUECKBAU: "13_Gleisschaltmittel/SKBU45_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        schaltbarer_Gleismagnet: { type: "image", src: "13_Gleisschaltmittel/schaltbarer_Gleismagnet.png", phaseSrc: { IST: "13_Gleisschaltmittel/schaltbarer_Gleismagnet.png", NEUBAU: "13_Gleisschaltmittel/schaltbarer_Gleismagnet_N.png", RUECKBAU: "13_Gleisschaltmittel/schaltbarer_Gleismagnet_R.png" }, widthCM: 0.3333, heightCM: 0.1 },

        schaltbarer_Gleismagnet2: { type: "image", src: "13_Gleisschaltmittel/schaltbarer_Gleismagnet2.png", phaseSrc: { IST: "13_Gleisschaltmittel/schaltbarer_Gleismagnet2.png", NEUBAU: "13_Gleisschaltmittel/schaltbarer_Gleismagnet2_N.png", RUECKBAU: "13_Gleisschaltmittel/schaltbarer_Gleismagnet2_R.png" }, widthCM: 0.3333, heightCM: 0.1 },

        standiger_Gleismagnet: { type: "image", src: "13_Gleisschaltmittel/standiger_Gleismagnet.png", phaseSrc: { IST: "13_Gleisschaltmittel/standiger_Gleismagnet.png", NEUBAU: "13_Gleisschaltmittel/standiger_Gleismagnet_N.png", RUECKBAU: "13_Gleisschaltmittel/standiger_Gleismagnet_R.png" }, widthCM: 0.3333, heightCM: 0.1 },

        GSE_GSA: { type: "image", src: "13_Gleisschaltmittel/GSE_GSA.png", phaseSrc: { IST: "13_Gleisschaltmittel/GSE_GSA.png", NEUBAU: "13_Gleisschaltmittel/GSE_GSA_N.png", RUECKBAU: "13_Gleisschaltmittel/GSE_GSA_R.png" }, widthCM: 0.333, heightCM: 0.1 },

        GUE1: {
            type: "image",
            src: "13_Gleisschaltmittel/GUE1.png",
            phaseSrc: {
                IST: "13_Gleisschaltmittel/GUE1.png",
                NEUBAU: "13_Gleisschaltmittel/GUE1_N.png",
                RUECKBAU: "13_Gleisschaltmittel/GUE1_R.png"
            },
            widthCM: 0.333,
            heightCM: 0.1
        },
        GUE2: {
            type: "image",
            src: "13_Gleisschaltmittel/GUE2.png",
            phaseSrc: {
                IST: "13_Gleisschaltmittel/GUE2.png",
                NEUBAU: "13_Gleisschaltmittel/GUE2_N.png",
                RUECKBAU: "13_Gleisschaltmittel/GUE2_R.png"
            },
            widthCM: 0.333,
            heightCM: 0.1
        },
        GUE3: {
            type: "image",
            src: "13_Gleisschaltmittel/GUE3.png",
            phaseSrc: {
                IST: "13_Gleisschaltmittel/GUE3.png",
                NEUBAU: "13_Gleisschaltmittel/GUE3_N.png",
                RUECKBAU: "13_Gleisschaltmittel/GUE3_R.png"
            },
            widthCM: 0.333,
            heightCM: 0.1
        },
        GUE4: {
            type: "image",
            src: "13_Gleisschaltmittel/GUE4.png",
            phaseSrc: {
                IST: "13_Gleisschaltmittel/GUE4.png",
                NEUBAU: "13_Gleisschaltmittel/GUE4_N.png",
                RUECKBAU: "13_Gleisschaltmittel/GUE4_R.png"
            },
            widthCM: 0.333,
            heightCM: 0.1
        },



    },
    "[14] Abgrenzungen": {
        Stellbereichsgrenze: { type: "image", src: "14_Stellbereichsgrenze/Stellbereichsgrenze.png", phaseSrc: { IST: "14_Stellbereichsgrenze/Stellbereichsgrenze.png", NEUBAU: "14_Stellbereichsgrenze/Stellbereichsgrenze_N.png", RUECKBAU: "14_Stellbereichsgrenze/Stellbereichsgrenze_R.png" }, widthCM: 2, heightCM: 2 },

    },
    "[15] Kabellage": {

        Kabelschrank: { type: "image", src: "15_Kabellage/Kabelschrank.png", phaseSrc: { IST: "15_Kabellage/Kabelschrank.png", NEUBAU: "15_Kabellage/Kabelschrank_N.png", RUECKBAU: "15_Kabellage/Kabelschrank_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Schalthaus: { type: "image", src: "15_Kabellage/Schalthaus.png", phaseSrc: { IST: "15_Kabellage/Schalthaus.png", NEUBAU: "15_Kabellage/Schalthaus_N.png", RUECKBAU: "15_Kabellage/Schalthaus_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Kabelverteiler: { type: "image", src: "15_Kabellage/Kabelverteiler.png", phaseSrc: { IST: "15_Kabellage/Kabelverteiler.png", NEUBAU: "15_Kabellage/Kabelverteiler_N.png", RUECKBAU: "15_Kabellage/Kabelverteiler_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Kabelschacht: { type: "image", src: "15_Kabellage/Kabelschacht.png", phaseSrc: { IST: "15_Kabellage/Kabelschacht.png", NEUBAU: "15_Kabellage/Kabelschacht_N.png", RUECKBAU: "15_Kabellage/Kabelschacht_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Kabelmuffe: { type: "image", src: "15_Kabellage/Kabelmuffe.png", phaseSrc: { IST: "15_Kabellage/Kabelmuffe.png", NEUBAU: "15_Kabellage/Kabelmuffe_N.png", RUECKBAU: "15_Kabellage/Kabelmuffe_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Weichensignal: { type: "image", src: "15_Kabellage/Weichensignal.png", phaseSrc: { IST: "15_Kabellage/Weichensignal.png", NEUBAU: "15_Kabellage/Weichensignal_N.png", RUECKBAU: "15_Kabellage/Weichensignal_R.png" }, widthCM: 0.25, heightCM: 0.2 },

        Weichenantrieb: { type: "image", src: "15_Kabellage/Weichenantrieb.png", phaseSrc: { IST: "15_Kabellage/Weichenantrieb.png", NEUBAU: "15_Kabellage/Weichenantrieb_N.png", RUECKBAU: "15_Kabellage/Weichenantrieb_R.png" }, widthCM: 0.25, heightCM: 0.2 },
    },
    "[16] betriebliche Gefahrmeldeanlagen": {
        HOA: {
            type: "image",
            src: "16_BetrieblicheGefahrenmeldeanlagen/HOA.png",
            phaseSrc: {
                IST: "16_BetrieblicheGefahrenmeldeanlagen/HOA.png",
                NEUBAU: "16_BetrieblicheGefahrenmeldeanlagen/HOA_N.png",
                RUECKBAU: "16_BetrieblicheGefahrenmeldeanlagen/HOA_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
        Windmeldeanlage: {
            type: "image",
            src: "16_BetrieblicheGefahrenmeldeanlagen/Windmeldeanlage.png",
            phaseSrc: {
                IST: "16_BetrieblicheGefahrenmeldeanlagen/Windmeldeanlage.png",
                NEUBAU: "16_BetrieblicheGefahrenmeldeanlagen/Windmeldeanlage_N.png",
                RUECKBAU: "16_BetrieblicheGefahrenmeldeanlagen/Windmeldeanlage_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
        Luftstroemmeldeanlage: {
            type: "image",
            src: "16_BetrieblicheGefahrenmeldeanlagen/Luftstroemmeldeanlage.png",
            phaseSrc: {
                IST: "16_BetrieblicheGefahrenmeldeanlagen/Luftstroemmeldeanlage.png",
                NEUBAU: "16_BetrieblicheGefahrenmeldeanlagen/Luftstroemmeldeanlage_N.png",
                RUECKBAU: "16_BetrieblicheGefahrenmeldeanlagen/Luftstroemmeldeanlage_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
        Flachstellenortungsanlage: {
            type: "image",
            src: "16_BetrieblicheGefahrenmeldeanlagen/Flachstellenortungsanlage.png",
            phaseSrc: {
                IST: "16_BetrieblicheGefahrenmeldeanlagen/Flachstellenortungsanlage.png",
                NEUBAU: "16_BetrieblicheGefahrenmeldeanlagen/Flachstellenortungsanlage_N.png",
                RUECKBAU: "16_BetrieblicheGefahrenmeldeanlagen/Flachstellenortungsanlage_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },

    },
    "[17] LZB": {

    },
    "[18] ETCS und Balisen": {
        ETCS_DP_gesteuert: { type: "image", src: "18_ETCS_Balisen/ETCS_DP_gesteuert.png", phaseSrc: { IST: "18_ETCS_Balisen/ETCS_DP_gesteuert.png", NEUBAU: "18_ETCS_Balisen/ETCS_DP_gesteuert_N.png", RUECKBAU: "18_ETCS_Balisen/ETCS_DP_gesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        ETCS_DP_ungesteuert: { type: "image", src: "18_ETCS_Balisen/ETCS_DP_ungesteuert.png", phaseSrc: { IST: "18_ETCS_Balisen/ETCS_DP_ungesteuert.png", NEUBAU: "18_ETCS_Balisen/ETCS_DP_ungesteuert_N.png", RUECKBAU: "18_ETCS_Balisen/ETCS_DP_ungesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        ETCS_gesteuert: { type: "image", src: "18_ETCS_Balisen/ETCS_gesteuert.png", phaseSrc: { IST: "18_ETCS_Balisen/ETCS_gesteuert.png", NEUBAU: "18_ETCS_Balisen/ETCS_gesteuert_N.png", RUECKBAU: "18_ETCS_Balisen/ETCS_gesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        ETCS_Transition_ClassB: { type: "image", src: "18_ETCS_Balisen/ETCS_Transition_ClassB.png", phaseSrc: { IST: "18_ETCS_Balisen/ETCS_Transition_ClassB.png", NEUBAU: "18_ETCS_Balisen/ETCS_Transition_ClassB_N.png", RUECKBAU: "18_ETCS_Balisen/ETCS_Transition_ClassB_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        ETCS_Transition_ClassB_gesteuert: { type: "image", src: "18_ETCS_Balisen/ETCS_Transition_ClassB_gesteuert.png", phaseSrc: { IST: "18_ETCS_Balisen/ETCS_Transition_ClassB_gesteuert.png", NEUBAU: "18_ETCS_Balisen/ETCS_Transition_ClassB_gesteuert_N.png", RUECKBAU: "18_ETCS_Balisen/ETCS_Transition_ClassB_gesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        ETCS_ungesteuert: { type: "image", src: "18_ETCS_Balisen/ETCS_ungesteuert.png", phaseSrc: { IST: "18_ETCS_Balisen/ETCS_ungesteuert.png", NEUBAU: "18_ETCS_Balisen/ETCS_ungesteuert_N.png", RUECKBAU: "18_ETCS_Balisen/ETCS_ungesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },


    },
    "[19] GNT": {

        GNT_Balise_gesteuert: { type: "image", src: "19_GNT/GNT_Balise_gesteuert.png", phaseSrc: { IST: "19_GNT/GNT_Balise_gesteuert.png", NEUBAU: "19_GNT/GNT_Balise_gesteuert_N.png", RUECKBAU: "19_GNT/GNT_Balise_gesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        GNT_Balise_ungesteuert: { type: "image", src: "19_GNT/GNT_Balise_ungesteuert.png", phaseSrc: { IST: "19_GNT/GNT_Balise_ungesteuert.png", NEUBAU: "19_GNT/GNT_Balise_ungesteuert_N.png", RUECKBAU: "19_GNT/GNT_Balise_ungesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        GNT_DP_gesteuert: { type: "image", src: "19_GNT/GNT_DP_gesteuert.png", phaseSrc: { IST: "19_GNT/GNT_DP_gesteuert.png", NEUBAU: "19_GNT/GNT_DP_gesteuert_N.png", RUECKBAU: "19_GNT/GNT_DP_gesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        GNT_DP_gesteuert_links: { type: "image", src: "19_GNT/GNT_DP_gesteuert_links.png", phaseSrc: { IST: "19_GNT/GNT_DP_gesteuert_links.png", NEUBAU: "19_GNT/GNT_DP_gesteuert_links_N.png", RUECKBAU: "19_GNT/GNT_DP_gesteuert_links_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        GNT_DP_gesteuert_rechts: { type: "image", src: "19_GNT/GNT_DP_gesteuert_rechts.png", phaseSrc: { IST: "19_GNT/GNT_DP_gesteuert_rechts.png", NEUBAU: "19_GNT/GNT_DP_gesteuert_rechts_N.png", RUECKBAU: "19_GNT/GNT_DP_gesteuert_rechts_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        GNT_DP_ungesteuert: { type: "image", src: "19_GNT/GNT_DP_ungesteuert.png", phaseSrc: { IST: "19_GNT/GNT_DP_ungesteuert.png", NEUBAU: "19_GNT/GNT_DP_ungesteuert_N.png", RUECKBAU: "19_GNT/GNT_DP_ungesteuert_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        GNT_DP_ungesteuert_links: { type: "image", src: "19_GNT/GNT_DP_ungesteuert_links.png", phaseSrc: { IST: "19_GNT/GNT_DP_ungesteuert_links.png", NEUBAU: "19_GNT/GNT_DP_ungesteuert_links_N.png", RUECKBAU: "19_GNT/GNT_DP_ungesteuert_links_R.png" }, widthCM: 0.75, heightCM: 0.4 },

        GNT_DP_ungesteuert_rechts: { type: "image", src: "19_GNT/GNT_DP_ungesteuert_rechts.png", phaseSrc: { IST: "19_GNT/GNT_DP_ungesteuert_rechts.png", NEUBAU: "19_GNT/GNT_DP_ungesteuert_rechts_N.png", RUECKBAU: "19_GNT/GNT_DP_ungesteuert_rechts_R.png" }, widthCM: 0.75, heightCM: 0.4 },


    },
    "[20] BÜ Sicherung Strecke": {
        BU_VS: {
            type: "image",
            src: "20_BU/BU_VS.png",
            phaseSrc: {
                IST: "20_BU/BU_VS.png",
                NEUBAU: "20_BU/BU_VS_N.png",
                RUECKBAU: "20_BU/BU_VS_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.5,
        },
        BU_S: {
            type: "image",
            src: "20_BU/BU_S.png",
            phaseSrc: {
                IST: "20_BU/BU_S.png",
                NEUBAU: "20_BU/BU_S_N.png",
                RUECKBAU: "20_BU/BU_S_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.5,
        },
        BU_OS: {
            type: "image",
            src: "20_BU/BU_OS.png",
            phaseSrc: {
                IST: "20_BU/BU_OS.png",
                NEUBAU: "20_BU/BU_OS_N.png",
                RUECKBAU: "20_BU/BU_OS_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.5,
        },
        USig_BU_01_1: {
            type: "image",
            src: "20_BU/USig_BU_01_1.png",
            phaseSrc: {
                IST: "20_BU/USig_BU_01_1.png",
                NEUBAU: "20_BU/USig_BU_01_1_N.png",
                RUECKBAU: "20_BU/USig_BU_01_1_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
        USig_BU_01_2: {
            type: "image",
            src: "20_BU/USig_BU_01_2.png",
            phaseSrc: {
                IST: "20_BU/USig_BU_01_2.png",
                NEUBAU: "20_BU/USig_BU_01_2_N.png",
                RUECKBAU: "20_BU/USig_BU_01_2_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
        USig_vBwAbs_BU_01: {
            type: "image",
            src: "20_BU/USig_vBwAbs_BU_01.png",
            phaseSrc: {
                IST: "20_BU/USig_vBwAbs_BU_01.png",
                NEUBAU: "20_BU/USig_vBwAbs_BU_01_N.png",
                RUECKBAU: "20_BU/USig_vBwAbs_BU_01_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
        USig_Wdh_BU_01: {
            type: "image",
            src: "20_BU/USig_Wdh_BU_01.png",
            phaseSrc: {
                IST: "20_BU/USig_Wdh_BU_01.png",
                NEUBAU: "20_BU/USig_Wdh_BU_01_N.png",
                RUECKBAU: "20_BU/USig_Wdh_BU_01_R.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
    },
    "[21] BÜ Sicherung Kreuzungsplan": {

    },
    "[22] Bahnsteige": {
        platform_double: {
            type: "platform",
            widthCM: 3,
            heightCM: 0.3,
            gapCM: 0.05,
            doubleSided: true
        },
        platform_single: {
            type: "platform",
            widthCM: 3,
            heightCM: 0.3,
            gapCM: 0.05,
            doubleSided: false
        },
        platform_single_top: {           // NEU
            type: "platform",
            widthCM: 3,
            heightCM: 0.3,
            gapCM: 0.05,
            edgeSide: "top"                // Kante OBEN
        }
    },
    "[23] Überführungen": {
        Uberfuhrung: {
            type: "image",
            src: "23_Uberfuhrung/Uberfuhrung.png",
            phaseSrc: {
                IST: "23_Uberfuhrung/Uberfuhrung.png",
                NEUBAU: "23_Uberfuhrung/Uberfuhrung_N.png",
                RUECKBAU: "23_Uberfuhrung/Uberfuhrung_R.png",
            },
            widthCM: 1.25,
            heightCM: 0.2,
        },
    },
    "[24] Textfelder": {
        text_plain: {
            type: "text",
            variant: "plain",
            defaultText: "Text",
            widthCM: 1,
            heightCM: 0.4,
        },

        text_box_small: {
            type: "text",
            variant: "box",
            label: "Textfeld klein",
            defaultText: "Text",
            widthCM: 0.375,
            heightCM: 0.1,
        },

        text_box_medium: {
            type: "text",
            variant: "box",
            label: "Textfeld mittel",
            defaultText: "Text",
            widthCM: 1,
            heightCM: 0.5,
        },

        text_box_large: {
            type: "text",
            variant: "box",
            label: "Textfeld groß",
            defaultText: "Text",
            widthCM: 1.5,
            heightCM: 0.6,
        },

    },
    "[25] Beleuchtung/Ausstattung": {
        Beleuchtung1: {
            type: "image",
            src: "25_Beleuchtung/Beleuchtung1.png",
            phaseSrc: {
                IST: "25_Beleuchtung/Beleuchtung1.png",
                NEUBAU: "25_Beleuchtung/Beleuchtung1.png",
                RUECKBAU: "25_Beleuchtung/Beleuchtung1.png",
            },
            widthCM: 0.33,
            heightCM: 0.25,
        },
        Beleuchtung2: {
            type: "image",
            src: "25_Beleuchtung/Beleuchtung2.png",
            phaseSrc: {
                IST: "25_Beleuchtung/Beleuchtung2.png",
                NEUBAU: "25_Beleuchtung/Beleuchtung2.png",
                RUECKBAU: "25_Beleuchtung/Beleuchtung2.png",
            },
            widthCM: 0.3325,
            heightCM: 0.3,
        },
        Elektrant: {
            type: "image",
            src: "25_Beleuchtung/Elektrant.png",
            phaseSrc: {
                IST: "25_Beleuchtung/Elektrant.png",
                NEUBAU: "25_Beleuchtung/Elektrant.png",
                RUECKBAU: "25_Beleuchtung/Elektrant.png",
            },
            widthCM: 0.1666,
            heightCM: 0.3,
        },
        Wasserstand: {
            type: "image",
            src: "25_Beleuchtung/Wasserstand.png",
            phaseSrc: {
                IST: "25_Beleuchtung/Wasserstand.png",
                NEUBAU: "25_Beleuchtung/Wasserstand.png",
                RUECKBAU: "25_Beleuchtung/Wasserstand.png",
            },
            widthCM: 0.166666,
            heightCM: 0.3,
        },
        Zugvorheizanlage: {
            type: "image",
            src: "25_Beleuchtung/Zugvorheizanlage.png",
            phaseSrc: {
                IST: "25_Beleuchtung/Zugvorheizanlage.png",
                NEUBAU: "25_Beleuchtung/Zugvorheizanlage.png",
                RUECKBAU: "25_Beleuchtung/Zugvorheizanlage.png",
            },
            widthCM: 0.16666,
            heightCM: 0.3,
        },
        WC: {
            type: "image",
            src: "25_Beleuchtung/WC.png",
            phaseSrc: {
                IST: "25_Beleuchtung/WC.png",
                NEUBAU: "25_Beleuchtung/WC.png",
                RUECKBAU: "25_Beleuchtung/WC.png",
            },
            widthCM: 0.5,
            heightCM: 0.2,
        },
    },

};