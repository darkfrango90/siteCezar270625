import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import { FaWhatsapp, FaTools, FaTruck, FaGem, FaWater, FaChild, FaBuilding, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';

import mineracaoCezar from '../../assets/images/mineracaocezar.png';
import areiaConstrucao from '../../assets/images/areia-construcao.png';
import pedriscosSeixos from '../../assets/images/pedriscos-seixos.png';
import filtroPiscina from '../../assets/images/filtro-piscina.png';
import areiaEspecial from '../../assets/images/areia-especial.png';
import praiaPrata from '../../assets/images/praia-do-prata.png';
import parqueCezamar from '../../assets/images/parque-cezamar.png';
import cristalQuartzo from '../../assets/images/cristal-quartzo.png';
import pedraOnix from '../../assets/images/pedra-onix.png';
import frotaCaminhoes from '../../assets/images/frota-caminhoes.png';

const ImagemProduto = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
  margin: 1.5rem auto;
  display: block;
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    color: white;
    text-decoration: none;
  }
`;

const ProjetosSolucoes = () => {
  return (
    <section style={{ padding: '6rem 0 4rem', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem', color: '#333', fontWeight: 700 }}>Projetos e Soluções</h1>

        <div style={{ background: 'linear-gradient(135deg, #52c41a 0%, #2c5530 100%)', color: 'white', padding: '4rem 0', marginBottom: '4rem', borderRadius: '15px', textAlign: 'center' }}>
          <Container>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 600 }}>Bem-vindo à Mineração Cezar</h2>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, maxWidth: '900px', margin: '0 auto' }}>
              Na Mineração Cezar, transformamos recursos naturais em soluções de alta qualidade para diversos setores.
              Com tecnologia de ponta e expertise comprovada, garantimos produtos superiores e a realização de projetos
              complexos, do planejamento à execução.
            </p>
            <ImagemProduto src={mineracaoCezar} alt="Imagem aérea da área de mineração" />
          </Container>
        </div>

        {/* Seção Nossa Expertise em Projetos Especiais */}
        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#2c5530', fontWeight: 700 }}>Nossa Expertise em Projetos Especiais</h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem', color: '#555', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Esta seção foca na nossa capacidade de execução de projetos complexos, com exemplos de sucesso.
          </p>

          <div style={{ display: 'grid', gap: '3rem', marginBottom: '4rem' }}>
            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaMapMarkerAlt /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Criação e Requalificação de Praias</h3>
              </div>
              <ImagemProduto src={praiaPrata} alt="Praia do Prata após execução do projeto" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Da concepção ao licenciamento, nossa expertise abrange o planejamento e a execução completa na criação e requalificação de praias. 
                Garantimos a qualidade da areia e a conformidade com as regulamentações ambientais. Fomos responsáveis por todas as etapas da 
                construção da Praia do Prata, desde a elaboração do projeto com areia até a solicitação do licenciamento de operação.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaWater /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Desassoreamento de Praias e Lagos</h3>
              </div>
              <ImagemProduto src={parqueCezamar} alt="Lago do Parque Cezamar após o projeto" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Com equipamentos modernos e equipes qualificadas, realizamos o desassoreamento de praias e lagos, contribuindo para a melhoria 
                ambiental e a revitalização de ecossistemas aquáticos. Fomos responsáveis pelo desassoreamento e melhoria do Lago do Parque Cezamar.
              </p>
            </div>
          </div>
        </div>

        {/* Seção Minerais Especiais */}
        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#2c5530', fontWeight: 700 }}>Minerais Especiais</h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem', color: '#555', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Destaque para a extração de minerais com aplicações diferenciadas.
          </p>

          <div style={{ display: 'grid', gap: '3rem', marginBottom: '4rem' }}>
            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaGem /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Cristal de Quartzo</h3>
              </div>
              <ImagemProduto src={cristalQuartzo} alt="Cristais de quartzo brutos" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Extraímos Cristal de Quartzo de alta pureza, um material versátil e valorizado por suas aplicações estéticas e industriais. 
                É utilizado em ornamentação de lagos, parques e jardins, além de ser fornecido para empresas de tintas para a criação de 
                produtos texturizados.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaGem /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Pedra Ônix</h3>
              </div>
              <ImagemProduto src={pedraOnix} alt="Pedra Ônix bruta de grande porte" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Somos especialistas na extração de Pedra Ônix e suas variações. Exportamos a pedra bruta, em peças acima de 1.000kg, 
                para empresas de joias, semijoias e lapidação, atendendo ao mercado global de alta joalheria e design.
              </p>
            </div>
          </div>
        </div>

        {/* Seção Logística e Frota Própria */}
        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#2c5530', fontWeight: 700 }}>Logística e Frota Própria</h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem', color: '#555', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Destaque para a capacidade logística da empresa.
          </p>

          <div style={{ display: 'grid', gap: '3rem', marginBottom: '4rem' }}>
            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaTruck /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Frota Própria: Agilidade e Eficiência na Entrega</h3>
              </div>
              <ImagemProduto src={frotaCaminhoes} alt="Frota de caminhões da Mineração Cezar" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Contamos com uma frota própria de caminhões (trucks e carretas), o que nos permite garantir agilidade, pontualidade e 
                segurança na entrega de nossos produtos em todo o território nacional. Somos frotistas comprometidos com a eficiência logística.
              </p>
            </div>
          </div>
        </div>

        {/* Seção Nossos Produtos */}
        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#2c5530', fontWeight: 700 }}>Nossos Produtos</h2>

          <div style={{ display: 'grid', gap: '3rem', marginBottom: '4rem' }}>
            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaBuilding /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Areias para Construção Civil</h3>
              </div>
              <ImagemProduto src={areiaConstrucao} alt="Areia para construção civil" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Somos referência na extração e beneficiamento de areias para construção civil. Nosso processo moderno
                de tripla lavagem, utilizando hidrociclones e peneiras desaguadoras, garante uma umidade próxima a 3%,
                dentro dos padrões da ABNT, oferecendo a mais alta qualidade para sua obra. Dispomos de areia fina,
                média e grossa.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #52c41a, #73d13d)', color: 'white', padding: '1rem 1.5rem', borderRadius: '10px', fontWeight: 600, textAlign: 'center', marginTop: '1.5rem' }}>
                Processo de Tripla Lavagem: Qualidade e Padrão ABNT
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaIndustry /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Pedriscos e Seixos Rolados</h3>
              </div>
              <ImagemProduto src={pedriscosSeixos} alt="Pedriscos e seixos" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Complementamos nossa linha de agregados com pedriscos e seixos rolados de diversas granulometrias,
                ideais para diferentes aplicações na construção civil. Oferecemos pedrisco rolado, seixo rolado
                nº0, nº1, nº 2/3, pó de seixo, além de seixo britado nº0 e nº1.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaWater /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Materiais Filtrantes (Areias e Seixos)</h3>
              </div>
              <ImagemProduto src={filtroPiscina} alt="Filtro de piscina com areia" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Nossa linha de materiais filtrantes (areias e seixos) é desenvolvida com alto padrão de pureza,
                em diversas granulometrias, para atender às mais rigorosas demandas de tratamento de água, seja
                municipal, industrial, em poços artesianos ou filtros de piscina. São também ideais para aquários,
                garantindo um ambiente seguro e de alta qualidade.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #52c41a, #73d13d)', color: 'white', padding: '1rem 1.5rem', borderRadius: '10px', fontWeight: 600, textAlign: 'center', marginTop: '1.5rem' }}>
                Livre de contaminantes – Ideal para aplicações que exigem pureza
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#52c41a' }}><FaChild /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#2c5530', fontWeight: 600 }}>Areias Especiais</h3>
              </div>
              <ImagemProduto src={areiaEspecial} alt="Areias para beach tennis e playground" />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Com pureza e granulometria controladas, nossas areias especiais são a escolha perfeita para
                aplicações que exigem excelência e segurança. São amplamente utilizadas em quadras de beach
                tennis e playground infantil, livres de contaminantes para a segurança e diversão.
              </p>
            </div>
          </div>
        </div>

        {/* Card Especial - Compra e Venda de Equipamentos */}
        <div style={{ margin: '4rem 0', textAlign: 'center' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c5530 0%, #52c41a 100%)', 
            color: 'white', 
            padding: '3rem 2rem', 
            borderRadius: '20px', 
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '3rem', color: 'white' }}><FaTools /></div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>Equipamentos para Mineração</h3>
            </div>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Compra e Venda de Equipamentos para Mineração
            </p>
            <WhatsAppButton href="https://wa.me/5563999781008" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
              Entre em Contato
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjetosSolucoes;

