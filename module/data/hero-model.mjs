import ActorModel from './actor-model.mjs';

//const { SchemaField, NumberField, StringField, BooleanField, ArrayField, IntegerSortField } = foundry.data.fields;

/**
 * System data definition for Heroes (characters)
 * 
 * @property {object} attributes.hp
 * @property {number} attributes.hp.value                 Current hit points.
 * @property {number} attributes.hp.max                   Override for maximum HP.
 * @property {number} attributes.hp.temp                  Temporary HP applied on top of value.
 * @property {number} attributes.hp.tempmax               Temporary change to the maximum HP.
 * 
 * @property {object} combat
 * @property {number} combat.defaultInit                Default initiative value.
 * @property {number} combat.turnsPerRound              Number of turns per round the actor takes.
 * @property {number} combat.reactPerRound              Number of reactions per round the actor can take.
 */
export default class HeroModel extends ActorModel {

    /** @inheritdoc */
    static _systemType = "hero";

    /** @inheritdoc */
    static defineSchema() {
        return super.defineSchema();
    }

    /** @inheritdoc */
    prepareBaseData() {
        // Combat & Initiative
        this.combat.defaultInit = 20;
        this.combat.reactPerRound = 1;
    }
};
