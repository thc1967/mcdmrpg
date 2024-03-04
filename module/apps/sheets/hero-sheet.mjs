import { SYSTEM } from '../../config.mjs';

export default class HeroSheet extends ActorSheet {

    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: 800,
            height: 750,
    //         //classes: [SYSTEM.id, 'sheet', 'actor', 'hero'],
            template: `systems/${SYSTEM.id}/templates/sheets/hero-sheet.hbs`,
            resizeable: false
        });
    }
}