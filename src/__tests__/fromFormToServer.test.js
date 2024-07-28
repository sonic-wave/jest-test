import fromFormToServer from "../fromFormToServer";

describe('fromFormToServer test', () => {
    test('Internal physical person', () => {
        const input = {
            isForeign: false,
            isJuridical: false,
            title: 'Ivan Khokhlov',
            tin: '101010101010',
        };

        const result = fromFormToServer(input);

        const expected = {
            type: 'physical',
            tin: '101010101010',
            name: 'Ivan Khokhlov',
            foreign_tin: null,
            company_title: null,
        };

        expect(result).toEqual(expected);
    });

    test('Internal juridical person', () => {
        const input = {
            isForeign: false,
            isJuridical: true,
            title: 'VK Group',
            tin: '7743001840',
        };

        const result = fromFormToServer(input);

        const expected = {
            type: 'juridical',
            tin: '7743001840',
            name: null,
            foreign_tin: null,
            company_title: 'VK Group',
        }

        expect(result).toEqual(expected);
    });

    test('Foreign physical person', () => {
        const input = {
            isForeign: true,
            isJuridical: false,
            title: 'Tony Stark',
            tin: '010101010101',
        };

        const result = fromFormToServer(input);

        const expected = {
            type: 'foreign_physical',
            tin: null,
            name: 'Tony Stark',
            foreign_tin: '010101010101',
            company_title: null,
        }

        expect(result).toEqual(expected);
    });

    test('Foreign juridical person', () => {
        const input = {
            isForeign: true,
            isJuridical: true,
            title: 'Marvel Comics',
            tin: '7777777',
        };

        const result = fromFormToServer(input);

        const expected = {
            type: 'foreign_juridical',
            tin: null,
            name: null,
            foreign_tin: '7777777',
            company_title: 'Marvel Comics',
        }

        expect(result).toEqual(expected);
    });
});