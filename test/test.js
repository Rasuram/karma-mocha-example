describe("check", function() {

    it("com.test", function() {
        var trimmed = isIconVisible('tri');

        expect(trimmed).toBe(true);
        expect(trimmed).not.toBe(null);
    });

});