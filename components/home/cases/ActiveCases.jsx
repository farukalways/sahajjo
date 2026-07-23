import { getCases } from "@/utils";
import ActiveCasesGrid from "./ActiveCasesGrid";

const ActiveCases = async () => {
  const cases = await getCases();

  return (
    <div>
      <ActiveCasesGrid initialCases={cases} />
    </div>
  );
};

export default ActiveCases;
