const { SchemaField, NumberField, StringField, BooleanField, ArrayField, IntegerSortField } = foundry.data.fields;
/**
 * System data definition for Actors
 * 
 * @property {object} attributes
 * @property {object} attributes.health
 * @property {number} attributes.health.value           Current hit points.
 * @property {number} attributes.health.max             Override for maximum Health.
 * @property {number} attributes.health.temp            Temporary Health applied on top of value.
 * @property {number} attributes.health.tempmax         Temporary change to the maximum Health.
 * 
 * @property {object} combat
 * @property {number} combat.defaultInit                Default initiative value.
 * @property {number} combat.turnsPerRound              Number of turns per round the actor takes.
 * @property {number} combat.reactPerRound              Number of reactions per round the actor can take.
 */
export default class ActorModel extends foundry.abstract.TypeDataModel {

    /** @inheritdoc */
    static defineSchema() {
        const schema = {};

        schema.attributes = new SchemaField({
            health: new SchemaField({
                value: new NumberField({nullable: false, integer: true, min: 0, initial: 0, label: "MCDMRPG.HealthCurrent"}),
                max: new NumberField({nullable: true, integer: true, min: 0, initial: null, label: "MCDMRGP.HealthMax"}),
                temp: new NumberField({integer: true, initial: 0, min: 0, label: "MCDMRPG.HealthTemp"}),
                tempmax: new NumberField({integer: true, initial: 0, label: "MCDMRPG.HealthTempMax"})
            }, {label: "MCDMRPG.Health"})
        });

        schema.combat = new SchemaField({
            defaultInit: new NumberField({integer: true, initial: 0, label: "MCDMRPG.CombatDefaultInit"}),
            turnsPerRound: new NumberField({integer: true, initial: 1, label: "MCDMRPG.CombatTurnsPerRound"}),
            reactPerRound: new NumberField({integer: true, initial: 0, label: "MCDMRPG.CombatReactPerRound"})
        }, {label: "MCDMRPG.Combat"})

        return schema;
    }
};
