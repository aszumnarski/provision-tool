import type { IRow } from "../components/Row/Row";
import * as fieldDefinitions from "../config/fields";
import type { ILayout } from "../types";

const fieldMap = Object.fromEntries(
  Object.entries(fieldDefinitions).map(([key, value]) => [
    key.startsWith("_") ? key.substring(1) : key,
    value,
  ])
);

export function buildRows(layout: ILayout): IRow[] {
  return layout.sections
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map((section) => {
      const sectionFields = Object.values(layout.fields).filter(
        (field) =>
          field.visible &&
          field.section === section.key
      );

      const maxColumn = Math.max(
        ...sectionFields.map((field) => field.column),
        1
      );

      const columns = Array.from(
        { length: maxColumn },
        (_, index) => {
          const columnNumber = index + 1;

          return {
            fields: sectionFields
              .filter((field) => field.column === columnNumber)
              .sort((a, b) => a.position - b.position)
              .map((field) => {
                const definition = fieldMap[field.key];

                if (!definition) {
                  console.error(
                    `[layoutBuilder] Missing frontend field definition for '${field.key}'`,
                    {
                      fieldKey: field.key,
                      backendConfig: field,
                    }
                  );
                }

                return definition;
              })
              .filter(Boolean),
          };
        }
      );

      return {
        title: section.title ?? undefined,
        columns,
        isMatrix: section.matrix,
      };
    });
}