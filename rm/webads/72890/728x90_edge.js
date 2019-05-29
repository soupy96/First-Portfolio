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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-8px', '73px', '746px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'M-bibendum-the-michelin-man-7-1_copy_copy',
                            type: 'image',
                            rect: ['617px', '4px', '104px', '82px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'imgs/M-bibendum-the-michelin-man-7-1%20copy%20copy.png','0px','0px'],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: 'footerCar',
                            type: 'image',
                            rect: ['-180px', '2px', '133px', '63px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'imgs/footerCar.png','0px','0px']
                        },
                        {
                            id: 'michelin_sport_competition',
                            type: 'image',
                            rect: ['0px', '73px', '95px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'imgs/michelin_sport_competition.jpg','0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['177px', '11px', '409px', '45px', 'auto', 'auto'],
                            text: "Get a free set of tires when you buy a 2014 Camaro",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${michelin_sport_competition}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${footerCar}",
                            '-180px',
                            '10px'
                        ],
                        [
                            "eid16",
                            "top",
                            750,
                            750,
                            "linear",
                            "${Text}",
                            '-57px',
                            '11px'
                        ],
                        [
                            "eid12",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${michelin_sport_competition}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid9",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${michelin_sport_competition}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid3",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${footerCar}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid11",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${michelin_sport_competition}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${footerCar}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid10",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${michelin_sport_competition}",
                            '95px',
                            '95px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            1012,
                            "linear",
                            "${M-bibendum-the-michelin-man-7-1_copy_copy}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("728x90_edgeActions.js");
})("EDGE-2331087588");
