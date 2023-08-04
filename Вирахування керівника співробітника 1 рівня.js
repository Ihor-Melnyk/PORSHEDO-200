function setManagerByEmployee() {
  const manager = EdocsApi.getEmployeeManagerByEmployeeID(EdocsApi.getAttributeValue("employee").value, 1);
  if (manager) {
    EdocsApi.setAttributeValue({ code: "DirectorInityatorUnit1", value: manager.shortName, text: null });
  }
}

function setIDorder_copy() {
  const idOrder = EdocsApi.getAttributeValue("IDorder");
  if (idOrder.value) {
    idOrder.code = "IDorder_copy";
    EdocsApi.setAttributeValue(idOrder);
  }
}

function onBeforeCardSave() {
  setManagerByEmployee();
  setIDorder_copy();
}
