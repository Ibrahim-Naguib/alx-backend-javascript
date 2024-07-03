import { RowID, rowElement } from "./interface";

export function insertRow(row: rowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: rowElement): number;
