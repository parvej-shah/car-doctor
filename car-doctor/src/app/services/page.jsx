import AutoRepairServices from "./_components/AutoRepairServices ";
import AutoRepairVideoSection from "./_components/AutoRepairVideoSection";
import DownloadSection from "./_components/DownloadSection";
import ProcessSteps from "./_components/ProcessSteps";
import ServiceHeader from "./_components/ServiceHeader";
import Services from "./_components/Services";
import UniqueCarEngineService from "./_components/UniqueCarEngineService";

export default function Page() {
  return (
    <div
    >
     <ServiceHeader />
     <div className="flex flex-col md:flex-row w-full gap-8 max-w-6xl mx-auto my-12 bg-white">
        <div className="w-full md:w-3/4">
            <AutoRepairServices />
            <UniqueCarEngineService/>
            <ProcessSteps />
            <AutoRepairVideoSection />
        </div>
        <div className="w-full md:w-1/4 ">
            <Services />
            <DownloadSection />
        </div>
     </div>
    </div>
  );
}