/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'michelin',
                            type: 'image',
                            rect: ['0px', '422px', '119px', '176px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"michelin.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['6px', '10px', '108px', '201px', 'auto', 'auto'],
                            text: "Join our eco-friendly group today for a better future.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['6px', '295px', '108px', '201px', 'auto', 'auto'],
                            text: "APPLY TODAY",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            transform: [[],[],[],['10.51','10.51']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '120px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid7",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${Text2}",
                            '10.51',
                            '1'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${Text2}",
                            '10.51',
                            '1'
                        ],
                        [
                            "eid10",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${michelin}",
                            '140px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("120x600_edgeActions.js");
})("EDGE-2331171835");
