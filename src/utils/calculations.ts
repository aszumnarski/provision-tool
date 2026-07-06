type FormValues = Record<string, string | number | undefined>;
type Ledger = "0l" | "2l";

function amount(
  formValues: FormValues,
  field: string
): number {
  return Number(formValues[field] ?? 0);
}


function calculateClosingBalance(
  ledger: Ledger,
  formValues: FormValues,
  applyUpdates: boolean
): number {
  const carryFwd =
    amount(formValues, `${ledger}CarryFwd`);

  const creationAddition =
    amount(formValues, `${ledger}CreationAddition`);

  let creationAdditionUpdate =
    amount(formValues, `${ledger}CreationAdditionUpdate`);

  const usagePy =
    amount(formValues, `${ledger}UsagePY`);

  let usagePyUpdate =
    amount(formValues, `${ledger}UsageUpdatePY`);

  const usageCy =
    amount(formValues, `${ledger}UsageCY`);

  let usageCyUpdate =
    amount(formValues, `${ledger}UsageUpdateCY`);

  const releasePy =
    amount(formValues, `${ledger}ReleasePY`);

  let releasePyUpdate =
    amount(formValues, `${ledger}ReleaseUpdatePY`);

  const releaseCy =
    amount(formValues, `${ledger}ReleaseCY`);

  let releaseCyUpdate =
    amount(formValues, `${ledger}ReleaseUpdateCY`);

  if (!applyUpdates) {
    creationAdditionUpdate = 0;
    usagePyUpdate = 0;
    usageCyUpdate = 0;
    releasePyUpdate = 0;
    releaseCyUpdate = 0;
  }

  const subType =
    String(formValues["subType"] ?? "").toLowerCase();

  if (subType.includes("c")) {
    creationAdditionUpdate *= -1;
    usagePyUpdate *= -1;
    usageCyUpdate *= -1;
    releasePyUpdate *= -1;
    releaseCyUpdate *= -1;
  }

  return (
    carryFwd +
    creationAddition +
    creationAdditionUpdate -
    usagePy -
    usagePyUpdate -
    usageCy -
    usageCyUpdate -
    releasePy -
    releasePyUpdate -
    releaseCy -
    releaseCyUpdate
  );
}

export function calculate0lClosingBalanceTotal(
  formValues: FormValues
) {
  return calculateClosingBalance(
    "0l",
    formValues,
    false
  );
}

export function calculate0lClosingBalanceUpdate(
  formValues: FormValues
) {
  return calculateClosingBalance(
    "0l",
    formValues,
    true
  );
}

export function calculate2lClosingBalanceTotal(
  formValues: FormValues
) {
  return calculateClosingBalance(
    "2l",
    formValues,
    false
  );
}

export function calculate2lClosingBalanceUpdate(
  formValues: FormValues
) {
  return calculateClosingBalance(
    "2l",
    formValues,
    true
  );
}

