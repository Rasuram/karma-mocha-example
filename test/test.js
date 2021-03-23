describe("CommonUtil", function() {

    it("trim testing ", function() {
        var trimmed = greet('tri');

        expect(trimmed).toBe("tri");
        expect(trimmed).not.toBe(null);
    });

});