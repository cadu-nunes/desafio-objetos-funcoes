let medicos = [];

function inserirMedico() {
    const nome = document.getElementById('nome').value;
    const especialidade = document.getElementById('especialidade').value;
    const crm = document.getElementById('crm').value;

    if (!validarCampos(nome, especialidade, crm)) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (!validarCRM(crm)) {
        alert('CRM deve conter apenas números!');
        return;
    }

    const medico = {
        nome: nome,
        especialidade: especialidade,
        crm: crm
    };

    medicos.push(medico);
    atualizarTabela();
    limparFormulario();
}

function validarCampos(nome, especialidade, crm) {
    return nome && especialidade && crm;
}

function validarCRM(crm) {
    return /^\d+$/.test(crm);
}

function atualizarTabela() {
    const thead = document.querySelector('#tabelaMedicos thead');
    const tbody = document.querySelector('#tabelaMedicos tbody');

    if (medicos.length > 0 && thead.innerHTML === '') {
        const headers = Object.keys(medicos[0]);
        thead.innerHTML = `
            <tr>
                ${headers.map(header => `<th>${header}</th>`).join('')}
            </tr>
        `;
    }

    tbody.innerHTML = medicos.map(medico => `
        <tr>
            ${Object.values(medico).map(value => `<td>${value}</td>`).join('')}
        </tr>
    `).join('');
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('especialidade').value = '';
    document.getElementById('crm').value = '';
}