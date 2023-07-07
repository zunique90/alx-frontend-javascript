/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowId: RowID = CRUD.insertrow(row);
const updatedRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
