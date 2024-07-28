/* 
1. 8 строка: Поменял местами выражения в первом тернарном операторе personInForm.isForeign ? (было null : 'foreign' => стало 'foreign': null)
2. 11 строка: Убрал опечатку в tin:personInForm.isForeign (было isForeigh => стало isForeign)
*/

export const fromFormToServer = personInForm => ({
    type: [
        personInForm.isForeign ? 'foreign' : null,
        personInForm.isJuridical ? 'juridical' : 'physical',
    ].filter(Boolean).join('_'),
    tin: personInForm.isForeign ? null : personInForm.tin,
    name: personInForm.isJuridical ? null : personInForm.title,
    foreign_tin: personInForm.isForeign ? personInForm.tin : null,
    company_title: personInForm.isJuridical ? personInForm.title : null,
});

export default fromFormToServer;