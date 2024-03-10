import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import "qrcode";
import { a as autoModeWatcher } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { t as title } from "../../../chunks/titleStore.js";
const QRCodeImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Hello World" } = $$props;
  let { generator = "node-qrcode" } = $$props;
  let { tagType = "img" } = $$props;
  let { displayType = "img" } = $$props;
  let { displayWidth = null } = $$props;
  let { displayHeight = null } = $$props;
  let { displayStyle = null } = $$props;
  let { altText = "QR Code" } = $$props;
  let { displayID = null } = $$props;
  let { displayClass = null } = $$props;
  let { margin = 4 } = $$props;
  let { scale = 4 } = $$props;
  let { width = void 0 } = $$props;
  let { errorCorrectionLevel = "M" } = $$props;
  let { version = void 0 } = $$props;
  let _generatedImgURL = "";
  let _canvasElement;
  let _imgTagID = displayID;
  let _canvasTagID = displayID;
  function getImageURL() {
    return _generatedImgURL;
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.generator === void 0 && $$bindings.generator && generator !== void 0)
    $$bindings.generator(generator);
  if ($$props.tagType === void 0 && $$bindings.tagType && tagType !== void 0)
    $$bindings.tagType(tagType);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0)
    $$bindings.displayType(displayType);
  if ($$props.displayWidth === void 0 && $$bindings.displayWidth && displayWidth !== void 0)
    $$bindings.displayWidth(displayWidth);
  if ($$props.displayHeight === void 0 && $$bindings.displayHeight && displayHeight !== void 0)
    $$bindings.displayHeight(displayHeight);
  if ($$props.displayStyle === void 0 && $$bindings.displayStyle && displayStyle !== void 0)
    $$bindings.displayStyle(displayStyle);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  if ($$props.displayID === void 0 && $$bindings.displayID && displayID !== void 0)
    $$bindings.displayID(displayID);
  if ($$props.displayClass === void 0 && $$bindings.displayClass && displayClass !== void 0)
    $$bindings.displayClass(displayClass);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.errorCorrectionLevel === void 0 && $$bindings.errorCorrectionLevel && errorCorrectionLevel !== void 0)
    $$bindings.errorCorrectionLevel(errorCorrectionLevel);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.getImageURL === void 0 && $$bindings.getImageURL && getImageURL !== void 0)
    $$bindings.getImageURL(getImageURL);
  return `${displayType === "img" ? `<img${add_attribute("src", _generatedImgURL, 0)}${add_attribute("alt", altText, 0)}${add_attribute("width", displayWidth, 0)}${add_attribute("height", displayHeight, 0)}${add_attribute("style", displayStyle, 0)}${add_attribute("id", _imgTagID, 0)}${add_attribute("class", displayClass, 0)}>` : `${displayType === "canvas" ? `<div><canvas${add_attribute("style", displayStyle, 0)}${add_attribute("width", displayWidth, 0)}${add_attribute("height", displayHeight, 0)}${add_attribute("id", _canvasTagID, 0)}${add_attribute("class", displayClass, 0)}${add_attribute("this", _canvasElement, 0)}></canvas>
        
        <img src=""${add_attribute("alt", altText, 0)} style="position: absolute; top: 0; left: 0; opacity: 0;"></div>` : ``}`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".textarea.m-2.svelte-6fuqqh:not(:focus){border-color:#1f1f29 !important}",
  map: null
};
function isValid(tex2) {
  return tex2 !== "";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tex = "";
  title.set("QR Code Generator");
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13st50g_START --><!-- HTML_TAG_START -->${"<script>(" + autoModeWatcher.toString() + ")();<\/script>"}<!-- HTML_TAG_END --><!-- HEAD_svelte-13st50g_END -->`, ""}




<div style="display: grid; justify-content: center;"><div class="card p-4 variant-glass-surface m-2 shadow-xl" style="width: 340px; "><form style="display: grid; justify-content: center;"><textarea class="textarea m-2 shadow-xl svelte-6fuqqh" rows="2" style="width: 300px; background: rgba(75,75,75,0.01); -webkit-backdrop-filter: blur(23px); backdrop-filter: blur(23px); " id="text_0" placeholder="Text">${escape("")}</textarea></form> 
	<br>

${isValid(tex) ? `<p style="display: grid; justify-content: center;">${validate_component(QRCodeImage, "QRCodeImage").$$render(
    $$result,
    {
      text: tex,
      width: 160,
      height: 160,
      margin: 1
    },
    {},
    {}
  )}</p>` : `<p style="display: grid; justify-content: center;">Please enter some text.</p>`}</div> </div>`;
});
export {
  Page as default
};
