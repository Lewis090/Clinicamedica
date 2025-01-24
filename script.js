document.getElementById('agendamento-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const paciente = document.getElementById('paciente').value;
    const consulta = document.getElementById('consulta').value
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const tabela = document.getElementById('agendamentos');
    
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = paciente;
    novaLinha.insertCell(1).textContent = consulta;
    novaLinha.insertCell(2).textContent = data;
    novaLinha.insertCell(3).textContent = hora;
    
    // Limpa o formulário
    document.getElementById('agendamento-form').reset();
});