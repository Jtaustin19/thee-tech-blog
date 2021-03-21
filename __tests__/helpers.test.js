const { format_date, format_plural } = require("../utils/helpers");

test("format_date() returns clear date string", () => {
    const date = new Date("2021-03-17 13:43:24");

    expect(format_date(date)).toBe("3/17/2021");
});

test("format_plural() returns string(s) correctly pluralized", () => {

    expect(format_plural(1, "Tiger")).toBe("Tiger");
    expect(format_plural(3, "Lion")).toBe("Lions");
});