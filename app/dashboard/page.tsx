import { HeroSection } from "@/components/cards/HeroSection";
import { StatsRow } from "@/components/cards/StatsRow";
import { BranchSection } from "@/components/cards/BranchSection";
import { SubjectsSection } from "@/components/cards/SubjectsSection";
import { UploadsTable } from "@/components/tables/UploadsTable";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <HeroSection />
      <StatsRow />
      <BranchSection />
      <SubjectsSection />
      <UploadsTable />
    </div>
  );
}
