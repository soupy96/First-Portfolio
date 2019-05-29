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
                            id: 'michelin-tire-i1',
                            type: 'image',
                            rect: ['-50px', '80px', '300px', '169px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"michelin-tire-i1.png",'0px','0px']
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['185px', '145px', '56px', '40px', 'auto', 'auto'],
                            text: "$",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [21, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['266px', '100px', '35px', '32px', 'auto', 'auto'],
                            text: "99",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [21, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['3px', '6px', '285px', '74px', 'auto', 'auto'],
                            text: "Michelin also covers Motorcycle tires. Come in to get yours today!",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [21, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['169px', '61px', '143px', '55px', 'auto', 'auto'],
                            text: "ONLY",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['186px', '100px', '98px', '90px', 'auto', 'auto'],
                            text: "99",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [68, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${Text2}",
                            '169px',
                            '169px'
                        ],
                        [
                            "eid16",
                            "top",
                            1750,
                            1250,
                            "linear",
                            "${Text7}",
                            '-100px',
                            '180px'
                        ],
                        [
                            "eid20",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${Text7}",
                            '180px',
                            '100px'
                        ],
                        [
                            "eid24",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${Text7}",
                            '100px',
                            '180px'
                        ],
                        [
                            "eid28",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${Text7}",
                            '180px',
                            '130px'
                        ],
                        [
                            "eid9",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${Text7}",
                            '266px',
                            '266px'
                        ],
                        [
                            "eid6",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${Text6}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid15",
                            "top",
                            1750,
                            1250,
                            "linear",
                            "${Text6}",
                            '-55px',
                            '225px'
                        ],
                        [
                            "eid19",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${Text6}",
                            '225px',
                            '145px'
                        ],
                        [
                            "eid23",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${Text6}",
                            '145px',
                            '225px'
                        ],
                        [
                            "eid27",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${Text6}",
                            '225px',
                            '175px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${michelin-tire-i1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${Text4}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid17",
                            "top",
                            1750,
                            1250,
                            "linear",
                            "${Text2}",
                            '-139px',
                            '141px'
                        ],
                        [
                            "eid21",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${Text2}",
                            '141px',
                            '61px'
                        ],
                        [
                            "eid25",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${Text2}",
                            '61px',
                            '141px'
                        ],
                        [
                            "eid29",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${Text2}",
                            '141px',
                            '91px'
                        ],
                        [
                            "eid4",
                            "left",
                            750,
                            1000,
                            "linear",
                            "${Text}",
                            '-292px',
                            '34px'
                        ],
                        [
                            "eid5",
                            "left",
                            1750,
                            500,
                            "linear",
                            "${Text}",
                            '34px',
                            '3px'
                        ],
                        [
                            "eid14",
                            "top",
                            1750,
                            1250,
                            "linear",
                            "${Text4}",
                            '-100px',
                            '180px'
                        ],
                        [
                            "eid18",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${Text4}",
                            '180px',
                            '100px'
                        ],
                        [
                            "eid22",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${Text4}",
                            '100px',
                            '180px'
                        ],
                        [
                            "eid26",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${Text4}",
                            '180px',
                            '130px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("300x250_edgeActions.js");
})("EDGE-2331189586");
