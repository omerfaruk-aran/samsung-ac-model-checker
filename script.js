function checkModel() {
    const model = document.getElementById("modelInput").value.toUpperCase();
    const result = document.getElementById("result");

    // Validating model length
    if (model.length < 8) {
        result.textContent = "Please enter a valid model number.";
        return;
    }

    // Extract the key information based on the index
    const classification = model.substring(0, 2);  // First two letters (e.g., AJ)
    const capacity = model.substring(2, 5);  // Next three digits (e.g., 050)
    const productType = model.charAt(3);  // Fourth character (e.g., N)
    const productNotation = model.charAt(5);  // Fifth character (e.g., J)
    const feature = model.charAt(6);  // Sixth character (e.g., 2)
    const ratingVoltage = model.charAt(7);  // Seventh character (e.g., E)
    const mode = model.charAt(8);  // Eighth character (e.g., G)

    // Determine the classification type based on the product type character
    let type = "Other";
    if (productType === "S" || productType === "N" || productType === "X") {
        type = "NASA";
    } else if (productType === "A" || productType === "B" || productType === "C") {
        type = "Non-NASA";
    }

    // Display the results to the user
    result.innerHTML = `
        <strong>Model:</strong> ${model} <br>
        <strong>Classification:</strong> ${classification} <br>
        <strong>Capacity:</strong> ${capacity} kW <br>
        <strong>Product Type:</strong> ${productType} (${type}) <br>
        <strong>Product Notation:</strong> ${productNotation} <br>
        <strong>Feature:</strong> ${feature} <br>
        <strong>Rating Voltage:</strong> ${ratingVoltage} <br>
        <strong>Mode:</strong> ${mode}
    `;
}

