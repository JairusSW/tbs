"use strict";
/******************************************************************************
 * This file was generated by langium-cli 1.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbsGeneratedModule = exports.TbsGeneratedSharedModule = exports.TbsLanguageMetaData = void 0;
const ast_1 = require("./ast");
const grammar_1 = require("./grammar");
exports.TbsLanguageMetaData = {
    languageId: 'tbs',
    fileExtensions: ['.tbs'],
    caseInsensitive: false
};
exports.TbsGeneratedSharedModule = {
    AstReflection: () => new ast_1.TbsAstReflection()
};
exports.TbsGeneratedModule = {
    Grammar: () => (0, grammar_1.TbsGrammar)(),
    LanguageMetaData: () => exports.TbsLanguageMetaData,
    parser: {}
};
//# sourceMappingURL=module.js.map