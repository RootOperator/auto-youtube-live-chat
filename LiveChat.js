// ==UserScript==
// @name     Live Chat
// @version  1
// @author   RootOperator
// @match https://www.youtube.com/live_chat*
// @match https://www.youtube.com/live_chat_replay*
// ==/UserScript==

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function check_chat() {
   if (document.getElementById("chat")) {
     if (document.getElementById('label-text').innerText == "Top chat") {
         let livechat = getElementByXpath('/html/body/yt-live-chat-app/div/yt-live-chat-renderer/iron-pages/div/yt-live-chat-header-renderer/div[1]/span[2]/yt-sort-filter-sub-menu-renderer/yt-dropdown-menu/tp-yt-paper-menu-button/tp-yt-iron-dropdown/div/div/tp-yt-paper-listbox/a[2]/tp-yt-paper-item/tp-yt-paper-item-body/div[1]')
         livechat.click()
     }
   }
}

setInterval(check_chat, 1000);
