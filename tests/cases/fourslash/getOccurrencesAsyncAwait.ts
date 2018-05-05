/// <reference path='fourslash.ts' />

////[|async|] function f() {
//// [|await|] 100;
//// [|a/**/wait|] [|await|] 200;
//// return [|await|] async function () {
////   await 300;
//// }
////}
////async function g() {
////    await 300;
////    async function f() {
////        await 400;
////    }
////}

verify.rangesAreOccurrences(false);

goTo.marker();
for (const range of test.ranges()) {
    verify.occurrencesAtPositionContains(range, false);
}
