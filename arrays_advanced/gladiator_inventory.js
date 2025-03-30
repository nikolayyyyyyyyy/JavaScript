function solve(input) {
    const inventory = input[0].split(" ");
    const commands = input.splice(1);

    commands.forEach(c => {
        const command = c.split(" ")[0];
        let equipment = c.split(" ")[1];
        switch (command) {
            case "Buy":
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case "Trash":
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1);
                }
                break;
            case "Repair":
                if (inventory.includes(equipment)) {
                    inventory.push(inventory.splice(inventory.indexOf(equipment), 1)[0]);
                }
                break;
            case "Upgrade":
                const equip = equipment.split("-")[0];
                const upgrade = equipment.split("-")[1];
                if (inventory.includes(equip)) {
                    inventory.splice(inventory.indexOf(equip) + 1, 0, equip.concat(":").concat(upgrade));
                }
                break;
        }
    });

    console.log(inventory.join(" "));
}


solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);