/// <reference path='fourslash.ts' />

// @Filename: /a.ts
////[|export { [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}x|] };|]

verify.singleReferenceGroup("export x", "x");
