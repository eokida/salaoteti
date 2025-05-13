
class Cliente {

  constructor() {
    this.id = 1;
    this.arrayCliente = []
    this.editId = null;
    this.iniciar();
	this.arrayPesquisaCliente = []
  }

  salvar() {
    if (!campoPreenchido('nome')) {
	alert('Nome deve ser preenchido');
	return false;
    }
    if (!campoPreenchido('tel1')) {
	alert('1 telefone deve ser preenchido');
	return false;
    }


    let cliente = this.lerDadosFormulario();

    if (this.editId == null) {
      this.adicionar(cliente)
      this.mostraMensagem('Cliente adicionado com sucesso');

    } else {
      this.atualizar(this.editId, cliente);
      this.mostraMensagem('Cliente alterado com sucesso');
    }


    window.localStorage.setItem('dados', JSON.stringify(this.arrayCliente))

    this.carregaDados();
    this.cancelar();
    
    return true;

  }
  carregaDados() {
    let tbody = document.getElementById('tbody');

    tbody.innerText = '';

    for (let i = 0; i < this.arrayCliente.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_nome = tr.insertCell();
      let td_cpf = tr.insertCell();
      let td_dtNasc = tr.insertCell();
      let td_endereco = tr.insertCell();
      let td_contato = tr.insertCell();
      let td_email = tr.insertCell();
      let td_telefone = tr.insertCell();
      let td_acao = tr.insertCell();

      td_id.innerText = this.arrayCliente[i].id;
      td_nome.innerText = this.arrayCliente[i].nome;
      td_cpf.innerText = this.arrayCliente[i].cpf;
      td_dtNasc.innerText = this.arrayCliente[i].dtNasc;
      td_endereco.innerText = this.arrayCliente[i].endereco +', '+this.arrayCliente[i].num+' '+this.arrayCliente[i].complemento+ '\n' +this.arrayCliente[i].bairro +', '+this.arrayCliente[i].cidade+' - '+this.arrayCliente[i].uf;
      td_contato.innerText = this.arrayCliente[i].contato;
      td_email.innerText = this.arrayCliente[i].email;
      td_telefone.innerText = this.arrayCliente[i].telefone1;

      let editLink = document.createElement('a');
      editLink.setAttribute("href", "javascript:void(0)");
      editLink.setAttribute("onclick", "cliente.editar(" + JSON.stringify(this.arrayCliente[i]) + ");abreModal('modalDadosDoCliente')");
      editLink.title = 'Editar';
      let imgEdit = document.createElement('img');
      imgEdit.src = 'https://cdn-icons-png.flaticon.com/128/3917/3917361.png';
      editLink.appendChild(imgEdit);

      let imgDelete = document.createElement('img');
      imgDelete.src = 'https://cdn-icons-png.flaticon.com/128/3917/3917242.png';
      imgDelete.setAttribute("onclick", "cliente.deletar(" + this.arrayCliente[i].id + ", '" + this.arrayCliente[i].nome + "')");
      imgDelete.setAttribute("style","margin-left:10px");
      imgDelete.title = 'Excluir';

	  td_acao.setAttribute("style","text-align:center");
      td_acao.appendChild(editLink);
      td_acao.appendChild(imgDelete);

    }
  }


  adicionar(cliente) {
    this.arrayCliente.push(cliente);
    this.id++;
  }

  atualizar(id, cliente) {
    for(let i = 0; i < this.arrayCliente.length;i++){
      if(this.arrayCliente[i].id==id){
        this.arrayCliente[i].nome = cliente.nome
        this.arrayCliente[i].cpf = cliente.cpf
        this.arrayCliente[i].dtNasc = cliente.dtNasc
        this.arrayCliente[i].endereco = cliente.endereco
        this.arrayCliente[i].num = cliente.num
        this.arrayCliente[i].complemento = cliente.complemento
        this.arrayCliente[i].bairro = cliente.bairro
        this.arrayCliente[i].cep = cliente.cep
        this.arrayCliente[i].cidade = cliente.cidade
        this.arrayCliente[i].uf = cliente.uf
        this.arrayCliente[i].contato = cliente.contato
        this.arrayCliente[i].email = cliente.email
        this.arrayCliente[i].telefone1 = cliente.telefone1
        this.arrayCliente[i].telefone2 = cliente.telefone2
        this.arrayCliente[i].telefone3 = cliente.telefone3
        this.arrayCliente[i].obs = cliente.obs
        break;
      }
    }
  }

  editar(dados) {

    this.editId = dados.id;

    document.getElementById('nome').value = dados.nome
    document.getElementById('cpf').value = dados.cpf
    document.getElementById('dtNasc').value = dados.dtNasc
    document.getElementById('endereco').value = dados.endereco
    document.getElementById('complemento').value = dados.complemento
	    document.getElementById("num").value = dados.num;
	    document.getElementById("bairro").value = dados.bairro;
	    document.getElementById("cep").value = dados.cep;
	    document.getElementById("cidade").value = dados.cidade;
   	    document.getElementById("uf").value = dados.uf;
   	    document.getElementById("tel1").value = dados.telefone1;
   	    document.getElementById("tel2").value = dados.telefone2;
   	    document.getElementById("tel3").value = dados.telefone3;
   	    document.getElementById("contato").value = dados.contato;
   	    document.getElementById("email").value = dados.email;
   	    document.getElementById("obs").value = dados.obs;

    //document.getElementById('bt1').innerText = 'Atualizar';

  }

iniciar() {

    let dados = window.localStorage.getItem('dados');
    if (dados!=null && dados!='undefined') {
		this.arrayCliente = JSON.parse(dados);

    } else {

	    let cliente = {}

	    cliente.id = this.id;
	    cliente.nome = 'Janaina Carra';
	    cliente.cpf = '813.972.190-99';
	    cliente.dtNasc = '22/01/1989';
	    cliente.endereco = 'Rua Mario OLiveira';
	    cliente.num = '88';
	    cliente.complemento = 'Casa';
	    cliente.bairro = 'Olinda';
	    cliente.cep = '16310-410';
	    cliente.cidade = 'Campinas';
   	    cliente.uf = 'SP';
   	    cliente.contato = 'Mara';
   	    cliente.email = 'jana@hotmail.com.br';
   	    cliente.telefone1 = '19 3198671398';
		cliente.telefone2 = '';
   	    cliente.telefone3 = '';
   	    cliente.obs = 'Irmã da Suelen';
   	    
	    this.adicionar(cliente);
	
		cliente = {}

	    cliente.id = this.id;
	    cliente.nome = 'Vinicius Manoel';
	    cliente.cpf = '819.239.298-04';
	    cliente.dtNasc = '13/11/1999';
	    cliente.endereco = 'Rua Das Caixas';
	    cliente.num = '33';
	    cliente.complemento = 'Apto';
	    cliente.bairro = 'Marilia';
	    cliente.cep = '15310-000';
	    cliente.cidade = 'Cordeirópolis';
   	    cliente.uf = 'SP';
   	    cliente.contato = 'Pai';
   	    cliente.email = 'vini@uol.com.br';
   	    cliente.telefone1 = '14 98913672';
   	    cliente.telefone2 = '14 98137789';
   	    cliente.telefone3 = '';
   	    cliente.obs = 'Corte masculino';

	    this.adicionar(cliente);
	    
	    window.localStorage.setItem('dados', JSON.stringify(this.arrayCliente));

       }

  }

  lerDadosFormulario() {
    let cliente = {}

	    cliente.id = this.id;
	    cliente.nome = document.getElementById("nome").value;
	    cliente.cpf = document.getElementById("cpf").value;
	    cliente.dtNasc = document.getElementById("dtNasc").value;
	    cliente.endereco = document.getElementById("endereco").value;
	    cliente.num = document.getElementById("num").value;
	    cliente.complemento = document.getElementById("complemento").value;
	    cliente.bairro = document.getElementById("bairro").value;
	    cliente.cep = document.getElementById("cep").value;
	    cliente.cidade = document.getElementById("cidade").value;
   	    cliente.uf = document.getElementById("uf").value;
   	    cliente.contato = document.getElementById("contato").value;
   	    cliente.email = document.getElementById("email").value;
   	    cliente.telefone1 = document.getElementById("tel1").value;
   	    cliente.telefone2 = document.getElementById("tel2").value;
   	    cliente.telefone3 = document.getElementById("tel3").value;
   	    cliente.obs = document.getElementById("obs").value;

    return cliente
  }

  cancelar() {

	    document.getElementById("nome").value = '';
	    document.getElementById("cpf").value = '';
	    document.getElementById("dtNasc").value = '';
	    document.getElementById("endereco").value = '';
	    document.getElementById("num").value = '';
	    document.getElementById("complemento").value = '';
	    document.getElementById("bairro").value = '';
	    document.getElementById("cep").value = '';
	    document.getElementById("cidade").value = '';
   	    document.getElementById("uf").value = '';
   	    document.getElementById("tel1").value = '';
   	    document.getElementById("tel2").value = '';
   	    document.getElementById("tel3").value = '';
   	    document.getElementById("contato").value = '';
   	    document.getElementById("email").value = '';
   	    document.getElementById("obs").value = '';
    
    this.editId = null;
  }


  deletar(id, nome) {

    if (confirm('Deseja realmente excluir o cliente: ' + nome)) {
      let tbody = document.getElementById('tbody');

      for (let i = 0; i < this.arrayCliente.length; i++) {
        if (this.arrayCliente[i].id == id) {
          this.arrayCliente.splice(i, 1);
          tbody.deleteRow(i);
	  break;
	}
      }

    window.localStorage.setItem('dados', JSON.stringify(this.arrayCliente))
    this.mostraMensagem('Cliente excluído com sucesso');
    }
  }

  mostraMensagem(msg) {
     setTimeout(function(){alert(msg)},150);
  }
  
  pesquisar(termo) {
	let dados = window.localStorage.getItem('dados');
    if (dados!=null && dados!='undefined') {
		this.arrayPesquisaCliente = JSON.parse(dados);
		
		for (let i = 0; i < this.arrayPesquisaCliente.length; i++) {
	        if (this.arrayPesquisaCliente[i].nome.toLowerCase().indexOf(termo.toLowerCase())<=-1 && this.arrayPesquisaCliente[i].cpf.toLowerCase().indexOf(termo.toLowerCase())<=-1) {
				this.arrayPesquisaCliente.splice(i, 1);
				i--;
			}
	      }
		
		this.montaListaResultado();
		if (this.arrayPesquisaCliente.length<1)
			setTimeout(function(){alert('Nenhum cliente encontrado')},300);
		
    } else {
		alert('Nenhum cliente encontrado')
	}
  }
  
  montaListaResultado() {
    let lista = document.getElementById('listaResultado');
	lista.innerText = '';

	for (let i = 0; i < this.arrayPesquisaCliente.length; i++) {
      let tr = lista.insertRow();

      let td_nome = tr.insertCell();
      let td_cpf = tr.insertCell();
      let td_dtNasc = tr.insertCell();
      let td_endereco = tr.insertCell();
      let td_contato = tr.insertCell();
      let td_email = tr.insertCell();
      let td_telefone = tr.insertCell();
      let td_obs = tr.insertCell();

      td_nome.innerText = this.arrayPesquisaCliente[i].nome;
      td_cpf.innerText = this.arrayPesquisaCliente[i].cpf;
      td_dtNasc.innerText = this.arrayPesquisaCliente[i].dtNasc;
      td_endereco.innerText = this.arrayPesquisaCliente[i].endereco +', '+this.arrayPesquisaCliente[i].num+' '+this.arrayPesquisaCliente[i].complemento+ '\n' +this.arrayPesquisaCliente[i].bairro +', '+this.arrayPesquisaCliente[i].cidade+' - '+this.arrayPesquisaCliente[i].uf;
      td_contato.innerText = this.arrayPesquisaCliente[i].contato;
      td_email.innerText = this.arrayPesquisaCliente[i].email;
      td_telefone.innerText = this.arrayPesquisaCliente[i].telefone1+'\n'+this.arrayPesquisaCliente[i].telefone2+'\n'+this.arrayPesquisaCliente[i].telefone3;
	  td_obs.innerText = this.arrayPesquisaCliente[i].obs;

    }
  }

}

var cliente = new Cliente