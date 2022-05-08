import {Package} from "./package";

describe("Package.calculatePremium", () => {
    test("normal", () => {
        const premium = Package.calculatePremium("NotExistentCountry", 30);
        expect(premium).toBe("0");
    });

    test("normal", () => {
        const premium = Package.calculatePremium("Hong Kong", 30);
        expect(premium).toBe("300HKD");
    });
});