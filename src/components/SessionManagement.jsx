import { useEffect, useState, useContext, version} from "react";
import { NameContext } from './App';
import esriConfig from "@arcgis/core/config";
import { createVersioningStates } from "@arcgis/core/versionManagement/utils";
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

const SessionManagement = ({}) => {
  // const [versioningStates.items[0].currentVersion, setCurrentVersion] = useState([]);
  const {versioningStates, setVersioningStates} = useContext(NameContext);
  const [vms, setVms] = useState(undefined);
  let buttonsThatNeedToBeReenabled = [];
  const startEditingBtn = document.getElementById("start-editing-flow-btn");
  const stopEditingBtn = document.getElementById("stop-editing-flow-btn");
  const changeVersionNotice = document.getElementById("change-version-notice");
  const okayBtn = document.getElementById("okay");
  // save revert
  const saveRevertNotice = document.getElementById("save-revert-notice");
  const revertBtn = document.getElementById("revert-notice-btn");
  const saveBtn = document.getElementById("save-notice-btn");

  // undo redo
  const undoBtn = document.getElementById("undo");
  const redoBtn = document.getElementById("redo");

  const reconcileNotice = document.getElementById(
    "by-Atrribute-by-object-notice"
  );
  const reconcileBtn = document.getElementById("reconcile");
  const postBtn = document.getElementById("post");


  // reconcile post
  useEffect(() => {
  // const versionManagementComponent = document.querySelector("arcgis-version-management");
  // versionManagementComponent.versioningStates = versioningStates;
  // setCurrentVersion(versioningStates.items[0].versioningStates.items[0].currentVersion);
  setVms(versioningStates.items[0].versionManagementService);
  }, [])
  const reconcileBtnFunction = async() => { (reconcileNotice.open = true)}
  const okayButtonFunction = async() => { changeVersionNotice.open = false;}
  const startEditingSession =  async() => {
    document.body.style.cursor = "wait";
   // await blockButtonInput();
    await startReading();
    await startEditing();
    document.body.style.cursor = "default";
    // startEditingBtn.disabled = true;
    // stopEditingBtn.disabled = false;
    changeVersionNotice.open = true;
   
  }
  const stopEditingSaveEdits = async() => {
    document.body.style.cursor = "wait";
   // await blockButtonInput();
    await vms
      .stopEditing(versioningStates.items[0].currentVersion, true)
      .then(async (response) => {
        console.log("successfully stopped editing version");
        saveRevertNotice.open = false;
        await stopReading();
        document.body.style.cursor = "default";
        // startEditingBtn.disabled = false;
        // stopEditingBtn.disabled = true;
      })
      .catch((err) => {
        console.log("failed to stop editing: ", err);
      });
  }
  const stopEditingRevertEdits = async() => {
    document.body.style.cursor = "wait";
   // await blockButtonInput();
    await vms
      .stopEditing(versioningStates.items[0].currentVersion, false)
      .then(async (response) => {
        console.log("successfully stopped editing version");
        saveRevertNotice.open = false;
        await stopReading();
        document.body.style.cursor = "default";
        // startEditingBtn.disabled = false;
        // stopEditingBtn.disabled = true;

        // clearInterval(undoInterval);
        // clearInterval(redoInterval);
        // undoBtn.disabled = true;
        // redoBtn.disabled = true;
      })
      .catch((err) => {
        console.log("failed to stop editing: ", err);
      });
  }
  async function stopEditSession() {
    saveRevertNotice.open = true;
  }
  async function startReading() {
    await vms
      .startReading(versioningStates.items[0].currentVersion)
      .then(async (response) => {
        console.log("successfully started reading version");
      })
      .catch((err) => {
        console.log("failed to start reading: ", err);
      });
  }
  async function stopReading() {
    await vms
      .stopReading(versioningStates.items[0].currentVersion)
      .then(async (response) => {
        console.log("successfully stopped reading version");
      })
      .catch((err) => {
        console.log("failed to stop reading: ", err);
      });
  }
  async function startEditing() {
    await vms
      .startEditing(versioningStates.items[0].currentVersion)
      .then(async (response) => {
        console.log("successfully started editing version");
      })
      .catch((err) => {
        console.log("failed to start editing: ", err);
      });
  }

  async function blockButtonInput() {
    const buttons = document.querySelectorAll("calcite-button");
    const calciteAction = document.querySelectorAll("calcite-action");
    for (let i = 0; i < calciteAction.length; i++)
      calciteAction[i].disabled = true;

    // Disable all buttons
    for (let i = 0; i < buttons.length; i++) {
      if (!buttons[i].disabled) {
        buttonsThatNeedToBeReenabled.push(i);
        buttons[i].disabled = true;
      }
    }
  }
  async function returnButtonsToPreviousState() {
    const buttons = document.querySelectorAll("calcite-button");
    const calciteAction = document.querySelectorAll("calcite-action");
    for (let i = 0; i < buttonsThatNeedToBeReenabled.length; i++)
      buttons[buttonsThatNeedToBeReenabled[i]].disabled = false;
    for (let i = 0; i < calciteAction.length; i++)
      calciteAction[i].disabled = false;
    document.body.style.cursor = "default";
    buttonsThatNeedToBeReenabled = [];
  }
  async function reconcileByAttribute() {
    await vms
      .reconcile(versioningStates.items[0].currentVersion, {
        conflictDetection: "by-attribute"
      })
      .then(async (response) => {
        console.log("successfully reconciled version");
        reconcileNotice.open = false;
        await blockButtonInput();
        await returnButtonsToPreviousState();
        postBtn.disabled = false;
        reconcileBtn.disabled = true;
      })
      .catch((err) => {
        console.log("failed to reconcile version: ", err);
      });
  }
  async function reconcileByObject() {
    await vms
      .reconcile(versioningStates.items[0].currentVersion, { conflictDetection: "by-object" })
      .then(async (response) => {
        console.log("successfully reconciled version");
        reconcileNotice.open = false;
        await blockButtonInput();
        await returnButtonsToPreviousState();
        postBtn.disabled = false;
        reconcileBtn.disabled = true;
      })
      .catch((err) => {
        console.log("failed to reconcile version: ", err);
      });
  }
  async function post() {
    await vms
      .post(versioningStates.items[0].currentVersion)
      .then(async (response) => {
        console.log("post operation wass successful");
        await blockButtonInput();
        await returnButtonsToPreviousState();
        postBtn.disabled = true;
        reconcileBtn.disabled = false;
      })
      .catch((err) => {
        console.log("failed to post version changes: ", err);
      });
  }
  const undo = async() => {
    await vms.undo(versioningStates.items[0].currentVersion);
  }
  const redo = async() =>  {
    await vms.redo(versioningStates.items[0].currentVersion);
  }

    return(
        <>
          <div id="sessionMenu" className="sessionManagementOverLay">
            <CalcitePanel heading="Session Management" data-panel-id="session-management">
              <CalciteFlow id="sm">
                <CalciteFlowItem>
                  <CalciteButton onClick={startEditingSession} id="start-editing-flow-btn">Start Edit Session</CalciteButton>
                  <br></br>
                  <CalciteButton id="stop-editing-flow-btn" onClick={stopEditSession} >Stop Edit Session</CalciteButton>
                  <br></br>
                  <CalciteButton onClick={undo} id="undo">Undo</CalciteButton>
                  <br></br>
                  <CalciteButton onClick={redo} id="redo">Redo</CalciteButton>
                  <br></br>
                  <CalciteButton onClick={reconcileBtnFunction}  id="reconcile">Reconcile</CalciteButton>
                  <br></br>
                  <CalciteButton onClick={post}  id="post">Post</CalciteButton>
                  <calcite-notice icon="exclamation-mark-triangle" id="by-Atrribute-by-object-notice" slot="footer" kind="warning">
                  <div slot="title">Would you like to reconcile by attribute or by object</div>
                  <div slot="link">
                    <calcite-button text="By Attribute" id="by-attribute" onClick={reconcileByAttribute}>By Attribute</calcite-button>
                    <calcite-button text="By Object" id="by-object" onClick={reconcileByObject}>By Object</calcite-button>
                  </div>
                </calcite-notice>
                  <CalciteNotice icon="exclamation-mark-triangle" id="save-revert-notice" slot="footer" kind="warning">
                    <div slot="title">Save or Revert changes!</div>
                    <div slot="message">Saving edits will save all edits to current version. Reverting will discard all edits in this edit session.
                    </div>
                    <div slot="link">
                      <CalciteButton onClick={stopEditingRevertEdits} text="Revert" appearance="outline" id="revert-notice-btn">Revert</CalciteButton>
                      <CalciteButton onClick={stopEditingSaveEdits} text="Save" id="save-notice-btn">Save</CalciteButton>
                    </div>
                  </CalciteNotice>
                  <CalciteNotice icon="exclamation-mark-triangle" id="change-version-notice" slot="footer" kind="warning">
                    <div slot="title">Version switching is not allowed while in an edit session</div>
                    <div slot="message">Please stop edit session to enable version switching
                    </div>
                    <div slot="link">
                      <CalciteButton text="Okay" onClick={okayButtonFunction} id="okay">Okay</CalciteButton>
                    </div>
                  </CalciteNotice>
                </CalciteFlowItem>
              </CalciteFlow>
            </CalcitePanel>
          </div>
        </>
    );
  };
  
  export default SessionManagement;
