import "./App.css";
import { useState, createContext, useEffect } from "react";
import ArcGISMap from "./ArcGISMap";
import Gallery from "./Gallery";
import { ArcgisEditor } from "@arcgis/map-components-react";
import {
  CalciteShell,
  CalciteAction,
  CalciteTooltip,
  CalcitePanel
} from "@esri/calcite-components-react";
export const NameContext = createContext();

const App = () => {
  const panelDescription = "City of Naperville Water District";

  const [showTrace, setShowTrace] = useState(false);
  const [showValidateTopology, setShowValidateTopology] = useState(false);
  const [showSessionManagement, setShowSessionManagement] = useState(false);
  const [showAssociations, setShowAssociations] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showGallerySelection, setShowGallerySelection] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [webmapId, setWebmapId] = useState(undefined);
  const [versioningStates, setVersioningStates] = useState(undefined);
  
  useEffect(() => {
    const checkData = () => {
      // Example condition: check if data is not null
      if (webmapId !== undefined) {
        document.getElementById("webmap-viewer").open = false;
        console.log('Data is now not null:', webmapId);
        setShowGallerySelection(false);
        setShowMap(true);
        // Perform any action after data is not null
      } else {
        // If data is still null, check again after a delay
        setTimeout(checkData, 1000); // Check every 1000 milliseconds (1 second)
      }
    };
    checkData();

    // Optional: Clear the timeout if the component unmounts
    return () => clearTimeout(checkData);
  }, [webmapId]); // This effect depends on `data`


  return (
<div>
<NameContext.Provider value={{ webmapId, setWebmapId, versioningStates, setVersioningStates}}>
          <Gallery />
          <ArcGISMap />
          <CalciteShell>
      <div className="grid-container">
        <CalcitePanel
          id="map-panel"
          className="grid-map"
          description={panelDescription}
        >
          <div slot="header-actions-end" className="header-action-div">
            <CalciteAction 
              id="validate-topology-action" 
              icon="check-square"
              onClick={() => {
                if (showTrace) {
                  setShowTrace(false);
                }
                else if (showSessionManagement){
                  setShowSessionManagement(false);
                }
                else if (showAssociations){
                  setShowAssociations(false);
                }
                else if (showEditor){
                  setShowEditor(false);
                }
                setShowValidateTopology(!showValidateTopology);
              }}
            ></CalciteAction>
            <CalciteTooltip placement="bottom" referenceElement="session-management">Session Management</CalciteTooltip>
            <CalciteAction 
              id="session-management" 
              icon="edit-geometry"
              onClick={() => {
                if (showTrace) {
                  setShowTrace(false);
                }
                else if (showValidateTopology){
                  setShowValidateTopology(false);
                }
                else if (showAssociations){
                  setShowAssociations(false);
                }
                else if (showEditor){
                  setShowEditor(false);
                }
                setShowSessionManagement(!showSessionManagement);

              }}
            ></CalciteAction>
            <CalciteTooltip placement="bottom" referenceElement="validate-topology-action">Validate topology</CalciteTooltip>
            <CalciteAction 
              id="utility-network-trace-action" 
              icon="utility-network-trace"
              onClick={() => {
                if (showValidateTopology) {
                  setShowValidateTopology(false);
                }
                else if (showSessionManagement){
                  setShowSessionManagement(false);
                }
                else if (showAssociations){
                  setShowAssociations(false);
                }
                else if (showEditor){
                  setShowEditor(false);
                }
                setShowTrace(!showTrace);
              }}
              
            ></CalciteAction>
            <CalciteTooltip placement="bottom" referenceElement="utility-network-associations">View Associations</CalciteTooltip>
            <CalciteAction 
              id="utility-network-associations" 
              icon="view-associations"
              onClick={() => {
                if (showValidateTopology) {
                  setShowValidateTopology(false);
                }
                else if (showSessionManagement){
                  setShowSessionManagement(false);
                }
                else if (showAssociations){
                  setShowAssociations(false);
                }
                else if (showTrace){
                  setShowTrace(false);
                }
                else if (showEditor){
                  setShowEditor(false);
                }
                setShowAssociations(!showAssociations);
              }}
              
            ></CalciteAction>
          <CalciteTooltip placement="bottom" referenceElement="editing">Editor</CalciteTooltip>
            <CalciteAction 
              id="editing" 
              icon="pencil"
              onClick={() => {
                if (showValidateTopology) {
                  setShowValidateTopology(false);
                }
                else if (showSessionManagement){
                  setShowSessionManagement(false);
                }
                else if (showAssociations){
                  setShowAssociations(false);
                }
                else if (showTrace){
                  setShowTrace(false);
                }
                setShowEditor(!showEditor);
              }}
              
            ></CalciteAction>
            <CalciteTooltip placement="bottom" referenceElement="utility-network-trace-action">Run a trace</CalciteTooltip>
          </div>

          { showMap ? <ArcGISMap
            showSessionManagement={showSessionManagement}
            showValidateTopology={showValidateTopology} 
            showTrace={showTrace} 
            showGallerySelection={showGallerySelection}
            showAssociations={showAssociations}
            showEditor={showEditor}
          />: null}
          { true ? <Gallery 
          >
          </Gallery>: null

          }
        </CalcitePanel>
      </div>
    </CalciteShell>
      </NameContext.Provider>
    
</div>
    
  )
};

export default App;