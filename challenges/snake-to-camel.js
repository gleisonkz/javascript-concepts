function snakeToCamelCaseObject(obj) {
  const snakeToCamelCase = (key) => {
    return key.replace(/_([a-z])/g, (m) => m[1].toUpperCase());
  };

  for (const propertyName in obj) {
    const value = obj[propertyName];
    const type = value?.constructor?.name;

    type == "Array" && value.forEach((prop) => snakeToCamelCaseObject(prop));
    type == "Object" && snakeToCamelCaseObject(value);

    const newPropertyName = snakeToCamelCase(propertyName);
    const originalValue = obj[propertyName];
    delete obj[propertyName];
    obj[newPropertyName] = originalValue;
  }

  return obj;
}

const objInSnakeCase = {
  pessoa_id: 1,
  is_bot: false,
  first_name: "C3P0",
  last_name: "Raw",
  principal_address: {
    id: "5",
    is_state: "2",
    principal_street: "1",
  },
  contacts: [{ id: 99, phone_number: "1236" }],
};

const objInCamelCase = snakeToCamelCaseObject(objInSnakeCase);
console.log(objInCamelCase);
console.log(objInCamelCase.principalAddress);
console.log(objInCamelCase.contacts[0].id);
