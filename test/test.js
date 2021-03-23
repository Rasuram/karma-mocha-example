describe("check", function() {

    it("com.test", function() {
        var trimmed = greet('tri');

        expect(trimmed).toBe("tri");
        expect(trimmed).not.toBe(null);
    });

});