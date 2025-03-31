function createEntity(name, lastName, hairColor) {
    const obj = {
        name,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(obj));
}


createEntity('George', 'Jones', 'Brown');