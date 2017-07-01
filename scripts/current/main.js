var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var popManager = require('pop.manager');

module.exports.loop = function () {

    popManager.run();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}
