const btn = document.querySelector('.changeColorBtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');


//btn function defined
btn.addEventListener('click', async () => {  
    chrome.storage.sync.get('color', ({ color }) => {
        console.log('color: ', color);
    });
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: pickColor,
        },

        //injectionResults function defined
        async (injectionResults) => {
            const [data] = injectionResults;
            if (data.result) {
                const color = data.result.sRGBHex;
                colorGrid.style.backgroundColor = color;
                colorValue.innerText = color;
                try {
                    await navigator.clipboard.writeText(color);
                } catch (err) {
                    console.error(err);
                }
            }
        }
    );
});

//pickcolor function defined
async function pickColor() {
    try {
        // Picker
        const eyeDropper = new EyeDropper(); //eyedropper 
        return await eyeDropper.open();
    } catch (err) {
        console.error(err);
    }
}