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
                            id: 'dd571d4440463872011e7cc643fa2cae2',
                            type: 'image',
                            rect: ['-136px', '102px', '141px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dd571d4440463872011e7cc643fa2cae2.png",'0px','0px']
                        },
                        {
                            id: '_2013_ford_focus_st',
                            type: 'image',
                            rect: ['348px', '108px', '128px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2013_ford_focus_st.png",'0px','0px']
                        },
                        {
                            id: 'mercedes_rover_used_car_finance',
                            type: 'image',
                            rect: ['148px', '106px', '156px', '86px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mercedes_rover_used_car_finance.png",'0px','0px']
                        },
                        {
                            id: 'camaro-png',
                            type: 'image',
                            rect: ['41px', '128px', '119px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"camaro-png.png",'0px','0px']
                        },
                        {
                            id: 'michelin-tires-logo',
                            type: 'image',
                            rect: ['10px', '293px', '313px', '98px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"michelin-tires-logo.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['10px', '8px', '312px', '77px', 'auto', 'auto'],
                            opacity: '0',
                            text: "FREE TIRES WITH SELECT MODELS!!!",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['28px', '88px', '279px', '32px', 'auto', 'auto'],
                            opacity: '0',
                            text: "*LIMITED TIME ONLY!!!*",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '336px', '280px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6750,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid14",
                            "left",
                            3500,
                            1250,
                            "linear",
                            "${mercedes_rover_used_car_finance}",
                            '-172px',
                            '148px'
                        ],
                        [
                            "eid12",
                            "left",
                            2500,
                            1250,
                            "linear",
                            "${camaro-png}",
                            '351px',
                            '41px'
                        ],
                        [
                            "eid10",
                            "left",
                            1750,
                            1000,
                            "linear",
                            "${dd571d4440463872011e7cc643fa2cae2}",
                            '-136px',
                            '204px'
                        ],
                        [
                            "eid8",
                            "left",
                            1000,
                            1018,
                            "linear",
                            "${_2013_ford_focus_st}",
                            '348px',
                            '-2px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${michelin-tires-logo}",
                            '293px',
                            '183px'
                        ],
                        [
                            "eid6",
                            "opacity",
                            500,
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("336x280_edgeActions.js");
})("EDGE-2331155086");
