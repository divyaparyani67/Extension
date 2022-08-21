// background.js

let color = 'options';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ options});
  console.log('Default background color set to %cgreen', `color: ${options}`);
});