export var Types;
(function (Types) {
    Types[Types["u8"] = 1] = "u8";
    Types[Types["i8"] = 2] = "i8";
    Types[Types["u16"] = 3] = "u16";
    Types[Types["i16"] = 4] = "i16";
    Types[Types["u32"] = 5] = "u32";
    Types[Types["i32"] = 6] = "i32";
    Types[Types["u64"] = 7] = "u64";
    Types[Types["i64"] = 8] = "i64";
    Types[Types["f32"] = 9] = "f32";
    Types[Types["f64"] = 10] = "f64";
    Types[Types["StringU8"] = 11] = "StringU8";
    Types[Types["StringU16"] = 12] = "StringU16";
    Types[Types["Struct"] = 13] = "Struct";
    // Array Types
    // For integers, we include a sign bit because we want to support arbitrary ser/de.
    Types[Types["ArrayU8"] = 14] = "ArrayU8";
    Types[Types["ArrayI8"] = 15] = "ArrayI8";
    Types[Types["ArrayU16"] = 16] = "ArrayU16";
    Types[Types["ArrayI16"] = 17] = "ArrayI16";
    Types[Types["ArrayU32"] = 18] = "ArrayU32";
    Types[Types["ArrayI32"] = 19] = "ArrayI32";
    Types[Types["ArrayU64"] = 20] = "ArrayU64";
    Types[Types["ArrayI64"] = 21] = "ArrayI64";
    Types[Types["ArrayF32"] = 22] = "ArrayF32";
    Types[Types["ArrayF64"] = 23] = "ArrayF64";
    Types[Types["ArrayBool"] = 24] = "ArrayBool";
    Types[Types["ArrayStringU8"] = 25] = "ArrayStringU8";
    Types[Types["ArrayStringU16"] = 26] = "ArrayStringU16";
    Types[Types["ArrayStruct"] = 27] = "ArrayStruct";
    // Dimensional Arrays
    Types[Types["ArrayDim"] = 28] = "ArrayDim";
    Types[Types["ArrayDimU8"] = 29] = "ArrayDimU8";
    Types[Types["ArrayDimI8"] = 30] = "ArrayDimI8";
    Types[Types["ArrayDimU16"] = 31] = "ArrayDimU16";
    Types[Types["ArrayDimI16"] = 32] = "ArrayDimI16";
    Types[Types["ArrayDimU32"] = 33] = "ArrayDimU32";
    Types[Types["ArrayDimI32"] = 34] = "ArrayDimI32";
    Types[Types["ArrayDimU64"] = 35] = "ArrayDimU64";
    Types[Types["ArrayDimI64"] = 36] = "ArrayDimI64";
    Types[Types["ArrayDimF32"] = 37] = "ArrayDimF32";
    Types[Types["ArrayDimF64"] = 38] = "ArrayDimF64";
    Types[Types["ArrayDimBool"] = 39] = "ArrayDimBool";
    Types[Types["ArrayDimStringU8"] = 40] = "ArrayDimStringU8";
    Types[Types["ArrayDimStringU16"] = 41] = "ArrayDimStringU16";
    Types[Types["ArrayDimStruct"] = 42] = "ArrayDimStruct";
})(Types || (Types = {}));
