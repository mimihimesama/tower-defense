const towerattacks = {};    //타워의 공격 정보
const towers = {};  //타워의 정보
const refundtowers = {};

export const createTowersystem = (uuid) => {
    towerattacks[uuid] = [];
    towers[uuid] = [];
    refundtowers[uuid] = [];
};

export const getTower = (uuid) => {
    return towers[uuid];
};

export const clearTower = (uuid) => {
    towers[uuid] = [];
    towerattacks[uuid] = [];
    refundtowers[uuid] = [];
}

export const setTower = (uuid, id,level ,position, timestamp) => {
    return towers[uuid].push({id, level,position, timestamp})
};

export const setAttackTower = (uuid, id, timestamp) => {
    return towerattacks[uuid].push({id, timestamp});
};

export const setRefundTower = (uuid, id, timestamp) => {
    return refundtowers[uuid].push({id, timestamp});
}

export const setTowerUpgrade = (uuid, id, Level) =>{
    const tower = towers[uuid].find((data) => data.id === id)
    tower.level = Level;
    console.log("tower 정보 : ", tower, "tower Level : ", tower.level);
};