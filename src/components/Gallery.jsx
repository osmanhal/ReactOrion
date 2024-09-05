import { useEffect, useState, useContext, useRef} from "react";
import { NameContext } from './App';
import esriConfig from "@arcgis/core/config";
import { 
  CalciteFlowItem,
  CalciteNotice,
  CalciteFlow,
  CalciteButton,
  CalcitePanel, 
  CalciteLabel,
  CalciteModal } from "@esri/calcite-components-react";
  import Portal from "@arcgis/core/portal/Portal";
  import esriId from "@arcgis/core/identity/IdentityManager"
import ArcGISMap from "./ArcGISMap";

const Gallery = ({}) => {
  const [portalWebMaps, setPortalWebMaps] = useState([]);
  const [gallerySelection, setGallerySelection] = useState();
  const { webmapId, setWebmapId } = useContext(NameContext);
  const { versioningStates, setVersioningStates } = useContext(NameContext);
  const initialized = useRef(false)
  useEffect(() => {
    if(!initialized.current){
      initialized.current = true
      generateGalleryForWebMaps()//first execution
    }
      
  }, [])



  async function generateGalleryForWebMaps(){
    esriConfig.portalUrl = prompt("Enter Portal Url", "https://sampleserver7.arcgisonline.com/portal");
    const portalUrl = esriConfig.portalUrl
    const portal = new Portal({
      url: portalUrl // First instance
    });
    portal.load().then(async () => {
      // Create query parameters for the portal search
      // This object autocasts as new PortalQueryParams()
      let queryParams = {
        query: `orgid:0123456789ABCDEF (type:("Web Map" OR "CityEngine Web Scene") -type:"Web Mapping Application")  -type:"Code Attachment" -type:"Featured Items" -type:"Symbol Set" -type:"Color Set" -type:"Windows Viewer Add In" -type:"Windows Viewer Configuration" -type:"Map Area" -typekeywords:"MapAreaPackage"`,
        sortField: "numViews",
        sortOrder: "desc",
        num: 1000
      };
      await esriId.getCredential(portal.url);
      // Query the items based on the queryParams created from portal above
      let portalItems = await portal.queryItems(queryParams);
      console.log(portalItems);
      portalItems = portalItems.results;
      portalItems.forEach((item) => {
        if (item.displayName === "Web Map") {
          portalWebMaps.push(item);
        }
      });
      setPortalWebMaps(portalWebMaps);
      // document.getElementById("webmap-viewer").open = true;
      const galleryView = (<div className="showGallerySelection" id="galleryViewer">
      <CalciteModal aria-labelledby="modal-title" id="webmap-viewer" open="true">
        <div slot="header" id="modal-title">
          Select a Webmap
        </div>
        <div slot="content">
          <CalciteLabel>
            Portal Org
          </CalciteLabel>
          <div className="gallery" id="gallery-initial-webmap">
            {portalWebMaps.map((item, index) => (
              <a onClick= {() => {setGallerySelection(null); setWebmapId(item.id); }} href="#" key={`item-${index}`} id={`webmap-${item.id}`}><div><img src={item.thumbnailUrl} alt="Image1"></img><div className="caption" text-align="center">{item.title}</div></div></a>
            ))}
          </div>
        </div>
      </CalciteModal>
    </div>)
      setGallerySelection(galleryView);
    });
  }
  return(
      <>
       {gallerySelection}
      </>
  );
};

export default Gallery;