import React, { useState } from 'react';
import styled from 'styled-components';

const CalculadoraContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
  
  span {
    color: #27ae60;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #6c757d;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CalculatorTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  padding: 12px 24px;
  border: 2px solid #27ae60;
  background: ${props => props.active ? '#27ae60' : 'white'};
  color: ${props => props.active ? 'white' : '#27ae60'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #27ae60;
    color: white;
  }
`;

const CalculatorCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const CalculatorTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #27ae60;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #27ae60;
  }
`;

const CalculateButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin: 0 auto;
  display: block;
  
  &:hover {
    background: #219a52;
  }
`;

const ResultsContainer = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-top: 30px;
  border-left: 5px solid #27ae60;
`;

const ResultTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ResultLabel = styled.span`
  font-weight: 600;
  color: #495057;
`;

const ResultValue = styled.span`
  font-weight: bold;
  color: #27ae60;
  font-size: 1.1rem;
`;

const TipsContainer = styled.div`
  background: #e3f2fd;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

const TipsTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 15px;
`;

const TipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TipItem = styled.li`
  padding: 5px 0;
  color: #1565c0;
  
  &:before {
    content: "💡 ";
    margin-right: 8px;
  }
`;

const ObservacaoContainer = styled.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
`;

const ObservacaoTexto = styled.p`
  color: #856404;
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
`;

const Calculadora = () => {
  const [abaAtiva, setAbaAtiva] = useState('construcao');
  const [resultados, setResultados] = useState(null);
  
  // Estados para diferentes calculadoras
  const [construcao, setConstrucao] = useState({
    comprimento: '',
    largura: '',
    espessura: '',
    tipoObra: 'concreto'
  });

  const [filtragem, setFiltragem] = useState({
    tipoFiltro: 'piscina',
    volumeAgua: '',
    vazao: ''
  });

  const [paisagismo, setPaisagismo] = useState({
    area: '',
    espessuraCamada: '',
    tipoAplicacao: 'decorativo'
  });

  const calcularConstrucao = () => {
    const volume = parseFloat(construcao.comprimento) * parseFloat(construcao.largura) * parseFloat(construcao.espessura);
    
    let fatorSeguranca = 1.1; // 10% de margem de segurança
    const volumeNecessario = volume * fatorSeguranca;
    
    // Proporções baseadas no tipo de obra
    let proporcoes = {};
    let materiais = {};
    
    // Preços atualizados conforme fornecido pelo usuário
    const precos = {
      areiaFina: 72.00,      // areia fina, media e grossa
      areiaMedia: 72.00,
      areiaGrossa: 72.00,
      pedriscoRolado: 125.00, // Pedrisco Rolado
      seixoRolado0: 112.00,   // seixo rolado nº 0, 1 e 2/3
      seixoRolado1: 112.00,
      seixoRolado23: 112.00,
      poSeixoBritado: 113.00, // pó de seixo britado
      seixoBritado0: 158.00,  // seixo britado nº 0 e 1
      seixoBritado1: 158.00
    };
    
    switch (construcao.tipoObra) {
      case 'concreto':
        // Proporção 1:2:3 (cimento:areia:seixo)
        proporcoes = { cimento: 1, areia: 2, seixo: 3 };
        
        // Cálculo por m³ de concreto
        const sacosCimento = volumeNecessario * 7; // aproximadamente 7 sacos de 50kg por m³
        const volumeAreia = volumeNecessario * (2/6); // 2/6 do volume total
        const volumeSeixo = volumeNecessario * (3/6); // 3/6 do volume total
        
        materiais = {
          cimento: sacosCimento,
          unidadeCimento: 'sacos de 50kg',
          areia: volumeAreia,
          unidadeAreia: 'm³',
          seixo: volumeSeixo,
          unidadeSeixo: 'm³',
          pesoAreia: volumeAreia * 1.6, // ton
          pesoSeixo: volumeSeixo * 1.8, // ton
          custoAreia: volumeAreia * precos.areiaMedia, // usando areia média para concreto
          custoSeixo: volumeSeixo * precos.seixoRolado1, // usando seixo rolado nº 1
          custoCimento: 'COTAR VALOR' // não incluir no cálculo final
        };
        break;
        
      case 'argamassa':
        // Proporção 1:3 (cimento:areia)
        proporcoes = { cimento: 1, areia: 3 };
        
        const sacosCimentoArg = volumeNecessario * 5; // aproximadamente 5 sacos por m³
        const volumeAreiaArg = volumeNecessario * (3/4); // 3/4 do volume total
        
        materiais = {
          cimento: sacosCimentoArg,
          unidadeCimento: 'sacos de 50kg',
          areia: volumeAreiaArg,
          unidadeAreia: 'm³',
          pesoAreia: volumeAreiaArg * 1.6, // ton
          custoAreia: volumeAreiaArg * precos.areiaFina, // usando areia fina para argamassa
          custoCimento: 'COTAR VALOR' // não incluir no cálculo final
        };
        break;
        
      case 'contrapiso':
        // Proporção 1:2,5:3,5 (cimento:areia:seixo)
        proporcoes = { cimento: 1, areia: 2.5, seixo: 3.5 };
        
        const sacosCimentoContra = volumeNecessario * 6; // aproximadamente 6 sacos por m³
        const volumeAreiaContra = volumeNecessario * (2.5/7);
        const volumeSeixoContra = volumeNecessario * (3.5/7);
        
        materiais = {
          cimento: sacosCimentoContra,
          unidadeCimento: 'sacos de 50kg',
          areia: volumeAreiaContra,
          unidadeAreia: 'm³',
          seixo: volumeSeixoContra,
          unidadeSeixo: 'm³',
          pesoAreia: volumeAreiaContra * 1.6, // ton
          pesoSeixo: volumeSeixoContra * 1.8, // ton
          custoAreia: volumeAreiaContra * precos.areiaMedia, // usando areia média
          custoSeixo: volumeSeixoContra * precos.pedriscoRolado, // usando pedrisco rolado
          custoCimento: 'COTAR VALOR' // não incluir no cálculo final
        };
        break;
        
      case 'reboco':
        // Proporção 1:4 (cimento:areia)
        proporcoes = { cimento: 1, areia: 4 };
        
        const sacosCimentoReboco = volumeNecessario * 4; // aproximadamente 4 sacos por m³
        const volumeAreiaReboco = volumeNecessario * (4/5); // 4/5 do volume total
        
        materiais = {
          cimento: sacosCimentoReboco,
          unidadeCimento: 'sacos de 50kg',
          areia: volumeAreiaReboco,
          unidadeAreia: 'm³',
          pesoAreia: volumeAreiaReboco * 1.6, // ton
          custoAreia: volumeAreiaReboco * precos.areiaFina, // usando areia fina para reboco
          custoCimento: 'COTAR VALOR' // não incluir no cálculo final
        };
        break;
        
      default:
        break;
    }
    
    // Custo total (apenas materiais com preço definido, excluindo cimento)
    const custoTotal = (materiais.custoAreia || 0) + (materiais.custoSeixo || 0);

    setResultados({
      tipo: 'construcao',
      volume: volumeNecessario.toFixed(2),
      materiais: materiais,
      proporcoes: proporcoes,
      custoTotal: custoTotal.toFixed(2),
      tipoObra: construcao.tipoObra
    });
  };

  const calcularFiltragem = () => {
    let volumeAreia = 0;
    const volume = parseFloat(filtragem.volumeAgua);
    
    if (filtragem.tipoFiltro === 'piscina') {
      volumeAreia = volume * 0.02; // 2% do volume da piscina
    } else if (filtragem.tipoFiltro === 'poco') {
      volumeAreia = volume * 0.15; // 15% para poços artesianos
    } else if (filtragem.tipoFiltro === 'eta') {
      volumeAreia = volume * 0.25; // 25% para estações de tratamento
    }
    
    const custoAreia = volumeAreia * 120; // R$ 120/m³ para areia filtrante
    const pesoAreia = volumeAreia * 2.65; // densidade da areia filtrante
    
    setResultados({
      tipo: 'filtragem',
      volume: volumeAreia.toFixed(2),
      peso: pesoAreia.toFixed(2),
      custo: custoAreia.toFixed(2),
      tipoFiltro: filtragem.tipoFiltro
    });
  };

  const calcularPaisagismo = () => {
    const area = parseFloat(paisagismo.area);
    const espessura = parseFloat(paisagismo.espessuraCamada) / 100; // converter cm para m
    
    const volumeSeixo = area * espessura;
    let custoUnitario = 85; // R$ 85/m³ para seixo rolado
    
    if (paisagismo.tipoAplicacao === 'drenagem') {
      custoUnitario = 65; // R$ 65/m³ para seixo britado
    }
    
    const custoTotal = volumeSeixo * custoUnitario;
    const pesoSeixo = volumeSeixo * 2.7; // densidade do seixo
    
    setResultados({
      tipo: 'paisagismo',
      volume: volumeSeixo.toFixed(2),
      peso: pesoSeixo.toFixed(2),
      custo: custoTotal.toFixed(2),
      aplicacao: paisagismo.tipoAplicacao
    });
  };

  const renderCalculadoraConstrucao = () => (
    <CalculatorCard>
      <CalculatorTitle>Calculadora para Construção Civil</CalculatorTitle>
      <FormGrid>
        <InputGroup>
          <Label>Comprimento (m)</Label>
          <Input
            type="number"
            step="0.1"
            value={construcao.comprimento}
            onChange={(e) => setConstrucao({...construcao, comprimento: e.target.value})}
            placeholder="Ex: 10.5"
          />
        </InputGroup>
        <InputGroup>
          <Label>Largura (m)</Label>
          <Input
            type="number"
            step="0.1"
            value={construcao.largura}
            onChange={(e) => setConstrucao({...construcao, largura: e.target.value})}
            placeholder="Ex: 8.0"
          />
        </InputGroup>
        <InputGroup>
          <Label>Espessura (m)</Label>
          <Input
            type="number"
            step="0.01"
            value={construcao.espessura}
            onChange={(e) => setConstrucao({...construcao, espessura: e.target.value})}
            placeholder="Ex: 0.10"
          />
        </InputGroup>
        <InputGroup>
          <Label>Tipo de Obra</Label>
          <Select
            value={construcao.tipoObra}
            onChange={(e) => setConstrucao({...construcao, tipoObra: e.target.value})}
          >
            <option value="concreto">Concreto</option>
            <option value="argamassa">Argamassa</option>
            <option value="contrapiso">Contrapiso</option>
            <option value="reboco">Reboco</option>
          </Select>
        </InputGroup>
      </FormGrid>
      <CalculateButton onClick={calcularConstrucao}>
        Calcular Materiais
      </CalculateButton>
    </CalculatorCard>
  );

  const renderCalculadoraFiltragem = () => (
    <CalculatorCard>
      <CalculatorTitle>Calculadora para Sistemas de Filtragem</CalculatorTitle>
      <FormGrid>
        <InputGroup>
          <Label>Tipo de Filtro</Label>
          <Select
            value={filtragem.tipoFiltro}
            onChange={(e) => setFiltragem({...filtragem, tipoFiltro: e.target.value})}
          >
            <option value="piscina">Piscina</option>
            <option value="poco">Poço Artesiano</option>
            <option value="eta">Estação de Tratamento</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Volume de Água (L)</Label>
          <Input
            type="number"
            value={filtragem.volumeAgua}
            onChange={(e) => setFiltragem({...filtragem, volumeAgua: e.target.value})}
            placeholder="Ex: 50000"
          />
        </InputGroup>
        <InputGroup>
          <Label>Vazão (L/h) - Opcional</Label>
          <Input
            type="number"
            value={filtragem.vazao}
            onChange={(e) => setFiltragem({...filtragem, vazao: e.target.value})}
            placeholder="Ex: 5000"
          />
        </InputGroup>
      </FormGrid>
      <CalculateButton onClick={calcularFiltragem}>
        Calcular Areia Filtrante
      </CalculateButton>
    </CalculatorCard>
  );

  const renderCalculadoraPaisagismo = () => (
    <CalculatorCard>
      <CalculatorTitle>Calculadora para Paisagismo</CalculatorTitle>
      <FormGrid>
        <InputGroup>
          <Label>Área (m²)</Label>
          <Input
            type="number"
            step="0.1"
            value={paisagismo.area}
            onChange={(e) => setPaisagismo({...paisagismo, area: e.target.value})}
            placeholder="Ex: 25.5"
          />
        </InputGroup>
        <InputGroup>
          <Label>Espessura da Camada (cm)</Label>
          <Input
            type="number"
            value={paisagismo.espessuraCamada}
            onChange={(e) => setPaisagismo({...paisagismo, espessuraCamada: e.target.value})}
            placeholder="Ex: 5"
          />
        </InputGroup>
        <InputGroup>
          <Label>Tipo de Aplicação</Label>
          <Select
            value={paisagismo.tipoAplicacao}
            onChange={(e) => setPaisagismo({...paisagismo, tipoAplicacao: e.target.value})}
          >
            <option value="decorativo">Decorativo</option>
            <option value="drenagem">Drenagem</option>
            <option value="jardim">Jardim</option>
          </Select>
        </InputGroup>
      </FormGrid>
      <CalculateButton onClick={calcularPaisagismo}>
        Calcular Seixos
      </CalculateButton>
    </CalculatorCard>
  );

  const renderResultados = () => {
    if (!resultados) return null;

    return (
      <ResultsContainer>
        <ResultTitle>Resultados do Cálculo</ResultTitle>
        
        {resultados.tipo === 'construcao' && (
          <>
            <div style={{ marginBottom: '20px', padding: '15px', background: '#e8f5e8', borderRadius: '8px' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>
                Proporção para {resultados.tipoObra}: 
                {resultados.proporcoes.cimento && ` ${resultados.proporcoes.cimento}`}
                {resultados.proporcoes.areia && `:${resultados.proporcoes.areia}`}
                {resultados.proporcoes.seixo && `:${resultados.proporcoes.seixo}`}
                {' (Cimento:Areia'}
                {resultados.proporcoes.seixo && ':Seixo'}
                {')'}
              </h4>
            </div>
            
            <ResultItem>
              <ResultLabel>Volume da obra:</ResultLabel>
              <ResultValue>{resultados.volume} m³</ResultValue>
            </ResultItem>
            
            {resultados.materiais.cimento && (
              <ResultItem>
                <ResultLabel>Cimento necessário:</ResultLabel>
                <ResultValue>{resultados.materiais.cimento.toFixed(0)} {resultados.materiais.unidadeCimento}</ResultValue>
              </ResultItem>
            )}
            
            {resultados.materiais.areia && (
              <>
                <ResultItem>
                  <ResultLabel>Areia necessária:</ResultLabel>
                  <ResultValue>{resultados.materiais.areia.toFixed(2)} {resultados.materiais.unidadeAreia}</ResultValue>
                </ResultItem>
                <ResultItem>
                  <ResultLabel>Peso da areia:</ResultLabel>
                  <ResultValue>{resultados.materiais.pesoAreia.toFixed(2)} toneladas</ResultValue>
                </ResultItem>
              </>
            )}
            
            {resultados.materiais.seixo && (
              <>
                <ResultItem>
                  <ResultLabel>Seixo/Brita necessário:</ResultLabel>
                  <ResultValue>{resultados.materiais.seixo.toFixed(2)} {resultados.materiais.unidadeSeixo}</ResultValue>
                </ResultItem>
                <ResultItem>
                  <ResultLabel>Peso do seixo:</ResultLabel>
                  <ResultValue>{resultados.materiais.pesoSeixo.toFixed(2)} toneladas</ResultValue>
                </ResultItem>
              </>
            )}
            
            <ResultItem style={{ borderTop: '2px solid #27ae60', paddingTop: '15px', marginTop: '15px' }}>
              <ResultLabel style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Custo total estimado (sem cimento):</ResultLabel>
              <ResultValue style={{ fontSize: '1.3rem' }}>R$ {resultados.custoTotal}</ResultValue>
            </ResultItem>
            
            <div style={{ marginTop: '20px', padding: '15px', background: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
              <h4 style={{ color: '#856404', marginBottom: '10px' }}>Detalhamento dos custos:</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>Cimento:</span>
                <span style={{ fontWeight: 'bold', color: '#d63384' }}>COTAR VALOR</span>
              </div>
              {resultados.materiais.custoAreia && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Areia:</span>
                  <span>R$ {resultados.materiais.custoAreia.toFixed(2)}</span>
                </div>
              )}
              {resultados.materiais.custoSeixo && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Seixo/Brita:</span>
                  <span>R$ {resultados.materiais.custoSeixo.toFixed(2)}</span>
                </div>
              )}
            </div>
          </>
        )}
        
        {resultados.tipo === 'filtragem' && (
          <>
            <ResultItem>
              <ResultLabel>Volume necessário:</ResultLabel>
              <ResultValue>{resultados.volume} m³</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Peso aproximado:</ResultLabel>
              <ResultValue>{resultados.peso} toneladas</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Custo estimado:</ResultLabel>
              <ResultValue>R$ {resultados.custo}</ResultValue>
            </ResultItem>
          </>
        )}
        
        {resultados.tipo === 'paisagismo' && (
          <>
            <ResultItem>
              <ResultLabel>Volume necessário:</ResultLabel>
              <ResultValue>{resultados.volume} m³</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Peso aproximado:</ResultLabel>
              <ResultValue>{resultados.peso} toneladas</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Custo estimado:</ResultLabel>
              <ResultValue>R$ {resultados.custo}</ResultValue>
            </ResultItem>
          </>
        )}

        <TipsContainer>
          <TipsTitle>Dicas Importantes</TipsTitle>
          <TipsList>
            <TipItem>Os valores incluem 10% de margem de segurança</TipItem>
            <TipItem>Preços são estimativos e podem variar conforme a região</TipItem>
            <TipItem>Para projetos grandes, consulte nossos especialistas</TipItem>
            <TipItem>Considere as condições de acesso para entrega</TipItem>
            {resultados.tipo === 'construcao' && (
              <TipItem>As proporções seguem padrões técnicos da construção civil</TipItem>
            )}
          </TipsList>
        </TipsContainer>
      </ResultsContainer>
    );
  };

  return (
    <CalculadoraContainer id="calculadora">
      <Container>
        <Title>
          <span>Calculadora</span> de Materiais
        </Title>
        <Subtitle>
          Calcule a quantidade exata de materiais necessários para seu projeto. 
          Nossa calculadora considera as especificações técnicas e oferece estimativas precisas.
        </Subtitle>

        <CalculatorTabs>
          <TabButton
            active={abaAtiva === 'construcao'}
            onClick={() => setAbaAtiva('construcao')}
          >
            Construção Civil
          </TabButton>
          <TabButton
            active={abaAtiva === 'filtragem'}
            onClick={() => setAbaAtiva('filtragem')}
          >
            Sistemas de Filtragem
          </TabButton>
          <TabButton
            active={abaAtiva === 'paisagismo'}
            onClick={() => setAbaAtiva('paisagismo')}
          >
            Paisagismo
          </TabButton>
        </CalculatorTabs>

        {abaAtiva === 'construcao' && renderCalculadoraConstrucao()}
        {abaAtiva === 'filtragem' && renderCalculadoraFiltragem()}
        {abaAtiva === 'paisagismo' && renderCalculadoraPaisagismo()}

        {renderResultados()}
        
        <ObservacaoContainer>
          <ObservacaoTexto>
            Obs: Não nos responsabilizamos, isso é apenas uma simulação, para quantidades corretas, consulte seu Engenheiro Civil ou Mestre de Obras.
          </ObservacaoTexto>
        </ObservacaoContainer>
      </Container>
    </CalculadoraContainer>
  );
};

export default Calculadora;

