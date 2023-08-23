    // Function to get the IP address
    async function getIpAddress() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
    }

    // Function to log visitor information and append to logs.json
    async function logVisitorInfo() {
    try {
        // Extract user agent and request URL
        const userAgent = window.navigator.userAgent;
        const requestUrl = window.location.href;

        // Get the IP address
        const ipAddress = await getIpAddress();

        // Create an object to store the information
        const visitorInfo = {
        userAgent,
        requestUrl,
        ipAddress,
        timestamp: new Date().toISOString()
        };

        // Convert visitorInfo to JSON
        const visitorInfoJSON = JSON.stringify(visitorInfo);

        // Append the JSON data to logs.json using fetch
        const response = await fetch("https://[APPWRITE_ENDPOINT]/v1/database/collections/logs/documents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Appwrite-Project": "autidevlogs",
                "X-Appwrite-Key": "[YOUR_API_KEY]"
            },
            body: JSON.stringify(visitorInfo)
        });

        if (response.ok) {
        console.log("Visitor information logged:", visitorInfoJSON);
        } else {
        console.error("Error:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
    }

    // Call the function to log visitor information
    logVisitorInfo();
