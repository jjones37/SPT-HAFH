"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = marksmanChanges;
function marksmanChanges(bots) {
    // saveToFile(bots.types.marksman.difficulty, "marksmanDifficulty.json");
    for (const diff in bots.types.marksman.difficulty) {
        bots.types.marksman.difficulty[diff].Core = {
            ...bots.types.marksman.difficulty[diff].Core,
            VisibleAngle: 300,
            VisibleDistance: 245,
            ScatteringPerMeter: 0.1,
            HearingSense: 2.85,
        };
        bots.types.marksman.difficulty[diff].Mind = {
            ...bots.types.marksman.difficulty[diff].Mind,
            BULLET_FEEL_DIST: 360,
            CHANCE_FUCK_YOU_ON_CONTACT_100: 10,
        };
        bots.types.marksman.difficulty[diff].Hearing = {
            ...bots.types.marksman.difficulty[diff].Hearing,
            CHANCE_TO_HEAR_SIMPLE_SOUND_0_1: 0.7,
            DISPERSION_COEF: 3.6,
            CLOSE_DIST: 10,
            FAR_DIST: 30,
        };
    }
    // saveToFile(bots.types.marksman.difficulty, "marksmanDifficulty2.json");
}
//# sourceMappingURL=marksmanChanges.js.map