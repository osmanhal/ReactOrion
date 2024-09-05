import { useEffect, useState, useContext , version } from "react";
import { 
  ArcgisMap, 
  ArcgisUtilityNetworkValidateTopology, 
  ArcgisUtilityNetworkTrace, 
  ArcgisVersionManagement,
  ArcgisUtilityNetworkAssociations,
  ArcgisEditor
} from "@arcgis/map-components-react";
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
  import FeatureService from "@arcgis/core/rest/featureService/FeatureService"
  import { createVersioningStates, getVersioningStates } from "@arcgis/core/versionManagement/utils";
  import VersioningState from "@arcgis/core/versionManagement/VersioningState"
  import VersionManagementService from "@arcgis/core/versionManagement/VersionManagementService"
  import MapView from "@arcgis/core/views/MapView";
  import Portal from "@arcgis/core/portal/Portal";
  import esriId from "@arcgis/core/identity/IdentityManager"
  import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
  import SessionManagement from "./SessionManagement";
  import React from "react";
const ArcGISMap = ({ showValidateTopology, showTrace, showSessionManagement, showAssociations , showEditor}) => {
  const [portalWebMaps, setPortalWebMaps] = useState([]);
  const [gallerySelection, setShowGallerySelection] = useState();
  const [utilityNetwork, setUtilityNetwork] = useState(null);
  const [currentGDBVersion, setCurrentGDBVersion] = useState("");
  const [view, setView] = useState();
  const { webmapId, setWebmapId } = useContext(NameContext);
  let {versioningStates, setVersioningStates} = useContext(NameContext);


  async function loadUtilityNetwork(view) {
    if (view.map.utilityNetworks?.length > 0) {
      let utilityNetworkFromMap = view.map.utilityNetworks.getItemAt(0);
      await utilityNetworkFromMap.load();

      if (utilityNetworkFromMap.loadStatus === "loaded") {
        // Need to set the gdb version manually here because at 4.29
        // VersionManagement component does not fire an event to switch versions
        // so we cannot listen for that event and switch the gdb version with state.
        // 4.30 will have this event so we can assign GDB_VERSION to state variable.
        utilityNetworkFromMap.gdbVersion = currentGDBVersion;
        setUtilityNetwork(utilityNetworkFromMap);
      }
    } else {
      console.log("No utility networks found in this map!");
    }
  }
  async function loadVersioningStateAndDirtyArea(view) {
    if (view.map) {
      await view.map.loadAll();
      const tempVersioningState = await createVersioningStates(view.map, true);

      await tempVersioningState.getItemAt(0).load();
    
    //  tempVersioningState.getItemAt(0).currentVersion = "unadmin.aabcd"
    // const layer = view.map.editableLayers.items[0];
    // const { url } = layer;
    // let vms;
    // if (!!url) {
    //   const fs = new FeatureService({ url: url });
    //   await fs.load();

    //   if (fs.versionManagementServiceUrl) {
    //      vms = new VersionManagementService({
    //       url: fs.versionManagementServiceUrl
    //     });
    //     await vms.load();
    //   }
    // }
    // const tempVersioningState = new VersioningState({
    //   versionManagementService: vms
    // });
    // await tempVersioningState.load();
     await tempVersioningState.getItemAt(0).getVersionInfos(true);
     await setVersioningStates(tempVersioningState);
      versioningStates = tempVersioningState
      await view.map.utilityNetworks.getItemAt(0).load();
      const dirtyArea = new FeatureLayer({
        // URL to the dirty area
        url: view.map.utilityNetworks.getItemAt(0).networkSystemLayers
          .dirtyAreasLayerUrl
      });
      await dirtyArea.load();
      await view.map.layers.add(dirtyArea,0);
      await loadPopups();
    } else {
      console.log("No utility networks found in this map!");
    }
  }

  async function loadPopups(view) {
    if (view.map) {
      // view.popupEnabled = false;
      view.on("click", (event) => {
        // Get the coordinates of the click on the view
        view.openPopup({
          fetchFeatures: true
        });

      });
    } else {
      console.log("No utility networks found in this map!");
    }
  }

  

  async function configureEditor(view) {
    const editor = document.querySelector("arcgis-editor");

    const featureSnappingSource = [];
    await view.map.loadAll();

    // loop through the editable layers on the map
    view.map.editableLayers.items.forEach((layer) => {
      // if the layer.type is subtype-group or group loop through the
      // sublayers to set them as feature snapping sources
      if(layer.type === "subtype-group" || layer.type === "group") {
        layer.sublayers.items.forEach((sublayer) => {
          featureSnappingSource.push({ layer: sublayer, enabled: true })
        });
      } else {
        featureSnappingSource.push({ layer: layer, enabled: true });
      }
    });

    // set snapping to be on be default, turn off geometry guides
    // all layers will be enabled for snapping on load
    editor.snappingOptions = {
      enabled: true,
      selfEnabled: false,
      featureSources: featureSnappingSource
    }

    // turn on tooltips so the editing constraints can be turned on
    // with the TAB shortcut key while actively drawing
    editor.tooltipOptions = { enabled: true }
  }


  return(
    <>
    {true ? 
    <ArcgisMap
      itemId={webmapId}
      onArcgisViewReadyChange={async ({ target }) => {
        const view = target.view;
        setView(view);
        view.ui.move(["zoom"], "bottom-right");
     //   await configureEditor(view);
        await loadVersioningStateAndDirtyArea(view);
        console.log(view);
      } }
    >
        <ArcgisVersionManagement position="top-left" versioningStates={versioningStates}
        ></ArcgisVersionManagement>
        {showTrace ?
          <ArcgisUtilityNetworkTrace
            position="top-right"
         
          ></ArcgisUtilityNetworkTrace> : null}
        {showValidateTopology ?
          <ArcgisUtilityNetworkValidateTopology position="top-right" /> : null}
          {showAssociations ?
          <ArcgisUtilityNetworkAssociations
            position="top-right"
           
          >
          </ArcgisUtilityNetworkAssociations> : null}
        {showSessionManagement ?
          <SessionManagement></SessionManagement> : null}
        { showEditor ?  <ArcgisEditor referenceElement="arcgis-map" position="top-right"></ArcgisEditor>
       : null } 
      </ArcgisMap> : null }
      {/* <ArcgisEditor referenceElement="arcgis-map"></ArcgisEditor> */}
      </>
  );
};

export default ArcGISMap;