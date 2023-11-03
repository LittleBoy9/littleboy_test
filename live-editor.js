const targetLanguageOptions = [
  {
    title: "English",
    value: "English",
  },
  {
    title: "Spanish",
    value: "Spanish",
  },
  {
    title: "French",
    value: "French",
  },
  {
    title: "German",
    value: "German",
  },
  {
    title: "Italian",
    value: "Italian",
  },
  {
    title: "Japanese",
    value: "Japanese",
  },
  {
    title: "Chinese",
    value: "Chinese",
  },
  {
    title: "Russian",
    value: "Russian",
  },
];

window.foundItems = [];
window.mode = "edit";
window.elementBorderStyle = "";
window.modalElements = [];
window.placeholderElements = {};
let targetLan = "Languages";

const createBackButton = () => {
  const svgContainer = document.createElement("div");
  svgContainer.id = "vira_lv_back_svg_container";
  // Create SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "16");
  svgElement.setAttribute("height", "16");
  svgElement.setAttribute("viewBox", "0 0 16 16");
  svgElement.setAttribute("fill", "none");

  // Create path element and set attributes
  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.setAttribute("d", "M15 8H1M1 8L8 15M1 8L8 1");
  pathElement.setAttribute("stroke", "#3F3F46");
  pathElement.setAttribute("stroke-width", "2");
  pathElement.setAttribute("stroke-linecap", "round");
  pathElement.setAttribute("stroke-linejoin", "round");

  // Append path to SVG
  svgElement.appendChild(pathElement);

  svgContainer.appendChild(svgElement);

  // Add click event listener
  svgElement.addEventListener("click", () => {
    console.log("back SVG Clicked!");
  });

  return svgElement;
};

const createCheckButton = () => {
  const svgContainer = document.createElement("div");
  svgContainer.id = "vitra_lv_check_svg-container";
  // Create SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "24");
  svgElement.setAttribute("height", "24");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");

  // Create path element and set attributes
  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.setAttribute(
    "d",
    "M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
  );
  pathElement.setAttribute("stroke", "#51525C");
  pathElement.setAttribute("stroke-width", "2");
  pathElement.setAttribute("stroke-linecap", "round");
  pathElement.setAttribute("stroke-linejoin", "round");

  // Append path to SVG
  svgElement.appendChild(pathElement);
  svgElement.style.margin = "0px 7px";

  svgContainer.appendChild(svgElement);

  // Add click event listener
  svgElement.addEventListener("click", () => {
    console.log("check SVG Clicked!");
  });

  return svgElement;
};

const createAddPeopleButton = () => {
  const svgContainer = document.createElement("div");
  svgContainer.id = "vitra_lv_add_people_svg-container";
  // Create SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "24");
  svgElement.setAttribute("height", "24");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");

  // Create path element and set attributes
  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.setAttribute(
    "d",
    "M19 10V4M16 7H22M16 21V19.8C16 18.1198 16 17.2798 15.673 16.638C15.3854 16.0735 14.9265 15.6146 14.362 15.327C13.7202 15 12.8802 15 11.2 15H6.8C5.11984 15 4.27976 15 3.63803 15.327C3.07354 15.6146 2.6146 16.0735 2.32698 16.638C2 17.2798 2 18.1198 2 19.8V21M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z"
  );
  pathElement.setAttribute("stroke", "#51525C");
  pathElement.setAttribute("stroke-width", "2");
  pathElement.setAttribute("stroke-linecap", "round");
  pathElement.setAttribute("stroke-linejoin", "round");

  // Append path to SVG
  svgElement.appendChild(pathElement);
  svgElement.style.margin = "0px 7px";

  svgContainer.appendChild(svgElement);

  // Add click event listener
  svgElement.addEventListener("click", () => {
    console.log("add people SVG Clicked!");
  });

  return svgElement;
};

const makeItLiveClicked = () => {
  console.log("make it live clicked!");
};

const createMakeItLiveButton = () => {
  const makeItLiveButton = document.createElement("button");
  makeItLiveButton.classList.add("vitra_le_mark-it-live-button");
  makeItLiveButton.innerText = "Make It Live";
  makeItLiveButton.id = "vitra_make_it_live";
  return makeItLiveButton;
};

const createProfileButton = () => {
  const profileButton = document.createElement("button");
  profileButton.classList.add("vitra_le_profile_button");

  profileButton.innerText = "Z";

  return profileButton;
};

const createTopFirstBar = () => {
  const topFirstBar = document.createElement("div");
  topFirstBar.style.backgroundColor = "#FFFFFF";
  topFirstBar.style.height = "30px";
  //  topMainBar.style.zIndex = "9999999";
  topFirstBar.style.width = "100%";
  topFirstBar.style.lineHeight = "30px";
  topFirstBar.style.paddingLeft = "15px";
  topFirstBar.style.paddingRight = "5px";

  topFirstBar.style.margin = "8px 0px";

  return topFirstBar;
};

const createTopFirstBarRightDiv = () => {
  const topFirstBarRightDiv = document.createElement("div");
  topFirstBarRightDiv.classList.add("vitra_le-top-bar-right-div");

  // topFirstBarRightDiv.style.backgroundColor = "red";
  const checkSvgElement = createCheckButton();
  const addPeopleElement = createAddPeopleButton();
  const makeItLiveElement = createMakeItLiveButton();
  const profileElement = createProfileButton();

  topFirstBarRightDiv.append(checkSvgElement);
  topFirstBarRightDiv.append(addPeopleElement);
  topFirstBarRightDiv.append(makeItLiveElement);
  topFirstBarRightDiv.append(profileElement);

  return topFirstBarRightDiv;
};

const createSecondBar = () => {
  const topSecondBar = document.createElement("div");
  topSecondBar.classList.add("vitra_le_top-second-bar")


  const topSecondBarAnchor = document.createElement("a");
  topSecondBarAnchor.style.fontSize = "1em";
  topSecondBarAnchor.style.marginLeft = "2px";
  topSecondBarAnchor.style.color = "#8143FD";
  //   topSecondBarAnchor.href = '/home/index' ;
  //    topSecondBarAnchor.innerHTML= '<i class="fas fa-chevron-left"></i>';
  topSecondBarAnchor.style.textDecoration = "underline";

  topSecondBarAnchor.innerText = "Upgrade now";
  topSecondBarAnchor.id = "vitra_le_upgrade_now";

  const topSecondBarText = document.createElement("p");
  topSecondBarText.style.fontSize = ".8em";
  topSecondBarText.innerText = "You got only 230 words of translation left";
  topSecondBarText.id = "vitra_translation_left";

  topSecondBarText.append(topSecondBarAnchor);

  topSecondBar.append(topSecondBarText);

  return topSecondBar;
};

const filterLanguages = () => {
  const searchInput = document.querySelector(
    "#vitra_lv_target_langs_dropdown_search"
  );
  const dropdownContent = document.querySelector(
    "#vitra_lv_target_langs_dropdown"
  );
  const dropdownItems = dropdownContent.querySelectorAll("div");

  const filterText = searchInput.value.toLowerCase();

  for (const item of dropdownItems) {
    const itemText = item.textContent.toLowerCase();
    if (itemText.indexOf(filterText) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
};
const createLanguageDropdownContent = () => {
  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("vitra_le_dropdown-content");
  dropdownContent.id = "vitra_lv_target_langs_dropdown";
  dropdownContent.setAttribute("show", "false");

  // Create and add input search box
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search the language you want to translate to";
  searchInput.id = "vitra_lv_target_langs_dropdown_search";
  searchInput.classList.add("vitra_lv-target-langs-dropdown-search");

  searchInput.addEventListener("input", (event) => {
    filterLanguages();
    // event.stopPropagation();
  });

  // Prevent dropdown from closing when clicking on the search input
  searchInput.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  dropdownContent.appendChild(searchInput);

  // Create and add dropdown items in two columns

  const columnCount = 2; // Number of columns
  const itemsPerColumn = Math.ceil(targetLanguageOptions.length / columnCount);

  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement("div");
    column.style.columnCount = columnCount;

    // Adjust column layout for odd number of items
    if (
      targetLanguageOptions.length % columnCount !== 0 &&
      i === columnCount - 1
    ) {
      column.style.columnWidth = "100%";
    } else {
      column.style.columnWidth = "50%";
    }

    for (
      let j = i * itemsPerColumn;
      j < (i + 1) * itemsPerColumn && j < targetLanguageOptions.length;
      j++
    ) {
      const itemText = targetLanguageOptions[j].title;
      const dropdownItem = document.createElement("div");
      dropdownItem.textContent = itemText;
      dropdownItem.style.padding = "8px";
      column.appendChild(dropdownItem);

      dropdownItem.addEventListener("click", (e) => {
        ///  dropdownContent.style.display = "none"; // Close the dropdown
        const targetLangsDropdownButtonText = document.querySelector(
          "#vitra_lv_target_langs_dropdown_button_text"
        );
        console.log("targetLangsDropdownButtonText ",targetLangsDropdownButtonText)
       targetLan = e.target.innerText;
        targetLangsDropdownButtonText.innerText = e.target.innerText;

        const targetLangsDropdown = document.querySelector(
          "#vitra_lv_target_langs_dropdown"
        );

        console.log("targetLangsDropdown 1 ", targetLangsDropdown);

        if (targetLangsDropdown) {
          targetLangsDropdown.style.display = "none";
        }
      });
    }

    dropdownContent.appendChild(column);
  }

  return dropdownContent;
};

const createLanguageButton = () => {
  const langDropdownButton = document.createElement("button");
  langDropdownButton.classList.add("vitra_le-lang-dropdown-button");

  const searchIcon = createLanguageIcon(14,16,"#3F3F46");
  console.log(searchIcon);

  // Create a text node for "Find & Replace"
  const textSpan = document.createElement("p");
  textSpan.style.marginLeft = '5px'
  textSpan.innerText = targetLan;
  textSpan.id = "vitra_lv_target_langs_dropdown_button_text";

  langDropdownButton.style.display = "flex";
  langDropdownButton.style.alignItems = "center";
  langDropdownButton.style.justifyContent = "space-between";

  langDropdownButton.appendChild(searchIcon);
  langDropdownButton.appendChild(document.createTextNode(" "));
  langDropdownButton.appendChild(textSpan);

  // langDropdownButton.setAttribute("disabled", false);


  langDropdownButton.id = "vitra_lv_target_langs_dropdown_button";

  const dropdownContent = createLanguageDropdownContent();

  console.log("_langDropdownButton -->", langDropdownButton);

  langDropdownButton.addEventListener("click", () => {
    console.log("_sdaf --> ", dropdownContent);
    // dropdownContent.style.display = "block";
    const dropdownContentElement = document.querySelector(
      "#vitra_lv_target_langs_dropdown"
    );
    console.log("_dropdownContentElement", dropdownContentElement);
    if (
      dropdownContentElement &&
      dropdownContentElement.style.display === "none"
    ) {
      dropdownContentElement.style.display = "block";
    } else {
      dropdownContentElement.style.display = "none";
    }
  });

  //  langDropdownButton.appendChild(dropdownContent);
  document.body.append(dropdownContent);

  return langDropdownButton;
};

const createEditAndBrowseButton = () => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("vitra_le_edit-browse-container");

  const editButton = document.createElement("button");
  editButton.classList.add("vitra_le_edit-button");
  editButton.innerText = "Edit";
  editButton.setAttribute("id", "vitra_lv_edit_btn");

  const browseButton = document.createElement("button");
  browseButton.classList.add("vitra_le_browse-button");

  browseButton.innerText = "Browse";
  browseButton.setAttribute("id", "vitra_lv_browse_btn");

  editButton.addEventListener("click", () => {
    if (window.mode === "browse") {
      console.log(window.mode + " -> " + " edit");
      window.mode = "edit";

      browseButton.style.backgroundColor = "Transparent";
      browseButton.style.color = "#70707B";

      // const _Button = document.querySelector("#vitra_lv_edit_btn");
      editButton.style.backgroundColor = "#ffffff";
      editButton.style.color = "#000000";

      const _langChangeButton = document.querySelector(
        "#vitra_lv_target_langs_dropdown_button"
      );
      _langChangeButton.setAttribute("disabled", false);

      const _findAndReplaceButton = document.querySelector(
        "#vitra_le_find_and_replace_button"
      );
      _findAndReplaceButton.setAttribute("disabled", false);

      console.log("_langChangeButton ", _langChangeButton);
      console.log("_findAndReplaceButton ", _findAndReplaceButton);
    }
  });

  browseButton.addEventListener("click", () => {
    if (window.mode === "edit") {
      console.log(window.mode + " -> " + "browse");
      window.mode = "browse";
      editButton.style.backgroundColor = "Transparent";
      editButton.style.color = "#70707B";
      // const _Button = document.querySelector("#vitra_lv_edit_btn");
      browseButton.style.backgroundColor = "#ffffff";
      browseButton.style.color = "#000000";
      const _langChangeButton = document.querySelector(
        "#vitra_lv_target_langs_dropdown_button"
      );
      _langChangeButton.setAttribute("disabled", true);
      const _findAndReplaceButton = document.querySelector(
        "#vitra_le_find_and_replace_button"
      );
      _findAndReplaceButton.setAttribute("disabled", true);
      console.log("_langChangeButton ", _langChangeButton);
      console.log("_findAndReplaceButton ", _findAndReplaceButton);
    }
  });

  containerDiv.append(editButton);
  containerDiv.append(browseButton);

  return containerDiv;
};
// Function to replace one matching content in passed nodes
replaceOneMatchingContent = (nodes, searchString, replaceString) => {
  console.log(nodes, searchString, replaceString);
  if (nodes.length === 0) {
    return;
  }

  const originalHTML = nodes[0].innerHTML;
  const replacedHTML = originalHTML.replace(
    new RegExp(searchString, "gi"),
    replaceString
  );

  // Update the innerHTML of the node with the replaced content
  nodes[0].innerHTML = replacedHTML;

  const removedNode = nodes.shift();
  console.log("### removedNode ", removedNode);
  console.log("### nodes ", nodes);
  window.foundItems = [...nodes];
  renderDataInsideDiv([...nodes]);

  // const find_input  = document.querySelector('#vitra_le_find_input');
  // find_input.value = ''
  // const replace_input  = document.querySelector('#vitra_le_replace_input');
  // replace_input.value = ''
};

// Function to replace all matching content in passed nodes
const replaceAllMatchingContent = (nodes, searchString, replaceString) => {
  console.log(nodes, searchString, replaceString);
  for (const node of nodes) {
    const originalHTML = node.innerHTML;
    const replacedHTML = originalHTML.replace(
      new RegExp(searchString, "gi"),
      replaceString
    );

    // Update the innerHTML of the node with the replaced content
    node.innerHTML = replacedHTML;
  }
  window.foundItems = [];
  renderDataInsideDiv([]);

  const find_input = document.querySelector("#vitra_le_find_input");
  find_input.value = "";
  const replace_input = document.querySelector("#vitra_le_replace_input");
  replace_input.value = "";
};

const renderDataInsideDiv = (foundItems) => {
  const findAndReplaceContent = document.querySelector(
    "#vitra_le_find_and_replace_content"
  );

  console.log("findAndReplaceContent ", findAndReplaceContent);

  if (findAndReplaceContent) {
    findAndReplaceContent.innerHTML = "";
    for (const item of foundItems) {
      console.log(typeof item);
      console.log({ ...item });
      const dropdownItem = document.createElement("div");

      dropdownItem.style.maxHeight = "50px"; // Set maximum height
      dropdownItem.style.maxWidth = "180px";
      dropdownItem.style.overflow = "hidden"; // Hide overflowing content
      dropdownItem.style.textOverflow = "ellipsis"; // Show ellipsis for overflowing text
      dropdownItem.style.whiteSpace = "nowrap"; // Prevent text from wrapping
      dropdownItem.id = "vitra_found_item";

      dropdownItem.textContent = item.innerHTML;

      dropdownItem.style.padding = "8px";

      console.log(
        "dropdownItem ",
        dropdownItem.getAttribute("vitra_find_marked")
      );
      // if(dropdownItem.id !== 'vitra_found_item'){

      findAndReplaceContent.appendChild(dropdownItem);
      // Attach click event to each dropdown item
      dropdownItem.addEventListener("click", () => {
        // Do something when an item is clicked
      });
      // }
    }
  }
};

const createFindAndReplaceData = () => {
  const findAndReplaceContent = document.createElement("div");

  findAndReplaceContent.classList.add("vitra-le-find-and-replace-content");

  findAndReplaceContent.id = "vitra_le_find_and_replace_content";

  // for (const itemText of foundItems) {
  //   const dropdownItem = document.createElement("div");
  //   dropdownItem.textContent = itemText;
  //   dropdownItem.style.padding = "8px";
  //   findAndReplaceContent.appendChild(dropdownItem);

  //   // Attach click event to each dropdown item
  //   dropdownItem.addEventListener("click", () => {
  //     // Do something when an item is clicked
  //   });
  // }

  return findAndReplaceContent;
};

const createSearchIcon = () => {
  // Create an SVG element
  var svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "18");
  svgElement.setAttribute("height", "18");
  svgElement.setAttribute("viewBox", "0 0 18 18");
  svgElement.setAttribute("fill", "none");

  // Create a path element and set its attributes
  var pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.setAttribute(
    "d",
    "M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
  );
  pathElement.setAttribute("stroke", "#3F3F46");
  pathElement.setAttribute("stroke-width", "2");
  pathElement.setAttribute("stroke-linecap", "round");
  pathElement.setAttribute("stroke-linejoin", "round");

  // Append the path element to the SVG element
  svgElement.appendChild(pathElement);

  return svgElement;
};

const markMatchingNodeValue = (node, searchString) => {
  // console.log("node ", node.id)
  const matchingNodes = [];
  if (
    node.tagName === "SCRIPT" ||
    node.tagName === "STYLE" ||
    node.tagName === "NOSCRIPT" ||
    node.tagName === "svg" ||
    // node.tagName !== undefined ||
    node.id?.includes("vitra")
  ) {
    // return;
    // return matchingNodes;
  } else if (node.nodeType === 3) {
    if (searchString.trim().length === 0) {
      // If searchString is empty, clear the "vitra_find_marked" attribute and styles
      if (node.parentElement.getAttribute("vitra_find_marked") === "true") {
        node.parentElement.setAttribute("vitra_find_marked", "false");
        node.parentElement.style.backgroundColor = "#B9E6FE";
        //  node.parentElement.style.border = "#0BA5EC";
        window.foundItems = [];
        console.log("empty matchingNodes -> ", matchingNodes);
        renderDataInsideDiv([]);
        return matchingNodes;
      }
    } else if (
      node !== undefined &&
      node.nodeValue.toLowerCase().includes(searchString.toLowerCase())
    ) {
      console.log(
        "11111111111",
        node.parentElement.getAttribute("vitra_find_marked")
      );
      console.log("node ", node.parentElement);
      // const parentElement = node.parentElement;
      if (
        node.parentElement.getAttribute("vitra_find_marked") !== "true" &&
        !node.parentElement.id?.includes("vitra")
      ) {
        node.parentElement.setAttribute("vitra_find_marked", "true");
        console.log("000000 ", node.parentElement.id);
        node.parentElement.style.backgroundColor = "#ffff00";
        console.log("matchingNodes before >", matchingNodes);
        matchingNodes.push(node.parentElement); // Add the matching node to the array
        console.log("matchingNodes after >", matchingNodes);
      }
    } else {
      console.log(
        "vitra_find_marked ->",
        node.parentElement.getAttribute("vitra_find_marked")
      );
      if (node.parentElement.getAttribute("vitra_find_marked") === "true") {
        node.parentElement.setAttribute("vitra_find_marked", "false");
        node.parentElement.style.backgroundColor = "#B9E6FE";
        //  node.parentElement.style.border = "#0BA5EC";
        // matchingNodes = []
      }
    }
  } else if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
    // console.log("node-- 3 node ", node);
    // const placeHolderVal = node.getAttribute("placeholder");
    // if (placeHolderVal && placeHolderVal.includes(searchString)) {
    //   //
    // }
  }

  const childNodes = node.childNodes;

  for (let i = 0; i < childNodes.length; i++) {
    const _matchingNodes = markMatchingNodeValue(childNodes[i], searchString);
    matchingNodes.push(..._matchingNodes);
  }

  return matchingNodes; // Return the array of matching nodes
};
function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(">>> cslled");
      func.apply(this, args);
    }, timeout);
  };
}
function searchInputVal(event) {
  window.foundItems = [];
  console.log("___Saving data", event);
  if (event.target.value?.endsWith(" ")) {
    event.stopPropagation();
    const findAndReplaceContent = document.querySelector(
      "#vitra_le_find_and_replace_dropdown"
    );
    findAndReplaceContent.setAttribute("show", "false");
    findAndReplaceContent.style.display = "block";
    // console.log("found vlnck")
  }

  console.log("search val --", event.target.value);
  // console.log(">>> window.foundItems", window.foundItems)
  const data = markMatchingNodeValue(document.body, event.target.value);
  console.log(">>>_data", data);
  console.log(">>> window.foundItems before ", window.foundItems);
  window.foundItems = [...window.foundItems, ...data];
  console.log(">>> window.foundItems afetr ", window.foundItems);
  if (data.length > 0) {
    console.log(">>>_inside ", window.foundItems);

    renderDataInsideDiv(window.foundItems);
  }
}

const inputChange = debounce(searchInputVal);

const createFindAndReplaceContent = () => {
  const findAndReplaceContent = document.createElement("div");
  findAndReplaceContent.id = "vitra_le_find_and_replace_dropdown";
  findAndReplaceContent.classList.add("vitra_le-find-and-replace-dropdown");

  const findInput = document.createElement("input");
  findInput.type = "text";
  findInput.placeholder = "Find";
  findInput.style.width = "88%";
  findInput.style.padding = "8px";
  findInput.style.border = "1px solid #E4E4E7";
  findInput.style.borderRadius = "8px";
  findInput.id = "vitra_le_find_input";
  findAndReplaceContent.appendChild(findInput);

  // Prevent dropdown from closing when clicking on the search input
  findInput.addEventListener("click", (event) => {
    event.stopPropagation();
    // console.log(event.target)
  });

  findInput.addEventListener("keyup", (event) => {
    if (event.key === " ") {
      event.preventDefault(); // Prevent the default spacebar behavior
      return;
    }
    console.log("input event fired", event.target.value);
    inputChange(event);
  });

  // searchButton.addEventListener("click", (event) => {
  //   console.log("input event fired", event.target.value);
  //   inputChange(event);
  // });

  // findAndReplaceContent.appendChild(searchButton)

  const replaceInput = document.createElement("input");
  replaceInput.type = "text";
  replaceInput.placeholder = "Replace";
  replaceInput.style.width = "88%";
  replaceInput.style.padding = "8px";
  replaceInput.style.border = "none";
  replaceInput.style.borderRadius = "8px";
  replaceInput.style.marginTop = "10px"; // Add some spacing between inputs
  replaceInput.id = "vitra_le_replace_input";
  findAndReplaceContent.appendChild(replaceInput);

  const replaceButton = document.createElement("button");
  replaceButton.style.backgroundColor = "Transparent";
  replaceButton.style.color = "#000000";
  replaceButton.style.outline = "none";
  // replaceButton.style.border = "none";
  replaceButton.style.height = "38px";
  replaceButton.style.lineHeight = "30px";
  replaceButton.style.borderRadius = "8px";
  replaceButton.style.marginTop = "5px";
  replaceButton.style.marginBottom = "auto";

  replaceButton.style.border = "1px solid #E4E4E7";
  replaceButton.innerText = "Replace";
  replaceButton.style.cursor = "pointer";
  replaceButton.id = "vitra_replace";
  replaceButton.style.width = "-webkit-fill-available";

  replaceButton.addEventListener("click", () => {
    console.log(
      ">>>",
      window.foundItems + " - " + findInput.value + " - " + replaceInput.value
    );
    replaceOneMatchingContent(
      window.foundItems,
      findInput.value,
      replaceInput.value
    );
  });

  const replaceAllButton = document.createElement("button");
  replaceAllButton.style.backgroundColor = "Transparent";
  replaceAllButton.style.color = "#000000";
  replaceAllButton.style.outline = "none";
  replaceAllButton.style.height = "38px";
  // replaceAllButton.style.border = "none";
  replaceAllButton.style.marginTop = "8px";
  replaceAllButton.style.lineHeight = "25px";
  replaceAllButton.style.borderRadius = "8px";

  replaceAllButton.style.border = "1px solid #E4E4E7";
  replaceAllButton.innerText = "Replace all";
  replaceAllButton.style.cursor = "pointer";
  replaceAllButton.style.width = "-webkit-fill-available";
  replaceAllButton.id = "vitra_replace_all";

  replaceAllButton.addEventListener("click", () => {
    console.log(
      ">>>",
      window.foundItems + " - " + findInput.value + " - " + replaceInput.value
    );
    replaceAllMatchingContent(
      window.foundItems,
      findInput.value,
      replaceInput.value
    );
  });

  findAndReplaceContent.appendChild(replaceButton);
  findAndReplaceContent.appendChild(replaceAllButton);

  const findAndReplaceData = createFindAndReplaceData();
  console.log("_findAndReplaceData ", findAndReplaceData);

  findAndReplaceContent.appendChild(findAndReplaceData);
  // Prevent dropdown from closing when clicking on the search input
  replaceInput.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  return findAndReplaceContent;
};

const createFindAndReplaceButton = () => {
  // Create the button element
  const findAndReplaceButton = document.createElement("button");

  // Add classes or attributes to the button if neededvitra-lv-search-button
  findAndReplaceButton.classList.add("vitra-lv-find-and-replace-button");
  findAndReplaceButton.setAttribute("type", "button"); // Assuming it's not a submit button

  // Append the SVG icon to the button
  findAndReplaceButton.style.backgroundColor = "Transparent";
  findAndReplaceButton.style.color = "#000000";
  findAndReplaceButton.style.outline = "none";

  // findAndReplaceButton.style.border = "none";
  findAndReplaceButton.style.lineHeight = "25px";
  findAndReplaceButton.style.borderRadius = "8px";
  findAndReplaceButton.style.marginBottom = "auto";
  findAndReplaceButton.style.marginTop = "auto";
  findAndReplaceButton.style.border = "1px solid #E4E4E7";
  findAndReplaceButton.style.cursor = "pointer";
  findAndReplaceButton.id = "vitra_le_find_and_replace_button";

  findAndReplaceButton.style.margin = "0px 30px 0px 15px";
  // findAndReplaceButton.appendChild(searchIcon);

  const searchIcon = createSearchIcon();
  console.log(searchIcon);

  // Create a text node for "Find & Replace"
  const findAndReplaceButtontextNode =
    document.createTextNode("Find & Replace");

  findAndReplaceButton.style.display = "flex";
  findAndReplaceButton.style.alignItems = "center";
  findAndReplaceButton.style.justifyContent = "space-between";

  findAndReplaceButton.appendChild(searchIcon);
  findAndReplaceButton.appendChild(document.createTextNode(" "));
  findAndReplaceButton.appendChild(findAndReplaceButtontextNode);

  // findAndReplaceButton.appendChild(searchIcon);
  // findAndReplaceButton.innerText = "Find & Replace";

  console.log(findAndReplaceButton);

  const findAndReplaceContent = createFindAndReplaceContent();
  console.log("findAndReplaceContent ", findAndReplaceContent);
  findAndReplaceButton.addEventListener("click", () => {
    console.log(
      "_findAndReplaceContent click",
      findAndReplaceContent.style.display
    );
    if (findAndReplaceContent.style.display === "none") {
      findAndReplaceContent.style.display = "block";
    } else {
      findAndReplaceContent.style.display = "none";
    }
  });

  findAndReplaceButton.appendChild(findAndReplaceContent);

  return findAndReplaceButton;
};

const createThirdBar = () => {
  const topThirdBar = document.createElement("div");
  topThirdBar.classList.add("vitra_le_third-bar");
  const langDropdown = createLanguageButton();
  const editAndBrowseButton = createEditAndBrowseButton();
  const findAndReplaceButton = createFindAndReplaceButton();
  topThirdBar.append(langDropdown);
  topThirdBar.append(editAndBrowseButton);
  topThirdBar.append(findAndReplaceButton);
  return topThirdBar;
};

const createBottomLeftTranslationItem = () => {
  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add('vitra_le-langs-dropdown')
  dropdownContent.id = "vitra_le_langs_dropdown";


  // Create and add dropdown items (single column)
  const dropdownItems = [
    "Japanese",
    "Korean",
    "Tatar",
    "Malayalam",
    "Pashto",
    "Hindi",
    "Chinese",
  ];
  let index = 1;
  for (const itemText of dropdownItems) {
    const dropdownItem = document.createElement("div");
    dropdownItem.classList.add('vitra_le-dropdown-item')
    dropdownItem.id = `vitra_le_dropdown_item_${index}`
    dropdownItem.textContent = itemText;
    
    dropdownContent.appendChild(dropdownItem);

    // Attach click event to each dropdown item
    dropdownItem.addEventListener("click", () => {
      // Perform action when an item is clicked
      console.log(`Clicked on "${itemText}"`);
    });
    index++;
  }

  return dropdownContent;
};


createLanguageIcon = (width, height, fillColor) => {
   // Create and append the provided SVG icon to the button
   const svgIcon = document.createElement("svg");
   svgIcon.innerHTML = `<svg width="${width}" height="${height}" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M16.8191 0.925052C17.4448 1.8758 18.3458 3.49465 18.8214 4.4454L16.7941 5.34475C16.2935 4.29122 15.5176 2.74946 14.8419 1.77302L16.8191 0.925052ZM19.9727 0C20.6234 0.950749 21.5495 2.59529 22 3.49465L19.9977 4.36831C19.4972 3.28908 18.6712 1.79871 17.9954 0.82227L19.9727 0ZM11.5631 1.54176C11.438 2.64668 11.3879 3.1863 11.3879 3.90578C11.3879 4.59957 11.3879 6.65525 11.3879 7.606H7.90899C7.90899 6.50107 7.90899 4.59957 7.90899 3.90578C7.90899 3.1863 7.88396 2.64668 7.70876 1.54176H11.5631ZM19.9977 6.9636C19.7975 7.52891 19.5973 8.50535 19.4972 9.01927C19.0717 11.4861 18.3959 13.9529 17.1695 16.2912C15.1672 20.0942 11.413 22.818 6.95791 24L4.35495 20.9165C5.48123 20.7109 6.85779 20.3255 7.88396 19.9143C9.96132 19.1178 12.1638 17.6017 13.5654 15.5203C14.8419 13.6445 15.4926 11.2034 15.7929 8.91649H3.37884C3.37884 9.81585 3.37884 11.8715 3.37884 12.6681C3.37884 13.2591 3.40387 14.0814 3.45392 14.5696H0C0.0750853 13.9272 0.125142 13.1049 0.125142 12.4111C0.125142 11.5889 0.125142 8.91649 0.125142 7.96574C0.125142 7.40043 0.100114 6.37259 0 5.75589C0.850967 5.85867 1.60182 5.88437 2.5529 5.88437H15.7429C16.7941 5.88437 17.3948 5.75589 17.8203 5.60171L19.9977 6.9636Z" fill="${fillColor}"/>
   </svg>
   `;

   return svgIcon;

}
const createBottomLeftTranslationButton = () => {
  const bottomLeftButton = document.createElement("button");
  bottomLeftButton.id = "vitra_lv_trans_bottom";
  bottomLeftButton.classList.add("vitra_lv-trans-bottom");

  const svgIcon = createLanguageIcon(22,24,"#E4E4E7") // send the width and height

 
  bottomLeftButton.appendChild(svgIcon);



  // Create and append the dropdown content
  const bottomLeftTranslationItem = createBottomLeftTranslationItem();
  bottomLeftButton.appendChild(bottomLeftTranslationItem);

  // Toggle dropdown visibility
  bottomLeftButton.addEventListener("click", () => {
    if (bottomLeftTranslationItem.style.display === "none") {
      bottomLeftTranslationItem.style.display = "block";
    } else {
      bottomLeftTranslationItem.style.display = "none";
    }
  });

  return bottomLeftButton;
};

let modal;
const markAndAddEventListener = (node) => {
  node.parentElement.setAttribute("vitra_marked", "true");
  node.parentElement.setAttribute("vitra_find_marked", "false");

  node.parentElement.style.backgroundColor = "#B9E6FE";
  // node.parentElement.style.border = "3px solid #0BA5EC";
  // Toggle dropdown visibility
  node.parentElement.addEventListener("click", (e) => {
    console.log("node.parentElement", node.parentElement);
    console.log("node -> ", node);

    e.preventDefault();
    console.log("node.parentElement", node.parentElement);
    console.log("node -> ", node);

    window.elementBorderStyle = node.parentElement.style.border; // saving prev style
    node.parentElement.setAttribute("vitra_le_border_marked", "true");
    node.parentElement.style.border = "3px solid #0BA5EC";

    if (node.nodeType === 3) {
      // openModal(modal, node.parentElement, true);
      openModal(modal, node.parentElement, false);
    } else if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
      // node.disabled = true
      console.log("node88888--->", window.placeholderElements);
      // console.log("node-->", node.placeholder);
      console.log("node-8->", node.getAttribute("vitra_pl_id"));

      node.setAttribute(
        "vitra_placeholder",
        window.placeholderElements[node.getAttribute("vitra_pl_id")]
      );

      console.log("node8888888888", node);
      if (window.placeholderElements) {
        // const foundNode = window.placeholderElements.filter((e) => e.id === node);
        // console.log("node------", foundNode[0]);
        // if (foundNode.length > 0) {
        //   console.log("foundNode[0] ", foundNode[0]);
        //   node.setAttribute("vitra-placeholder", foundNode[0]?.placeholder);
        //   console.log("node >>>", node);
        //   //  openModal(modal, node, false);
        //   openModal(modal, node);
        // }
        openModal(modal, node, true);
      }
    }
  });
};

const storePlaceHolderDetails = (node) => {
  console.log("not 3 ", node);
  const placeHolderVal = node.getAttribute("placeholder");
  console.log("not 3 placeHolderVal ", placeHolderVal);
  const _id = crypto.randomUUID();
  node.setAttribute("vitra_pl_id", `${_id}`);
  window.placeholderElements[_id] = placeHolderVal ? placeHolderVal : "...";
};

const markTextElement = (node) => {
  if (
    node.tagName === "SCRIPT" ||
    node.tagName === "STYLE" ||
    node.tagName === "NOSCRIPT" ||
    node.tagName === "svg" ||
    node.id?.includes("vitra")
  ) {
    return;
  }
  if (node.nodeType === 3) {
    if (node.nodeValue.trim().length !== 0) {
      if (node.parentElement.getAttribute("vitra_marked") !== "true") {
        markAndAddEventListener(node);
      }
    }
  } else if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
    storePlaceHolderDetails(node);
    const placeHolderVal = node.getAttribute("placeholder");
    if (placeHolderVal && placeHolderVal.trim().length !== 0) {
      // node.disabled = true
      markAndAddEventListener(node);
    }
  }
  const childNodes = node.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    markTextElement(childNodes[i]);
  }
  return;
};

function updateTranslationTable(_translation) {
  console.log("_translation ", _translation);
  const tableBody = document.createElement("tbody");
  // TODO: looping is commented
  // for (let i = 0; i < _translation.length; i++) {
  //  const rowId = i + 1;
  const rowId = 1; // TODO: remove when using for loop

  const tableRow = document.createElement("tr");
  // tableRow.style.backgroundColor = 'blue'
  tableRow.classList.add("vitra_le_tr");
  tableRow.classList.add("ve-no-translate");
  tableRow.style.fontSize = "18px";

  const tableDataSource = document.createElement("td");
  tableDataSource.classList.add("vitra_le_td");
  tableDataSource.classList.add("ve-no-translate");
  tableDataSource.style.width = "50%"; // Set the width to 47%
  tableDataSource.style.verticalAlign = "top"; // Align text to the top
  tableDataSource.innerText = _translation[0].source;
  tableDataSource.sourceText = _translation[0].source;
  // Add a vertical line between the two columns
  tableDataSource.style.borderRight = "1px solid #E4E0E7"; // Adjust the color and thickness as needed

  const tableDataTarget = document.createElement("td");
  // tableDataTarget.style.backgroundColor = 'red'
  tableDataTarget.classList.add("vitra_le_td");
  tableDataTarget.classList.add("ve-no-translate");
  tableDataTarget.style.width = "50%"; // Set the width to 47%
  tableRow.setAttribute("data-row-id", rowId); // Set the data attribute for the row

  // create text area
  const textArea = document.createElement("textarea");
  textArea.classList.add("vitra_le-textarea");
  textArea.id = "vitra_le_textarea";
  textArea.value = _translation[0].target;
  textArea.rows = "8";

  // const confirmButtonSpan = document.createElement('span');

  // confirmButtonSpan.innerHTML = '✓';
  // confirmButtonSpan.style.fontSize = '25px'
  // confirmButtonSpan.addEventListener('click' , () => {
  //   console.log("click")
  // })

  // const rowConfirm = document.createElement("td");
  // rowConfirm.classList.add("vitra_le_td");
  // rowConfirm.classList.add("ve-no-translate");

  // rowConfirm.style.width = "6%";
  // rowConfirm.style.display = 'flex';
  // rowConfirm.style.justifyContent = 'center'

  // rowConfirm.appendChild(confirmButtonSpan)

  tableDataTarget.appendChild(textArea);
  tableRow.appendChild(tableDataSource);
  tableRow.appendChild(tableDataTarget);
  //  tableRow.appendChild(rowConfirm)

  tableBody.classList.add("ve-table-body");
  tableBody.classList.add("ve-no-translate");
  tableBody.appendChild(tableRow);
  const table = document.querySelector(".vitra_le_table");
  table.appendChild(tableBody);
  // }
}

function geteachTextNode(node) {
  let text = [];
  console.log("> node ", node);
  console.log("> node.nodeType ", node.nodeType);
  if (node.nodeType === 3) {
    if (node.nodeValue.trim().length > 0) {
      text.push({
        originNode: node,
        source: node.nodeValue,
        target: node.nodeValue,
        confirm: false,
      });
    }
  }
  // console.log("node.nodeValue ", node.textContent);

  const childNodes = node.childNodes;
  console.log("childNodes ", childNodes);

  for (let i = 0; i < childNodes.length; i++) {
    const _nodeType = node.nodeType === 3 ? true : false;
    const childText = geteachTextNode(childNodes[i]);
    text.push(...childText);
  }

  console.log("text ", text);
  return text;
}

const updateTranslation = (modal) => {
  console.log(window.modalElements);
  console.log(window.modalElements[0].originNode.nodeValue);

  const textareaElement = document.querySelector("#vitra_le_textarea"); // update nodetype 3 nodevalue
  if (
    textareaElement &&
    window.modalElements[0].originNode &&
    window.modalElements[0].originNode.nodeValue !== null
  ) {
    // update nodetype 3 value
    window.modalElements[0].originNode.nodeValue = textareaElement.value;
  } else if (
    textareaElement &&
    window.modalElements[0].originNode &&
    window.modalElements[0].originNode.nodeValue === null
  ) {
    // update placeholder value
   
    const prevAttr =  window.modalElements[0].originNode.getAttribute('vitra_pl_id');
    console.log("prevAttr ",prevAttr)
    window.placeholderElements[prevAttr] = textareaElement.value;
   //  window.placeholderElements[originNode]
   window.modalElements[0].originNode.placeholder = textareaElement.value;
  }
  closeModal(modal);
};

const ellipsisSVG = () => {
  // Create the SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "12");
  svgElement.setAttribute("height", "12");
  svgElement.setAttribute("viewBox", "0 0 12 12");

  // Create the circle element
  const circleElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circleElement.setAttribute("cx", "6");
  circleElement.setAttribute("cy", "6");
  circleElement.setAttribute("r", "6");
  circleElement.setAttribute("fill", "#51525C");

  // Append the circle element to the SVG element
  svgElement.appendChild(circleElement);

  return svgElement;
};

const createModal = () => {
  modal = document.createElement("div");
  modal.id = "vitra_le_modal";
  modal.classList.add("vitra_le_modal");
  modal.classList.add("ve-no-translate");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("tabindex", "-1");

  const modalInner = document.createElement("div");
  modalInner.classList.add("vitra_le_model-inner");
  modalInner.classList.add("ve-no-translate");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("vitra_le_modal-header");
  modalHeader.classList.add("ve-no-translate");

  const modalTitle = document.createElement("span");
  modalTitle.innerText = "";
  modalTitle.classList.add("ve-no-translate");

  const modalClose = document.createElement("div");
  modalClose.classList.add("vitra_le_modal-close");
  modalClose.classList.add("ve-no-translate");
  modalClose.setAttribute("aria-label", "Close");
  modalClose.innerHTML = "&times;";

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(modalClose);

  // const modalHeadingDiv = document.createElement("div");
  // modalHeadingDiv.style.width = "100%";
  // modalHeadingDiv.style.backgroundColor = 'red';
  // modalHeadingDiv.style.display = "flex";
  // modalHeadingDiv.style.flexDirection = "row";
  // modalHeadingDiv.style.justifyContent = "space-around";
  // modalHeadingDiv.style.fontSize = "15px";
  // modalHeadingDiv.style.color = "#3F3F46";

  const modalBody = document.createElement("div");
  modalBody.classList.add("vitra_le_modal-body");
  modalBody.classList.add("ve-no-translate");

  const table = document.createElement("table");
  table.classList.add("vitra_le_table");
  table.classList.add("ve-no-translate");

  const tableHead = document.createElement("thead");

  const tableRow = document.createElement("tr");
  // tableRow.style.backgroundColor = 'red'
  tableRow.style.width = "100%";
  tableRow.classList.add("vitra_le_tr");
  tableRow.classList.add("ve-no-translate");

  const tableHeadSource = document.createElement("th");
  tableHeadSource.classList.add("vitra_le_th");
  tableHeadSource.classList.add("ve-no-translate");
  // Create a text node with the Unicode character "&#11044;"
  // const dotChar = document.createTextNode("");

  // Create a text node with the text " Source Text"
  const sourceTextNode = document.createTextNode(" Source Text");

  // Insert the SVG element before the text node
  const ellipsissvg = ellipsisSVG();
  tableHeadSource.insertBefore(ellipsissvg, tableHeadSource.firstChild);

  // tableHeadSource.appendChild(dotChar);
  tableHeadSource.appendChild(sourceTextNode);
  tableHeadSource.style.width = "50%"; // Set the min width to 50%

  // Add a vertical line between the two columns
  tableHeadSource.style.borderRight = "1px solid #E4E4E7"; // Adjust the color and thickness as needed

  const tableHeadTarget = document.createElement("th");
  tableHeadTarget.classList.add("vitra_le_th");
  tableHeadTarget.classList.add("ve-no-translate");
  const transTextNode = document.createTextNode(" Translated Text");

  const _ellipsissvg = ellipsisSVG();
  tableHeadTarget.insertBefore(_ellipsissvg, tableHeadTarget.firstChild);

  tableHeadTarget.appendChild(transTextNode);
  tableHeadTarget.style.width = "50%"; // Set the

  // tableHeadTarget.innerText = "Translated Text";
  tableHeadTarget.style.width = "50%"; // Set the min width to 50%

  // const tableHeadConfirm = document.createElement("th");
  // tableHeadConfirm.style.display  ='flex';
  // tableHeadConfirm.style.justifyContent = 'center'
  // tableHeadConfirm.classList.add("vitra_le_th");
  // tableHeadConfirm.classList.add("ve-no-translate");

  // tableHeadConfirm.style.width = "6%";

  // tableHeadTarget.style.maxWidth = "50%";  // Set the max width to 50%
  tableRow.appendChild(tableHeadSource);
  tableRow.appendChild(tableHeadTarget);
  // tableRow.appendChild(tableHeadConfirm)
  tableHead.appendChild(tableRow);
  table.appendChild(tableHead);

  modalBody.appendChild(table);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("vitra_le_modal-footer");
  modalFooter.classList.add("ve-no-translate");

  const modalFooterCancelButton = document.createElement("button");
  modalFooterCancelButton.classList.add("vitra_le_modal-footer-cancel-button");
  modalFooterCancelButton.classList.add("ve-no-translate");
  modalFooterCancelButton.innerText = "Cancel";

  modalFooterCancelButton.addEventListener("click", () => {
    closeModal(modal);
  });
  modalFooter.appendChild(modalFooterCancelButton);

  const modalFooterSaveButton = document.createElement("button");
  modalFooterSaveButton.classList.add("vitra_le_modal-footer-save-button");
  modalFooterSaveButton.classList.add("ve-no-translate");
  modalFooterSaveButton.innerText = "Save";
  modalFooterSaveButton.addEventListener("click", () => {
    updateTranslation(modal);
  });
  modalFooter.appendChild(modalFooterSaveButton);

  modalInner.appendChild(modalHeader);
  modalInner.appendChild(modalBody);
  modalInner.appendChild(modalFooter);
  modal.appendChild(modalInner);
  document.body.appendChild(modal);

  const closeBtn = document.querySelector(".vitra_le_modal-close");
  closeBtn.addEventListener("click", (e) => {
    closeModal(modal);
  });

  return modal;
};

const escClose = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};

const closeModal = (modal) => {
  const borderMarkedElement = document.querySelectorAll(
    "[vitra_le_border_marked=true]"
  );

  console.log("borderMarkedElement ", borderMarkedElement);

  borderMarkedElement.forEach((eachEle) => {
    eachEle.style.border = window.elementBorderStyle;
    eachEle.setAttribute("vitra_le_border_marked", "false");
  });

  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);

  // document.querySelector('.vitra_ve_table')
  const tableBody = document.querySelector(".ve-table-body");

  console.log("tableBody ", tableBody);

  if (tableBody) {
    const table = document.querySelector(".vitra_le_table");
    // If both 'table' and 'tableBody' exist, remove 'tableBody' from the 'table'
    table.removeChild(tableBody);
  } else {
    console.error("Table or table body not found!");
  }
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);

  const overlay = document.getElementById("vitra_le_modal-overlay");
  if (overlay && overlay.parentNode) {
    document.body.removeChild(overlay);
  }
};

const openModal = (
  modal,
  node,
  isPlaceHolder
  // isNodeType3
  // ,elementId
) => {
  console.log("22 node ", node);
  const modalFooterButton = document.querySelector(
    ".vitra_le_modal-footer-button"
  );
  console.log("modalFooterButton ", modalFooterButton);

  // updateTranslationTable()
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.classList.add("ve-no-translate");
  overlay.id = "vitra_le_modal-overlay";
  document.body.appendChild(overlay);

  console.log("node---in ", node);
  if (isPlaceHolder === false) {
    const _textNodes = geteachTextNode(node);

    window.modalElements = _textNodes;

    console.log("_textNodes", _textNodes);

    updateTranslationTable(_textNodes);
  } else if (isPlaceHolder === true) {
    const nodeData = {
      originNode: node,
      source: node.getAttribute("vitra_placeholder"),
      target: node.getAttribute("vitra_placeholder"),
      confirm: false,
    };
    window.modalElements = [nodeData];

    console.log("nodeData--- ", nodeData);
    updateTranslationTable([nodeData]);
  }
};

const addBaseCss = () => {
  const css = `
        .vitra-lv-find-and-replace-button{
          min-width: 130px
        }
        .vitra_le_edit-browse-container{
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: #F9F4F5;
          padding: 3px 5px;
        }
        .vitra_le_mark-it-live-button{
          color : #ffffff;
          outline : none;
          border : none;
          line-height : 25px;
          border-radius : 8px;
          margin-bottom : auto;
          margin-top : auto;
          margin : 0px 15px 0px 30px;
         background-color : #8143FD;
        }
        .vitra_le_profile_button{
          background-color : #C779D0;
          color : #ffffff;
          outline : none;
          border : none;
          height : 28px;
          width : 28px;
          border-radius : 50%;
          margin-bottom : auto;
          margin-top : auto;
          margin : 1px 8px 0px 0px;
        }
        .vitra_le-top-bar-right-div{
          float : right;
          height : 30px;
          line-height : 30px;
          text-align : center;
          vertical-align : middle;
          padding-right:  15px;
          display : flex;
          flex-direction : row;
          justify-content:  space-between;
        }
        .vitra_le_dropdown-content{
          display : none;
          border : 1px solid #E4E4E7;
          background-color : #FFFFFF;
          position : absolute;
          cursor : pointer;
          top : 110px;
          left : 30px;
          min-width : 360px;
          border-radius : 8px;
        }
        .vitra_le-lang-dropdown-button{
          background-color : Transparent;
          color : #000000;
          outline : none;
          // line-height : 25px;
          border-radius : 8px;
          margin-bottom : auto;
          margin-top : auto;
          border : 1px solid #E4E4E7;
          cursor : pointer;
          margin : 0px 15px 0px 30px;
          padding: 4px 8px;
        }
        .vitra_le_edit-button{
          background-color : #ffffff;
          color : #000000;
          outline : none;
          border : none;
          line-height : 25px;
          border-radius : 8px;
          margin-bottom : auto;
          margin-top : auto;
          cursor : pointer;
          width : auto;
        }
        .vitra_le_browse-button{
          background-color: Transparent;
          color: #70707B;
          outline: none;
          border: none;
          line-height: 25px;
          border-radius: 8px;
          margin-bottom: auto;
          margin-top: auto;
          cursor: pointer;
          width: auto;
        }
        .vitra_lv-trans-bottom{
          position : fixed; 
          bottom : 40px; 
          left : 20px;
          width : 60px;
          height : 60px;
          background-color : #26272b;
          color : #FFFFFF;
          padding : 10px 20px;
          border : none;
          border-radius : 8px;
          cursor : pointer;
        }
        .vitra_le-find-and-replace-dropdown{
         display : none; 
         border : 1px solid #E4E4E7;
         background-color : #FFFFFF;
         position : absolute;
         top : 110px;
         right : 30px;
         max-width : 200px;
         z-index : 99999;
         border-radius : 8px;
        
        }
        .vitra_lv-target-langs-dropdown-search{
          width : 95%;
          padding : 8px;
          border : 1px solid #E4E4E7;
          border-radius : 8px;
        }
        .vitra-le-find-and-replace-content{
          display : block; 
          border : 1px solid #E4E4E7;
          background-color : #FFFFFF;
          position : absolute;
          z-index : 99999;
          top : 170px;
          cursor : pointer;
          min-width : 200px;
          border-radius : 8px;
        }
        .vitra_le_third-bar{
          background-color : #FFFFFF;
          height : 45px;
          width : 100%;
          padding : 1px 0px;
          line-height : 15px;
          display : flex;
          justify-content : space-between;
          align-items : center;
        }
        .vitra_le-top-main-bar{
          background-color : #FFFFFF;
          height : 100px;
          z-index : 9999999;
          width : 100%;
        }
        .vitra_le-langs-dropdown{
          display : none; 
          position : absolute;
          bottom : 90px; 
          left : 0;
          min-width : 150px;
          border-radius : 8px;
          padding-left : auto;
          background-color : #26272b;
          box-shadow : 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        .vitra_le-dropdown-item{
          display : flex;
          justify-content : flex-end;
          padding : 10px 20px;
          color : #fff;
          cursor : pointer;
        }
        .vitra_le_top-second-bar{
          background-color : #FFFFFF;
          height : 15px;
          width : 100%;
          padding : 1px 0px;
          line-height : 15px;
          display : flex;
          justify-content : center;
          align-items : center;
          border-top : 1px solid #E4E4E7;
          border-bottom : 1px solid #E4E4E7;
        }
        .vitra_le_modal {
          display: none;
          align-items: center;
          justify-content: center;
          position: fixed;
          top:0;
          z-index: 2147483647;
          width: 100%;
          height: 100%;
        }
        .vitra_le_modal[open] {
          display: flex;
        }
        .vitra_le_modal-close {
          cursor: pointer;
          font-size: 1.5em;
        }
        .vitra_le_model-inner {
          background-color: white;
          border-radius: 0.5em;
          min-width: 50vw;
          max-height: 80vh;
          min-height: 30vh;
          padding: 1em;
          margin: 1em;
        }
        .vitra_le_modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.5em;
        }
        .vitra_le_modal-body {
        
          max-height: 60vh;
          padding: 15px 0;
        }
        .vitra_le_modal-footer{
          display: flex;
          justify-content: end;
          
          padding: 3px 0;
        }
        .vitra_le_modal-footer-cancel-button{
          padding: 5px 20px;
          border-radius: 5px;
          border: 1px solid #E4E4E7;
          outline: none;
          background-color: 'Transparent';
          color: black;
          font-size: 1rem;
          cursor: pointer;
          margin:-right: 2px;
        }
        .vitra_le_modal-footer-save-button{
          padding: 5px 20px;
          border-radius: 5px;
          border: none;
          outline: none;
          background-color: rgb(98,3,244);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          margin-left: 5px;
        }
        #vitra_le_modal-overlay {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2147483646;
          background-color: black;
          opacity: 0.5;
        }
      
        @media (max-width: 768px) {
          .vitra_le_model-inner {
            max-width: 70vw;
          }
        }
        .vitra_le-textarea{
          width : 100%;
          height : 100%;
          border : none;
          outline : none;
          font-size : 18px;
          font-family : Arial, sans-serif;
        }
        
        .vitra_le_table {
          // font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        .vitra_le_td, .vitra_ve_th {
          // border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        .vitra_le_tr:nth-child(odd) {
         
          // background-color: rgb(203 213 225);
        }
        .vitra_ve_tr:nth-child(even) {
         
          // background-color: rgb(226 232 240);
        }`;
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  document.head.prepend(style);
};
document.addEventListener("DOMContentLoaded", () => {
  addBaseCss();
  const topMainBar = document.createElement("div");
  topMainBar.classList.add("vitra_le-top-main-bar");
  topMainBar.id = "vitra_lv_top_bar";

  const topFirstBar = createTopFirstBar();
  const topSecondBar = createSecondBar();
  const topThirdBar = createThirdBar();

  const topFirstBarRightDiv = createTopFirstBarRightDiv();
  const backSvgElement = createBackButton();

  topFirstBar.append(backSvgElement);
  topFirstBar.append(topFirstBarRightDiv);

  topMainBar.append(topFirstBar);
  topMainBar.append(topSecondBar);
  topMainBar.append(topThirdBar);

  const bottomLeftTranslationButton = createBottomLeftTranslationButton();

  document.body.prepend(topMainBar);
  document.body.append(bottomLeftTranslationButton);

  createModal();

  if (window.mode === "edit") {
    markTextElement(document.body);
  }
});
