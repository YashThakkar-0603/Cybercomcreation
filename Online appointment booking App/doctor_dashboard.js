// Function to fetch and display appointments for doctor
function fetchAppointmentsForDoctor(doctorName) {
    // Retrieve appointments from local storage
    var appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    // Filter appointments for the doctor
    var doctorAppointments = appointments.filter(function(appointment) {
        return appointment.doctorName === doctorName;
    });
    
    // Display appointments for the doctor
    doctorAppointments.forEach(function(appointment) {
        // Display appointment details (you can customize this part according to your UI)
        console.log('Appointment ID:', appointment.id);
        console.log('Patient Name:', appointment.patientName);
        console.log('Time:', appointment.time);
        console.log('Reason:', appointment.reason);
        
        // Optionally, you can display this information on the doctor dashboard UI
    });
}
