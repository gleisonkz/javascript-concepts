{
  function toObjet(key, value) {
    return {
      [key + "ID"]: value,
    };
  }

  const obj = toObjet("name", "Jow");
  obj;
}
