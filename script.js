document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const plano = document.getElementById('plano').value
    const name = document.getElementById('name').value;
    const consulta = document.getElementById('consulta').value
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointment = {
        plano,
        name,
        consulta,
        date,
        time
    };

    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    displayAppointments();
});

function displayAppointments() {
    const appointmentList = document.getElementById('appointmentList');
    appointmentList.innerHTML = '';

    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    appointments.forEach((appointment, index) => {
        const li = document.createElement('li');
        li.textContent = `${appointment.plano} - ${appointment.name} - ${appointment.consulta} ${appointment.date} às ${appointment.time}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
            removeAppointment(index);
        });

        li.appendChild(removeButton);
        appointmentList.appendChild(li);
    });
}

function removeAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    displayAppointments();
}

// Display appointments on page load
document.addEventListener('DOMContentLoaded', displayAppointments);
