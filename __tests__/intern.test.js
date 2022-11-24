const Intern = require("../lib/intern");

describe("Test intern", () => {
  const intern = new Intern("Mandie", 99, "mandie@gmail.com", "University");

  it("Test intern name", () => {
    expect(intern.name).toBe("Mandie");
  });

  it("Test intern id", () => {
    expect(intern.id).toEqual(expect.any(Number));
  });
  it("Test intern email", () => {
    expect(intern.email).toBe("mandie@gmail.com");
  });
  it("Test getName function", () => {
    expect(intern.getName()).toBe("Mandie");
  });
  it("Test getId function", () => {
    expect(intern.getId()).toEqual(expect.any(Number));
  });
  it("Test getEmail function", () => {
    expect(intern.getEmail()).toBe("mandie@gmail.com");
  });
  it("Test intern school", () => {
    expect(intern.school).toBe("University");
  });
  it("Test getRole function", () => {
    expect(intern.getRole()).toBe("Intern");
  });
});
