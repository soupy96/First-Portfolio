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
                            id: 'MichelinMan_Environment_thumb',
                            type: 'image',
                            rect: ['0', '618px', '165px', '227px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"MichelinMan_Environment_thumb.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['16px', '-204px', '131px', '193px', 'auto', 'auto'],
                            text: "Become more eco-friendly with our recycled tires!<br><br>Now only",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['17px', '240px', '129px', '154px', 'auto', 'auto'],
                            opacity: '0',
                            text: "89",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [111, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['195px', '339px', '64px', '40px', 'auto', 'auto'],
                            text: "99",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['-51px', '239px', '64px', '40px', 'auto', 'auto'],
                            text: "$",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '160px', '600px', 'auto', 'auto'],
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
                            "eid6",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${Text3}",
                            '195px',
                            '125px'
                        ],
                        [
                            "eid12",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${Text3Copy}",
                            '-51px',
                            '9px'
                        ],
                        [
                            "eid4",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Text}",
                            '-204px',
                            '6px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${MichelinMan_Environment_thumb}",
                            '618px',
                            '378px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("160x600_edgeActions.js");
})("EDGE-2331201835");
