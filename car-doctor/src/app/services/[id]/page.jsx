import dbConnect, { dbCollections } from "@/lib/dbConnect";
import AutoRepairServices from "../_components/AutoRepairServices ";
import AutoRepairVideoSection from "../_components/AutoRepairVideoSection";
import DownloadSection from "../_components/DownloadSection";
import ProcessSteps from "../_components/ProcessSteps";
import ServiceHeader from "../_components/ServiceHeader";
import Services from "../_components/Services";
import UniqueCarEngineService from "../_components/UniqueCarEngineService";
import { ObjectId } from "mongodb";

export default async function Page({params}) {
  const { id } = params;
  const servicesCollection = await dbConnect(dbCollections.servicesCollection);
  const service = await servicesCollection.findOne({ _id: new ObjectId(id) });
  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <div
    >
     <ServiceHeader />
     <div className="flex flex-col md:flex-row w-full gap-8 max-w-6xl mx-auto my-12 bg-white">
        <div className="w-full md:w-3/4">
            <AutoRepairServices img={service.img}/>
            <UniqueCarEngineService services={service.facility} title={service.title} description={service.description} />
            <ProcessSteps />
            <AutoRepairVideoSection />
        </div>
        <div className="w-full md:w-1/4 ">
            <Services activeServiceId={service._id} />
            <DownloadSection price={service.price}/>
        </div>
     </div>
    </div>
  );
}