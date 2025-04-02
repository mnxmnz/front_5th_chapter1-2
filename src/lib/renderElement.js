import { setupEventListeners } from "./eventManager";
import { createElement } from "./createElement";
import { normalizeVNode } from "./normalizeVNode";
// import { updateElement } from "./updateElement";

export function renderElement(vNode, container) {
  const normalizedVNode = normalizeVNode(vNode);
  const $el = createElement(normalizedVNode);

  // 기존 내용을 지우고 새로운 내용으로 교체
  container.innerHTML = "";
  container.appendChild($el);

  // 이벤트 위임을 사용하여 최상위 컨테이너에 하나의 리스너만 등록
  setupEventListeners(container);
}
