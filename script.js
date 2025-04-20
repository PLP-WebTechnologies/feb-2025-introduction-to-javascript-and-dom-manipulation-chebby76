// Change the text content dynamically
document.getElementById("change-text").addEventListener("click", function() {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    title.textContent = "My Name is CHEBBY!";
    subtitle.textContent = "Iam a graphic designerand a student at PLP Academy 🎉";
});

// Modify CSS styles dynamically
document.getElementById("change-color").addEventListener("click", function() {
    const body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === "lightyellow" ? "#f4f4f4" : "lightyellow";
});

// Add a new element to the list
document.getElementById("add-item").addEventListener("click", function() {
    const list = document.getElementById("dynamic-list");
    const newItem = document.createElement("li");
    newItem.textContent = `New Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});

// Remove the last element from the list
document.getElementById("remove-item").addEventListener("click", function() {
    const list = document.getElementById("dynamic-list");
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    } else {
        alert("No more items to remove!");
    }
});
// Adding an Image
document.getElementById("add-image").addEventListener("click", function() {
    const imageContainer = document.getElementById("image-container");

    if (!document.getElementById("dynamic-image")) {
        const newImage = document.createElement("img");
        newImage.id = "dynamic-image";
        newImage.src ="portfoliopic.jpg";
        newImage.alt = "Placeholder Image";
        newImage.style.width = "300px";
        newImage.style.borderRadius = "10px";

        imageContainer.appendChild(newImage);
    } else {
        alert("Image already added!");
    }
});

// Change the Image Source Dynamically
document.getElementById("change-image").addEventListener("click", function() {
    const dynamicImage = document.getElementById("dynamic-image");

    if (dynamicImage) {
        dynamicImage.src = "lamborghini.jpeg";
        dynamicImage.alt = "Updated Placeholder Image";
    } else {
        alert("No image to change! Please add an image first.");
    }
});
