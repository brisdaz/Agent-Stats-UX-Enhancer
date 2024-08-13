// ==UserScript==
// @name         Add ToolTips
// @namespace    http://tampermonkey.net/
// @version      2024-08-13
// @description  Add Details tooltips to header of
// @author       brisdaz
// @match        https://www.agent-stats.com/groups.php?group=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=agent-stats.com
// @grant        none
// @sandbox      DOM
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.type = 'text/css';

    style.innerHTML = ".scrollable tr:hover { background-color: #171717}";

    document.getElementsByTagName('head')[0].appendChild(style);


    var map=[['explorer','Unique Portals Visited'],['seer','Seer Points'],['recon','OPR Agreements'],['scout','Portal Scans Uploaded'],['scout_controller','Uniques Scout Controlled'],['builder','Resonators Deployed'],['connector','Links Created'],['mind-controller','Control Fields Created'],['illuminator','Mind Units Captured'],['recharger','XM Recharged'],['liberator','Portals Captured'],['pioneer','Unique Portals Captured'],['engineer','Mods Deployed'],['hacker','Hacks'],['maverick','Drone Hacks'],['translator','Glyph Hack Points'],['sojourner','Longest Sojourner Streak'],['epoch','Completed Hackstreaks'],['purifier','Resonators Destroyed'],['reclaimer','Machina Portals Reclaimed'],['trekker','Distance Walked'],['specops','Unique Missions Completed'],['missionday','Mission Day(s) Attended'],['nl-1331-meetups','NL-1331 Meetup(s) Attended'],['recruiter','Agents Recruited'],['recursions','Recursions'],['prime_challenge','Prime Challenges'],['stealth_ops','Stealth Ops Missions'],['urban_ops','Urban Ops Missions'],['opr_live','OPR Live Events'],['ocf','Clear Fields Events'],['intel_ops','Intel Ops Missions'],['ifs','First Saturday Events'],['second_sunday','Second Sunday Events'],['operation_chronos','Operation Chronos Points'],['cryptic_memories_op','Cryptic Memories Global Op Points']];
    var myA = document.getElementsByTagName('a');

    for (var i = 0; i < myA.length; i++) {
        for (var j = 0; j < map.length; j++) {
            if (myA[i].text == map[j][0]) {
                myA[i].title = map[j][1];
            }
        }
    }
})();