const Engineer = require("../lib/engineer");

describe("Test engineer", () => {
  const engineer = new Engineer("Mandie", 99, "mandie@gmail.com", "mandiebot");

  it("Test engineer name", () => {
    expect(engineer.name).toBe("Mandie");
  });

  it("Test engineer id", () => {
    expect(engineer.id).toEqual(expect.any(Number));
  });
  it("Test engineer email", () => {
    expect(engineer.email).toBe("mandie@gmail.com");
  });
  it("Test getName function", () => {
    expect(engineer.getName()).toBe("Mandie");
  });
  it("Test getId function", () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
  });
  it("Test getEmail function", () => {
    expect(engineer.getEmail()).toBe("mandie@gmail.com");
  });
  it("Test engineer github", () => {
    expect(engineer.github).toBe("mandiebot");
  });
  it("Test getRole function", () => {
    expect(engineer.getRole()).toBe("Engineer");
  });
});
