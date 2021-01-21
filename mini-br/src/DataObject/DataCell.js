class DataCell {

  data = null;
  isWalkable = false;
  isObstacle = false;
  isLoot = false;
  isLootWeapon = false;
  isLootArmor = false;
  isPlayer = false;

  constructor(data) {
    this.data = data;
    this.initData();
  }

  initData() {
    this.isObstacle = this.data.isObstacle != null ? this.data.isObstacle : false;
    this.isWalkable = this.data.isWalkable != null ? this.data.isWalkable : false;
    this.isLoot = this.data.isLoot != null ? this.data.isLoot : false;
    this.isLootWeapon = this.data.isLootWeapon != null ? this.data.isLootWeapon : false;
    this.isLootArmor = this.data.isLootArmor != null ? this.data.isLootArmor : false;
    this.isPlayer = this.data.isPlayer != null ? this.data.isPlayer : false;
  }

  updateData() {
    this.data = {
      isObstacle: this.isObstacle,
      isWalkable: this.isWalkable,
      isLoot: this.isLoot,
      isLootWeapon: this.isLootWeapon,
      isLootArmor: this.isLootArmor,
      isPlayer: this.isPlayer
    }
  }

  getData() {
    this.updateData();
    return this.data;
  }

}

export default DataCell;
