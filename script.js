// Dummy data from the server (replace this with actual server data)
const serverData = [
    { Nama: "Hanifah", Asal: "SMP N 1 METRO", email: "hanifah@gmail.com", Hari: 1, Jam: "14.00-15.30", Kelas: 7 },
    { Nama: "Fatimah", Asal: "SMP N 4 METRO", email: "fatimah@gmail.com", Hari: 2, Jam: "16.00-17.30", number: 9 }
  ];
  
  // Function to display server data in the table
  function displayData() {
    const dataTable = document.getElementById("dataTable");
    dataTable.innerHTML = ""; // Clear previous data
  
    // Create table header
    const headerRow = dataTable.insertRow(0);
    for (const key in serverData[0]) {
      const th = document.createElement("th");
      th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      headerRow.appendChild(th);
    }
  
    // Create table rows
    serverData.forEach((data, index) => {
      const row = dataTable.insertRow(index + 1);
      for (const key in data) {
        const cell = row.insertCell();
        cell.textContent = data[key];
      }
    });
  }
  
  // Function to handle form submission
  function submitForm() {
    // Validate form inputs
    const name = document.getElementById("nama").value;
    const school = document.getElementById("Asal Sekolah").value;
    const email = document.getElementById("email").value;
    const checkbox = document.getElementById("checkbox").checked;
    const radio = document.querySelector('input[name="radio"]:checked');
    const number = document.getElementById("number").value;
  
    if (!name | !school | !email || !radio || !number) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Construct data object to simulate form submission to server
    const formData = {
      name: name,
      school: school,
      email: email,
      checkbox: checkbox,
      radio: radio.value,
      number: number
    };
  
    // Simulate sending data to the server (replace this with actual server communication)
    serverData.push(formData);
  
    // Display updated data in the table
    displayData();
  
    // Clear form inputs
    document.getElementById("myForm").reset();
  }
  
  // Initialize the page by displaying initial server data
  displayData();
  