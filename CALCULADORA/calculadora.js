function calcular (tipo, valor) {
    
    if (tipo === 'acao') {
        
        if (valor === 'C') {
            
            document.getElementById('view').value = '';
        }

        if (valor === '+'|| valor === '-' || valor === '*' || valor === '/' || valor === '%' || valor === '+/-' || valor === '.') {
            
            document.getElementById('view').value += valor;
        }

        if (valor === '=') {

            var value_camp = eval(document.getElementById('view').value);
            document.getElementById('view').value = value_camp;
        }
    } 
    else if (tipo === 'valor') {
        
        document.getElementById('view').value += valor;
    }
}