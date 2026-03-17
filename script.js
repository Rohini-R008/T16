let students = [
    { name: "Salman Ahmed", marks: 38, class: "3rd", address: "India" },
    { name: "Riya Sharma", marks: 85, class: "10th", address: "Delhi" },
    { name: "Rohan Patel", marks: 70, class: "12th", address: "Mumbai" },
    { name: "Priya Singh", marks: 95, class: "8th", address: "Bangalore" },
    { name: "Ankit Gupta", marks: 60, class: "9th", address: "Kolkata" },
    { name: "Neha Verma", marks: 80, class: "11th", address: "Chennai" },
    { name: "Aman Kumar", marks: 72, class: "10th", address: "Patna" },
    { name: "Sneha Reddy", marks: 88, class: "12th", address: "Hyderabad" },
    { name: "Rahul Mehta", marks: 67, class: "9th", address: "Ahmedabad" },
    { name: "Kiran Das", marks: 74, class: "11th", address: "Kolkata" },
    { name: "Pooja Nair", marks: 91, class: "12th", address: "Kochi" },
    { name: "Arjun Singh", marks: 55, class: "8th", address: "Lucknow" },
    { name: "Meena Iyer", marks: 83, class: "10th", address: "Chennai" },
    { name: "Vikas Yadav", marks: 69, class: "9th", address: "Noida" },
    { name: "Divya Kapoor", marks: 92, class: "11th", address: "Delhi" },
    { name: "Nikhil Jain", marks: 77, class: "10th", address: "Jaipur" },
    { name: "Suresh Babu", marks: 64, class: "8th", address: "Vijayawada" },
    { name: "Kavya Shetty", marks: 89, class: "12th", address: "Mangalore" },
    { name: "Harish Rao", marks: 73, class: "9th", address: "Hyderabad" },
    { name: "Anjali Mishra", marks: 94, class: "11th", address: "Bhopal" },
    { name: "Deepak Chauhan", marks: 58, class: "8th", address: "Dehradun" },
    { name: "Ritu Agarwal", marks: 81, class: "10th", address: "Kanpur" },
    { name: "Manish Tiwari", marks: 66, class: "9th", address: "Varanasi" },
    { name: "Shreya Bose", marks: 90, class: "12th", address: "Kolkata" },
    { name: "Tarun Verma", marks: 71, class: "10th", address: "Indore" },
    { name: "Lakshmi Narayan", marks: 87, class: "11th", address: "Chennai" }
];

function displayStudents(data) {
    let container = document.getElementById("cardContainer");
    container.innerHTML = "";

    data.map(function(student) {
        let card = `
            <div class="card">
                <p><b>Student Name:</b> ${student.name}</p>
                <p>Marks: ${student.marks}%</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

displayStudents(students);

document.getElementById("searchInput").addEventListener("keyup", function() {

    let searchValue = this.value.toLowerCase();

    let filteredStudents = students.filter(function(student) {
        return student.name.toLowerCase().includes(searchValue);
    });

    displayStudents(filteredStudents);
});