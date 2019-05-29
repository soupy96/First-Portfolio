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
                            id: 'silver',
                            type: 'image',
                            rect: ['300px', '0', '180px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'img/silver.png','0px','0px']
                        },
                        {
                            id: 'Green',
                            type: 'image',
                            rect: ['200px', '0', '180px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'img/Green.png','0px','0px']
                        },
                        {
                            id: 'black',
                            type: 'image',
                            rect: ['100px', '0', '180px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'img/black.png','0px','0px']
                        },
                        {
                            id: 'white',
                            type: 'image',
                            rect: ['0', '0', '180px', '89px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",'img/white.png','0px','0px']
                        },
                        {
                            id: 'textbox',
                            symbolName: 'textbox',
                            type: 'rect',
                            rect: ['396px', '-82px', '270', '250', 'auto', 'auto'],
                            transform: [[],[],[],['0.44495','0.44495']]
                        },
                        {
                            id: 'logo',
                            symbolName: 'logo',
                            type: 'rect',
                            rect: ['644px', '19px', '44', '34', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['637px', '61px', '44px', '15px', 'auto', 'auto'],
                            opacity: '0',
                            text: "MITSUBISHI<br>MOTORS",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [7, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '728px', '90px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid149",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${logo}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid148",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${logo}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Green}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${silver}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${textbox}",
                            '0.44495',
                            '0.44495'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${black}",
                            '0px',
                            '100px'
                        ],
                        [
                            "eid26",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${textbox}",
                            '396px',
                            '396px'
                        ],
                        [
                            "eid25",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${textbox}",
                            '0.44495',
                            '0.44495'
                        ],
                        [
                            "eid29",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${textbox}",
                            '-82px',
                            '-82px'
                        ],
                        [
                            "eid152",
                            "opacity",
                            2000,
                            511,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "textbox": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'emissions',
                            type: 'image',
                            rect: ['0px', '0px', '270px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/Mitsubishi_iMiEV_Vehicle_Infographic_4_2_3_1.png', '0px', '0px']
                        },
                        {
                            id: 'money',
                            type: 'image',
                            rect: ['0px', '0px', '270px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/MITDI21369_2014_iMiEV_price_tout_E_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '270px', '250px', 'auto', 'auto'],
                            id: 'eightyear',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/8yrLithIonBatteryWarranty_E_3_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '270px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${emissions}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            4250,
                            250,
                            "linear",
                            "${emissions}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${eightyear}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${eightyear}",
                            '1',
                            '0'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${money}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${money}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "logo": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '14px', '14px', 'auto', 'auto'],
                            transform: [[], [], ['-35'], [], ['0%', '0%']],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['24px', '20px', '14px', '14px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['100%', '100%']],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['14px', '20px', '14px', '14px', 'auto', 'auto'],
                            transform: [[], ['-120'], [], [], ['0%', '0%']],
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '44px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "originY",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid102",
                            "skewX",
                            0,
                            1000,
                            "linear",
                            "${RectangleCopy}",
                            '0deg',
                            '35deg'
                        ],
                        [
                            "eid101",
                            "skewX",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0deg',
                            '-35deg'
                        ],
                        [
                            "eid53",
                            "originY",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid84",
                            "originX",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${RectangleCopy}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid141",
                            "originX",
                            0,
                            1000,
                            "linear",
                            "${RectangleCopy3}",
                            '100%',
                            '0%'
                        ],
                        [
                            "eid139",
                            "skewX",
                            0,
                            1000,
                            "linear",
                            "${RectangleCopy3}",
                            '0deg',
                            '35deg'
                        ],
                        [
                            "eid147",
                            "rotateZ",
                            1000,
                            1000,
                            "linear",
                            "${RectangleCopy3}",
                            '0deg',
                            '-120deg'
                        ],
                        [
                            "eid142",
                            "originY",
                            0,
                            1000,
                            "linear",
                            "${RectangleCopy3}",
                            '100%',
                            '0%'
                        ],
                        [
                            "eid137",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${RectangleCopy3}",
                            '0px',
                            '14px'
                        ],
                        [
                            "eid54",
                            "originX",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid62",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid61",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '20px',
                            '20px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("leaderboard_edgeActions.js");
})("EDGE-1815831719");
