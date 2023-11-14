// document.addEventListener('DOMContentLoaded', function() {
//     const calendarContainer = document.getElementById('calendario');
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const tbody = calendarContainer.querySelector('tbody');
  
//     // Define un array de eventos (pueden cargarse desde una fuente externa)
//     const events = [
//       { date: '2023-11-03', title: 'Evento 1' },
//       { date: '2023-11-12', title: 'Evento 2' },
//       // Agrega más eventos aquí
//     ];
  
//     for (let day = 1; day <= daysInMonth; day++) {
//       const cell = document.createElement('td');
//       cell.textContent = day;
//       // Agrega eventos a las celdas según la fecha correspondiente
//       const eventForDay = events.find(event => event.date === `${year}-${month + 1}-${day}`);
//       if (eventForDay) {
//         const eventElement = document.createElement('div');
//         eventElement.className = 'evento';
//         eventElement.textContent = eventForDay.title;
//         cell.appendChild(eventElement);
//       }
//       tbody.appendChild(cell);
//     }
  
//     // Personaliza la apariencia (puedes agregar estilos CSS para 'evento' en tu CSS)
//     const eventElements = calendarContainer.querySelectorAll('.evento');
//     eventElements.forEach(eventElement => {
//       // Personaliza los estilos según tus necesidades
//       eventElement.style.backgroundColor = 'blue';
//       eventElement.style.color = 'white';
//     });
  
//     // Establece opciones de vista (por ejemplo, cambiar la vista a la semana)
//     const changeViewButton = document.getElementById('cambiarVista');
//     changeViewButton.addEventListener('click', function() {
//       // Personaliza la lógica para cambiar la vista aquí
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendario');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         // Configura las opciones del calendario aquí
//         initialView: 'dayGridMonth', // Vista inicial (mes)
//         events: [
//             // Aquí puedes agregar eventos en formato de objeto
//             {
//                 title: 'Evento 1',
//                 start: '2023-11-01',
//                 end: '2023-11-03'
//             },
//             {
//                 title: 'Evento 2',
//                 start: '2023-11-10',
//                 end: '2023-11-12'
//             }
//             // Agrega más eventos aquí
//         ]
//     });
//     calendar.render();
// });


