document.addEventListener('DOMContentLoaded', function() {
    
    const botaoPrincipal = document.getElementById('meuBotao');
    const botaoSecundario = document.getElementById('botaoSecundario');
    
    function exibirMensagem(mensagem, tipo = 'info') {
        
        const mensagemAnterior = document.querySelector('.mensagem-feedback');
        if (mensagemAnterior) {
            mensagemAnterior.remove();
        }
        
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = `mensagem-feedback mensagem-${tipo}`;
        mensagemDiv.textContent = mensagem;
        mensagemDiv.setAttribute('role', 'alert');
        
        Object.assign(mensagemDiv.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: 'bold',
            zIndex: '1000',
            animation: 'fadeIn 0.3s ease-out',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        });
        
        if (tipo === 'sucesso') {
            mensagemDiv.style.backgroundColor = '#054e24ff';
        } else if (tipo === 'erro') {
            mensagemDiv.style.backgroundColor = '#e74c3c';
        } else {
            mensagemDiv.style.backgroundColor = '#0e1a83ff';
        }
        
        document.body.appendChild(mensagemDiv);
        
        setTimeout(() => {
            mensagemDiv.style.opacity = '0';
            mensagemDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => mensagemDiv.remove(), 500);
        }, 3000);
    }
    
    function manipularCliquePrincipal(event) {
        event.preventDefault();
        
        botaoPrincipal.style.transform = 'scale(0.95)';
        setTimeout(() => {
            botaoPrincipal.style.transform = '';
        }, 150);
        
        exibirMensagem('Obrigado pelo seu interesse! Entraremos em contato em breve.', 'sucesso');
        
        console.log('Botão principal clicado!');
    }
    
    function manipularCliqueSecundario(event) {
        event.preventDefault();
        
        botaoSecundario.style.transform = 'scale(0.95)';
        setTimeout(() => {
            botaoSecundario.style.transform = '';
        }, 150);
        
        exibirMensagem('Redirecionando para página de contato...', 'info');
        
        setTimeout(() => {
            alert('Página de contato (simulação)');
        }, 1000);
        
        console.log('Botão secundário clicado!');
    }
    
    botaoPrincipal.addEventListener('click', manipularCliquePrincipal);
    botaoSecundario.addEventListener('click', manipularCliqueSecundario);
    
    botaoPrincipal.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            manipularCliquePrincipal(event);
        }
    });
    
    botaoSecundario.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            manipularCliqueSecundario(event);
        }
    });
    
    console.log('Aplicação XPTO inicializada com sucesso!');
    
    document.body.classList.add('inicializado');
});