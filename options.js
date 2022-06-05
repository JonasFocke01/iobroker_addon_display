async function saveOptions(e) {
  e.preventDefault();

  const iobrokerInstanceUrl = Number(
    document.getElementById("iobrokerInstanceUrl").value
  );

  const settings = {
    iobrokerInstanceUrl,
  };

  browser.storage.sync.set(options);
}

async function loadOptions() {
  const options = await browser.storage.sync.get();
  document.getElementById("iobrokerInstanceUrl").value =
    options.iobrokerInstanceUrl;
}

document.addEventListener("DOMContentLoaded", loadOptions);
document.getElementById("myForm").addEventListener("submit", saveOptions);