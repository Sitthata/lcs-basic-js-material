class Droid {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.battery = 100;
  }

  // This {name} droid is performing {taskName} if have battery
  // Battery is running out if not have battery
  // battery -= 10
  performTask(taskName) {
    if (this.battery > 0) {
      console.log(`This ${this.name} droid is performing ${taskName}`);
      this.battery -= 10;
    } else {
      console.log(`Battery is running out if not have battery`);
    }
  }

  logBatteryLevel() {}

  chargeBattery(charge) {}
}

const droid1 = new Droid(1, "First-JR");
const droid2 = new Droid(2, "Neau-JR");
console.log(droid1);
console.log(droid2);

for (let i = 0; i < 10; i++) {
    droid1.performTask("go shopping");
}
droid2.performTask("go doing laundry")
console.log(droid2.battery) // 90
console.log(droid1.battery) // 0
