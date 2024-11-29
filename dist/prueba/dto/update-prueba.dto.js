"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePruebaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prueba_dto_1 = require("./create-prueba.dto");
class UpdatePruebaDto extends (0, mapped_types_1.PartialType)(create_prueba_dto_1.CreatePruebaDto) {
}
exports.UpdatePruebaDto = UpdatePruebaDto;
//# sourceMappingURL=update-prueba.dto.js.map