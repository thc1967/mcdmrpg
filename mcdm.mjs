/**
 * The MCDM RPG gaem system for Foundry Virtual Tabletop
 * A system for playing the MCDM RPG.
 * Author: thc1967
 * Software License: MIT
 * Repository: https://github.com/thc1967/mcdmrpg
 * Issue Tracker: https://github.com/thc1967/mcdmrpg/issues
 */

import { SYSTEM } from './module/config.mjs';
globalThis.SYSTEM = SYSTEM;

import * as apps from './module/apps/_module.mjs';
import * as models from './module/data/_module.mjs';

Hooks.once('init', async() => {
    console.log('MCDMRPG | Initializing the MCDMRPG System.');

    CONFIG.MCDMRPG = SYSTEM;

    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet(SYSTEM.id, apps.HeroSheet, {
        types: ['hero'],
        label: 'SHEETS.HeroSheet',
        makeDefault: true,
    });

    CONFIG.Actor.dataModels = {
        hero: models.HeroModel,
        npc: models.NpcModel
    };

    console.log('MCDMRPG | Initialization complete.');
});