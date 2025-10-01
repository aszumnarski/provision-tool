export function calculate2lClosingBalance(formValues: any) {
  const carryFwd = Number(formValues["2lCarryFwd"] ?? 0);
  const creationAddition = Number(formValues["2lCreationAddition"] ?? 0);
  let creationAdditionUpdate = Number(
    formValues["2lCreationAdditionUpdate"] ?? 0,
  );
  const usage = Number(formValues["2lUsage"] ?? 0);
  let usageUpdate = Number(formValues["2lUsageUpdate"] ?? 0);
  const release = Number(formValues["2lRelease"] ?? 0);
  let releaseUpdate = Number(formValues["2lReleaseUpdate"] ?? 0);

  const subType = formValues["subType"] ?? "";
  if (subType) {
    creationAdditionUpdate = -creationAdditionUpdate;
    usageUpdate = -usageUpdate;
    releaseUpdate = -releaseUpdate;
  }

  const result =
    carryFwd +
    creationAddition +
    creationAdditionUpdate -
    usage -
    usageUpdate -
    release -
    releaseUpdate;

  return result;
}

export function calculate0lClosingBalance(formValues: any) {
  const carryFwd = Number(formValues["0lCarryFwd"] ?? 0);
  const creationAddition = Number(formValues["0lCreationAddition"] ?? 0);
  let creationAdditionUpdate = Number(
    formValues["0lCreationAdditionUpdate"] ?? 0,
  );
  const usage = Number(formValues["0lUsage"] ?? 0);
  let usageUpdate = Number(formValues["0lUsageUpdate"] ?? 0);
  const release = Number(formValues["0lRelease"] ?? 0);
  let releaseUpdate = Number(formValues["0lReleaseUpdate"] ?? 0);

  const subType = formValues["subType"] ?? "";
  if (subType.includes("c")) {
    creationAdditionUpdate = -creationAdditionUpdate;
  }
  if (subType) {
    usageUpdate = -usageUpdate;
    releaseUpdate = -releaseUpdate;
  }

  const result =
    carryFwd +
    creationAddition +
    creationAdditionUpdate -
    usage -
    usageUpdate -
    release -
    releaseUpdate;

  return result;
}
