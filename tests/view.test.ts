import { expect, test, describe } from "bun:test";
import { renderNode, renderPage } from "../src/view";
import type { ContentNode, AssetMetadata } from "../src/assets";

describe("View Rendering Engine - Phase 5", () => {
    test("renderNode - ARTICLE", () => {
        const node: ContentNode = {
            id: 'a1',
            title: 'T1',
            type: 'ARTICLE',
            category: 'C1',
            content: '<p>Hello</p>',
            metrics: { 'Key': 'Val' }
        };
        const html = renderNode(node);
        expect(html).toContain('<summary>T1</summary>');
        expect(html).toContain('Hello');
        expect(html).toContain('Key');
        expect(html).toContain('Val');
    });

    test("renderNode - LINK_LIST", () => {
        const node: ContentNode = {
            id: 'l1',
            title: 'Links',
            type: 'LINK_LIST',
            category: 'C1',
            links: [{ label: 'L1', url: 'http://u1', note: 'N1' }]
        };
        const html = renderNode(node);
        expect(html).toContain('href="http://u1"');
        expect(html).toContain('L1');
        expect(html).toContain('N1');
    });

    test("renderNode - ASSET_LIST", () => {
        const asset: AssetMetadata = {
            id: 'f1.pdf', filename: 'f1.pdf', name: 'N1', extension: 'pdf', category: 'C1', sizeBytes: 100, lastModified: 0, path: 'p1'
        };
        const node: ContentNode = {
            id: 'a2', title: 'Assets', type: 'ASSET_LIST', category: 'C1', assets: [asset]
        };
        const html = renderNode(node);
        expect(html).toContain('href="/f1.pdf"');
    });

    test("renderPage - full page integration", () => {
        const nodes: ContentNode[] = [{ id: '1', title: 'T1', type: 'METRIC_CARD', category: 'CAT1', metrics: { 'M1': 'V1' } }];
        const html = renderPage(nodes);
        expect(html).toContain('<!DOCTYPE html>');
        expect(html).toContain('CAT1');
        expect(html).toContain('V1');
    });
});
