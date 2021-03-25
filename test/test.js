describe("inspection", function() {

    it("Form icon should be visible", function() {
        var trimmed = isIconVisible('tri');

        expect(trimmed).toBe(true);
        expect(trimmed).not.toBe(null);
    });

});