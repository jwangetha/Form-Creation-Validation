// Step 1: Define async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create UL
        const userList = document.createElement('ul');

        // Step 7: Loop through users
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // display user name
            userList.appendChild(listItem);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Error handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Step 9: Run function when page is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
