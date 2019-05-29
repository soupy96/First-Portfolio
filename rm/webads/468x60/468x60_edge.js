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
                            id: 'DEFENDER_Profile_8ijpgCopy3',
                            type: 'image',
                            rect: ['173px', '3px', '72px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"DEFENDER_Profile_8i.jpg.png",'0px','0px']
                        },
                        {
                            id: 'DEFENDER_Profile_8ijpgCopy2',
                            type: 'image',
                            rect: ['114px', '3px', '72px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"DEFENDER_Profile_8i.jpg.png",'0px','0px']
                        },
                        {
                            id: 'DEFENDER_Profile_8ijpgCopy',
                            type: 'image',
                            rect: ['55px', '3px', '72px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"DEFENDER_Profile_8i.jpg.png",'0px','0px']
                        },
                        {
                            id: 'DEFENDER_Profile_8ijpg',
                            type: 'image',
                            rect: ['-4px', '3px', '72px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"DEFENDER_Profile_8i.jpg.png",'0px','0px']
                        },
                        {
                            id: 'michelin-tires',
                            type: 'image',
                            rect: ['400px', '-10px', '61px', '61px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"michelin-tires.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['245px', '6px', '149px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Come in to get a set of tires half off.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['251px', '48px', '142px', '10px', 'auto', 'auto'],
                            opacity: '0',
                            text: "*LIMITED TME ONLY*",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [7, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '468px', '60px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${DEFENDER_Profile_8ijpgCopy}",
                            '-70px',
                            '55px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            500,
                            "linear",
                            "${michelin-tires}",
                            '-70px',
                            '0px'
                        ],
                        [
                            "eid3",
                            "top",
                            500,
                            250,
                            "linear",
                            "${michelin-tires}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid4",
                            "top",
                            750,
                            250,
                            "linear",
                            "${michelin-tires}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${DEFENDER_Profile_8ijpg}",
                            '-70px',
                            '-4px'
                        ],
                        [
                            "eid38",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${DEFENDER_Profile_8ijpgCopy3}",
                            '-70px',
                            '173px'
                        ],
                        [
                            "eid36",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${DEFENDER_Profile_8ijpgCopy2}",
                            '-70px',
                            '114px'
                        ],
                        [
                            "eid42",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("468x60_edgeActions.js");
})("EDGE-2331118586");
