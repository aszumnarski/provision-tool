export function resolveAmount(
  name: string,
  applicationData: any
): number | undefined {


  if (!applicationData?.amounts) {
    return undefined;
  }


  if (!applicationData?.amounts) {
    return undefined;
  }

  const lower = name.toLowerCase();

  const ledger =
    lower.startsWith("0l")
      ? "0L"
      : lower.startsWith("2l")
      ? "2L"
      : lower.startsWith("tl")
      ? "TL"
      : null;

  if (!ledger) {
    return undefined;
  }

  const a = applicationData.amounts[ledger];

  if (!a) {
    return undefined;
  }

  switch (lower) {
    case "0lcarryfwd":
    case "2lcarryfwd":
    case "tlcarryfwd":
      return a.carryForward;

    case "0lcreationaddition":
    case "2lcreationaddition":
    case "tlcreationaddition":
      return a.creationAddition.postedBooked;

    case "0lcreationadditionupdate":
    case "2lcreationadditionupdate":
    case "tlcreationadditionupdate":
      return a.creationAddition.update;

    case "0lusagepy":
    case "2lusagepy":
    case "tlusagepy":
      return a.usagePy.postedBooked;

    case "0lusageupdatepy":
    case "2lusageupdatepy":
    case "tlusageupdatepy":
      return a.usagePy.update;

    case "0lusagecy":
    case "2lusagecy":
    case "tlusagecy":
      return a.usageCy.postedBooked;

    case "0lusageupdatecy":
    case "2lusageupdatecy":
    case "tlusageupdatecy":
      return a.usageCy.update;

    case "0lreleasepy":
    case "2lreleasepy":
    case "tlreleasepy":
      return a.releasePy.postedBooked;

    case "0lreleaseupdatepy":
    case "2lreleaseupdatepy":
    case "tlreleaseupdatepy":
      return a.releasePy.update;

    case "0lreleasecy":
    case "2lreleasecy":
    case "tlreleasecy":
      return a.releaseCy.postedBooked;

    case "0lreleaseupdatecy":
    case "2lreleaseupdatecy":
    case "tlreleaseupdatecy":
      return a.releaseCy.update;

    case "0lclosingbalance":
    case "2lclosingbalance":
    case "tlclosingbalance":
      return a.closingBalance.postedBooked;

    case "0lclosingbalanceupdate":
    case "2lclosingbalanceupdate":
    case "tlclosingbalanceupdate":
      return a.closingBalance.update;

    default:
      return undefined;
  }
}