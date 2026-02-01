import { expect, test, describe } from "bun:test";
import { getManifest, validateAsset, formatName } from "../src/assets";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";

describe("Asset Management Library - Phase 2", () => {
    const testBase = join(import.meta.dir, "tmp_test_base");

    test("validateAsset - should validate correct schema", () => {
        const valid = {
            id: "test.pdf",
            filename: "test.pdf",
            name: "Test",
            extension: "pdf",
            category: "lib",
            sizeBytes: 100,
            lastModified: Date.now(),
            path: "/path/to/test.pdf"
        };
        expect(validateAsset(valid)).toBe(true);
    });

    test("validateAsset - should reject invalid schema", () => {
        expect(validateAsset({})).toBe(false);
        expect(validateAsset({ id: 123 })).toBe(false);
        expect(validateAsset({ extension: "txt" })).toBe(false);
    });

    test("getManifest - should handle multiple directories and metadata", () => {
        // Setup
        mkdirSync(join(testBase, "lib"), { recursive: true });
        mkdirSync(join(testBase, "fx"), { recursive: true });
        writeFileSync(join(testBase, "lib", "book.epub"), "epub content");
        writeFileSync(join(testBase, "fx", "chart.pdf"), "pdf content");

        const manifest = getManifest(testBase, ["lib", "fx", "missing"]);
        expect(manifest.length).toBe(2);

        const epub = manifest.find(a => a.extension === "epub");
        expect(epub?.category).toBe("lib");
        expect(epub?.name).toBe("book");
        expect(epub?.sizeBytes).toBeGreaterThan(0);

        const pdf = manifest.find(a => a.extension === "pdf");
        expect(pdf?.category).toBe("fx");
        expect(pdf?.id).toBe("fx/chart.pdf");

        // Cleanup
        rmSync(testBase, { recursive: true, force: true });
    });

    test("formatName - robust formatting", () => {
        expect(formatName("Andrew%20Aziz")).toBe("Andrew Aziz");
        expect(formatName("The_Disciplined_Trader")).toBe("The Disciplined Trader");
        expect(formatName("Asset-Name-Long")).toBe("Asset - Name - Long");
        expect(formatName("double  space")).toBe("double space");
    });
});
