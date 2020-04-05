export const $ = selector => document.querySelector(selector);

export function setAttr(elem, attrName, value) {
  const attr = document.createAttribute(attrName);
  attr.value = value;
  elem.setAttributeNode(attr);
}

export function validateArray(data) {
  if (!Array.isArray(data)) throw new Error("data must be Array");
}

export function validateConstructor() {
  if (!this) throw new Error(`call this function with 'new'`);
}

export function isStateEqual(curState, nextState) {
  return JSON.stringify(curState) === JSON.stringify(nextState);
}
