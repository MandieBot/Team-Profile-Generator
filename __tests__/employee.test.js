const Employee = require("../lib/employee");

describe("Add an employee", () => {
  const employee = new Employee("Mandie", 99, "mandie@gmail.com");

  it("Test employee name", () => {
    expect(employee.name).toBe("Mandie");
  });

  it("Test employee id", () => {
    expect(employee.id).toEqual(expect.any(Number));
  });
  it("Test employee email", () => {
    expect(employee.email).toBe("mandie@gmail.com");
  });
  it("Test getName function", () => {
    expect(employee.getName()).toBe("Mandie");
  });
  it("Test getId function", () => {
    expect(employee.getId()).toEqual(expect.any(Number));
  });
  it("Test getEmail function", () => {
    expect(employee.getEmail()).toBe("mandie@gmail.com");
  });
  it("Test getRole function", () => {
    expect(employee.getRole()).toBe("Employee");
  });
});
