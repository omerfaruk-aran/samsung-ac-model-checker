function checkModel() {
    const model = document.getElementById("modelInput").value.toUpperCase();
    const result = document.getElementById("result");

    if (model.length < 8) {
        result.textContent = "Please enter a valid model number.";
        return;
    }

    // Extract the third and fourth characters
    const productType = model.charAt(2);
    const unitType = model.charAt(3);

    // Determine the type based on the extracted characters
    let type = "Other";

    if (productType === "N" && unitType === "C") {
        type = "Non-NASA (Outdoor Unit)";
    } else if (productType === "N") {
        type = "NASA (Indoor Unit)";
    } else if (productType === "S") {
        type = "NASA Set";
    } else if (productType === "C") {
        type = "Non-NASA (Outdoor Unit)";
    }

    result.textContent = `The model ${model} is classified as: ${type}`;
}
