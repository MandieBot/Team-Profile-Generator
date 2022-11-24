const Manager = require("../lib/manager");

describe("Test manager", () => {
  const manager = new Manager("Mandie", 99, "mandie@gmail.com", 200);

  it("Test manager name", () => {
    expect(manager.name).toBe("Mandie");
  });

  it("Test manager id", () => {
    expect(manager.id).toEqual(expect.any(Number));
  });
  it("Test manager email", () => {
    expect(manager.email).toBe("mandie@gmail.com");
  });
  it("Test getName function", () => {
    expect(manager.getName()).toBe("Mandie");
  });
  it("Test getId function", () => {
    expect(manager.getId()).toEqual(expect.any(Number));
  });
  it("Test getEmail function", () => {
    expect(manager.getEmail()).toBe("mandie@gmail.com");
  });
  it("Test getOfficeNumber", () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  });
  it("Test getRole function", () => {
    expect(manager.getRole()).toBe("Manager");
  });
  
});
