describe("Frontmatter plugin", function() {

  it("should retrieve frontmatter from file and pass to liquid", function(done) {
    var uid = triggerBuild({
      files: "spec/support/book/content/frontmatter.md",
      enabledFormats: ["html"],
      finish: function() {
        expect(buildPath(uid, "html/frontmatter.html")).toHaveContent("Frontmatter test is working");
        done();
      }
    });
  });

  it("should use layout specified in frontmatter", function(done) {
    var uid = triggerBuild({
      files: "spec/support/book/content/frontmatter.md",
      enabledFormats: ["html"],
      finish: function() {
        expect(buildPath(uid, "html/frontmatter.html")).toHaveContent("Frontmatter layout");
        done();
      }
    });
  });

});
