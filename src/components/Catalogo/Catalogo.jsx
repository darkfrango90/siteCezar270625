import React, { useState } from 'react';
import styled from 'styled-components';
import produtoAreia from '../../assets/images/produto_areia.png';
import produtoAreiaFiltrante from '../../assets/images/produto_areias_filtrantes.png';
import produtoCristais from '../../assets/images/produto_cristais_martelado.png';
import produtoSeixoBritado from '../../assets/images/produto_seixo_britado.png';
import produtoSeixoRolado from '../../assets/images/produto_seixos_rolado.png';
// Novas imagens dos produtos
import areiaFina from '../../assets/images/Irko78MgJ29n.jpg';
import areiaMedia from '../../assets/images/fradUW3A3iqG.jpg';
import areiaGrossa from '../../assets/images/zBsFE2lgr9hD.jpg';
import pedriscoRolado from '../../assets/images/k2c2Dk87KyyI.jpg';
import seixoRoladoN0 from '../../assets/images/tXyKMccotQAI.jpg';
import seixoRoladoN1 from '../../assets/images/3WUTENXad0jS.jpg';
import seixoRoladoN23 from '../../assets/images/zZiQIiSe1GGi.jpg';
import poSeixoBritado from '../../assets/images/FLm7j0mfvdac.webp';
import seixoBritadoN0 from '../../assets/images/7loe8dBZaqCc.jpg';
import seixoBritadoN1 from '../../assets/images/nqewFHE4DQem.jpg';

const CatalogoContainer = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: 25px;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const ProductCategory = styled.span`
  background: #27ae60;
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  display: inline-block;
`;

const ProductDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SpecsContainer = styled.div`
  margin-bottom: 20px;
`;

const SpecsTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #e9ecef;
  font-size: 0.9rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  font-weight: 600;
  color: #495057;
`;

const SpecValue = styled.span`
  color: #6c757d;
`;

const ApplicationsContainer = styled.div`
  margin-bottom: 20px;
`;

const ApplicationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ApplicationTag = styled.span`
  background: #e9ecef;
  color: #495057;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e9ecef;
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #27ae60;
`;

const ContactButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #219a52;
  }
`;

const Catalogo = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const produtos = [
    {
      id: 1,
      nome: "Areia Fina",
      categoria: "Construção Civil",
      imagem: areiaFina,
      descricao: "Areia fina de alta qualidade, ideal para acabamentos, reboco e assentamento de pisos e azulejos.",
      especificacoes: {
        "Granulometria": "0,1 - 0,6 mm",
        "Módulo de Finura": "1,5 - 2,3",
        "Umidade": "< 5%",
        "Material Pulverulento": "< 3%",
        "Densidade": "1,65 g/cm³"
      },
      aplicacoes: ["Reboco", "Assentamento", "Acabamento", "Argamassa"],
      preco: "R$ 72,00/m³"
    },
    {
      id: 2,
      nome: "Areia Média",
      categoria: "Construção Civil",
      imagem: areiaMedia,
      descricao: "Areia média ideal para concreto, argamassa e diversos tipos de construção civil.",
      especificacoes: {
        "Granulometria": "0,6 - 2,0 mm",
        "Módulo de Finura": "2,3 - 3,1",
        "Umidade": "< 5%",
        "Material Pulverulento": "< 3%",
        "Densidade": "1,65 g/cm³"
      },
      aplicacoes: ["Concreto", "Argamassa", "Contrapiso", "Alvenaria"],
      preco: "R$ 72,00/m³"
    },
    {
      id: 3,
      nome: "Areia Grossa",
      categoria: "Construção Civil",
      imagem: areiaGrossa,
      descricao: "Areia grossa para concreto estrutural e aplicações que exigem maior resistência.",
      especificacoes: {
        "Granulometria": "2,0 - 4,8 mm",
        "Módulo de Finura": "3,1 - 3,9",
        "Umidade": "< 5%",
        "Material Pulverulento": "< 3%",
        "Densidade": "1,65 g/cm³"
      },
      aplicacoes: ["Concreto Estrutural", "Base", "Fundação", "Drenagem"],
      preco: "R$ 72,00/m³"
    },
    {
      id: 4,
      nome: "Pedrisco Rolado",
      categoria: "Construção Civil e Decoração",
      imagem: pedriscoRolado,
      descricao: "Pedrisco rolado natural, ideal para construção civil e projetos decorativos.",
      especificacoes: {
        "Granulometria": "4,8 - 9,5 mm",
        "Formato": "Arredondado",
        "Resistência": "> 120 MPa",
        "Absorção": "< 2%",
        "Densidade": "2,65 g/cm³"
      },
      aplicacoes: ["Concreto", "Decoração", "Paisagismo", "Drenagem"],
      preco: "R$ 125,00/m³"
    },
    {
      id: 5,
      nome: "Seixo Rolado nº 0",
      categoria: "Construção Civil e Decoração",
      imagem: seixoRoladoN0,
      descricao: "Seixo rolado nº 0, perfeito para construção civil e projetos decorativos.",
      especificacoes: {
        "Granulometria": "9,5 - 19 mm",
        "Formato": "Arredondado",
        "Resistência": "> 150 MPa",
        "Absorção": "< 1%",
        "Densidade": "2,65 g/cm³"
      },
      aplicacoes: ["Concreto", "Decoração", "Paisagismo", "Drenagem"],
      preco: "R$ 112,00/m³"
    },
    {
      id: 6,
      nome: "Seixo Rolado nº 1",
      categoria: "Construção Civil e Decoração",
      imagem: seixoRoladoN1,
      descricao: "Seixo rolado nº 1, ideal para construção civil e decoração de jardins.",
      especificacoes: {
        "Granulometria": "19 - 25 mm",
        "Formato": "Arredondado",
        "Resistência": "> 150 MPa",
        "Absorção": "< 1%",
        "Densidade": "2,65 g/cm³"
      },
      aplicacoes: ["Concreto", "Decoração", "Paisagismo", "Drenagem"],
      preco: "R$ 112,00/m³"
    },
    {
      id: 7,
      nome: "Seixo Rolado nº 2/3",
      categoria: "Construção Civil e Decoração",
      imagem: seixoRoladoN23,
      descricao: "Seixo rolado nº 2/3, excelente para construção civil e projetos paisagísticos.",
      especificacoes: {
        "Granulometria": "25 - 50 mm",
        "Formato": "Arredondado",
        "Resistência": "> 150 MPa",
        "Absorção": "< 1%",
        "Densidade": "2,65 g/cm³"
      },
      aplicacoes: ["Concreto", "Decoração", "Paisagismo", "Drenagem"],
      preco: "R$ 112,00/m³"
    },
    {
      id: 8,
      nome: "Pó de Seixo Britado",
      categoria: "Construção Civil",
      imagem: poSeixoBritado,
      descricao: "Pó de seixo britado para regularização e base de pavimentação.",
      especificacoes: {
        "Granulometria": "0 - 4,8 mm",
        "Formato": "Angular",
        "Resistência": "> 120 MPa",
        "Absorção": "< 2%",
        "Densidade": "2,70 g/cm³"
      },
      aplicacoes: ["Base", "Regularização", "Pavimentação", "Contrapiso"],
      preco: "R$ 113,00/m³"
    },
    {
      id: 9,
      nome: "Seixo Britado nº 0",
      categoria: "Construção Civil",
      imagem: seixoBritadoN0,
      descricao: "Seixo britado nº 0 de alta resistência para concreto estrutural.",
      especificacoes: {
        "Granulometria": "4,8 - 9,5 mm",
        "Formato": "Angular",
        "Resistência": "> 150 MPa",
        "Absorção": "< 1%",
        "Densidade": "2,70 g/cm³"
      },
      aplicacoes: ["Concreto", "Pavimentação", "Base", "Estrutural"],
      preco: "R$ 158,00/m³"
    },
    {
      id: 10,
      nome: "Seixo Britado nº 1",
      categoria: "Construção Civil",
      imagem: seixoBritadoN1,
      descricao: "Seixo britado nº 1 para concreto estrutural e pavimentação de alta durabilidade.",
      especificacoes: {
        "Granulometria": "9,5 - 19 mm",
        "Formato": "Angular",
        "Resistência": "> 150 MPa",
        "Absorção": "< 1%",
        "Densidade": "2,70 g/cm³"
      },
      aplicacoes: ["Concreto", "Pavimentação", "Estrutural", "Base"],
      preco: "R$ 158,00/m³"
    },
    {
      id: 11,
      nome: "Areia Filtrante Premium",
      categoria: "Filtragem",
      imagem: produtoAreiaFiltrante,
      descricao: "Areia filtrante de quartzo especialmente tratada para sistemas de filtração de água potável e industrial.",
      especificacoes: {
        "Granulometria": "0,4 - 0,8 mm",
        "Coeficiente de Uniformidade": "< 1,5",
        "Pureza SiO2": "> 98%",
        "Solubilidade em HCl": "< 0,5%",
        "Densidade": "2,65 g/cm³"
      },
      aplicacoes: ["Piscinas", "ETA", "Poços Artesianos", "Indústria"],
      preco: "R$ 1,00/Kg"
    },
    {
      id: 12,
      nome: "Cristais de Quartzo Martelado",
      categoria: "Decoração",
      imagem: produtoCristais,
      descricao: "Cristais de quartzo natural lapidados e energizados, ideais para decoração e harmonização de ambientes.",
      especificacoes: {
        "Tamanho": "2 - 8 cm",
        "Pureza": "> 95%",
        "Dureza Mohs": "7",
        "Transparência": "Translúcido",
        "Origem": "Cristalândia"
      },
      aplicacoes: ["Decoração", "Feng Shui", "Meditação", "Paisagismo"],
      preco: "R$ 17,00/kg"
    }
  ];

  const categorias = ['todos', 'Construção Civil', 'Construção Civil e Decoração', 'Filtragem', 'Decoração'];

  const produtosFiltrados = filtroAtivo === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === filtroAtivo);

  return (
    <CatalogoContainer id="catalogo">
      <Container>
        <Title>
          <span>Catálogo</span> de Produtos
        </Title>
        <Subtitle>
          Conheça nossa linha completa de produtos com especificações técnicas detalhadas, 
          aplicações e informações para sua obra ou projeto.
        </Subtitle>

        <FilterContainer>
          {categorias.map(categoria => (
            <FilterButton
              key={categoria}
              active={filtroAtivo === categoria}
              onClick={() => setFiltroAtivo(categoria)}
            >
              {categoria === 'todos' ? 'Todos os Produtos' : categoria}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProductGrid>
          {produtosFiltrados.map(produto => (
            <ProductCard key={produto.id}>
              <ProductImage src={produto.imagem} alt={produto.nome} />
              <ProductContent>
                <ProductCategory>{produto.categoria}</ProductCategory>
                <ProductTitle>{produto.nome}</ProductTitle>
                <ProductDescription>{produto.descricao}</ProductDescription>

                <SpecsContainer>
                  <SpecsTitle>Especificações Técnicas</SpecsTitle>
                  <SpecsList>
                    {Object.entries(produto.especificacoes).map(([label, value]) => (
                      <SpecItem key={label}>
                        <SpecLabel>{label}:</SpecLabel>
                        <SpecValue>{value}</SpecValue>
                      </SpecItem>
                    ))}
                  </SpecsList>
                </SpecsContainer>

                <ApplicationsContainer>
                  <SpecsTitle>Aplicações</SpecsTitle>
                  <ApplicationsList>
                    {produto.aplicacoes.map(aplicacao => (
                      <ApplicationTag key={aplicacao}>{aplicacao}</ApplicationTag>
                    ))}
                  </ApplicationsList>
                </ApplicationsContainer>

                <PriceContainer>
                  <Price>{produto.preco}</Price>
                  <ContactButton>Solicitar Orçamento</ContactButton>
                </PriceContainer>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    </CatalogoContainer>
  );
};

export default Catalogo;

